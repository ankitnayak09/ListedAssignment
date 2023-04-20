import React from "react";

function ScheduleCard() {
	return <></>;
}

function TodaysSchedules() {
	return (
		<div className="w-full grow self-start rounded-3xl bg-[#FFFFFF] pb-10 pl-10 pr-10 pt-[30px] lg:w-[calc(50%-20px)]">
			<div className="flex items-center justify-between">
				<h3 className="text-lg font-bold">Today's Schedules</h3>
				{/* TODO: Custom Dropdown */}
				<div className="text-xs text-[#858585]">See All</div>
			</div>

			<div className="mt-[25px] border-l-4 border-[#9BDD7C] pl-4">
				<div className="text-sm font-bold text-[#666666]">
					Meeting with suppliers from Kuta Bali
				</div>
				<div className="text-sm text-[#999999]">
					14.00 - 15.00
					<br />
					at Sunset Road, Kuta, Bali
				</div>
			</div>

			<div className="mt-[25px] border-l-4 border-[#6972C3] pl-4">
				<div className="text-sm font-bold text-[#666666]">
					Check operation at Giga Factory 1
				</div>
				<div className="text-sm text-[#999999]">
					18.00 - 20.00
					<br />
					at Central Jakarta
				</div>
			</div>
		</div>
	);
}

export default TodaysSchedules;
