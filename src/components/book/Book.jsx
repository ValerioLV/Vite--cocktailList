import { useState } from "react";

import styles from "./index.module.scss";

const Book = ({ drinkList, setBookVisible, setPopupSettings }) => {
	const [bookName, setBookName] = useState("");
	const [bookDate, setBookDate] = useState("");
	const [bookDrink, setBookDrink] = useState("");

	const onInputName = (e) => {
		setBookName(e.target.value);
	};

	const onInputDate = (e) => {
		setBookDate(e.target.value);
	};

	const onHandleDrinkInput = (e) => {
		setBookDrink(e.target.value);
	};

	const onHandleSubmit = (e) => {
		e.preventDefault();
		setPopupSettings((prev) => ({
			...prev,
			isVisible: true,
			popupData: { nome: bookName, date: bookDate, drink: bookDrink },
		}));
		setBookVisible(false);
	};

	const categories = drinkList.map((drink) => drink["strCategory"]);
	const categNoDupes = Array.from(new Set(categories));

	return (
		<div className={styles.Book}>
			<div className={styles.overlay}></div>
			<div className={styles.bookContent}>
				<button onClick={() => setBookVisible(false)}>x</button>
				<form
					className={styles.form}
					onSubmit={onHandleSubmit}>
					<div className={styles.textInput}>
						<input
							id="text"
							name="text"
							type="text"
							placeholder="Cognome"
							onChange={onInputName}
						/>
						<input
							id="date"
							name="date"
							type="date"
							onChange={onInputDate}
						/>
					</div>
					<div className={styles.btnInput}>
						{categNoDupes.map((category) => (
							<div>
								<h4>{category}</h4>
								<ul>
									{drinkList
										.filter((drink) => drink["strCategory"] == category)
										.map((drink) => (
											<input
												value={drink.strDrink}
												onClick={onHandleDrinkInput}
											/>
										))}
								</ul>
							</div>
						))}
					</div>
					<input
						type="submit"
						value="Prenota"
						className={styles.bookBtn}
					/>
				</form>
			</div>
		</div>
	);
};

export default Book;
