import styles from "./index.module.scss";
import ingrListCreate from "../../utils/func";

const Card = ({ data, setModalSettings }) => {
	const onHandleImgClick = () => {
		setModalSettings((prev) => ({ ...prev, isVisible: true, modalData: data }));
	};

	const ingredientList = () => ingrListCreate(data);

	return (
		<div className={styles.Card}>
			<h3>{data.strDrink}</h3>
			<img
				src={data.strDrinkThumb}
				alt={data.strDrink}
				onClick={onHandleImgClick}
			/>
			<div className={styles.details}>
				<ul>
					{ingredientList().map((ingredient) => (
						<li>{ingredient}</li>
					))}
				</ul>
				<p>{data.strInstructionsIT}</p>
			</div>
		</div>
	);
};

export default Card;
