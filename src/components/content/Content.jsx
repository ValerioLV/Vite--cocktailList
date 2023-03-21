import "./index.scss";
import { useState, useEffect } from "react";
import { GET } from "../../utils/get";
import { ingrListCreate } from "../../utils/func";
import Card from "../card";

const Content = ({ category, setModalSettings }) => {
	const [drinkList, setDrinkList] = useState([]);

	useEffect(() => {
		GET("/search.php?f=c").then(({ drinks }) => {
			setDrinkList(() => drinks);
		});
	}, []);

	const listFilter = (list, type, value) =>
		list.filter((drink) => drink[type] == value);

	const listData = listFilter(drinkList, "strCategory", category);

	// useEffect(() => {
	// 	ingrListCreate(listData);
	// });

	return (
		<div className="Content">
			<h1>{category}</h1>
			<div className="DrinkList">
				{listData.map((drink) => (
					<Card
						data={drink}
						setModalSettings={setModalSettings}
					/>
				))}
			</div>
		</div>
	);
};

export default Content;
