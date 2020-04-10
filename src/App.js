import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppContext from "./context";
import _ from "lodash/core";
import ProductsView from "./views/ProductsView";
import BuyListView from "./views/BuyListView";
import SettingsView from "./views/SettingsView";
import Header from "./components/Header";
import styles from "./styles/main.module.scss";
import "./styles/App.css";

const initialProducts = [
	{
		productName: "Mleko",
		productQuantity: 1,
		productLimit: 2,
		id: _.uniqueId("mleko"),
	},
	{
		productName: "Chleb",
		productQuantity: 1,
		productLimit: 1,
		id: _.uniqueId("chleb"),
	},
	{
		productName: "Bułki",
		productQuantity: 1,
		productLimit: 1,
		id: _.uniqueId("bulki"),
	},
	{
		productName: "Dżemor",
		productQuantity: 3,
		productLimit: 1,
		id: _.uniqueId("dzemor"),
	},
	{
		productName: "Masło",
		productQuantity: 1,
		productLimit: 1,
		id: _.uniqueId("maslo"),
	},
];

class App extends React.Component {
	state = {
		products: [...initialProducts],
		isEditing: false,
		isAdding: false,
		editedProduct: null,
	};

	updateLocalStorage = (listName, list) => {
		localStorage.setItem(listName, JSON.stringify(list));
	};

	hydrateStateWithLocalStorage() {
		if (
			localStorage.getItem("products") !== null &&
			localStorage.getItem("products") !== "null"
		) {
			this.setState({
				products: JSON.parse(localStorage.getItem("products")),
			});
		}
	}

	componentDidMount() {
		this.hydrateStateWithLocalStorage();
	}

	handleAddNewProduct = (e) => {
		e.preventDefault();

		const newProduct = {
			productName: e.target[0].value,
			productQuantity: e.target[1].value,
			productLimit: e.target[2].value,
			id: _.uniqueId(e.target[0].value),
		};

		this.setState((prevState) => {
			const data = {
				products: [...prevState.products, newProduct],
				isAdding: false,
			};

			this.updateLocalStorage("products", data.products);

			return data;
		});

		e.target.reset();
	};

	handleRemoveItem = (id) => {
		const products = this.state.products.filter(
			(product) => product.id !== id
		);
		this.setState({ products: products });

		this.updateLocalStorage("products", products);
	};

	handleEditItem = (id) => {
		const editedEl = this.state.products.filter((el) => {
			return el.id === id;
		});
		this.setState({ isEditing: true, editedProduct: editedEl });
	};

	handleCancelEdit = () => {
		this.setState({ isEditing: false, isAdding: false });
	};

	handleSaveAfterEdit = (e) => {
		e.preventDefault();

		const index = this.state.products.findIndex(
			(product) => product.id === this.state.editedProduct[0].id
		);

		const products = this.state.products;
		products[index].productName = e.target[0].value;
		products[index].productQuantity = e.target[1].value;
		products[index].productLimit = e.target[2].value;

		this.setState({
			products: products,
			isEditing: false,
			editedProduct: null,
		});

		this.updateLocalStorage("products", products);
	};

	handleAddNew = () => {
		this.setState({ isAdding: true });
	};

	render() {
		const contextElements = {
			...this.state,
			addNewProduct: this.handleAddNewProduct,
			removeItem: this.handleRemoveItem,
			editItem: this.handleEditItem,
			cancelEdit: this.handleCancelEdit,
			saveAfterEdit: this.handleSaveAfterEdit,
			addNewButton: this.handleAddNew,
		};
		return (
			<BrowserRouter>
				<AppContext.Provider value={contextElements}>
					<Header />
					<div className={styles.container}>
						<Switch>
							<Route
								exact
								path="/"
								render={(props) => (
									<ProductsView
										{...props}
										products={this.state.products}
										isEditing={this.state.isEditing}
										isAdding={this.state.isAdding}
										editedProduct={this.state.editedProduct}
									/>
								)}
							/>
							<Route path="/tobuy" component={BuyListView} />
							<Route path="/settings" component={SettingsView} />
						</Switch>
					</div>
				</AppContext.Provider>
			</BrowserRouter>
		);
	}
}

export default App;
