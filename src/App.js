import "./App.css";
import Weather from "./Weather";

function App() {
	return (
		<div className="App">
			<Weather defaultCity="London" />
			<footer>
				This project was coded by Tisha Brown and is{" "}
				<a href="/">open sourced on GitHub</a>
			</footer>
		</div>
	);
}

export default App;
