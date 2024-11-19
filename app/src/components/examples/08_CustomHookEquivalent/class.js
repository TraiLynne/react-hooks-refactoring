import React, { Component } from "react";

class TimerClassComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			seconds: 0,
		};
	}

	componentDidMount() {
		this.timerId = setInterval(() => {
			this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	render() {
		return <h1>Seconds: {this.state.seconds}</h1>;
	}
}

export default TimerClassComponent;
