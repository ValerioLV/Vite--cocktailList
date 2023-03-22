import "./App.css";
import { useState } from "react";
import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";
import DrinkModal from "./components/drinkModal";

function App() {
	const [category, setCategory] = useState("Cocktail");
	const [modalSettings, setModalSettings] = useState({
		isVisible: false,
		modalData: {},
	});

	return (
		<div className="App">
			<Header setCategory={setCategory} />

			{modalSettings.isVisible ? (
				<DrinkModal
					modalSettings={modalSettings}
					setModalSettings={setModalSettings}
				/>
			) : (
				<Content
					category={category}
					setModalSettings={setModalSettings}
				/>
			)}
			<Footer />
		</div>
	);
}

export default App;
