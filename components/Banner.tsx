import React from "react";
import thumbnail0 from "../public/assets/live/live0.jpg";
import thumbnail1 from "../public/assets/live/live1.jpeg";
import thumbnail2 from "../public/assets/live/live2.jpeg";
import thumbnail3 from "../public/assets/live/live3.jpeg";
import thumbnail4 from "../public/assets/live/live4.jpeg";
import thumbnail5 from "../public/assets/live/live5.jpeg";
import thumbnail6 from "../public/assets/live/live6.jpeg";
import thumbnail7 from "../public/assets/live/live7.jpeg";
import thumbnail8 from "../public/assets/live/live8.jpeg";
import thumbnail9 from "../public/assets/live/live9.jpeg";
import thumbnail10 from "../public/assets/live/live10.jpeg";
import thumbnail11 from "../public/assets/live/live11.jpeg";
import thumbnail12 from "../public/assets/live/live12.jpeg";
import thumbnail13 from "../public/assets/live/live13.jpg";
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
import { BannerItems } from "./BannerItems";
import { Channels } from "./Channels";
import Categories from "./Categories";
import { Streams } from "./Streams";

export const Banner = () => {
	return (
		<section id="home" className="h-screen pt-14 pl-14 lg:pl-64">
			<Channels />
			<Categories />
			<Streams />
		</section>
	);
};
