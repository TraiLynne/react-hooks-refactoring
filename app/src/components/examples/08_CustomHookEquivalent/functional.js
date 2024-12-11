import { useEffect, useState } from "react";

function TimerComponent() {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		let timerId = setInterval(() => {
			setSeconds(seconds + 1);
		}, 1000);
		return () => clearInterval(timerId);
	});

	return <h1>Seconds: {seconds}</h1>;
}

export default TimerComponent;
