export const beforeCode06 = `
class DataFetcherClass extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
			loading: true,
			error: null,
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/posts/1")
			.then((response) => response.json())
			.then((data) => this.setState({ data, loading: false }))
			.catch((error) => this.setState({ error, loading: false }));
	}

	render() {
		const { data, loading, error } = this.state;

		if (loading) return <p>Loading...</p>;
		if (error) return <p>Error: {error.message}</p>;

		return <div>{data && <h1>{data.title}</h1>}</div>;
	}
}
`;

export const refactoredCode06 = `
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
`;
