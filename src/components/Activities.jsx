import React, { useEffect, useState } from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Data } from "../utils/Data";
import { url } from "../utils/serverUrl";
import { faker } from "@faker-js/faker";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	tension: 0.4,
};

function Activities() {

	const labels = ["Week 1", "Week 2", "Week 3", "Week 4"];

	const datasets = [
		{
			label: "Guest",
			data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
			borderColor: "rgb(255, 99, 132)",
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
		{
			label: "User",
			data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
			borderColor: "rgb(53, 162, 235)",
			backgroundColor: "rgba(53, 162, 235, 0.5)",
		},
	];

	const data = {
		labels,
		datasets
	}

	return (
		<div className="mb-10 rounded-3xl bg-[#FFFFFF] p-10 pt-[30px]">
			<h3 className="text-lg font-bold">Activities</h3>
			<Line options={options} data={data} />
		</div>
	);
}

export default Activities;
