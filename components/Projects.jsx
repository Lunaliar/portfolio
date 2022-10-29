import Image from "next/image";
import Link from "next/link";
import React from "react";
import dadjokes from "../public/assets/projects/dadjokes.png";
import chatapp from "../public/assets/projects/groupchat.png";
import jarprep from "../public/assets/projects/jarprep.png";
import todolist from "../public/assets/projects/todolist.png";
import weatherapp from "../public/assets/projects/weatherapp.png";
import ProjectItem from "./ProjectItem";
function Projects() {
	const tw = {
		component: "w-full h-auto pt-8 p-2",
		container: "max-w-[1240px] mx-auto px-2 py-16 flex flex-col justify-center",
		titleP: "text-xl tracking-widest uppercase text-[#5651e5]",
		titleH2: "py-4",
		projectContainer: "h-auto grid md:grid-cols-2 gap-8",
	};
	const projects = [
		{
			title: "Dad Jokes",
			framework: "React JS",
			techs: ["React", "Axios", "CSS"],
			gitHubUrl: "https://github.com/Lunaliar/cheezjokes",
			deployUrl: "",
			url: "/dadjokes",
			image: dadjokes,
			decription:
				"USE AT YOUR PERIL... This is a dad joke generator, if you ever find yourself with too many friends or not enough dad energy in your life this is the app for you. I made this while learning to use React JS and making api calls with axios.",
		},
		{
			title: "Chat App",
			framework: "React JS",
			techs: [],
			gitHubUrl: "https://github.com/Lunaliar/Chat-App",
			deployUrl: "",
			url: "/chatapp",
			image: chatapp,
			description:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et voluptatum numquam facere reprehenderit quos expedita corporis tenetur, ipsam, provident totam, similique modi sunt maxime tempora architecto. Aliquam pariatur et numquam!",
		},
		{
			title: "Jar Prep",
			framework: "CSS/React JS",
			techs: [],
			gitHubUrl: "https://github.com/Lunaliar/Jar-Prep-App",
			deployUrl: "",
			url: "/jarprep",
			image: jarprep,
			description:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et voluptatum numquam facere reprehenderit quos expedita corporis tenetur, ipsam, provident totam, similique modi sunt maxime tempora architecto. Aliquam pariatur et numquam!",
		},
		{
			title: "To-do List",
			framework: "React JS",
			techs: [],
			gitHubUrl: "https://github.com/Lunaliar/Todo-List",
			deployUrl: "",
			url: "/todolist",
			image: todolist,
			description:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et voluptatum numquam facere reprehenderit quos expedita corporis tenetur, ipsam, provident totam, similique modi sunt maxime tempora architecto. Aliquam pariatur et numquam!",
		},
		{
			title: "Weather App",
			framework: "React JS",
			techs: [],
			gitHubUrl: "https://github.com/Lunaliar/Weather-app",
			deployUrl: "",
			url: "/weatherapp",
			image: weatherapp,
			description:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et voluptatum numquam facere reprehenderit quos expedita corporis tenetur, ipsam, provident totam, similique modi sunt maxime tempora architecto. Aliquam pariatur et numquam!",
		},
	];
	return (
		<div id="projects" className={tw.component}>
			<div className={tw.container}>
				<p className={tw.titleP}>Projects</p>
				<h2 className={tw.titleH2}>What I've Built</h2>
				<div className={tw.projectContainer}>
					{projects.map((m) => {
						return (
							<ProjectItem
								title={m.title}
								type={m.type}
								url={m.url}
								image={m.image}
								key={m.title}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Projects;
