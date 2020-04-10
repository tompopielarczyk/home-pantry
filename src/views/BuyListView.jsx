import React from "react";
import AppContext from "../context";
import Product from "../components/Product/Product";
import styles from "../styles/productsView.module.scss";

class BuyListView extends React.Component {
	state = {};
	render() {
		return (
			<div className={styles.buylist}>
				<AppContext.Consumer>
					{(context) =>
						context.products
							.filter(
								(el) => el.productQuantity < el.productLimit
							)
							.map((el) => (
								<Product
									key={el.id}
									productName={el.productName}
									productQuantity={el.productQuantity}
									productLimit={el.productLimit}
									productMissing={
										el.productLimit - el.productQuantity
											? el.productLimit -
											  el.productQuantity
											: null
									}
								/>
							))
					}
				</AppContext.Consumer>
			</div>
		);
	}
}

export default BuyListView;
