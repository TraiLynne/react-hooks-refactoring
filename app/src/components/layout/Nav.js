import React from "react";
import { NavContainer, NavButton } from "./style";
const Navigation = ({ examples, setActiveExample }) => (
	<NavContainer>
		{examples.map((example, index) => (
			<NavButton key={index} onClick={() => setActiveExample(index)}>
				{example.title}
			</NavButton>
		))}
	</NavContainer>
);

export default Navigation;
