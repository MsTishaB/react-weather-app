import React from "react";

export default function FormattedDate(props) {
	function dateFormat() {
		let hours = props.date.getHours();
		let minutes = props.date.getMinutes();
		let day = props.date.getDay();
		let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

		if (hours < 10) {
			hours = `0${hours}`;
		}

		if (minutes < 10) {
			minutes = `0${minutes}`;
		}

		return `Last updated ${days[day]} ${hours}:${minutes}`;
	}

	return <div className="FormattedDate">{dateFormat()}</div>;
}
