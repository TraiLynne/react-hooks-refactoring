import React, { Component } from "react";

class LifecycleComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}

	componentDidMount() {
		console.log("Component Mounted");
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.count !== this.state.count) {
			console.log("Count Updated:", this.state.count);
		}
	}

	componentWillUnmount() {
		console.log("Component Unmounted");
	}

	incrementCount = () => {
		this.setState((prevState) => ({ count: prevState.count + 1 }));
	};

	render() {
		return (
			<div>
				<p>Count: {this.state.count}</p>
				<button onClick={this.incrementCount}>Increment</button>
			</div>
		);
	}
}

export default LifecycleComponent;
