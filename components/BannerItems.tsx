import Image from "next/image";
import React, { FC } from "react";
import { BannerItemsProps } from "../interface/Interface";

export const BannerItems: FC<BannerItemsProps> = ({
	img,
	userImg,
	game,
	userName,
	tag1,
	tag2,
	tag3,
	title,
}) => {
	return (
		<div className="flex flex-col items-center justify-center">
			<Image
				src={img}
				alt="/"
				className="rounded-lg border-purple-600 duration-300 hover:translate-x-1 hover:-translate-y-1 hover:border-b-8 hover:border-l-8"
			/>
			<div className="flex w-full items-center justify-start pt-1 ">
				<Image
					src={userImg}
					alt="/"
					height="40"
					width="40"
					className="mr-2 rounded-full "
				/>
				<div className="flex flex-col justify-start">
					<h1 className="text-sm">{title}</h1>
					<h1 className="text-sm text-gray-400">{userName}</h1>
					<h1 className="text-sm text-gray-400">{game}</h1>
					<div className="grid w-full justify-between pt-2 sm:flex">
						<span className="mx-auto mt-1 rounded-lg bg-[#323234] px-1 text-sm text-[#b3b3b3] sm:mr-2">
							{tag1}
						</span>

						<p className="mx-auto mt-1 rounded-lg bg-[#323234] px-1 text-sm text-[#b3b3b3] sm:mr-2">
							{tag2}
						</p>
						<p className="mx-auto mt-1 rounded-lg bg-[#323234] px-1 text-sm text-[#b3b3b3]">
							{tag3}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
