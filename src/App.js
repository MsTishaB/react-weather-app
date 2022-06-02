import "./App.css";
import Weather from "./Weather";

function App() {
	return (
		<div className="App">
			<Weather />
			<footer>
				This project was coded by Tisha Brown and is{" "}
				<a href="https://github.com/MsTishaB/react-weather-app">
					open sourced on GitHub
				</a>{" "}
				and{" "}
				<a href="https://playful-dusk-2dd178.netlify.app/">hosted on Netlify</a>
			</footer>
		</div>
	);
}

export default App;
