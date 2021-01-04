const reactDocgen = require('react-docgen');
const globby = require('globby');
const fs = require('fs/promises');
const path = require('path');
const mdx = require('@mdx-js/mdx');
const { pascalCase } = require('tiny-case');

const jsDocHandler = require('./jsDocHandler');

function compile(value) {}

const noop = `() => null`;

async function stringify(value, write, parent) {
  let str = '';
  if (Array.isArray(value)) {
    const values = await Promise.all(
      value.map((v) => stringify(v, write, v?.name || parent))
    );

    str = `[${values.join(',\n')}]`;
  } else if (value && typeof value === 'object') {
    str += '{\n';
    for (const [key, keyValue] of Object.entries(value)) {
      if (key === 'description') {
        if (keyValue) {
          const file = await write(parent, await mdx(keyValue));
          str += `"${key}": require('./${file}').default,\n`;
        } else {
          str += `"${key}": ${noop},\n`;
        }
      } else {
        str += `"${key}": ${await stringify(keyValue, write, key)},\n`;
      }
    }
    str += '}';
  } else {
    str += JSON.stringify(value);
  }
  return str;
}

function descriptions(component) {
  let process = async (c) => {
    if (c.description) c.description = await mdx(c.description);
  };
  return Promise.all([
    process(component),
    ...Object.values(component.props || {}).map(process),
  ]);
}

module.exports = (ctx, options = {}) => {
  const { src, docgen = {}, babel = {}, parserOptions } = options;

  const defaultHandlers = [...reactDocgen.defaultHandlers, jsDocHandler];

  return {
    name: 'docgen',
    getPathsToWatch() {
      return src;
    },
    async loadContent() {
      const files = await globby(options.src);

      const content = await Promise.all(
        files.map(async (file) => {
          try {
            return {
              docgen: reactDocgen.parse(
                await fs.readFile(file),
                docgen.resolver ||
                  reactDocgen.resolver.findAllComponentDefinitions,
                defaultHandlers.concat(docgen.handlers || []),
                {
                  filename: file,
                  parserOptions,
                  ...babel,
                }
              ),
              file,
            };
          } catch (e) {
            if (e.message.includes('No suitable component definition found'))
              return;

            console.error(e.message, file);
          }
        })
      );

      return content.filter(Boolean);
    },

    async contentLoaded({ content, actions }) {
      const re = /\.[jt]sx?/gi;
      const { createData, saveData, addRoute } = actions;

      await Promise.all(
        content.flatMap(({ file, docgen }) => {
          return docgen.map(async (component) => {
            component.displayName =
              component.displayName ||
              pascalCase(path.basename(file, path.extname(file)));

            const name = component.displayName;

            component.props = Object.entries(component.props || {}).map(
              ([name, value]) => ({
                name,
                ...value,
              })
            );

            const write = async (p = '', data) => {
              const filename = `${name}_${p ? `${p}_` : ''}description.js`;
              await createData(
                filename,
                `import { mdx } from '@mdx-js/react';\n\n${data}`
              );
              return filename;
            };

            return createData(
              `${name}.js`,
              `module.exports = ${await stringify(component, write)}`
            );
          });
        })
      );
    },

    configureWebpack() {
      const scope = options.id === 'default' ? '' : `/${options.id}`;

      const dataPath = `${ctx.generatedFilesDir}/docgen/${options.id}/`;

      return {
        resolve: {
          alias: {
            [`@metadata${scope}`]: dataPath,
          },
        },
      };
    },
  };
};
