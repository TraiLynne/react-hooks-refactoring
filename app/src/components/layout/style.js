import styled from "styled-components";

export const NavContainer = styled.div`
	margin: 20px 0;
	width: 15vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

export const NavButton = styled.button`
	margin: 0 5px;
	padding: 10px 20px;
	cursor: pointer;
	width: 94%;
`;

export const BeforeContainer = styled.div`
	width: 40vw;
	border: 1px solid red;
	background-color: red;
	border-radius: 5px;
	max-height: 100vh;
`;

export const RefactoredContainer = styled.div`
	width: 40vw;
	border: 1px solid green;
	background-color: green;
	border-radius: 5px;
	max-height: 100vh;
`;
export const ComponentDisplay = styled.div`
	height: 45vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const CodeDisplay = styled.div`
	height: 45vh;
`;
