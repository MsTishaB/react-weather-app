import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherData(props) {
	return (
		<div className="weather-info">
			<div className="row header">
				<div className="col-1">
					<h1>{props.data.city}</h1>
				</div>
				<div className="col-11">
					<h4 className="date">
						<FormattedDate date={props.data.date} />
					</h4>
				</div>
			</div>
			<div className="row">
				<div className="col-6">
					<h2 className="current-temp">
						{props.data.temperature}°{" "}
						<span className="temp-unit">
							<a href="/">C</a> | <a href="/">F</a>
						</span>
					</h2>

					<h3 className="text-capitalize description">
						{props.data.description}
					</h3>
				</div>
				<div className="col-6 ">
					<div className="float-right">
						<WeatherIcon code={props.data.icon} alt={props.data.description} />
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-6">
					<h2 className="feels-like">{props.data.feels_like}°</h2>
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
					<span>Humidity {props.data.humidity} %</span>
				</div>

				<div className="col-6">
					<img
						src="http://cdn.onlinewebfonts.com/svg/img_540230.png"
						alt="wind icon"
						className="weather-detail-icons"
					/>{" "}
					<span>Wind {props.data.wind}km/h</span>
				</div>
			</div>
		</div>
	);
}
