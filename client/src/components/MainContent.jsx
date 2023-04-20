import React from "react";
import Dashboard_Header from "./Dashboard_Header";
import Stats from "./Stats";
import TopProducts from "./TopProducts";
import TodaysSchedules from "./TodaysSchedules";
import Activities from "./Activities";

function MainContent() {
	return (
		<div className="w-3/4 grow">
			<Dashboard_Header />
			<Stats />
			<Activities />
			<div className="flex flex-col justify-between gap-10 lg:flex-row">
				<TopProducts />
				<TodaysSchedules />
			</div>
		</div>
	);
}

export default MainContent;
