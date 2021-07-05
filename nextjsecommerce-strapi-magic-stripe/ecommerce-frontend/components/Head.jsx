import Head from "next/head";

const Header = ({ title }) => (
	<Head>
		<title>{title}</title>
		<meta name="viewport" content="initial-scale=1.0, width=device-width" />
	</Head>
);

export default Header;
