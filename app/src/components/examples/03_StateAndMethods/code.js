export const beforeCode03 = `
class CounterClassComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}

	increment = () => {
		this.setState((prevState) => ({ count: prevState.count + 1 }));
	};

	decrement = () => {
		this.setState((prevState) => ({ count: prevState.count - 1 }));
	};

	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button onClick={this.increment}>Increment</button>
				<button onClick={this.decrement}>Decrement</button>
			</div>
		);
	}
}
`;

export const refactoredCode03 = `
function CounterComponent() {
	const [count, setCount] = useState(0);

	let handleIncrement = () => {
		setCount(count + 1);
	};

	let handleDecrement = () => {
		setCount(count - 1);
	};
	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={() => handleIncrement()}>Increment</button>
			<button onClick={() => handleDecrement()}>Decrement</button>
		</div>
	);
}
`;
