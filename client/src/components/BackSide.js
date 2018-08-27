import React from 'react';
import PropTypes from 'prop-types';
import Autocomplete from 'react-google-autocomplete';
import CacheOptions from './CacheOptions';

const BackSide = ({
	setLocation,
	placesCache
}) => {
	return (
		<div>
			<h2>Search a location to show data</h2>
			<Autocomplete
				style={{width: '90%'}}
				onPlaceSelected={(place) => {
					if (place.geometry !== undefined) {
						setLocation(place, place.geometry.location.lat(), place.geometry.location.lng());
					}
				}}
				types={['(regions)']}
			/>
			{(placesCache !== null && placesCache.length > 0) &&
			<div>
				<h3>Server-side cached data locations:</h3>
				<CacheOptions placesCache={placesCache} />
			</div>
			}
		</div>
	);
};

BackSide.propTypes = {
	setLocation: PropTypes.func.isRequired,
	placesCache: PropTypes.arrayOf(PropTypes.shape({
		exp: PropTypes.number.isRequired,
		key: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired
	}))
};

export default BackSide;
