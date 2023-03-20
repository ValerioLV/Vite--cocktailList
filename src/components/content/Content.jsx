import "./index.scss";
import { useState, useEffect } from "react";
import { GET } from "../../utils/get";
import { ingrListCreate } from "../../utils/func";
import Card from "../card";

const Content = ({ category }) => {
	const [drinkList, setDrinkList] = useState([]);

	useEffect(() => {
		GET("/search.php?f=c").then(({ drinks }) => {
			setDrinkList(() => drinks);
		});
	}, []);

	const listFilter = (list, type, value) =>
		list.filter((drink) => drink[type] == value);

	const listData = listFilter(drinkList, "strCategory", category);

	useEffect(() => {
		ingrListCreate(listData);
	});

	return (
		<div className="Content">
			{listData.map((drink) => (
				<Card data={drink} />
			))}
		</div>
	);
};

export default Content;
