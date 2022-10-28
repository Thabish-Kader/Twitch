import Image from "next/image";
import React from "react";
import logo from "../public/assets/logo.png";
import { GoSearch } from "react-icons/go";
import { FaUserAlt } from "react-icons/fa";
import { Menu, Transition } from "@headlessui/react";
import { MdOutlineMoreVert } from "react-icons/Md";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export const Navbar = () => {
	const { data: session } = useSession();

	return (
		<nav className="fixed top-0 left-0 z-50 flex h-12 w-full items-center justify-between bg-[#18181b] p-5 shadow-md shadow-black">
			{/* left Side */}
			<div className="flex items-center">
				<Link href="/#">
					<Image
						className="cursor-pointer duration-500 hover:scale-125"
						src={logo}
						height="30"
						width="30"
						alt="/twitch"
					/>
				</Link>
				<Link href="/#categories">
					<p className="cursor-pointer pl-2 text-sm font-bold text-white hover:text-purple-600 sm:text-xl">
						Browse
					</p>
				</Link>
				<div>
					<Menu as="div" className="relative text-left">
						<div className="flex">
							<Menu.Button>
								<MdOutlineMoreVert
									size={20}
									className="hover:text-purple-600"
								/>
							</Menu.Button>
						</div>

						<Transition
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right rounded-md bg-[#0e0e10] shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none">
								<div className="py-1">
									<Menu.Item>
										{({ active }) => (
											<Link
												href="/#"
												className={classNames(
													active
														? " bg-purple-600  text-gray-100"
														: "text-gray-200",
													"block px-4 py-2 text-sm"
												)}
											>
												Home
											</Link>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<Link
												href="/#streams"
												className={classNames(
													active
														? "bg-purple-600 text-gray-100"
														: "text-gray-200",
													"block px-4 py-2 text-sm"
												)}
											>
												Streams
											</Link>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<Link
												href="/#categories"
												className={classNames(
													active
														? "bg-purple-600 text-gray-100"
														: "text-gray-200",
													"block px-4 py-2 text-sm"
												)}
											>
												Categories
											</Link>
										)}
									</Menu.Item>
								</div>
							</Menu.Items>
						</Transition>
					</Menu>
				</div>
			</div>

			{/* middle */}
			<div className="hidden max-w-[30rem] flex-grow items-center rounded-lg bg-[#3a3a3d] p-1 hover:border-2  hover:border-purple-500 hover:bg-black md:flex">
				<input
					type="text"
					placeholder="Search"
					className=" w-full rounded-lg bg-transparent  text-gray-300 focus:outline-none  "
				/>

				<GoSearch className=" pr-1 text-white" size={30} />
			</div>
			{/* right side */}
			<div className="flex items-center">
				{session?.user ? (
					<h1 className="p-1 text-xl font-bold">
						Welcome{" "}
						<span className="text-purple-500">
							{session.user.name}
						</span>
					</h1>
				) : (
					<>
						<button className="m-3 w-20 rounded-lg bg-[#3a3a3d] p-1 font-bold hover:bg-gray-500">
							<Link href="/login">Log In</Link>
						</button>
						<button className="w-20 rounded-lg bg-[#9147ff] p-1 font-bold hover:bg-purple-700">
							<Link href="/login">Sign Up</Link>
						</button>
					</>
				)}

				<div className="ml-1 flex items-center rounded-lg hover:bg-gray-600">
					<Menu as="div" className="relative text-left">
						<div className="flex">
							<Menu.Button className="p-1 text-center">
								<FaUserAlt
									className="m-3 cursor-pointer text-white"
									size={20}
								/>
							</Menu.Button>
						</div>

						<Transition
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-[#0e0e10] shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none">
								<div className="py-1">
									<Menu.Item>
										{({ active }) => (
											<Link
												href="/login"
												className={classNames(
													active
														? " bg-purple-600  text-gray-100"
														: "text-gray-200",
													"block px-4 py-2 text-sm"
												)}
											>
												Sign Up
											</Link>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<Link
												href="/login"
												onClick={() => signOut()}
												className={classNames(
													active
														? "bg-purple-600 text-gray-100"
														: "text-gray-200",
													"block px-4 py-2 text-sm"
												)}
											>
												Log Out
											</Link>
										)}
									</Menu.Item>
								</div>
							</Menu.Items>
						</Transition>
					</Menu>
				</div>
			</div>
		</nav>
	);
};
