import React from 'react';
import BackSide from '../components/BackSide';

import { selectedPlaceMock } from './__mocks__/mockData'

function setup() {
	const props = {
		setLocation: jest.fn(),
		placesCache: [
			{
				exp: 1535100127158,
				key: '-33.8688197+151.20929550000005',
				name: 'Sydney'
			}
		]
	};

	return {
		wrapper: shallow(<BackSide {...props} />),
		props
	};
}

describe('<BackSide />', () => {
	it('should render all elements', () => {
		const { wrapper } = setup();
		expect(wrapper).toMatchSnapshot();

		// imported component test
		expect(wrapper.find('CacheOptions')).toHaveLength(1);
		expect(wrapper.find('ReactGoogleAutocomplete')).toHaveLength(1);
	});

	describe('Autocomplete\'s onPlaceSelected()', () => {
		it('should call setLocation() with 3 arguments when clicked', () => {
			const { wrapper, props } = setup();
			const setLocationSpy = jest.spyOn(props, 'setLocation');

			wrapper.find('ReactGoogleAutocomplete').props().onPlaceSelected(selectedPlaceMock);
			expect(setLocationSpy)
				.toHaveBeenCalledWith(
					selectedPlaceMock,
					selectedPlaceMock.geometry.location.lat(),
					selectedPlaceMock.geometry.location.lng()
				)
		});
	})
});
