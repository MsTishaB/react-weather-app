import React, { useState } from "react";
import "./Weather.css";

import WeatherData from "./WeatherData";
import axios from "axios";

export default function Weather(props) {
	const [weatherInfo, setWeatherInfo] = useState({ ready: false });
	const [city, setCity] = useState("Berlin");

	function handleResponse(response) {
		console.log(new Date(response.data.sys.sunrise * 1000));
		setWeatherInfo({
			ready: true,
			city: response.data.name,
			temperature: Math.round(response.data.main.temp),
			humidity: response.data.main.humidity,
			description: response.data.weather[0].description,
			date: new Date(response.data.dt * 1000),
			sunrise: "4 am",
			sunset: "10:20pm",

			wind: Math.round(response.data.wind.speed),
			iconUrl: "https://www.svgrepo.com/show/212029/rain-weather.svg",
			feels_like: Math.round(response.data.main.feels_like),
		});
	}

	function search() {
		let apiKey = "d8fe934ca304760817a770ff2bea2019";

		let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

		axios.get(url).then(handleResponse);
	}

	function updateCity(event) {
		setCity(event.target.value);

		console.log(city);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	if (weatherInfo.ready) {
		return (
			<div className="Weather">
				<div>
					<form onSubmit={handleSubmit}>
						<div className="row mb-5">
							<div className="col-10">
								<input
									onChange={updateCity}
									type="text"
									className="form-control"
									placeholder="Enter city to find weather information"
								></input>
							</div>
							<div className="col-2">
								<button type="submit" className="btn btn-primary">
									Search
								</button>
							</div>
						</div>
					</form>
					<WeatherData data={weatherInfo} />
				</div>
			</div>
		);
	} else {
		search();

		return <div>Loading...</div>;
	}
}
