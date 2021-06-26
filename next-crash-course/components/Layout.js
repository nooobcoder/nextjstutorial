import { Fragment } from "react";

import styles from "../styles/Layout.module.css";
import Navigation from "./Navigation";
import Meta from "./Meta";
import Header from "./Header";

const Layout = ({ children }) => {
	return (
		<Fragment>
			<Meta />
			<Navigation />
			<div className={styles.container}>
				<main className={styles.main}>
					<Header />
					{children}
				</main>
			</div>
		</Fragment>
	);
};

export default Layout;
