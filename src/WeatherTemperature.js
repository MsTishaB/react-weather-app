import React, { useState } from "react";

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
				<div className="col-6">
					<h2 className="current-temp">{props.celsius}°C </h2>
				</div>
				<div className="col-6 mt-3">
					<span className="temp-unit">
						<a onClick={convertToMetric} href="/">
							C
						</a>{" "}
						|{" "}
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
				<div className="col-6">
					<h2 className="current-temp">
						{Math.round(props.celsius * (3 / 2) + 32.2)}°F{" "}
					</h2>
				</div>
				<div className="col-6 mt-3">
					<span className="temp-unit">
						<a href="/">C</a> |{" "}
						<a onClick={convertToImperial} href="/">
							F
						</a>
					</span>
				</div>
			</div>
		);
	}
}
