export type Language =
  | 'markup'
  | 'bash'
  | 'clike'
  | 'c'
  | 'cpp'
  | 'css'
  | 'javascript'
  | 'jsx'
  | 'coffeescript'
  | 'actionscript'
  | 'css-extr'
  | 'diff'
  | 'git'
  | 'go'
  | 'graphql'
  | 'handlebars'
  | 'json'
  | 'less'
  | 'makefile'
  | 'markdown'
  | 'objectivec'
  | 'ocaml'
  | 'python'
  | 'reason'
  | 'sass'
  | 'scss'
  | 'sql'
  | 'stylus'
  | 'tsx'
  | 'typescript'
  | 'wasm'
  | 'yaml';

export type PrismThemeEntry = {
  color?: string;
  backgroundColor?: string;
  fontStyle?: 'normal' | 'italic';
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  textDecorationLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through';
  opacity?: number;
  [styleKey: string]: string | number | void;
};

export type PrismTheme = {
  plain: PrismThemeEntry;
  styles: Array<{
    types: string[];
    style: PrismThemeEntry;
    languages?: Language[];
  }>;
};

export type ThemeDict = {
  root: StyleObj;
  plain: StyleObj;
  [type: string]: StyleObj;
};

export type Token = {
  types: string[];
  content: string;
  empty?: boolean;
};

export type PrismToken = {
  type: string;
  content: Array<PrismToken | string> | string;
};

export type StyleObj = {
  [key: string]: string | number | null;
};

export type LineInputProps = {
  key?: string;
  style?: StyleObj;
  className?: string;
  line: Token[];
  [otherProp: string]: any;
};

export type LineOutputProps = {
  key?: string;
  style?: StyleObj;
  className: string;
  [otherProps: string]: any;
};

export type TokenInputProps = {
  key?: string;
  style?: StyleObj;
  className?: string;
  token: Token;
  [otherProp: string]: any;
};

export type TokenOutputProps = {
  key?: string;
  style?: StyleObj;
  className: string;
  children: string;
  [otherProp: string]: any;
};

export type RenderProps = {
  tokens: Token[][];
  className: string;
  style: StyleObj;
  getLineProps: (input: LineInputProps) => LineOutputProps;
  getTokenProps: (input: TokenInputProps) => TokenOutputProps;
};
