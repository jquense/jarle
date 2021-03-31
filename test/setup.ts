import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// @ts-ignore
window.__IMPORT__ = (s) => import(/* webpackIgnore: true */ s);

configure({
  adapter: new Adapter(),
});
