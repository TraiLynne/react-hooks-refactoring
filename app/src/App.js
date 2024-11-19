import React, { useState } from "react";
import Navigation from "./components/layout/Nav";
import Before from "./components/layout/Before";
import Refactored from "./components/layout/Refactored";
import { examples } from "./components/examples";

import "./App.css";

const App = () => {
	const [activeExample, setActiveExample] = useState(0);

	return (
		<div className="app">
			<Navigation examples={examples} setActiveExample={setActiveExample} />
			<Before
				component={examples[activeExample].before.component}
				code={examples[activeExample].before.code}
			/>
			<Refactored
				component={examples[activeExample].refactored.component}
				code={examples[activeExample].refactored.code}
			/>
		</div>
	);
};

export default App;
