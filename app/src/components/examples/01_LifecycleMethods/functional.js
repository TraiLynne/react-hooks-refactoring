import { useEffect, useState } from "react";

function LifecycleComponent() {
	const [count, setCount] = useState(0);

	const handleIncrement = () => {
		setCount(count + 1);
	};

	const handleReset = () => {
		setCount(0);
	};

	useEffect(() => {
		console.log("Component Mounted");

		return () => {
			console.log("Component Unmounted");
		};
	}, []);

	useEffect(() => {
		console.log("Count Updated:", count);
	}, [count]);

	return (
		<div>
			<p>Check out the Console. 👀</p>
			<p>Count: {count}</p>
			<button onClick={handleIncrement}>Increment</button>
			<button onClick={handleReset}>Reset</button>
		</div>
	);
}

export default LifecycleComponent;
