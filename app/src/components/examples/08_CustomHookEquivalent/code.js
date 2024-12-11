export const beforeCode08 = `
class TimerClassComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			seconds: 0,
		};
	}

	componentDidMount() {
		this.timerId = setInterval(() => {
			this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	render() {
		return <h1>Seconds: {this.state.seconds}</h1>;
	}
}
`;

export const refactoredCode08 = `
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
`;
