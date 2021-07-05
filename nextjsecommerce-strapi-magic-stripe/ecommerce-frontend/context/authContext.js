import { createContext, useState } from "react";
import { useRouter } from "next/router";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const router = useRouter();

	/**
	 * Adds email to user
	 * @param {string} email
	 */
	const loginUser = async (email) => {
		setUser({ email });
	};

	/**
	 * Sets the user to null
	 */
	const logoutUser = async () => {
		setUser(null);
		router.push("/");
	};
	return (
		<AuthContext.Provider value={{ user, loginUser, logoutUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
export { AuthProvider };
