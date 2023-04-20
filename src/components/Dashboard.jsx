import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

function Dashboard() {
	return (
		<div className="flex min-h-screen bg-[#DDDDDD] p-10">
			<Sidebar />
			<MainContent />
		</div>
	);
}

export default Dashboard;
