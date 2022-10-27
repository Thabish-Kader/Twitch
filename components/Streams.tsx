import Image from "next/image";
import React from "react";
import stream from "../public/assets/streamType/stream.svg";
import stream2 from "../public/assets/streamType/stream2.svg";
import stream3 from "../public/assets/streamType/stream3.svg";
import stream4 from "../public/assets/streamType/stream4.svg";
import stream5 from "../public/assets/streamType/stream5.svg";

export const Streams = () => {
	return (
		<section id="streams" className="my-5">
			{/* main container */}
			<div className="grid gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
				<div className="item-center relative flex justify-between rounded-lg bg-purple-600 p-2 px-1 hover:bg-purple-400">
					<h1 className="text-center text-2xl font-bold">Games</h1>
					<Image
						className="absolute top-[-10px] right-0"
						src={stream}
						alt="/type"
					/>
				</div>
				<div className="item-center relative flex justify-between rounded-lg bg-purple-600 p-2 px-1 hover:bg-purple-400">
					<h1 className="text-center text-2xl font-bold">IRL</h1>
					<Image
						className="absolute top-[-10px] right-0"
						src={stream2}
						alt="/type"
					/>
				</div>
				<div className="item-center relative flex justify-between rounded-lg bg-purple-600 p-2 px-1 hover:bg-purple-400">
					<h1 className="text-center text-2xl font-bold">Music</h1>
					<Image
						className="absolute top-[-10px] right-0"
						src={stream3}
						alt="/type"
					/>
				</div>
				<div className="item-center relative flex justify-between rounded-lg bg-purple-600 p-2 px-1 hover:bg-purple-400">
					<h1 className="text-center text-2xl font-bold">Esports</h1>
					<Image
						className="absolute top-[-10px] right-0"
						src={stream4}
						alt="/type"
					/>
				</div>
				<div className="item-center relative flex justify-between rounded-lg bg-purple-600 p-2 px-1 hover:bg-purple-400">
					<h1 className="text-center text-2xl font-bold">Creative</h1>
					<Image
						className="absolute top-[-10px] right-0"
						src={stream5}
						alt="/type"
					/>
				</div>
			</div>
		</section>
	);
};
