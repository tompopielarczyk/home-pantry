import React from "react";
import Product from "./Product";
import AppContext from "../../context";

const ProductList = () => (
	<AppContext.Consumer>
		{(context) =>
			context.products.map((product, index) => (
				<Product
					key={context.products[index].id}
					removeItem={context.removeItem}
					editItem={context.editItem}
					{...context.products[index]}
				/>
			))
		}
	</AppContext.Consumer>
);

export default ProductList;
