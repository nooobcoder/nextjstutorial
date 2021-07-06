import { Fragment, useContext } from "react";
import { useRouter } from "next/router";
import { loadStripe } from "@stripe/stripe-js";

import styles from "../styles/BuyButton.module.css";
import AuthContext from "../context/authContext";
import { STRIPE_PK, API_URL } from "../utils";

const stripePromise = loadStripe(STRIPE_PK);

const BuyButton = ({ product }) => {
	const { user, getToken } = useContext(AuthContext);
	const router = useRouter();

	const redirectToLogin = () => router.push("/login");

	const handleBuy = async () => {
		const stripe = await stripePromise;
		const token = await getToken();

		const res = await fetch(`${API_URL}/orders`, {
			method: "POST",
			body: JSON.stringify({ product }),
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		});

		const session = await res.json();

		const result = await stripe.redirectToCheckout({ sessionId: session.id });
	};

	return (
		<Fragment>
			{!user && (
				<button className={styles.buy} onClick={redirectToLogin}>
					Login to buy
				</button>
			)}
			{user && (
				<button className={styles.buy} onClick={handleBuy}>
					BUY
				</button>
			)}
		</Fragment>
	);
};

export default BuyButton;
