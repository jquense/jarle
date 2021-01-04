import React from 'react';
import ReactDOM from 'react-dom';
import * as Jarle from '../../../src';

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  ReactDOM,
  Jarle,
};

export default ReactLiveScope;
