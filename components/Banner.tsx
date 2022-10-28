import React from "react";
import { Channels } from "./Channels";
import Categories from "./Categories";
import { Streams } from "./Streams";
import { Main } from "./Main";

export const Banner = () => {
	return (
		<section className="h-screen pt-14 pl-14 lg:pl-64">
			<Main />
			<Streams />
			<Channels />
			<Categories />
		</section>
	);
};
