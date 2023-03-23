import { useEffect, useState } from "react";
import { GET } from "../../utils/get";
import styles from "./index.module.scss";

const Book = ({ setBookVisible, setPopupSettings }) => {
	const [bookName, setBookName] = useState("");
	const [bookDate, setBookDate] = useState("");
	const [bookDrink, setBookDrink] = useState("");
	const [drinkList, setDrinkList] = useState([]);
	useEffect(() => {
		GET("/search.php?f=c").then(({ drinks }) => {
			setDrinkList((prev) => [...prev, drinks]);
		});
	}, []);
	console.log(drinkList);

	const onInputName = (e) => {
		setBookName(e.target.value);
	};

	const onInputDate = (e) => {
		setBookDate(e.target.value);
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

	return (
		<div className={styles.Book}>
			<div className={styles.overlay}></div>
			<div className={styles.bookContent}>
				<button onClick={() => setBookVisible(false)}>x</button>
				<form
					className={styles.form}
					onSubmit={onHandleSubmit}>
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
					<input
						type="submit"
						value="Prenota"
					/>
				</form>
			</div>
		</div>
	);
};

export default Book;
