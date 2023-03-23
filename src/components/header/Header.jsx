import styles from "./index.module.scss";
import Hero from "../hero";

const Header = ({ setCategory, setBookVisible }) => {
	return (
		<div className={styles.Header}>
			<nav className={styles.nav}>
				<ul>
					<li>Home</li>
					<li>Contact us</li>
					<li>About us</li>
					<li>FAQ</li>
				</ul>
				<div className={styles.bookBtn}>
					<input
						type="button"
						value="Prenota!"
						onClick={() => setBookVisible(true)}
					/>
				</div>
			</nav>

			<Hero setCategory={setCategory} />
			<hr />
		</div>
	);
};

export default Header;
