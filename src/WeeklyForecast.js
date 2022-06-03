import React from "react";
import "./WeeklyForecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeeklyForecast() {
	let apiKey = "d8fe934ca304760817a770ff2bea2019";
	let latitude = "52.52";
	let longitude = "13.4050";
	let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

	function getForecast(response) {
		console.log(response.data);
	}

	axios.get(apiURL).then(getForecast);

	return (
		<div className="WeeklyForecast">
			<div className="row mt-3 mb-3">
				<div className="col">
					<p>Sat 04</p>
					<h5>19°</h5>
					<WeatherIcon code="02n" />
				</div>
			</div>
		</div>
	);
}
