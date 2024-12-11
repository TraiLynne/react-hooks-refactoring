import { useState } from "react";

function ParentComponent() {
	const [message, setMessage] = useState("Hello from Parent");
	return <ChildComponent message={message} />;
}

function ChildComponent({ message }) {
	return <GrandchildComponent message={message} />;
}

function GrandchildComponent({ message }) {
	return <p>{message}</p>;
}

export default ParentComponent;
