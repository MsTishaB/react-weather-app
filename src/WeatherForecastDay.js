import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
	let forecastDate = new Date(props.forecastData[1].dt * 1000);
	let day = forecastDate.getDay();
	let date = forecastDate.getDate();
	let maxTemp = Math.round(props.forecastData[1].temp.max);
	let minTemp = Math.round(props.forecastData[1].temp.min);

	let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	return (
		<div className="WeatherForecastDay">
			<p>
				{days[day]} {date}
			</p>
			<div className="max-temp mb-3">{maxTemp}°</div>
			<div className="min-temp mb-2"> {minTemp}°</div>
			<WeatherIcon code={props.forecastData[1].weather[0].icon} />
		</div>
	);
}
