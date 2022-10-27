import React, { FC } from "react";
import Image from "next/image";
import { CategoryItemsProps } from "../interface/Interface";

export const CategoryItem: FC<CategoryItemsProps> = ({
	img,
	game,
	viewers,
	tag1,
	tag2,
	tag3,
}) => {
	return (
		<div className="flex flex-col justify-center py-4">
			<Image
				src={img}
				alt="/"
				className="rounded-lg border-purple-600 duration-300 hover:translate-x-1 hover:-translate-y-1 hover:border-b-8 hover:border-l-8"
			/>
			<h1 className="text-sm">{game}</h1>
			<h1 className="text-sm text-gray-400">{viewers}</h1>

			<div className="flex">
				<span className=" mt-1 mr-1 rounded-lg bg-[#323234] px-1 text-sm text-[#b3b3b3] ">
					{tag1}
				</span>

				<p className="mt-1 mr-1 rounded-lg bg-[#323234] px-1 text-sm text-[#b3b3b3] ">
					{tag2}
				</p>
				<p className=" mt-1 rounded-lg bg-[#323234] px-1 text-sm text-[#b3b3b3]">
					{tag3}
				</p>
			</div>
		</div>
	);
};
