import { server } from "../../../config";
import Meta from "../../../components/Meta";
// Single article page
import Link from "next/link";
import { Fragment } from "react";
// import { useRouter } from "next/router";

const Article = ({ article }) => {
	return (
		<Fragment>
			<Meta title={article.title} description={article.excerpt} />
			<h1>{article.title}</h1>
			<p>{article.body}</p>
			<br />
			<Link href="/">Go Back</Link>
		</Fragment>
	);
};

const getStaticProps = async (context) => {
	const res = await fetch(`${server}/api/articles/${context.params.id}`);

	const article = await res.json();
	return { props: { article } };
};

// Generating dynamic paths
const getStaticPaths = async () => {
	const res = await fetch(`${server}/api/articles`);

	const articles = await res.json();
	const ids = articles.map(({ id }) => id);
	const paths = ids.map((id) => ({ params: { id: id.toString() } }));
	return { paths, fallback: false };
};

/* const getStaticProps = async (context) => {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${context.params.id}`
	);

	const article = await res.json();
	return { props: { article } };
};

// Generating dynamic paths
const getStaticPaths = async () => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);

	const articles = await res.json();
	const ids = articles.map(({ id }) => id);
	const paths = ids.map((id) => ({ params: { id: id.toString() } }));
	return { paths, fallback: false };
};
 */
export { getStaticProps, getStaticPaths };
export default Article;
