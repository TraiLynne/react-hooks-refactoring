import React, { Component } from "react";

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
		fetch("<https://jsonplaceholder.typicode.com/posts/1>")
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

export default DataFetcherClass;
