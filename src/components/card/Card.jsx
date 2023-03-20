import "./index.scss";

const Card = ({ data }) => {
	return (
		<div className="Card">
			<h3>{data.strDrink}</h3>
			<img
				src={data.strDrinkThumb}
				alt={data.strDrink}
			/>
			<ul>
				{data.strIngredient1 ? <li>{data.strIngredient1}</li> : null}
				{data.strIngredient2 ? <li>{data.strIngredient2}</li> : null}
				{data.strIngredient3 ? <li>{data.strIngredient3}</li> : null}
				{data.strIngredient4 ? <li>{data.strIngredient4}</li> : null}
				{data.strIngredient5 ? <li>{data.strIngredient5}</li> : null}
				{data.strIngredient6 ? <li>{data.strIngredient6}</li> : null}
				{data.strIngredient7 ? <li>{data.strIngredient7}</li> : null}
				{data.strIngredient8 ? <li>{data.strIngredient8}</li> : null}
			</ul>
			<p>{data.strInstructionsIT}</p>
		</div>
	);
};

export default Card;
