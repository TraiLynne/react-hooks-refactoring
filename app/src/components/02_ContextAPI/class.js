import React, { Component } from "react";
import ThemeContext from "./ThemeContext";

class ThemeComponent extends Component {
	static contextType = ThemeContext;

	render() {
		const theme = this.context;
		return (
			<div style={{ background: theme.background, color: theme.color }}>
				<p>Current Theme</p>
			</div>
		);
	}
}

export default ThemeComponent;
