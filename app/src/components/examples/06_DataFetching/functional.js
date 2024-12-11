import { useEffect, useState } from "react";

function DataFetcher() {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts/1")
			.then((response) => response.json())
			.then((data) => {
				setData(data);
				setIsLoading(false);
			})
			.catch((error) => {
				setIsLoading(false);
				setError(error);
			});
	});
	return (
		<div>
			{isLoading && <p>Loading...</p>}
			{error && <p>Error: {error.message}</p>}
			{data && <h1>{data.title}</h1>}
		</div>
	);
}

export default DataFetcher;
