import { Prism } from 'prism-react-renderer';

import CodeBlock from './CodeBlock';
import Editor from './Editor';
import Error from './Error';
import InfoMessage from './InfoMessage';
import Preview from './Preview';
import Provider, { ImportResolver as _ImportResolver } from './Provider';
import highlight from './highlight';

export type ImportResolver = _ImportResolver;

export {
  Prism,
  CodeBlock,
  Error,
  Editor,
  Preview,
  Provider,
  InfoMessage,
  highlight,
};

export type { PrismTheme, Language } from 'prism-react-renderer';
