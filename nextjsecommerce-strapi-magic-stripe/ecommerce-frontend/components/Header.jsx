import Link from "next/link";
import { useContext } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Header.module.css";

import AuthContext from "../context/authContext";

const Header = () => {
	const router = useRouter();
	const isHome = router.pathname === "/";

	const goBack = (event) => {
		event.preventDefault();
		router.back();
	};

	const { user } = useContext(AuthContext);

	return (
		<div className={styles.nav}>
			{!isHome && (
				<div className={styles.back}>
					<a href="#" onClick={(e) => goBack(e)}>
						{"<"} Back
					</a>
				</div>
			)}
			<div className={styles.title}>
				<Link href="/">
					<a>
						<h1>The E-Commerce</h1>
					</a>
				</Link>
			</div>

			<div className={styles.auth}>
				{user ? (
					<Link href="/account">
						<a>{user.email}</a>
					</Link>
				) : (
					<Link href="/login">
						<a>Login</a>
					</Link>
				)}
			</div>
		</div>
	);
};

export default Header;
