import React from "react";

export const Main = () => {
	return (
		<section
			id="/#home"
			className="relative my-1 h-[55%] w-full overflow-hidden rounded-lg pb-[56.25%]"
		>
			<iframe
				className="absolute h-full w-full"
				src="https://www.youtube.com/embed/dkmfiIQrK5Y?start=10"
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
		</section>
	);
};
