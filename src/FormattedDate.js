import React from "react";

export default function FormattedDate(props) {
	console.log(props.date.getDay());
	let hours = props.date.getHours();
	let minutes = props.date.getMinutes();
	let day = props.date.getDay();
	let days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	if (hours < 10) {
		hours = `0${hours}`;
	}

	if (minutes < 10) {
		minutes = `0${minutes}`;
	}

	let time = `Last updated ${days[day]} ${hours}:${minutes}`;
	return <div className="FormattedDate">{time}</div>;
}
