import React from "react";
import { DisplayToggleContainer, ToggleButton } from "./style";

const DisplayToggle = ({ isRefactored, setIsRefactored }) => (
	<DisplayToggleContainer>
		<ToggleButton
			className={!isRefactored ? "active" : ""}
			onClick={() => setIsRefactored(false)}
		>
			Original
		</ToggleButton>
		<ToggleButton
			className={isRefactored ? "active" : ""}
			onClick={() => setIsRefactored(true)}
		>
			Refactored
		</ToggleButton>
	</DisplayToggleContainer>
);

export default DisplayToggle;
