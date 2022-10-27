import { StaticImageData } from "next/image";

export interface SideBarItemsProps {
	img: StaticImageData;
	userName?: string;
	game: string;
	viewers?: string;
}

export interface BannerItemsProps extends SideBarItemsProps {
	title: string;
	tag1: string;
	tag2: string;
	tag3: string;
	userImg: StaticImageData;
}

export interface CategoryItemsProps extends SideBarItemsProps {
	tag1: string;
	tag2: string;
	tag3: string;
}
