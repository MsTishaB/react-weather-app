import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherData(props) {
	return (
		<div className="weather-info">
			<div className="row header">
				<div className="col-8">
					<h1 className="mt-3 mb-3">{props.data.city} Weather Info</h1>
				</div>
				<div className="col-4">
					<h4 className="date mt-3 mb-3">
						<FormattedDate date={props.data.date} />
					</h4>
				</div>
			</div>
			<div className="row">
				<div className="col-8">
					<div className="row">
						{" "}
						<div className="col-3 ">
							<div className="float-right mt-2">
								<WeatherIcon
									code={props.data.icon}
									alt={props.data.description}
								/>
							</div>
						</div>
						<div className="col-9">
							<WeatherTemperature celsius={props.data.temperature} />
						</div>
					</div>
					<div className="row">
						<div className="col-3"></div>
						<div className="col-9">
							<h3 className="text-capitalize description">
								{props.data.description}
							</h3>
						</div>
					</div>
				</div>

				<div className="col-4">
					<div className="row">
						<p className="mt-3 border-bottom">
							Feels Like {props.data.feels_like}°
						</p>
					</div>
					<div className="row">
						<p className="border-bottom ">Humidity {props.data.humidity}%</p>
					</div>
					<div className="row">
						<p className="border-bottom">Wind {props.data.wind}km/h</p>
					</div>
				</div>
			</div>
		</div>
	);
}
