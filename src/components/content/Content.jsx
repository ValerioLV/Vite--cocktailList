import styles from "./index.module.scss";
import { useState, useEffect } from "react";
import { GET } from "../../utils/get";
import Card from "../card";

const Content = ({ drinkList, category, setModalSettings }) => {
	const listFilter = (list, type, value) =>
		list.filter((drink) => drink[type] == value);

	const listData = listFilter(drinkList, "strCategory", category);

	return (
		<div className={styles.Content}>
			<h1>{category}</h1>
			<div className={styles.drinkList}>
				{listData.map((drink) => (
					<Card
						data={drink}
						setModalSettings={setModalSettings}
						key={Math.random()}
					/>
				))}
			</div>
		</div>
	);
};

export default Content;
