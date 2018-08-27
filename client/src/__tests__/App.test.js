import React from 'react';
import App from '../App';

import {
	selectedPlaceMock,
	forecastDataMock,
	fiveDayForecastMock
} from './__mocks__/mockData'

function setup() {
	return {
		wrapper: shallow(<App />)
	};
}

describe('<Clock />', () => {
	beforeAll(() => {
		window.fetch = jest.fn().mockImplementation(() =>
			Promise.resolve({
				ok: true,
				json: () => [{
					'key': '-33.8688197+151.20929550000005',
					'name': 'Sydney',
					'exp': 1535207229409
				}]
			})
		);
	});

	it('should render all elements', () => {
		const { wrapper } = setup();
		expect(wrapper).toMatchSnapshot();
	});

	describe('showBack()', () => {
		it('should set state and call the fetch catche method', () => {
			const { wrapper } = setup();

			const { isFlipped } = wrapper.instance().state;
			const fetchCacheSpy = jest.spyOn(wrapper.instance(), 'fetchCache');

			wrapper.instance().showBack();

			expect(isFlipped).toBe(true);
			expect(fetchCacheSpy).toHaveBeenCalledTimes(1);
		});
	});

	describe('showFront()', () => {
		it('should set state.isFlipped to false', () => {
			const { wrapper } = setup();
			wrapper.instance().showFront();

			const { isFlipped } = wrapper.instance().state;

			expect(isFlipped).toBe(false);
		});
	});

	describe('extractCountry()', () => {
		it('should set state.country', () => {
			const { wrapper } = setup();
			wrapper.instance().extractCountry(selectedPlaceMock);

			const { country } = wrapper.instance().state;

			expect(country).toBe('Australia');
		});
	});

	describe('extractForecast()', () => {
		it('should set state.fiveDayForecast', () => {
			const { wrapper } = setup();
			wrapper.instance().extractForecast(forecastDataMock);

			const { fiveDayForecast } = wrapper.instance().state;

			expect(fiveDayForecast).toHaveLength(fiveDayForecastMock.length);

			expect(JSON.stringify(fiveDayForecast)).toBe(JSON.stringify(fiveDayForecastMock));
		});
	});
});
