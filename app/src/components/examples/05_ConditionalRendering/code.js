export const beforeCode05 = `
class ToggleClassComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isVisible: false,
		};
	}

	toggleVisibility = () => {
		this.setState((prevState) => ({ isVisible: !prevState.isVisible }));
	};

	render() {
		return (
			<div>
				<button onClick={this.toggleVisibility}>
					{this.state.isVisible ? "Hide" : "Show"} Content
				</button>
				{this.state.isVisible && <p>This is some conditional content.</p>}
			</div>
		);
	}
}
`;

export const refactoredCode05 = `
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
`;
