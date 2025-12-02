import {
  Prism,
  themes,
  Highlight as PrismHighlight,
} from 'prism-react-renderer';

import CodeBlock, { mapTokens } from './CodeBlock.js';
import Editor, { ControlledEditor } from './Editor.js';
import Error from './Error.js';
import InfoMessage from './InfoMessage.js';
import Preview from './Preview.js';
import Provider, {
  ImportResolver as _ImportResolver,
  useElement,
  useError,
  useLiveContext,
  useEditorConfig,
  useActions,
  useCode,
} from './Provider.js';
import highlight from './highlight.js';

export type ImportResolver = _ImportResolver;

export {
  Prism,
  PrismHighlight,
  CodeBlock,
  mapTokens,
  Error,
  Editor,
  ControlledEditor,
  Preview,
  Provider,
  InfoMessage,
  highlight,
  themes,
  useActions,
  useElement,
  useError,
  useCode,
  useEditorConfig,
  useLiveContext,
};

export type { PrismTheme, Language } from 'prism-react-renderer';
