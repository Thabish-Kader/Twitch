import Image from "next/image";
import React from "react";
import { BsDot } from "react-icons/bs";
import { SideBarItemsProps } from "../interface/Interface";

export const SideBarItems = ({
	img,
	userName,
	game,
	viewers,
}: SideBarItemsProps) => {
	return (
		<div className="mb-2 flex w-full items-center justify-between">
			<Image
				src={img}
				alt={userName as string}
				height="50"
				width="50"
				className="rounded-full"
			/>
			<div className="hidden w-full flex-col pl-2 text-sm lg:flex ">
				<h1 className="font-bold">{userName}</h1>
				<h1 className="font-bold text-gray-600">{game}</h1>
			</div>
			<div className=" hidden w-full items-center lg:flex ">
				<BsDot color="red" size={40} className="font-bold" />
				<h1 className="font-bold text-gray-300">{viewers}</h1>
			</div>
		</div>
	);
};
