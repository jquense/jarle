import { Prism, themes } from 'prism-react-renderer';

import CodeBlock from './CodeBlock.js';
import Editor from './Editor.js';
import Error from './Error.js';
import InfoMessage from './InfoMessage.js';
import Preview from './Preview.js';
import Provider, {
  ImportResolver as _ImportResolver,
  useElement,
  useError,
  useLiveContext,
} from './Provider.js';
import highlight from './highlight.js';

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
  themes,
  useElement,
  useError,
  useLiveContext,
};

export type { PrismTheme, Language } from 'prism-react-renderer';
