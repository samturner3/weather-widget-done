import React from 'react';
import Clock from '../components/Clock';

function setup() {
	const props = {
		UtcOffSet: 60
	};

	return {
		wrapper: shallow(<Clock {...props} />)
	};
}

describe('<Clock />', () => {
	it('should render all elements', () => {
		const { wrapper } = setup();
		expect(wrapper).toMatchSnapshot();
	});
});
