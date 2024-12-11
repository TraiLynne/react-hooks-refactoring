export const beforeCode04 = `
class ParentClassComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: "Hello from Parent",
		};
	}

	render() {
		return <ChildComponent message={this.state.message} />;
	}
}

class ChildComponent extends Component {
	render() {
		return <GrandchildComponent message={this.props.message} />;
	}
}

class GrandchildComponent extends Component {
	render() {
		return <p>{this.props.message}</p>;
	}
}
`;

export const refactoredCode04 = `
function ParentComponent() {
	const [message, setMessage] = useState("Hello from Parent");
	return <ChildComponent message={message} />;
}

function ChildComponent({ message }) {
	return <GrandchildComponent message={message} />;
}

function GrandchildComponent({ message }) {
	return <p>{message}</p>;
}
`;
