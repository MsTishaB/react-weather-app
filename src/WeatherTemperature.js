import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
	const [unit, setUnit] = useState("metric");

	function convertToImperial(event) {
		event.preventDefault();
		setUnit("imperial");
	}

	function convertToMetric(event) {
		event.preventDefault();
		setUnit("metric");
	}

	if (unit === "metric") {
		return (
			<div className=" row WeatherTemperature">
				<div className="col-5">
					<h2 className="current-temp">{props.celsius}° </h2>
				</div>
				<div className="col-7 mt-3">
					<span className="temp-unit">
						C |{" "}
						<a onClick={convertToImperial} href="/">
							F
						</a>
					</span>
				</div>
			</div>
		);
	} else {
		return (
			<div className=" row WeatherTemperature">
				<div className="col-5">
					<h2 className="current-temp mt-2">
						{Math.round(props.celsius * (9 / 5) + 32.2)}°{" "}
					</h2>
				</div>
				<div className="col-7 mt-3">
					<span className="temp-unit">
						<a onClick={convertToMetric} href="/">
							C
						</a>{" "}
						| F
					</span>
				</div>
			</div>
		);
	}
}
