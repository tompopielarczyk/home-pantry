import React from "react";
import styles from "../../styles/editProduct.module.scss";
import AppContext from "../../context";

const EditProduct = () => (
	<AppContext.Consumer>
		{(context) => (
			<div className={styles.editProduct}>
				<h3>Edycja: {context.editedProduct[0].productName}</h3>
				<form onSubmit={context.saveAfterEdit}>
					<label htmlFor="name">Name</label>
					<input
						name="name"
						id="name"
						defaultValue={context.editedProduct[0].productName}
						required
					></input>
					<label htmlFor="quantity">Quantity</label>
					<input
						name="quantity"
						type="number"
						min="0"
						id="quantity"
						defaultValue={context.editedProduct[0].productQuantity}
						required
					></input>
					<label htmlFor="limit">Minimum: </label>
					<input
						autoComplete="off"
						type="number"
						min="0"
						name="limit"
						id="limit"
						defaultValue={context.editedProduct[0].productLimit}
						placeholder=" "
						required
					></input>
					<button type="submit">Edit</button>
					<button type="button" onClick={context.cancelEdit}>
						Cancel
					</button>
				</form>
			</div>
		)}
	</AppContext.Consumer>
);

export default EditProduct;
