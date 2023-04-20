import React, { useState } from "react";

// Icons
import RevenueIcon from "../assets/TotalRevenueIcon.png";
import TransactionIcon from "../assets/TotalTransactionsIcon.png";
import LikesIcon from "../assets/TotalLikesIcon.png";
import UsersIcon from "../assets/TotalUsersIcon.png";

function StatCard({ name, icon, value, bgColor }) {
	return (
		// TODO: Color Not Rendering
		<div
			className={`relative w-full  min-w-[200px] rounded-3xl px-6 py-5 sm:w-[20%]`}
			style={{ backgroundColor: bgColor }}
		>
			<img
				src={icon}
				className="2-5 absolute right-5 top-5 h-5 object-contain"
			/>
			<div className="mt-10">{name}</div>
			<div className="text-2xl font-bold">{value}</div>
		</div>
	);
}

function Stats() {
	const [statsList, setStatsList] = useState([
		{
			name: "Revenues",
			icon: RevenueIcon,
			value: "$2,129,430",
			bgColor: "#DDEFE0",
		},
		{
			name: "Transactions",
			icon: TransactionIcon,
			value: "1,520",
			bgColor: "#F4ECDD",
		},
		{ name: "Likes", icon: LikesIcon, value: "9,721", bgColor: "#EFDADA" },
		{ name: "Users", icon: UsersIcon, value: "892", bgColor: "#DEE0EF" },
	]);
	return (
		<div className="mb-10 flex flex-wrap content-start items-center justify-between gap-10">
			{statsList.map((item) => (
				<StatCard
					// name={item.name}
					// icon={item.icon}
					// value={item.value}
					// bgColor={item.bgColor}
					{...item}
				/>
			))}
		</div>
	);
}

export default Stats;
