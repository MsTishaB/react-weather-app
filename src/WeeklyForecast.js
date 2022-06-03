import React from "react";
import "./WeeklyForecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeeklyForecast(props) {
	let apiKey = "d8fe934ca304760817a770ff2bea2019";
	let latitude = props.coordinates.lat;
	let longitude = props.coordinates.lon;
	let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

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
