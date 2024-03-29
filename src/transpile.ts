import { Import, transform } from './transform';

// function extractLeadingWhitespace(code: string): [string, string] {
//   let leadingWhitespace = '';
//   let lines = code.split(/\n/);
//   for (const [idx, line] of lines.entries()) {
//     if (!line.trim().length) {
//       leadingWhitespace += '\n';
//     } else {
//       return [leadingWhitespace, lines.slice(idx).join('\n')];
//     }
//   }
//   return [leadingWhitespace, code];
// }

// export function parseImports(
//   input: string,
//   remove: boolean,
//   isTypeScript: boolean
// ) {
//   const { code, imports, map } = transform(input, {
//     removeImports: remove,
//     syntax: isTypeScript ? 'typescript' : 'js',
//     compiledFilename: 'compiled.js',
//     filename: 'example.js',
//   });

//   const [leadingWhitespace, trailing] = extractLeadingWhitespace(code);

//   return { code: trailing, imports, map, leadingWhitespace };
// }

export type Options = {
  inline?: boolean;
  isTypeScript?: boolean;
  showImports?: boolean;
  wrapper?: (code: string) => string;
};

export default (
  input: string,
  { inline = false, isTypeScript, showImports }: Options = {}
) => {
  let { code, imports } = transform(input, {
    removeImports: !showImports,
    wrapLastExpression: inline,
    transforms: isTypeScript ? ['typescript', 'jsx'] : ['jsx'],
    compiledFilename: 'compiled.js',
    filename: 'example.js',
  });

  return { code, imports };
};
