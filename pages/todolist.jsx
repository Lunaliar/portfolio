import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar";
import {RiRadioButtonFill} from "react-icons/ri";
import {FaHome} from "react-icons/fa";
import Head from "next/head";
import todolist from "../public/assets/projects/todolist.png";
function todoList() {
	const data = {
		title: "To-do List",
		framework: "React JS",
		techs: ["REACT JS", "CSS"],
		gitHubUrl: "https://github.com/Lunaliar/Todo-List",
		deployUrl: "",
		url: "/",
		image: todolist,
		description:
			"Everyone has to make at least one of these I hear and I really wanted to give it some funky flair while not making it too complicated. I often find myself on the hunt for a new todo app every month or so and I dont like all of the extra bells and whistles I end up finding so I wanted to keep it chill and only go crazy with the styling this time.",
	};
	const tw = {
		component: "w-full",
		container: "w-screen h-[30vh] lg:h-[40vh] top-0 left-0 relative",
		topBar:
			"absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10",
		barImg: "absolute z-1",
		titleBox:
			"absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2",
		titleH2: "py-2",
		bottom: "max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 ",
		bottomLeft: "col-span-4",
		buttontop: "px-8 py-2 mt-4 mr-8",
		buttonbottom: "px-8 py-2 mt-4",
		bottomRight:
			"col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4",
		rightTop: "p-2",
		rightTitle: "text-center font-bold pb-2",
		techName: "text-gray-600 py-2 flex items-center",
		radio: "pr-3",
		homeContainer: " w-full flex justify-center py-12",
		homeIcon:
			"rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-[#5651e5]",
	};
	const techs = data.techs;
	const techItems = (techname) => {
		return (
			<p className={tw.techName} key={techname}>
				<RiRadioButtonFill size={27} className={tw.radio} />
				{techname}
			</p>
		);
	};
	return (
		<div className={tw.component}>
			<Head>
				<title>{data.title}</title>
			</Head>
			<Navbar />
			<div className={tw.container}>
				<div className={tw.topBar} />
				<Image
					src={data.image}
					alt="/"
					className={tw.barImg}
					layout="fill"
					objectFit="cover"
				/>
				<div className={tw.titleBox}>
					<h2 className={tw.titleH2}>{data.title}</h2>
					<h3>{data.framework}</h3>
				</div>
			</div>

			<div className={tw.bottom}>
				<div className={tw.bottomLeft}>
					<p>Project</p>
					<h2>Overview</h2>
					<p>{data.description}</p>
					<button className={tw.buttontop}>Demo</button>
					<a href={data.gitHubUrl}>
						<button className={tw.buttonbottom}>Code</button>
					</a>
				</div>
				<div className={tw.bottomRight}>
					<div className={tw.RightTop}>
						<p className={tw.rightTitle}>Technologies</p>
						<div>
							{techs.map((m) => {
								return techItems(m);
							})}
						</div>
					</div>
				</div>
			</div>
			<div className={tw.homeContainer}>
				<Link href="/#projects">
					<div className={tw.homeIcon}>
						<FaHome size={40} />
					</div>
				</Link>
			</div>
		</div>
	);
}

export default todoList;
