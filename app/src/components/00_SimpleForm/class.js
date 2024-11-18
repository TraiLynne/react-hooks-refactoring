import React, { Component } from "react";

class SimpleForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
		};
	}

	handleInputChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		console.log("Form Data:", this.state);
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					name="name"
					value={this.state.name}
					onChange={this.handleInputChange}
					placeholder="Name"
				/>
				<input
					type="email"
					name="email"
					value={this.state.email}
					onChange={this.handleInputChange}
					placeholder="Email"
				/>
				<button type="submit">Submit</button>
			</form>
		);
	}
}

export default SimpleForm;
