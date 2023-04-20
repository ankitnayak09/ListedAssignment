import React, { useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Data } from "../utils/Data";
import PieChart from "./PieChart.jsx";

Chart.register(CategoryScale);

function TopProducts() {
	const [chartData, setChartData] = useState({
		// labels: Data.map((data) => data.title),
		datasets: [
			{
				// label: "Users Gained ",
				data: Data.map((data) => data.sale),
				backgroundColor: ["#98D89E", "#F6DC7D", "#EE8484"],
				// borderColor: "black",
				// borderWidth: 2,
			},
		],
	});

	return (
		<div className="w-full grow rounded-3xl bg-[#FFFFFF] pb-10 pl-10 pr-10 pt-[30px] lg:w-[calc(50%-20px)]">
			<div className="flex items-center justify-between">
				<h3 className="text-lg font-bold">Top products</h3>
				{/* TODO: Custom Dropdown */}
				<div className="text-xs text-[#858585]">May-June 2021</div>
			</div>
			<div className="flex items-stretch justify-start">
				<PieChart chartData={chartData} />
				<div>
					<ul className="flex h-full flex-col justify-between">
						<li className="relative">
							{" "}
							<span className="absolute top-1/4 h-4 w-4 -translate-y-1/2 rounded-full bg-[#98D89E]"></span>
							<p className="ml-6">
								<span className="font-bold">Basic Tees</span>
								<br />
								<span className="text-[#858585]">55%</span>
							</p>
						</li>
						<li className="relative">
							{" "}
							<span className="absolute top-1/4 h-4 w-4 -translate-y-1/2 rounded-full bg-[#F6DC7D]"></span>
							<p className="ml-6">
								<span className="font-bold">
									Custom Short Pants
								</span>
								<br />
								<span className="text-[#858585]">31%</span>
							</p>
						</li>
						<li className="relative">
							{" "}
							<span className="absolute top-1/4 h-4 w-4 -translate-y-1/2 rounded-full bg-[#EE8484]"></span>
							<p className="ml-6">
								<span className="font-bold">Super Hoodies</span>
								<br />
								<span className="text-[#858585]">14%</span>
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default TopProducts;
