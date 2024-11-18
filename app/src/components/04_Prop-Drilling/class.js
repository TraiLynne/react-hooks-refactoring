import React, { Component } from "react";

class ParentComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: "Hello from Parent",
		};
	}

	render() {
		return <ChildComponent message={this.state.message} />;
	}
}

class ChildComponent extends Component {
	render() {
		return <GrandchildComponent message={this.props.message} />;
	}
}

class GrandchildComponent extends Component {
	render() {
		return <p>{this.props.message}</p>;
	}
}

export default ParentComponent;
