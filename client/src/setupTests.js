import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockDate from 'mockdate';

configure({ adapter: new Adapter() });

global.shallow = shallow;
global.mount = mount;
global.fetch = require('jest-fetch-mock');

// set a constant global time
mockDate.set('2018-08-24T10:21:20');

// Fail tests on any warning
// e.g prop types validatioin will make test fail
console.error = (message) => { // eslint-disable-line no-console
	throw new Error(message);
};
