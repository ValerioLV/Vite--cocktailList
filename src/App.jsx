import "./App.scss";
import { useState, useEffect } from "react";
import { GET } from "./utils/get";
import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";
import DrinkModal from "./components/drinkModal";
import Book from "./components/book";
import Popup from "./components/popup";

function App() {
	const [category, setCategory] = useState("Cocktail");
	const [drinkList, setDrinkList] = useState([]);

	const [bookVisible, setBookVisible] = useState(false);
	const [popupSettings, setPopupSettings] = useState({
		isVisible: false,
		popupData: {},
	});
	const [modalSettings, setModalSettings] = useState({
		isVisible: false,
		modalData: {},
	});

	useEffect(() => {
		GET("/search.php?f=c").then(({ drinks }) => {
			setDrinkList(() => drinks);
		});
	}, []);

	return (
		<div className="App">
			<Header
				setCategory={setCategory}
				setBookVisible={setBookVisible}
			/>

			{modalSettings.isVisible ? (
				<DrinkModal
					modalSettings={modalSettings}
					setModalSettings={setModalSettings}
				/>
			) : (
				<Content
					category={category}
					setModalSettings={setModalSettings}
					drinkList={drinkList}
				/>
			)}
			{bookVisible && (
				<Book
					setBookVisible={setBookVisible}
					setPopupSettings={setPopupSettings}
					drinkList={drinkList}
				/>
			)}
			{popupSettings.isVisible && (
				<Popup
					setPopupSettings={setPopupSettings}
					popupSettings={popupSettings}
				/>
			)}
			<Footer />
		</div>
	);
}

export default App;
