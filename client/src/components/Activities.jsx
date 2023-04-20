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

const labels = ["Week 1", "Week 2", "Week 3", "Week 4"];

function Activities() {
	const [dataset, setDataset] = useState([]);
	useEffect(() => {
		fetchChartData();
	}, []);

	const data = {
		labels,
		datasets: dataset,
	};

	function fetchChartData() {
		fetch(url + "/chartData")
			.then((res) => res.json())
			.then((chartData) => {
				setDataset(chartData);
			});
	}
	return (
		<div className="mb-10 rounded-3xl bg-[#FFFFFF] p-10 pt-[30px]">
			<h3 className="text-lg font-bold">Activities</h3>
			<Line options={options} data={data} />
		</div>
	);
}

export default Activities;
