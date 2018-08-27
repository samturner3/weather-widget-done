import React, { Component, Fragment } from 'react';
import Flipcard from '@kennethormandy/react-flipcard';

import './styles/App.css';
import '@kennethormandy/react-flipcard/dist/Flipcard.css'

import Forecast from './components/Forecast';
import CurrentWeather from './components/CurrentWeather';
import BackSide from './components/BackSide';

class App extends Component {
		state = {
			currentWeatherData: null,
			country: null,
			forecastData: null,
			fiveDayForecast: null,
			placeData: null,
			backgroundURL: '/images/SydneyBackground.jpg',
			isFlipped: true,
			selectedLocationString: 'Sydney',
			weatherLoading: true,
			placesCache: null
		};

		componentDidMount = () => {
			this.fetchCache();
		}

		showBack = () => {
			this.setState({
				isFlipped: true
			});
			this.fetchCache();
		};

		showFront = () => {
			this.setState({
				isFlipped: false
			});
		};

		fetchWeather = async (place, lat, lng) => {
			let backgroundURL = null;
			if (place.photos !== undefined && place.photos.length > 0) {
				backgroundURL = place.photos[0].getUrl({ 'maxWidth': 1000, 'maxHeight': 1000 });
			}
			let requestOptions = new Request(`/api/weather`, {
				method: 'POST',
				headers: new Headers({
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				}),
				body: JSON.stringify({
					placeID: place.place_id,
					backgroundURL,
					lat,
					lng
				})
			});
			await fetch(requestOptions)
				.catch((response) => { alert(`There was a problem fetching data from the server. Please refresh/restart server and try again, or inspect the network tab. ${response}`) })
				.then((response) => {
					response.json().then(async (data) => {
						// console.log(data);
						// console.log('returned data current weather:', data.weather);
						this.setState({
							currentWeatherData: data.weather,
							forecastData: data.forecast
						});
						if (place.photos !== undefined && place.photos.length > 0) {
							this.setState({
								backgroundURL: `backgroundImages/${place.place_id}.jpg`
							});
						} else {
							this.setState({
								backgroundURL: null
							});
						}
						this.extractForecast(data.forecast);
					});
				});
		}

		setLocation = async (place, lat, long) => {
			this.setState({
				placeData: place,
				weatherLoading: true,
				isFlipped: false,
				selectedLocationString: place.address_components[0].long_name
			});
			await this.fetchWeather(place, lat, long);
			this.extractCountry(place);
			this.setState({
				weatherLoading: false
			});
		}

		fetchCache = () => {
			fetch('/api/cachelookup')
				.then(response => response.json())
				.then(data => {
					this.setState({ placesCache: data.cache });
				});
		};

		extractCountry = (placeData) => {
			placeData.address_components.forEach((addressComponent) => {
				addressComponent.types.forEach((type) => {
					if (type === 'country') {
						this.setState({
							country: addressComponent.long_name
						})
					}
				})
			})
		};

		extractForecast = (forecastData) => {
			const fiveDayForecast = [];
			forecastData.list.forEach((listItem) => {
				if (listItem.dt_txt.substr(listItem.dt_txt.length - 8) === '12:00:00') { // Grab the 12Noon forecast
					const dayForecast = {};
					dayForecast.time = listItem.dt_txt;
					dayForecast.description = listItem.weather[0].description;
					dayForecast.id = listItem.weather[0].id;
					dayForecast.temp = listItem.main.temp;
					dayForecast.temp_max = listItem.main.temp_max;
					dayForecast.temp_min = listItem.main.temp_min;
					fiveDayForecast.push(dayForecast);
				}
			})
			this.setState({
				fiveDayForecast: fiveDayForecast
			});
		};

		render() {
			return (
				<Fragment>
					<Flipcard flipped={this.state.isFlipped}>
						<div className='App'>
							<div className='container' ref='flipper'>
								<div className='widget_contain' style={{backgroundImage: `url(${this.state.backgroundURL})`}}>
									<div className='widget_left'>
										{this.state.placeData && (
											<CurrentWeather currentWeatherData={this.state.currentWeatherData} weatherLoading={this.state.weatherLoading} placeData={this.state.placeData} country={this.state.country} showBack={this.showBack} />
										)}
									</div>
									<div className='widget_right'>
										{this.state.fiveDayForecast && (
											<Forecast fiveDayForecast={this.state.fiveDayForecast} weatherLoading={this.state.weatherLoading} />
										)}
									</div>
								</div>
							</div>
						</div>
						<BackSide showFront={this.showFront} setLocation={this.setLocation} weatherData={this.state.weatherData} placesCache={this.state.placesCache} />
					</Flipcard>
				</Fragment>
			);
		}
}

export default App;
