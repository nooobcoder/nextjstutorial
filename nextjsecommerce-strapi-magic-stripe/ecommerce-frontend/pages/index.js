import { Fragment } from "react";
import Link from "next/link";

import styles from "../styles/Home.module.css";
import products from "../products.json";
import { fromImageToURL, twoDecimals } from "../utils";
import Head from "../components/Head";

export default function Home() {
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
