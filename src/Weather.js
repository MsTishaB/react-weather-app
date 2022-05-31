import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
	const [temperature, setTemperature] = useState(null);
	const [ready, setReady] = useState(false);
	const [weatherInfo, setWeatherInfo] = useState({});

	function handleResponse(response) {
		console.log(response.data);
		setTemperature(Math.round(response.data.main.temp));
		setReady(true);
		setWeatherInfo({
			city: response.data.name,
			temperature: Math.round(response.data.main.temp),
			humidity: response.data.main.humidity,
			description: response.data.weather[0].description,
			wind: Math.round(response.data.wind.speed),
			iconID: response.data.weather[0].icon,
			feels_like: Math.round(response.data.main.feels_like),
		});
	}

	if (ready) {
		return (
			<div className="Weather">
				<form>
					<div className="row">
						<div className="col-10">
							<input
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
				<div className="row ">
					<div className="col-3 .bg-secondary.bg-gradient">
						<h1>{weatherInfo.city}</h1>
					</div>
					<div className="col-9">
						<h4>As of 10:48 pm</h4>
					</div>
				</div>
				<div className="row">
					<div className="col-6">
						<h2>
							{weatherInfo.temperature}° <a href="/">C</a> | <a href="/">F</a>
						</h2>
						<h3>{weatherInfo.description}</h3>
					</div>
					<div className="col-6">
						<img
							src="https://www.svgrepo.com/show/212029/rain-weather.svg"
							alt="rainy weather icon"
							className="weather-icon"
						/>
					</div>
				</div>
				<div className="row">
					<h4> Weather Today in {weatherInfo.city}</h4>
					<div className="col-6">
						<h2>{weatherInfo.feels_like}°</h2>
						<p>Feels Like</p>
					</div>
					<div className="col-6">
						<img
							src="https://www.svgrepo.com/show/56930/sunset.svg"
							alt="sunrise and sunset icon"
							className="sunrise"
						/>
						<ul>
							<li>Sunrise 4:30 am </li>
							<li>Sunset 10:20pm</li>
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col-3">
						<img
							src="https://cdn.onlinewebfonts.com/svg/img_285841.svg"
							alt="humidity icon"
						/>{" "}
						Humidity
					</div>
					<div className="col-3">{weatherInfo.humidity} %</div>
					<div className="col-3">
						<img
							src="http://cdn.onlinewebfonts.com/svg/img_540230.png"
							alt="wind icon"
						/>{" "}
						Wind
						<div className="col-3">{weatherInfo.wind}km/h</div>
					</div>
				</div>
			</div>
		);
	} else {
		let apiKey = "d8fe934ca304760817a770ff2bea2019";
		let city = "New York";
		let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

		axios.get(url).then(handleResponse);

		return <div>Loading...</div>;
	}
}
