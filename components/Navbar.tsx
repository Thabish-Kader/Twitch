import Image from "next/image";
import React from "react";
import twitch from "../public/assets/twitch-icon.svg";
import { GoSearch } from "react-icons/go";
import { FaUserAlt } from "react-icons/fa";

export const Navbar = () => {
	return (
		<nav className="fixed top-0 left-0 flex h-20 w-full items-center justify-between bg-[#18181b] p-5">
			{/* Right Side */}
			<div className="flex items-center">
				<Image className="" src={twitch} alt="/twitch" />
				<p className="text-md cursor-pointer p-2 font-bold text-white hover:text-purple-600 sm:text-xl">
					Browse
				</p>
			</div>

			{/* middle */}
			<div className="hidden max-w-[30rem] flex-grow items-center rounded-lg bg-[#3a3a3d] p-2 hover:border-2  hover:border-purple-500 hover:bg-black sm:flex">
				<input
					type="text"
					placeholder="Search"
					className="h-full w-full rounded-lg bg-transparent  text-gray-300 focus:outline-none  "
				/>

				<GoSearch className=" pr-1 text-white" size={30} />
			</div>
			{/* left side */}
			<div className="flex items-center">
				<button className="m-3 w-20 rounded-lg bg-[#3a3a3d] p-2 font-bold hover:bg-gray-500">
					Log In
				</button>
				<button className="w-20 rounded-lg bg-[#9147ff] p-2 font-bold hover:bg-purple-700">
					Sign Up
				</button>
				<div className="ml-1 flex items-center rounded-lg hover:bg-gray-600">
					<FaUserAlt
						className="m-3 cursor-pointer text-white"
						size={30}
					/>
				</div>
			</div>
		</nav>
	);
};
