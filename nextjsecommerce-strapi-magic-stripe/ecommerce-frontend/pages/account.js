import Head from "next/head";
import { Fragment, useContext, useState, useEffect } from "react";
import Link from "next/link";

import { API_URL } from "../utils";
import AuthContext from "../context/authContext";

// This is a custom hook
const useOrders = (user, getToken) => {
	const [orders, setOrders] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchOrders = async () => {
			if (user) {
				try {
					setLoading(true);
					const token = await getToken();
					const order_res = await fetch(`${API_URL}/orders`, {
						headers: {
							Authorization: `Bearer ${token}`,
						},
					});

					setOrders(await order_res.json());
				} catch (error) {
					setOrders([]);
				}
				setLoading(false);
			}
		};

		fetchOrders();
	}, [user]);

	return { orders, loading };
};

const Account = () => {
	const { user, logoutUser, getToken } = useContext(AuthContext);

	const { orders, loading } = useOrders(user, getToken);

	return (
		<Fragment>
			<Head>
				<title>Your Account</title>
				<meta name="description" content="Your orders will be shown here" />
			</Head>
			{user ? (
				<Fragment>
					<h2>Account Page</h2>

					<h3>Your Orders</h3>
					{loading ? (
						<p>Loading your orders</p>
					) : (
						<Fragment>
							{orders?.map((order) => (
								<div key={order.id}>
									{new Date(order.created_at).toLocaleDateString("en-EN")}{" "}
									{order.product.name} ${order.total} {order.status}
								</div>
							))}
						</Fragment>
					)}

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
