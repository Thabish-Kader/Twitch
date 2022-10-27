import Image from "next/image";
import React from "react";
import category from "../public/assets/categories/category.jpg";
import category2 from "../public/assets/categories/category2.jpg";
import category3 from "../public/assets/categories/category3.jpg";
import category4 from "../public/assets/categories/category4.jpg";
import category5 from "../public/assets/categories/category5.jpg";
import category6 from "../public/assets/categories/category6.jpg";
import category7 from "../public/assets/categories/category7.jpg";
import category8 from "../public/assets/categories/category8.jpg";
import { CategoryItem } from "./CategoryItem";
const Categories = () => {
	return (
		<section id="categories" className="my-5 border-b border-gray-500">
			<h1 className="text-xl font-bold sm:text-2xl">
				<span className="text-purple-400">Categories</span> We think
				you'll enjoy
			</h1>
			<div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
				<CategoryItem
					img={category}
					game="Just Chatting"
					viewers="225K"
					tag1="IRL"
					tag2="Arcade"
					tag3="Enjoy"
				/>
				<CategoryItem
					img={category2}
					game="Overwatch 2"
					viewers="311K"
					tag1="Action"
					tag2="Shooting"
					tag3="Battle Royal"
				/>
				<CategoryItem
					img={category3}
					game="Fortnite"
					viewers="101K"
					tag1="Arcade"
					tag2="Building"
					tag3="Adventure"
				/>
				<CategoryItem
					img={category4}
					game="GTA 5"
					viewers="212K"
					tag1="Adventure"
					tag2="Buisness"
					tag3="Cars"
				/>
				<CategoryItem
					img={category5}
					game="Valorant"
					viewers="72K"
					tag1="Adventure"
					tag2="Adventure"
					tag3="Shooting"
				/>
				<CategoryItem
					img={category6}
					game="FIFA"
					viewers="155K"
					tag1="FIFA"
					tag2="Sports"
					tag3="Legs"
				/>
				<CategoryItem
					img={category7}
					game="League of Legends"
					viewers="142K"
					tag1="Magic"
					tag2="Alien"
					tag3="Adventure"
				/>
				<CategoryItem
					img={category8}
					game="GTA MW"
					viewers="121K"
					tag1="Shoot"
					tag2="Skulls"
					tag3="Mice"
				/>
			</div>
		</section>
	);
};

export default Categories;
