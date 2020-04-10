import React from "react";
import styles from "../../styles/product.module.scss";

const Product = ({
	productName,
	productQuantity,
	productLimit,
	id,
	removeItem,
	editItem,
	productMissing,
}) => (
	<div className={styles.product}>
		<h3>{productName}</h3>
		<p>
			Quantity: {productQuantity} / {productLimit}
		</p>
		{productMissing > 0 ? (
			<p className={styles.missing}>Missing: {productMissing}</p>
		) : null}
		{editItem && (
			<button className={styles.edit} onClick={() => editItem(id)}>
				Edit
			</button>
		)}
		{removeItem && (
			<button
				className={styles.del}
				onClick={() =>
					window.confirm(
						"Are you sure to remove this product from the list?"
					) && removeItem(id)
				}
			>
				Remove
			</button>
		)}
	</div>
);

export default Product;
