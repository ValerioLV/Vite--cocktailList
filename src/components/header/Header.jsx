import "./index.scss";
import Hero from "../hero";

const Header = ({ setCategory }) => {
	return (
		<div className="Header">
			<nav className="Header__nav">
				<ul>
					<li>Home</li>
					<li>Contact us</li>
					<li>About us</li>
					<li>FAQ</li>
				</ul>
			</nav>

			<Hero setCategory={setCategory} />
			<hr />
		</div>
	);
};

export default Header;
