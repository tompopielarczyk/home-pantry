import React from "react";
import styles from "../../styles/addNewButton.module.scss";
import AppContext from "../../context";

const AddNewButton = () => (
	<AppContext.Consumer>
		{(context) => (
			<button
				className={styles.addNewButton}
				onClick={context.addNewButton}
			>
				+
			</button>
		)}
	</AppContext.Consumer>
);

export default AddNewButton;
