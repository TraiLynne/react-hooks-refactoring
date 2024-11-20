import { useState } from "react";

function SimpleForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const handleInputChange = (e) => {
		if (e.target.name === "name") {
			setName(e.target.value);
		}
		if (e.target.name === "email") {
			setEmail(e.target.value);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert(`Form Data: ${name} & ${email}`);
		setName("");
		setEmail("");
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					value={name}
					onChange={handleInputChange}
					placeholder="Name"
				/>
				<input
					type="email"
					name="email"
					value={email}
					onChange={handleInputChange}
					placeholder="Email"
				/>
				<button type="submit">Submit</button>
			</form>
		</>
	);
}

export default SimpleForm;
