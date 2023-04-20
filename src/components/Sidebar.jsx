import React, { useState } from "react";
import Dashboard from "./Dashboard";

// Icons
import DashboardIcon from "../assets/dashboard_icon.png";
import TransactionsIcon from "../assets/transaction_icon.png";
import ScheduleIcon from "../assets/schedule_icon.png";
import UsersIcon from "../assets/user_icon.png";
import SettingsIcon from "../assets/setting_icon.png";

function Sidebar() {
	const navItems = [
		{ name: "Dashboard", icon: DashboardIcon },
		{ name: "Transactions", icon: TransactionsIcon },
		{ name: "Schedules", icon: ScheduleIcon },
		{ name: "Users", icon: UsersIcon },
		{ name: "Settings", icon: SettingsIcon },
	];
	return (
		<div className="relative mr-10 hidden h-[calc(100vh-5rem)] min-w-[250px] grow rounded-[30px] bg-black px-12 py-16 text-white md:block">
			<h1 className="text-3xl font-bold">Board.</h1>

			<nav className="mt-16">
				<ul>
					{navItems.map((item) => (
						<li
							className="mb-4 flex h-5 w-5 items-center text-lg"
							key={item.name}
						>
							<img src={item.icon} alt="" />
							<span className="ml-5 text-lg">{item.name}</span>
						</li>
					))}
				</ul>
			</nav>

			<div className="absolute bottom-16 flex flex-col">
				<a href="#" className="text-sm">
					Help
				</a>
				<a href="#" className="mt-5 text-sm">
					Contact Us
				</a>
			</div>
		</div>
	);
}

export default Sidebar;
