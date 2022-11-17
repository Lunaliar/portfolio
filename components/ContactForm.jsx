import React, {useState} from "react";
import {sendContactForm} from "../lib/api";
const tw = {
	inputContainer: "flex flex-col py-2",
	label: "uppercase text-sm py-2",
	input: "border-2 rounded-lg p-3 flex border-gray-300",
	textArea: "border-2 rounded-lg p-3 border-gray-300",
	button: "w-full p-4 mt-4 text-gray-100",
};

const initValues = {
	name: "",
	email: "",
	subject: "",
	message: "",
};
function ContactForm() {
	const [values, setValues] = useState(initValues);
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			await sendContactForm(values);
			setLoading(false);
			setValues(initValues);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	return (
		<form>
			<div className={tw.inputContainer}>
				<label className={tw.label} htmlFor="name">
					Name
				</label>
				<input
					type="text"
					className={tw.input}
					id="name"
					required
					onChange={(e) => setValues({...values, name: e.target.value})}
				/>
			</div>
			<div className={tw.inputContainer}>
				<label className={tw.label} htmlFor="email">
					Email
				</label>
				<input
					type="email"
					className={tw.input}
					id="email"
					required
					onChange={(e) => setValues({...values, email: e.target.value})}
				/>
			</div>
			<div className={tw.inputContainer}>
				<label className={tw.label} htmlFor="subject">
					Subject
				</label>
				<input
					type="text"
					className={tw.input}
					id="subject"
					required
					onChange={(e) => setValues({...values, subject: e.target.value})}
				/>
			</div>
			<div className={tw.inputContainer}>
				<label className={tw.label} htmlFor="message">
					Message
				</label>
				<textarea
					className={tw.textArea}
					rows="10"
					id="message"
					required
					onChange={(e) => setValues({...values, message: e.target.value})}
				></textarea>
			</div>
			<button
				className={tw.button}
				onClick={(e) => handleSubmit(e)}
				disabled={loading}
			>
				Send Message
			</button>
		</form>
	);
}

export default ContactForm;
