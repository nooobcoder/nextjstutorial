import Link from "next/link";

import navStyles from "../styles/Navigation.module.css";

const Navigation = () => {
	return (
		<nav className={navStyles.nav}>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
