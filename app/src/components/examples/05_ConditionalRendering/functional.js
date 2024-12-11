import { useState } from "react";

function ToggleComponent() {
	const [isVisible, setIsVisible] = useState(false);

	let handleToggle = () => {
		setIsVisible(!isVisible);
	};
	return (
		<div>
			<button onClick={handleToggle}>
				{isVisible ? "Hide" : "Show"} Content
			</button>
			{isVisible && <p>This is some conditional content.</p>}
		</div>
	);
}

export default ToggleComponent;
