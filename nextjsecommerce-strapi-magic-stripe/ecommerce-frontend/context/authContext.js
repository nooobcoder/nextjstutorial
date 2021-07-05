import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Magic } from "magic-sdk";

import { MAGIC_PUBLIC_KEY } from "../utils";

const AuthContext = createContext();

let magic;
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const router = useRouter();

	useEffect(() => {
		magic = new Magic(MAGIC_PUBLIC_KEY);
	}, []);

	/**
	 * Adds email to user
	 * @param {string} email
	 */
	const loginUser = async (email) => {
		try {
			await magic.auth.loginWithMagicLink({ email });
			setUser({ email });
			router.push("/");
		} catch (error) {
			setUser(null);
			console.error(error);
		}
	};

	/**
	 * Sets the user to null
	 */
	const logoutUser = async () => {
		try {
			await magic.auth.logout();
			setUser(null);
			router.push("/");
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<AuthContext.Provider value={{ user, loginUser, logoutUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
export { AuthProvider };
