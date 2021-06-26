import HeaderStyles from "../styles/Header.module.css";
import { Fragment } from "react";

const Header = () => {
	return (
		<Fragment>
			<h1 className={HeaderStyles.title}>
				<span>WebDev</span> News
			</h1>
			<p className={HeaderStyles.description}>
				Keep up to date, with the latest web developer news!
			</p>
		</Fragment>
	);
};

export default Header;
