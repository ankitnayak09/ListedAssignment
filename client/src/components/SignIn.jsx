import React, { useContext } from "react";
import apple from "../assets/apple.png";
import google from "../assets/google.png";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

import { AppContext } from "../context/contextApi";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
	// const { userLoggedIn, setUserLoggedIn } = useContext(AppContext);

	const navigator = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		navigator("/dashboard");
	}

	return (
		<div className="flex h-screen justify-between">
			<div className="flex grow  items-center justify-center bg-black">
				{/* TODO: Change Font */}
				<h1 className="text-7xl font-bold text-white">Board.</h1>
			</div>
			<div className="flex grow items-center justify-center bg-[#F5F5F5]">
				<div>
					<h2 className="text-4xl font-bold">Sign In</h2>
					<p className="my-1 text-base">Sign in to your account</p>
					<div className="my-6 flex">
						<button className="mr-6 rounded-[10px] bg-white px-5 py-2 text-xs text-[#858585]">
							<img
								src={google}
								alt=""
								className="mr-2 inline-block h-4 w-4"
							/>
							Sign in with Google
						</button>
						<button className="flex items-center rounded-[10px] bg-white px-5 py-2 text-xs text-[#858585]">
							<img
								src={apple}
								alt=""
								className="mr-2 inline-block h-4 w-4"
							/>
							Sign in with Apple
						</button>
					</div>

					<div className="rounded-[20px] bg-white p-8">
						<form onSubmit={handleSubmit}>
							<div className="mb-5">
								<label htmlFor="email">Email address</label>
								<input
									type="email"
									name="email"
									id="email"
									className="block rounded-[10px] border bg-[#F5F5F5] px-4 py-2 focus:bg-[#EAEAEA]"
								/>
							</div>

							<div className="mb-5">
								<label htmlFor="password">Password</label>
								<input
									type="password"
									name="password"
									id="password"
									className="block rounded-[10px] border bg-[#F5F5F5] px-4 py-2 focus:bg-[#EAEAEA]"
								/>
							</div>
							<a
								href="#"
								className="mb-5 inline-block text-blue-600 visited:text-purple-600 hover:text-blue-800"
							>
								Forgot password?
							</a>
							<button
								type="submit"
								className="block w-full rounded-[10px] bg-black py-2 font-bold text-white"
							>
								Sign In
							</button>
						</form>
					</div>
					<div className="my-5 flex justify-center text-[#858585]">
						Don't have an account?
						<p className="ml-1 text-blue-600 visited:text-purple-600 hover:text-blue-800">
							Register here
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SignIn;
