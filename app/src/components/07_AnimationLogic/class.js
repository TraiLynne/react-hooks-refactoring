import React, { Component } from "react";

class AnimationComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			opacity: 1,
		};
		this.intervalId = null;
	}

	componentDidMount() {
		this.intervalId = setInterval(() => {
			this.setState((prevState) => ({
				opacity: prevState.opacity === 1 ? 0.5 : 1,
			}));
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.intervalId);
	}

	render() {
		return <div style={{ opacity: this.state.opacity }}>Animating Text</div>;
	}
}

export default AnimationComponent;
