import React, { useState, useEffect } from "react";
import "./WeeklyForecast.css";

import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeeklyForecast(props) {
	const [loaded, setLoaded] = useState(false);
	const [forecastData, setForecastData] = useState(null);

	function getForecast(response) {
		setForecastData(response.data.daily);
		setLoaded(true);
	}

	function load() {
		let apiKey = "d8fe934ca304760817a770ff2bea2019";
		let latitude = props.coordinates.lat;
		let longitude = props.coordinates.lon;
		let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

		axios.get(apiURL).then(getForecast);
	}

	useEffect(() => {
		setLoaded(false);
	}, [props.coordinates]);

	if (loaded) {
		return (
			<div className="WeeklyForecast">
				<div className="row mt-3 mb-3">
					{forecastData.map(function (dailyForecast, index) {
						if (index < 5) {
							return (
								<div className="col" key={index}>
									<WeatherForecastDay forecastData={dailyForecast} />
								</div>
							);
						} else {
							return null;
						}
					})}
				</div>
			</div>
		);
	} else {
		load();
		return "Null";
	}
}
