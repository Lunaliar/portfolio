import Image from "next/image";
import Link from "next/link";
import React from "react";
import dadjokesimg from "../public/assets/projects/dadjokes.png";
import chatappimg from "../public/assets/projects/groupchat.png";
import jarprepimg from "../public/assets/projects/jarprep.png";
import todolistimg from "../public/assets/projects/todolist.png";
import weatherappimg from "../public/assets/projects/weatherapp.png";
import hangmanimg from "../public/assets/projects/hangman.png";
import npcgenimg from "../public/assets/projects/npcgen.png";

import ProjectItem from "./ProjectItem";

const tw = {
	component: "w-full h-auto pt-8 p-2",
	container: "max-w-[1240px] mx-auto px-2 py-16 flex flex-col justify-center",
	titleP: "text-xl tracking-widest uppercase text-[#5651e5]",
	titleH2: "py-4",
	projectContainer: "h-auto grid md:grid-cols-2 gap-8",
};

export const projectData = {
	dadjokes: {
		title: "Dad Jokes",
		framework: "React JS",
		techs: ["React", "Axios", "CSS"],
		gitHubUrl: "https://github.com/Lunaliar/cheezjokes",
		deployUrl: "https://dadjokes-liard.vercel.app/",
		url: "/about/dadjokes",
		image: dadjokesimg,
		description:
			"USE AT YOUR PERIL... This is a dad joke generator, if you ever find yourself with too many friends or not enough dad energy in your life this is the app for you. I made this while learning to use React JS and making api calls with axios.",
	},
	chatapp: {
		title: "Chat App",
		framework: "React JS",
		techs: ["React JS", "SASS", "Firebase"],
		gitHubUrl: "https://github.com/Lunaliar/Chat-App",
		deployUrl: "https://chat-app-sigma-dun.vercel.app/login",
		url: "/about/chatapp",
		image: chatappimg,
		description:
			"This is a chat app I made to practice firebase and test my skills at using a new data base since previously I only had experience with Mongo DB. I really enjoyed making this and I feel like I learned more in this small project than other larger ones I've worked on in the past",
	},
	todolist: {
		title: "To-do List",
		framework: "React JS",
		techs: ["REACT JS", "CSS"],
		gitHubUrl: "https://github.com/Lunaliar/Todo-List",
		deployUrl: "https://todo-list-olive-psi.vercel.app/",
		url: "/about/todolist",
		image: todolistimg,
		description:
			"Everyone has to make at least one of these I hear and I really wanted to give it some funky flair while not making it too complicated. I often find myself on the hunt for a new todo app every month or so and I dont like all of the extra bells and whistles I end up finding so I wanted to keep it chill and only go crazy with the styling this time.",
	},
	weatherapp: {
		title: "Weather App",
		framework: "React JS",
		techs: ["React JS", "Axios", "OpenWeather API", "SASS"],
		gitHubUrl: "https://github.com/Lunaliar/Weather-app",
		deployUrl: "https://weather-app-psi-sand-70.vercel.app/",
		url: "/about/weatherapp",
		image: weatherappimg,
		description:
			"I made this app to test my abilities making dependent API calls and really flexing my muscles with SASS for the first time. I found I really enjoy setting up responsive pages that reflect lots of data in an easily digestable manner.",
	},
	hangman: {
		title: "Hangman",
		framework: "React JS",
		techs: ["React JS", "CSS", "Typescript", "Vite"],
		gitHubUrl: "https://github.com/Lunaliar/hangman",
		deployUrl: "https://hangman-dun-delta.vercel.app/",
		url: "/about/hangman",
		image: hangmanimg,
		description:
			"This is a little practice project I made with some help to solidify my working knowledge of typescript.",
	},
	npcgenerator: {
		title: "NPC Generator",
		framework: "React JS",
		techs: ["React JS", "CSS"],
		gitHubUrl: "https://github.com/Lunaliar/npc-generator",
		deployUrl: "https://npc-generator-two.vercel.app/",
		url: "/about/npcgenerator",
		image: npcgenimg,
		description:
			"I started the project with the help of my two friends Jake and Lino. I wanted an easier way to create random Non player characters for my D&D campaigns.",
	},
	jarprep: {
		title: "Jar Prep",
		framework: "CSS/React JS",
		techs: ["React JS", "CSS"],
		gitHubUrl: "https://github.com/Lunaliar/Jar-Prep-App",
		deployUrl: "https://jar-prep-app.vercel.app/",
		url: "/about/jarprep",
		image: jarprepimg,
		description:
			"This is a recipe website Im working on for simple jar recipes. As someone who often struggles to avoid fastfood or delivery mealprepping my meals has become a neccessity in my daily life both for my happiness and my wallet!",
	},
};

function Projects() {
	return (
		<div id="projects" className={tw.component}>
			<div className={tw.container}>
				<p className={tw.titleP}>Projects</p>
				<h2 className={tw.titleH2}>What I&apos;ve Built</h2>
				<div className={tw.projectContainer}>
					{Object.values(projectData).map((m) => {
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
