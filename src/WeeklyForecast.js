import React from "react";
import "./WeeklyForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeeklyForecast() {
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
