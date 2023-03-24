import styled from "styled-components";

const HeroWrapper = styled.div``;

const HeroTitle = styled.h1`
	text-align: center;
`;

const HeroHr = styled.hr`
	width: 95%;
	border-bottom: 1px solid $secondary-color;
`;

const HeroFiltersList = styled.ul`
	padding: 0;
	list-style: none;
	display: flex;
	justify-content: space-evenly;

	& li {
		padding: 2px;
		border-radius: 8px;

		&:hover {
			transition: all 0.5s;
			background-color: #fff;
			cursor: pointer;
		}
	}
`;

const Hero = ({ setCategory }) => {
	const onHandleClick = (type) => {
		setCategory(type);
	};

	return (
		<HeroWrapper>
			<HeroTitle>Vite Drinks</HeroTitle>
			<HeroHr />
			<HeroFiltersList>
				<li onClick={() => onHandleClick("Cocktail")}>Cocktail</li>
				<li onClick={() => onHandleClick("Ordinary Drink")}>Ordinary Drink</li>
				<li onClick={() => onHandleClick("Shot")}>Shot</li>
				<li onClick={() => onHandleClick("Shake")}>Shake</li>
				<li onClick={() => onHandleClick("Homemade Liqueur")}>
					Homemade Liqueur
				</li>
				<li onClick={() => onHandleClick("Soft Drink")}>Soft Drink</li>
			</HeroFiltersList>
		</HeroWrapper>
	);
};

export default Hero;
