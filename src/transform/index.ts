import type {
  Transform,
  SucraseContext,
  Options as SucraseOptions,
} from 'sucrase';

import ImportRemoverTransformer, { Import } from './ImportTransformer.js';
import { getSucraseContext, RootTransformer } from './parser.js';
import wrapLastExpression from './wrapLastExpression.js';

export type { Import };

type TransformerResult = ReturnType<RootTransformer['transform']>;

class JarleRootTransformer extends RootTransformer {
  private importTransformer: ImportRemoverTransformer;

  private wrapLastExpression: (result: TransformerResult) => TransformerResult;

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
      ? (result: TransformerResult) => {
          return (
            wrapLastExpression(
              getSucraseContext(result.code, {
                ...options,
                transforms: parsingTransforms,
              })
            ) ?? result
          );
        }
      : (result: TransformerResult) => result;
  }

  get imports() {
    return this.importTransformer.imports;
  }

  transform() {
    let result = super.transform();

    result.code = result.code
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
    code: transformer.transform().code,
    imports: transformer.imports,
  };
}
