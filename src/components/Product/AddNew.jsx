import React from "react";
import styles from "../../styles/addNewForm.module.scss";
import AppContext from "../../context";

const AddNewProduct = () => (
	<AppContext.Consumer>
		{(context) => (
			<div className={styles.addNew}>
				<h3>Add new product:</h3>
				<form onSubmit={context.addNewProduct}>
					<label htmlFor="name">Name: </label>
					<input
						autoComplete="off"
						name="name"
						id="name"
						placeholder=" "
						required
					></input>
					<label htmlFor="quantity">Quantity: </label>
					<input
						autoComplete="off"
						type="number"
						min="0"
						name="quantity"
						id="quantity"
						placeholder=" "
						required
					></input>
					<label htmlFor="limit">Minimum: </label>
					<input
						autoComplete="off"
						type="number"
						min="0"
						name="limit"
						id="limit"
						placeholder=" "
						required
					></input>
					<button type="submit">Add product</button>
					<button type="button" onClick={context.cancelEdit}>
						Cancel
					</button>
				</form>
			</div>
		)}
	</AppContext.Consumer>
);

export default AddNewProduct;
