import "./App.css";
import { useState } from "react";
import Header from "./components/header";
import Content from "./components/content";

function App() {
	const [category, setCategory] = useState("Cocktail");

	return (
		<div className="App">
			<Header setCategory={setCategory} />
			<Content category={category} />
		</div>
	);
}

export default App;
