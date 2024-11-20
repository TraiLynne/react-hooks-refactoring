import React from "react";
import { BeforeContainer, CodeDisplay, ComponentDisplay } from "./style";
import { CodeBlock, dracula } from "react-code-blocks";
const Before = ({ component: Component, code, highlights }) => (
	<BeforeContainer>
		<h2>Before</h2>
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
	</BeforeContainer>
);

export default Before;
