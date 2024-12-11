import { useState } from "react";

function CounterComponent() {
	const [count, setCount] = useState(0);

	let handleIncrement = () => {
		setCount(count + 1);
	};

	let handleDecrement = () => {
		setCount(count - 1);
	};
	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={() => handleIncrement()}>Increment</button>
			<button onClick={() => handleDecrement()}>Decrement</button>
		</div>
	);
}

export default CounterComponent;
