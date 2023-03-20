import "./index.scss";

const Hero = ({ setCategory }) => {
	const onHandleClick = (type) => {
		setCategory(type);
	};

	return (
		<div className="Hero">
			<h1>Cocktails</h1>
			<hr />
			<ul className="Hero__filter__list">
				<li onClick={() => onHandleClick("Cocktail")}>Cocktail</li>
				<li onClick={() => onHandleClick("Ordinary Drink")}>Ordinary Drink</li>
				<li onClick={() => onHandleClick("Shot")}>Shot</li>
				<li onClick={() => onHandleClick("Shake")}>Shake</li>
				<li onClick={() => onHandleClick("Homemade Liqueur")}>
					Homemade Liqueur
				</li>
				<li onClick={() => onHandleClick("Soft Drink")}>Soft Drink</li>
			</ul>
		</div>
	);
};

export default Hero;
