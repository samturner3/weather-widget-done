import React from 'react';
import CacheOptions from '../components/CacheOptions';

jest.useFakeTimers();
const inTenMins = Date.now() + 600000;

function setup(exp = inTenMins) {
	const props = {
		placesCache: [
			{
				exp,
				key: '-33.8688197+151.20929550000005',
				name: 'Sydney'
			}
		]
	};
	const wrapper = shallow(<CacheOptions {...props} />);

	return {
		wrapper,
		props
	};
}

describe('CacheOptions', () => {
	it('should render with right amount of elements', () => {
		const { wrapper } = setup();
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('li')).toHaveLength(1);
	});

	it('should call the updateTime method when component has been mounted', () => {
		const { wrapper } = setup();
		const updateTimeSpy = jest.spyOn(wrapper.instance(), 'updateTime');
		// allow the set interval to run just once
		jest.runTimersToTime(1000);
		expect(updateTimeSpy).toHaveBeenCalledTimes(1);
	})

	it('should render no <li />  element if chache has expired', () => {
		const { wrapper } = setup(1535015102520);
		expect(wrapper.find('li')).toHaveLength(0)
	});

	// TODO: make this test pass
	// describe('updateTime', () => {
	// 	it('ss', () => {
	// 		const { wrapper, props } = setup();
	// 		const cache = Object.assign({}, props.placesCache[0]);
	// 		cache.key = 'not there'
	// 		wrapper.instance.updateTime(cache);
	// 		// console.log(cache)
	// 	})
	// });
})
