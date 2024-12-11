import { useState } from "react";

function ErrorBoundary({ children }) {
	const [hasError, setHasError] = useState(false);

	const errorHandler = (error, info) => {
		console.error("Error caught:", error, info);
		setHasError(true);
	};

	if (hasError) {
		return <h1>Something went wrong.</h1>;
	}

	return children;
}

export default ErrorBoundary;
