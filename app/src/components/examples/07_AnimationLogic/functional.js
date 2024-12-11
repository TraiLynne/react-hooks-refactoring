import { useEffect, useState } from "react";

function AnimationComponent() {
	const [opacity, setOpacity] = useState(1);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setOpacity((prevOpacity) => (prevOpacity === 1 ? 0.5 : 1));
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	return <div style={{ opacity }}>Animating Text</div>;
}

export default AnimationComponent;
