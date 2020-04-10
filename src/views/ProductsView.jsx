import React from "react";
import ProductList from "../components/Product/ProductList";
import AddNewProduct from "../components/Product/AddNew";
import AddNewButton from "../components/Product/AddNewButton";
import EditProduct from "../components/Product/EditProduct";
import styles from "../styles/productsView.module.scss";

const ProductsView = ({
	products,
	isEditing,
	isAdding,
	editedProduct,
	...props
}) => {
	return (
		<>
			<div className={styles.productList}>
				<ProductList />
			</div>
			{isAdding && <AddNewProduct />}
			{isEditing && <EditProduct />}
			<AddNewButton />
		</>
	);
};

export default ProductsView;
