import React from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
	return (
		<div className=" row WeatherTemperature">
			<div className="col-5">
				<h2 className="current-temp">{props.celsius}° </h2>
			</div>
			<div className="col-7">
				<p className="temp-unit">C</p>
			</div>
		</div>
	);
}
