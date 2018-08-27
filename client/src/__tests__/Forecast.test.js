import React from 'react';
import Forecast from '../components/Forecast';

import { fiveDayForecastMock } from './__mocks__/mockData';

function setup(weatherLoading = false) {
	const props = {
		fiveDayForecast: fiveDayForecastMock,
		weatherLoading
	};

	return {
		wrapper: shallow(<Forecast {...props} />),
		props
	};
}

describe('<Forecast />', () => {
	it('should render the weather info of all five days provided', () => {
		const { wrapper } = setup();
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('.widget_right_item')).toHaveLength(fiveDayForecastMock.length);
		expect(wrapper.find('WeatherIcon')).toHaveLength(fiveDayForecastMock.length);
		expect(wrapper.find('Loading')).toHaveLength(0);
	});
	it('should render the loader when weather data is loading', () => {
		const { wrapper } = setup(true);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('.widget_right_item')).toHaveLength(1);
		expect(wrapper.find('Loading')).toHaveLength(1);
	});
});
