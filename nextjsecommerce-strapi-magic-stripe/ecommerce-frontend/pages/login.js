import Head from "next/head";
import { Fragment, useContext, useState } from "react";
import AuthContext from "../context/authContext";
import styles from "../styles/Login.module.css";

const Login = () => {
	const [input, setInput] = useState("");
	const { loginUser } = useContext(AuthContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		loginUser(input);
	};

	return (
		<Fragment>
			<Head>
				<title>Login</title>
				<meta name="description" content="Login here to be able to purchase" />
			</Head>

			<h2>Login</h2>
			<form onSubmit={(e) => handleSubmit(e)}>
				<input
					className={styles.input}
					value={input}
					onChange={(e) => setInput(e.target.value)}
					type="email"
					placeholder="Email Address"
				/>
				<button className={styles.button} type="submit">
					Log In
				</button>
			</form>
		</Fragment>
	);
};

export default Login;
