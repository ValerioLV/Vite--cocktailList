import styles from "./index.module.scss";

const Footer = () => {
	return (
		<div className={styles.Footer}>
			<div className={styles.upper__links}>
				<span>Email Us</span>
				<span>FAQ</span>
				<span>Learn More</span>
				<span>Forum</span>
				<span>Customer Service</span>
			</div>
			<div className={styles.lower__links}>
				<div className={styles.left__links}>
					<span>Other Link 1</span>
					<span>Other Link 2</span>
				</div>
				<div className={styles.lower__fodding}></div>
				<div className={styles.right__links}>
					<span>Other Link 3</span>
					<span>Other Link 4</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
