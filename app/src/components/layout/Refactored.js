import React from "react";
import { RefactoredContainer, CodeDisplay, ComponentDisplay } from "./style";
import { CodeBlock, dracula } from "react-code-blocks";
const Refactored = ({ component: Component, code }) => (
	<RefactoredContainer>
		<h2>Refactored</h2>
		<ComponentDisplay>
			<Component />
		</ComponentDisplay>
		<CodeDisplay>
			<h2>Code</h2>
			<CodeBlock
				text={code}
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
	</RefactoredContainer>
);

export default Refactored;
