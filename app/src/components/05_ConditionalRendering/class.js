import React, { Component } from "react";

class ToggleComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isVisible: false,
		};
	}

	toggleVisibility = () => {
		this.setState((prevState) => ({ isVisible: !prevState.isVisible }));
	};

	render() {
		return (
			<div>
				<button onClick={this.toggleVisibility}>
					{this.state.isVisible ? "Hide" : "Show"} Content
				</button>
				{this.state.isVisible && <p>This is some conditional content.</p>}
			</div>
		);
	}
}

export default ToggleComponent;
