import Head from "next/head";
import { Fragment, useContext } from "react";
import Link from "next/link";

import AuthContext from "../context/authContext";

const Account = () => {
	const { user, logoutUser } = useContext(AuthContext);

	return (
		<Fragment>
			<Head>
				<title>Your Account</title>
				<meta name="description" content="Your orders will be shown here" />
			</Head>
			{user ? (
				<Fragment>
					<h2>Account Page</h2>
					<hr />
					<p>Logged in as {user.email}</p>
					<a href="#" onClick={logoutUser}>
						Logout
					</a>
				</Fragment>
			) : (
				<Fragment>
					<p>Please login or register!</p>
					<Link href="/">
						<a>Go Back</a>
					</Link>
				</Fragment>
			)}
		</Fragment>
	);
};

export default Account;
