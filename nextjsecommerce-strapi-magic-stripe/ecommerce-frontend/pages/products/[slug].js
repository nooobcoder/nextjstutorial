import { Fragment } from "react";
import Head from "next/head";
// import products from "../../products.json";
import { fromImageToURL } from "../../utils/urls";
import { twoDecimals, API_URL } from "../../utils";
// const product = products[0];

const Product = ({ product }) => {
	return (
		<Fragment>
			<Head>
				{product.meta_title && <title>{product.meta_title}</title>}
				{product.meta_description && (
					<meta name="description" content={product.meta_description} />
				)}
			</Head>

			<h3>{product.name}</h3>
			<img src={fromImageToURL(product.image)} />
			<h3>{product.name}</h3>
			<p>${twoDecimals(product.price)}</p>

			<p>{product.content}</p>
		</Fragment>
	);
};

const getStaticProps = async ({ params: { slug } }) => {
	const product_res = await fetch(`${API_URL}/products/?slug=${slug}`);
	const found = await product_res.json();

	return {
		props: {
			product: found[0], // Because the API response for filters in an array
		},
	};
};

const getStaticPaths = async () => {
	// TODO: Retrieve all the possible paths
	try {
		const product_res = await fetch(`${API_URL}/products/`);
		const product_json = await product_res.json();
		// TODO: Return the NextJS context
		return {
			paths: product_json.map((prod) => ({
				params: { slug: String(prod.slug) },
			})),
			fallback: false, // Revert to 404 if no match
		};
	} catch (error) {
		console.error(error);
	}
};

export default Product;
export { getStaticPaths, getStaticProps };
