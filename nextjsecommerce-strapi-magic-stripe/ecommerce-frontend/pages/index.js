import { Fragment } from "react";
import Link from "next/link";

import styles from "../styles/Home.module.css";
// import products from "../products.json";
import { fromImageToURL, twoDecimals, API_URL } from "../utils";
import Head from "../components/Head";

export default function Home({ products }) {
	return (
		<Fragment>
			<Head title={`The Modern Ecom`} />
			{products.map((product) => (
				<div key={product.id} className={styles.product}>
					<Link href={`/products/${product.slug}`}>
						<a>
							<div className={styles.product__Row}>
								<div className={styles.product__ColImg}>
									<img src={fromImageToURL(product.image)} />
								</div>
								<div className={styles.product__Col}>
									{product.name} ${twoDecimals(product.price)}
								</div>
							</div>
						</a>
					</Link>
				</div>
			))}
		</Fragment>
	);
}

export const getStaticProps = async () => {
	// TODO: Fetch the products
	try {
		const product_res = await fetch(`${API_URL}/products/`);
		const product_json = await product_res.json();

		// TODO: Return the products as props
		return { props: { products: product_json } };
	} catch (error) {
		console.error(error);
	}
};
