import styles from "./index.module.scss";

const Card = ({ data, setModalSettings }) => {
	// const onHandleImgClick = () => {
	// 	setModalSettings((prev) => (
	// 		console.log()
	// 		{ ...prev, isVisible: true, modalData: data }));
	// };

	return (
		<div className={styles.Card}>
			<h3>{data.strDrink}</h3>
			<img
				src={data.strDrinkThumb}
				alt={data.strDrink}
				// onClick={() => onHandleImgClick()}
			/>
			<div className={styles.details}>
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
		</div>
	);
};

export default Card;
