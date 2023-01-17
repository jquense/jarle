import { SucraseContext, Options as SucraseOptions } from 'sucrase';
import { Transform } from 'sucrase/dist/Options';
import ImportRemoverTransformer, { Import } from './ImportTransformer';
import { getSucraseContext, RootTransformer } from './parser';
import wrapLastExpression from './wrapLastExpression';

export type { Import };

class JarleRootTransformer extends RootTransformer {
  private importTransformer: ImportRemoverTransformer;

  private wrapLastExpression: (result: string) => string;

  constructor(
    context: SucraseContext,
    options: SucraseOptions & Options,
    parsingTransforms: Transform[]
  ) {
    super(context, options.transforms ?? [], false, {
      ...options,
    });

    this.importTransformer = new ImportRemoverTransformer(context, options);

    // @ts-ignore
    this.transformers.unshift(this.importTransformer);

    this.wrapLastExpression = options.wrapLastExpression
      ? (result: string) => {
          return wrapLastExpression(
            getSucraseContext(result, {
              ...options,
              transforms: parsingTransforms,
            })
          );
        }
      : (result: string) => result;
  }

  get imports() {
    return this.importTransformer.imports;
  }

  transform() {
    let result = super.transform();

    result = result
      .replace('"use strict";', '')
      .replace('exports. default =', 'exports.default =')
      .replace(
        'Object.defineProperty(exports, "__esModule", {value: true});',
        ''
      );

    return this.wrapLastExpression(result);
  }
}

export interface Options {
  removeImports?: boolean;
  wrapLastExpression?: boolean;
  syntax?: 'js' | 'typescript';
  transforms?: Transform[];
  filename?: string;
  compiledFilename?: string;
}

export function transform(code: string, options: Options = {}) {
  const transforms = options.transforms || [];
  const parsingTransforms = ['imports', 'jsx'] as Transform[];
  const isTypeScriptEnabled =
    options.syntax === 'typescript' || transforms.includes('typescript');

  if (isTypeScriptEnabled) {
    parsingTransforms.push('typescript');
  }

  const sucraseOptions: SucraseOptions & Options = {
    ...options,
    transforms,
    preserveDynamicImport: true,
    enableLegacyBabel5ModuleInterop: false,
    enableLegacyTypeScriptModuleInterop: true,
    jsxRuntime: 'classic',
  };

  const ctx = getSucraseContext(code, {
    ...sucraseOptions,
    transforms: parsingTransforms,
  });

  const transformer = new JarleRootTransformer(
    ctx,
    sucraseOptions,
    parsingTransforms
  );

  return {
    code: transformer.transform(),
    imports: transformer.imports,
  };
}
