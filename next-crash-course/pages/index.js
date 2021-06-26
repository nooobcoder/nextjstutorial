import { server } from "../config";
import { Fragment } from "react";
import ArticleList from "../components/ArticleList";

/* const getStaticProps = async () => {
	const response = await fetch(
		"https://jsonplaceholder.typicode.com/posts?_limit=6"
	);

	const articles = await response.json();
	return { props: { articles } };
}; */

const getStaticProps = async () => {
	const response = await fetch(`${server}/api/articles`);

	const articles = await response.json();
	return { props: { articles } };
};

export default function Home({ articles }) {
	return (
		<Fragment>
			<ArticleList articles={articles} />
		</Fragment>
	);
}

export { getStaticProps };
