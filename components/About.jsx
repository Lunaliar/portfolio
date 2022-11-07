import Link from "next/link";
import React from "react";

const tw = {
	component: "w-full md:screen p-2 pt-24 flex items-center py-16",
	container: "max-w-[1240px] m-auto md:grid grid-cols-3 gap-8",
	aboutContainer: "col-span-2",
	aboutTitle: "uppercase texl-xl tracking-widest text-[#5651e5]",
	abouth2: "py-4",
	aboutp: "py-2 text-gray-600",
	aboutPLink: "py-2 text-gray-600 underline cursor-pointer text-[#5651e5]",
	imageContainer:
		"w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300",
	image: "rounded-xl",
};

function About() {
	return (
		<div id="about" className={tw.component}>
			<div className={tw.container}>
				<div className={tw.aboutContainer}>
					<p className={tw.aboutTitle}>About</p>
					<h2 className={tw.abouth2}>Who I Am</h2>
					<p className={tw.aboutp}>&#47;&#47;Not your typical developer</p>
					<p className={tw.aboutp}>
						My name is Sav, I have two cats, Eris and Omen and I live with my
						partner Kait. I love to play dungeons and dragons and I like
						challenging myself in the kitchen with new recipes. I have worked in
						many industries from school administration to welding then from
						management to finance. These experiences give me a great perspective
						for problem-solving as I&apos;ve often had to tackle issues at my
						work from many different positions.
					</p>
					<p className={tw.aboutp}>
						I&apos;ve been learning about coding for about 2 years at this
						point, I&apos;m mostly self-taught along with some help from Udemy
						and my mentor{" "}
						<span>
							<a
								href="https://jaketripp.com/"
								target="_blank"
								style={{color: "#5651e5", textDecoration: "underline"}}
							>
								Jake
							</a>
						</span>
						. My favorite parts of coding are the community and the challenges.
						There&apos;s always a problem somewhere that needs to be solved and
						even when it is there is almost always a better way to solve it.
						Striving for the best solution motivates me and fuels my passion for
						web development.
					</p>
					<Link href="/#projects">
						<p className={tw.aboutPLink}>
							Check out some of my latest projects!
						</p>
					</Link>
				</div>
				<div className={tw.imageContainer}>
					<img
						className={tw.image}
						src="/assets/cats.jpg"
						alt="/"
					/>
				</div>
			</div>
		</div>
	);
}

export default About;
