import React, { Component } from "react";
import { ThemeContext } from "./ThemeContext";

class ThemeClassComponent extends Component {
	static contextType = ThemeContext;

	render() {
		const theme = this.context;
		return (
			<div style={{ background: theme.background, color: theme.color }}>
				<p>Cuyrrent Theme</p>
			</div>
		);
	}
}

export default ThemeClassComponent;
