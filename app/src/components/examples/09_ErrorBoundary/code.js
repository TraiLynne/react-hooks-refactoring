export const beforeCode09 = `
class ErrorBoundaryClass extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	componentDidCatch(error, info) {
		console.error("Error caught:", error, info);
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return <h1>Something went wrong.</h1>;
		}

		return this.props.children;
	}
}
`;

export const refactoredCode09 = `
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
`;
