/** Used in jest.config.js */
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

global.shallow = Enzyme.shallow;
global.mount = Enzyme.mount;
global.render = Enzyme.render;
