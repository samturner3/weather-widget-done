import React from 'react';
import CurrentWeather from '../components/CurrentWeather';

function setup(weatherLoading = false) {
	const props = {
		currentWeatherData: {
			name: 'Melbourne',
			weather: [
				{
					description: 'light rain',
					id: 500
				}
			],
			main: {
				temp: 21.87
			}
		},
		weatherLoading,
		placeData: {
			utc_offset: 600,
			address_components: [
				{
					long_name: 'Melbourne'
				}
			]
		},
		country: 'Australia',
		showBack: jest.fn()
	};
	return {
		wrapper: shallow(<CurrentWeather {...props} />),
		props
	};
}

describe('<Forecast />', () => {
	it('should render the weather info of all five days provided', () => {
		const { wrapper } = setup();
		expect(wrapper).toMatchSnapshot();

		// imported component test
		expect(wrapper.find('TimeClock')).toHaveLength(1);
		expect(wrapper.find('WeatherIcon')).toHaveLength(1);
		expect(wrapper.find('Loading')).toHaveLength(0);
	});

	it('should render the loader when weather data is loading', () => {
		const { wrapper } = setup(true);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('Loading')).toHaveLength(1);
	});

	describe('<button/>', () => {
		it('should call showBack() when clicked', () => {
			const { wrapper, props } = setup();
			const button = wrapper.find('button');

			button.simulate('click');

			const showBackSpy = jest.spyOn(props, 'showBack');
			expect(showBackSpy).toHaveBeenCalledTimes(1);
		});
	});
});
