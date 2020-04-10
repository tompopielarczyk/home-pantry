import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/header.module.scss";
import logo from "../assets/pantry.svg";

const Header = () => (
	<header className={styles.wrapper}>
		<img className={styles.logo} src={logo} alt="Logo" />
		<nav>
			<ul className={styles.wrapper}>
				<li className={styles.navItem}>
					<NavLink
						exact
						activeClassName={styles.navItemLinkActive}
						className={styles.navItemLink}
						to="/"
					>
						Owned Products
					</NavLink>
				</li>
				<li className={styles.navItem}>
					<NavLink
						activeClassName={styles.navItemLinkActive}
						className={styles.navItemLink}
						to="/tobuy"
					>
						Shopping List
					</NavLink>
				</li>
				<li className={styles.navItem}>
					<NavLink
						activeClassName={styles.navItemLinkActive}
						className={styles.navItemLink}
						to="/settings"
					>
						Settings
					</NavLink>
				</li>
			</ul>
		</nav>
	</header>
);

export default Header;
