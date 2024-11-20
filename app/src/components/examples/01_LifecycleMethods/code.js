export const beforeCode01 = `class LifecycleClassComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}

	componentDidMount() {
		console.log("Component Mounted");
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.count !== this.state.count) {
			console.log("Count Updated:", this.state.count);
		}
	}

	componentWillUnmount() {
		console.log("Component Unmounted");
	}

	incrementCount = () => {
		this.setState((prevState) => ({ count: prevState.count + 1 }));
	};

	render() {
		return (
			<div>
				<p>Check out the Console. 👀</p>
				<p>Count: {this.state.count}</p>
				<button onClick={this.incrementCount}>Increment</button>
			</div>
		);
	}
}
`;

export const refactoredCode01 = `function LifecycleComponent() {
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
`;
