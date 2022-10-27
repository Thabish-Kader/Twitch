import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/Layout";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Twitch</title>
			</Head>
			<Layout />
		</>
	);
};

export default Home;
