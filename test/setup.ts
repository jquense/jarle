import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// @ts-ignore
window.__IMPORT__ = (s) => import(/* webpackIgnore: true */ s);

configure({
  adapter: new Adapter(),
});
