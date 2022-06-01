import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function Weather(props) {
	const [weatherInfo, setWeatherInfo] = useState({ ready: false });

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

	if (weatherInfo.ready) {
		return (
			<div className="Weather">
				<div>
					<form>
						<div className="row mb-5">
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
					<div className="weather-info">
						<div className="row header">
							<div className="col-1">
								<h1>{weatherInfo.city}</h1>
							</div>
							<div className="col-11">
								<h4 className="date">
									<FormattedDate date={weatherInfo.date} />
								</h4>
							</div>
						</div>
						<div className="row">
							<div className="col-6">
								<h2 className="current-temp">
									{weatherInfo.temperature}°{" "}
									<span className="temp-unit">
										<a href="/">C</a> | <a href="/">F</a>
									</span>
								</h2>

								<h3 className="text-capitalize description">
									{weatherInfo.description}
								</h3>
							</div>
							<div className="col-6">
								<img
									src={weatherInfo.iconUrl}
									alt={weatherInfo.description}
									className="weather-icon"
								/>
							</div>
						</div>
						<div className="row">
							<div className="col-6">
								<h2 className="feels-like">{weatherInfo.feels_like}°</h2>
								<p className="feels-like-label">Feels Like</p>
							</div>
							<div className="col-6"></div>
						</div>
						<div className="row">
							<div className="col-6">
								<img
									src="https://cdn.onlinewebfonts.com/svg/img_285841.svg"
									alt="humidity icon"
									className="weather-detail-icons"
								/>{" "}
								<span>Humidity {weatherInfo.humidity} %</span>
							</div>

							<div className="col-6">
								<img
									src="http://cdn.onlinewebfonts.com/svg/img_540230.png"
									alt="wind icon"
									className="weather-detail-icons"
								/>{" "}
								<span>Wind {weatherInfo.wind}km/h</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		let apiKey = "d8fe934ca304760817a770ff2bea2019";

		let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

		axios.get(url).then(handleResponse);

		return <div>Loading...</div>;
	}
}
