import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import ReactLoading from 'react-loading';
import Clock from './Clock';

const Capitalize = (str) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

const CurrentWeather = ({
	currentWeatherData,
	weatherLoading,
	placeData,
	country,
	showBack
}) => {
	if (!weatherLoading && currentWeatherData) {
		return (
			<Fragment>
				<div className='widget_left_item-top'>
					<Clock UtcOffSet={placeData.utc_offset} />
					<h1>
						{ Capitalize(currentWeatherData.weather[0].description) }
					</h1>
				</div>
				<div className='widget_left_item-bottom'>
					<div className='current_weather_icon'>
						<div className='current_weather_icon-top'>
							<WeatherIcon name='owm' iconId={currentWeatherData.weather[0].id.toString()} />
						</div>
						<div className='current_weather_icon-bottom'>
							{ Math.round(currentWeatherData.main.temp) }°C
						</div>
					</div>
					<div>
						{ placeData.address_components[0].long_name }
						{placeData.address_components[0].long_name !== country && `, ${country}` }
						{
							currentWeatherData.name !== placeData.address_components[0].long_name &&
							`(${currentWeatherData.name})`
						}
					</div>
					<button onClick={e => showBack()}>
						Change Location
					</button>
				</div>
			</Fragment>
		);
	}
	return (
		<ReactLoading type={'spin'} />
	);
};

CurrentWeather.propTypes = {
	currentWeatherData: PropTypes.shape({
		name: PropTypes.string.isRequired,
		weather: PropTypes.arrayOf(PropTypes.shape({
			description: PropTypes.string.isRequired,
			id: PropTypes.number.isRequired
		})).isRequired,
		main: PropTypes.shape({
			temp: PropTypes.number.isRequired
		})
	}),
	weatherLoading: PropTypes.bool.isRequired,
	placeData: PropTypes.shape({
		utc_offset: PropTypes.number.isRequired,
		address_components: PropTypes.arrayOf(PropTypes.shape({
			long_name: PropTypes.string.isRequired
		}))
	}),
	country: PropTypes.string.isRequired,
	showBack: PropTypes.func.isRequired
};

export default CurrentWeather;
