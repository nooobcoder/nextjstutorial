import { Fragment } from "react";
import Head from "next/head";

import products from "../../products.json";
import { fromImageToURL } from "../../utils/urls";
import { twoDecimals } from "../../utils";
const product = products[0];

const Product = () => {
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

export default Product;
