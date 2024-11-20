import React, { useState } from "react";
import Navigation from "./components/layout/Nav";
import DisplayToggle from "./components/layout/DisplayToggle";
import { examples } from "./components/examples";

import "./App.css";
import {
	CodeDisplay,
	ComponentDisplay,
	DisplayContainer,
} from "./components/layout/style";
import { CodeBlock, dracula } from "react-code-blocks";

const App = () => {
	const [activeExample, setActiveExample] = useState(0);
	const [isRefactored, setIsRefactored] = useState(false);

	const activeComponent = isRefactored
		? examples[activeExample].refactored
		: examples[activeExample].before;

	return (
		<div className="app">
			{/* Navigation Buttons */}
			<Navigation examples={examples} setActiveExample={setActiveExample} />

			{/* Display Toggle Buttons */}

			{/* Display Area */}
			<DisplayContainer isRefactored={isRefactored}>
				<DisplayToggle
					isRefactored={isRefactored}
					setIsRefactored={setIsRefactored}
				/>
				<h2>{isRefactored ? "Refactored" : "Original"} Version</h2>
				<ComponentDisplay>
					<activeComponent.component />
				</ComponentDisplay>
				<CodeDisplay>
					<h2>Code</h2>
					<CodeBlock
						text={activeComponent.code}
						language={"javascript"}
						theme={dracula}
						customStyle={{
							height: "40vh",
							overflowY: "scroll",
							borderRadius: "5px",
							boxShadow: "1px 2px 3px rgba(0,0,0,0.35)",
							fontSize: "0.75rem",
							margin: "0px 0.75rem",
						}}
					/>
				</CodeDisplay>
			</DisplayContainer>
		</div>
	);
};

export default App;
