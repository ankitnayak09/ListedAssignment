import React from "react";
import NotificationIcon from "../assets/Notification_icon.png";
import SearchIcon from "../assets/Search icon.png";
function Dashboard_Header() {
	return (
		<div className="mb-10 flex flex-col items-center justify-between lg:flex-row">
			<h2 className="text-2xl font-bold">Dashboard</h2>
			<div className="flex items-center gap-4">
				<div className="relative">
					<input
						type="text"
						name=""
						id=""
						className="rounded-[10px] bg-white px-4 py-2 pr-12"
						placeholder="Search..."
					/>
					<img
						src={SearchIcon}
						alt="Icon: Search"
						className="absolute right-4 top-[8px] h-6 w-6 object-contain"
					/>
				</div>
				<img
					src={NotificationIcon}
					alt="Icon: Notification"
					className="h-6 w-6 object-contain"
				/>
				<img
					src="https://xsgames.co/randomusers/avatar.php?g=male"
					alt="Random User Avatar"
					className="h-6 w-6 rounded-full object-contain"
				/>
			</div>
		</div>
	);
}

export default Dashboard_Header;
