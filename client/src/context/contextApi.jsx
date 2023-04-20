import React, { createContext, useState, useEffect } from "react";

// import { fetchDataFromApi } from "../utils/api";
export const Context = createContext();

export const AppContext = (props) => {
	const [loading, setLoading] = useState(false);
	const [mobileMenu, setMobileMenu] = useState(false);
	const [userLoggedIn, setUserLoggedIn] = useState(false);

	useEffect(() => {}, []);

	return (
		<Context.Provider
			value={{
				loading,
				setLoading,
				mobileMenu,
				setMobileMenu,
				userLoggedIn,
				setUserLoggedIn,
			}}
		>
			{props.children}
		</Context.Provider>
	);
};
