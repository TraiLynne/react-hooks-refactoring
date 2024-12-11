export const beforeCode07 = `
class AnimationClassComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			opacity: 1,
		};
		this.intervalId = null;
	}

	componentDidMount() {
		this.intervalId = setInterval(() => {
			this.setState((prevState) => ({
				opacity: prevState.opacity === 1 ? 0.5 : 1,
			}));
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.intervalId);
	}

	render() {
		return <div style={{ opacity: this.state.opacity }}>Animating Text</div>;
	}
}
`;

export const refactoredCode07 = `
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
`;
