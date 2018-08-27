import React from 'react';
// import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import moment from 'moment';
import WeatherIcon from 'react-icons-weather';

export default class Forecast extends React.Component {
	Capitalize = (str) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	render() {
		if (this.props.weatherLoading) {
			return (
				<div className='widget_right_item'>
					<ReactLoading type='spin' height='40px' width='40px' />
				</div>
			);
		} else {
			return (
				this.props.fiveDayForecast.map((forecast, index) => {
					return <div className='widget_right_item' key={index}>
						<div className='widget_right_item_topRow'>
							<div className='widget_right_item-description'>
								{this.Capitalize(forecast.description)} <WeatherIcon name='owm' iconId={forecast.id.toString()} />
							</div>
							<div className='widget_right_item-temp'>
								{Math.round(forecast.temp)}°C
							</div>
						</div>
						<div className='widget_right_item_bottomRow'>
							<div className='widget_right_item-day'>
								{moment(forecast.time).format('dddd')}
							</div>
						</div>
					</div>
				})

			);
		}
	}
}
