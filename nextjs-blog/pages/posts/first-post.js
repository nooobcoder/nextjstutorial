import Head from "next/head";
import Link from "next/link";
// User defined imports
import Layout from "../../components/Layout";

const FirstPost = () => (
	<Layout>
		<Head>
			<title>First Post</title>
		</Head>
		<h1>First Post</h1>
		<h2>
			<Link href="/">
				<a>Back to home</a>
			</Link>
		</h2>
	</Layout>
);
export default FirstPost;
