import "./App.css";
import { useState } from "react";
import Header from "./components/header";
import Content from "./components/content";
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
			<Content
				category={category}
				setModalSettings={setModalSettings}
			/>
			{modalSettings.isVisible ? <DrinkModal /> : null}
		</div>
	);
}

export default App;
