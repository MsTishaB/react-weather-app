import React from "react";
import "./Weather.css";

export default function Weather() {
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
					<h1>London</h1>
				</div>
				<div className="col-9">
					<h4>As of 10:48 pm</h4>
				</div>
			</div>
			<div className="row">
				<div className="col-6">
					<h2>
						8° <a href="/">C</a> | <a href="/">F</a>
					</h2>
					<h3>Partly Cloudy</h3>
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
				<h4> Weather Today in London</h4>
				<div className="col-6">
					<h2>10°</h2>
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
				<div className="col-3">84 %</div>
				<div className="col-3">
					<img
						src="http://cdn.onlinewebfonts.com/svg/img_540230.png"
						alt="wind icon"
					/>{" "}
					Wind
					<div className="col-3">10mph</div>
				</div>
			</div>
		</div>
	);
}
