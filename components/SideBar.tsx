import Image from "next/image";
import React from "react";
import { AiOutlineVideoCamera, AiFillCamera } from "react-icons/ai";
import { BsCameraReels } from "react-icons/bs";
import user1 from "../public/assets/userIcons/userIcon1.jpeg";
import user2 from "../public/assets/userIcons/userIcon2.png";
import user3 from "../public/assets/userIcons/userIcon3.png";
import user4 from "../public/assets/userIcons/userIcon4.png";
import user5 from "../public/assets/userIcons/userIcon5.jpeg";
import user6 from "../public/assets/userIcons/userIcon6.png";
import user7 from "../public/assets/userIcons/userIcon7.png";
import user8 from "../public/assets/userIcons/userIcon8.png";
import user9 from "../public/assets/userIcons/userIcon9.png";
import user10 from "../public/assets/userIcons/userIcon10.png";
import user11 from "../public/assets/userIcons/userIcon11.jpeg";
import user12 from "../public/assets/userIcons/userIcon12.jpg";
import user13 from "../public/assets/userIcons/userIcon13.png";
import { SideBarItems } from "./SideBarItems";

export const SideBar = () => {
	return (
		<div className="absolute top-0 left-0 h-screen w-12 bg-[#18181b] p-2 lg:w-[15rem]">
			<div className="flex flex-col items-center bg-[#18181b] pt-12">
				<div>
					<AiOutlineVideoCamera
						size={25}
						className="mb-5 block text-gray-400 lg:hidden"
					/>
					<h1 className="text-md mb-5 hidden font-bold uppercase lg:block ">
						Recommended Channel
					</h1>
				</div>
				<SideBarItems
					img={user1}
					userName="xQc"
					game="Overwatch 2"
					viewers="71.3K"
				/>
				<SideBarItems
					img={user2}
					userName="Fextralife"
					game="Overwatch 2"
					viewers="6.6K"
				/>
				<SideBarItems
					img={user3}
					userName="lotyler"
					game="Leagues Of Legend"
					viewers="12.8K"
				/>
				<SideBarItems
					img={user4}
					userName="Riio10"
					game="FIFA 23"
					viewers="3.1K"
				/>
				<SideBarItems
					img={user5}
					userName="Amouranth"
					game="Overwatch 2"
					viewers="8.1K"
				/>
				<SideBarItems
					img={user6}
					userName="NecTronN90"
					game="Tom Cl..."
					viewers="1.2K"
				/>
				<SideBarItems
					img={user7}
					userName="dharfahad"
					game="Just Chatting"
					viewers="2.1K"
				/>
				<SideBarItems
					img={user8}
					userName="FoKa"
					game="Sea of Thieves"
					viewers="4.1K"
				/>
				<SideBarItems
					img={user9}
					userName="summit1g"
					game="Overwatch 2"
					viewers="4.1K"
				/>
				<SideBarItems
					img={user10}
					userName="Qays"
					game="Valorant"
					viewers="89.3K"
				/>
				<div className="mt-3">
					<BsCameraReels
						size={25}
						className="mb-5 block font-bold text-gray-400 lg:hidden"
					/>
					<h1 className="text-md mb-5 hidden font-bold uppercase lg:block ">
						Top Channel
					</h1>
				</div>
				<SideBarItems
					img={user11}
					userName="ProZd"
					game="Valorant"
					viewers="25.3K"
				/>
				<SideBarItems
					img={user12}
					userName="Cdawg"
					game="Call of Duty"
					viewers="71.3K"
				/>
				<SideBarItems
					img={user13}
					userName="Felix"
					game="Subway Surface"
					viewers="11.3K"
				/>
			</div>
		</div>
	);
};
