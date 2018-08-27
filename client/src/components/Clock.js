import React from 'react';
import moment from 'moment';
import 'moment-timezone';
import PropTypes from 'prop-types';

export default class TimeClock extends React.Component {
	constructor(props) {
		super(props);
		const UTCtime = moment().utc().clone();
		const localTime = UTCtime.add(this.props.UtcOffSet, 'm');
		this.state = {
			time: localTime.format('h:mm a'),
			day: localTime.format('dddd'),
			month: localTime.format('Do MMMM'),
			year: localTime.format('gggg')
		};
		this.displayTime = this.displayTime.bind(this);
	}

	componentDidMount() {
		// Arrow function allows you to use "this" in context of the Component
		this.interval = setInterval(() => {
			this.displayTime();
		}, 1000);
	};

	displayTime() {
		this.setState({
			time: moment().utc().add(this.props.UtcOffSet, 'm').clone().format('h:mm:ss a')
		});
	}
	render() {
		return (
			<div>
				<p><i>Local Time:</i></p>
				<p>{this.state.day}</p>
				<p>{this.state.month} {this.state.year} {this.state.time}</p>
			</div>
		);
	}
}

TimeClock.propTypes = {
	UtcOffSet: PropTypes.number.isRequired
}
