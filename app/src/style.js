import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100%;
	background-color: black;
	display: flex;
`;

export const Sidebar = styled.aside`
	display: flex;
	flex-direction: column;
`;

export const SubContainer = styled.section`
	width: 45%vw;
	display: flex;
	flex-direction: column;
	border: solid 2px red;
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
