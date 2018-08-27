import React from 'react';
import moment from 'moment';
import update from 'immutability-helper';

export default class CacheOptions extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cacheObjects: {}
		};
	}

	componentWillMount = () => {
		const initialObj = {};
		this.props.placesCache.forEach((cache, index) => {
			const time = moment(cache.exp).fromNow();
			const id = `${cache.key}`;
			initialObj[id] = {
				time
			}
		});
		this.setState({ cacheObjects: initialObj });
	};

	componentDidMount = () => {
		this.interval = setInterval(() => {
			this.props.placesCache.forEach((cache, index) => { // Ensure there is a state for this prop, and update it.
				this.updateTime(cache, index);
			});
		}, 1000);
	};

	updateTime = (cache, index) => {
		const time = `${moment(cache.exp).fromNow()}`;
		const lookup = `${cache.key}`;
		if (this.state.cacheObjects[lookup] === undefined) {
			this.setState(({
				cacheObjects: update(this.state.cacheObjects, {[`${cache.key}`]: {$set: {time}}})
			}));
		} else {
			this.setState(({
				cacheObjects: update(this.state.cacheObjects, {[`${cache.key}`]: {$set: {time}}})
			}));
		}
	}
	render() {
		return (
			<ul>
				{this.props.placesCache.map((cache, index) => {
					if ((moment().diff(cache.exp, 'seconds') < 0) && this.state.cacheObjects[`${cache.key}`] !== undefined) {
						return (<li key={index}>{cache.name} <i>(Expires {this.state.cacheObjects[`${cache.key}`].time}, {moment().diff(cache.exp, 'seconds')})</i></li>)
					}
				})}
			</ul>
		)
	}
};
