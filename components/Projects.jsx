import React from "react";
import calcimg from "../public/assets/projects/calcimg.png";
import dadjokesimg from "../public/assets/projects/dadjokes.png";
import chatappimg from "../public/assets/projects/groupchat.png";
import hangmanimg from "../public/assets/projects/hangman.png";
import npcgenimg from "../public/assets/projects/npcgen.png";
import todolistimg from "../public/assets/projects/todolist.png";
import weatherappimg from "../public/assets/projects/weatherapp.png";
import ProjectItem from "./ProjectItem";

const tw = {
	component: "w-full h-auto pt-8 p-2",
	container: "max-w-[1240px] mx-auto px-2 py-16 flex flex-col justify-center",
	titleP: "text-xl tracking-widest uppercase text-[#5651e5]",
	titleH2: "py-4",
	projectContainer: "h-auto grid md:grid-cols-2 gap-8",
};
const techNames = [
	"React",
	"SASS",
	"Firebase",
	"Axios",
	"OpenWeather API",
	"CSS",
	"TypeScript",
	"Vite",
];

export const projectData = {
	chatapp: {
		title: "Chatty Friends",
		framework: techNames[0],
		techs: [techNames[0], techNames[1], techNames[2]],
		gitHubUrl: "https://github.com/Lunaliar/Chatty-Friends",
		deployUrl: "https://chatty-friends.vercel.app/login",
		url: "/about/chatapp",
		image: chatappimg,
		description:
			"This is a chat app I made to practice firebase and test my skills at using a NoSQL database since previously I only had experience with Mongo DB(SQL). I really enjoyed making this and I feel like I learned more in this small project than other larger ones I've worked on in the past.",
	},
	weatherapp: {
		title: "Weather App",
		framework: techNames[0],
		techs: [techNames[0], techNames[3], techNames[4], techNames[1]],
		gitHubUrl: "https://github.com/Lunaliar/Weather-app",
		deployUrl: "https://weather-app-psi-sand-70.vercel.app/",
		url: "/about/weatherapp",
		image: weatherappimg,
		description:
			"I made this app to test my abilities making dependent API calls and really flexing my muscles with SASS for the first time. I had the secondary goal to make a functional search bar which was an absolute delight to see working the first time. I found I really enjoy setting up responsive apps like this that reflect data in an easily digestable manner.",
	},
	dadjokes: {
		title: "Dad Jokes",
		framework: techNames[0],
		techs: [techNames[0], techNames[3], techNames[5]],
		gitHubUrl: "https://github.com/Lunaliar/cheezjokes",
		deployUrl: "https://dadjokes-liard.vercel.app/",
		url: "/about/dadjokes",
		image: dadjokesimg,
		description:
			"USE AT YOUR PERIL... This is a dad joke generator, if you ever find yourself with too many friends or not enough dad energy in your life, this is the app for you. I made this while learning to use React and making API calls with Axios. There's even a little bit of functionality for local storage so you can see which ones you liked the most, enjoy!",
	},
	npcgenerator: {
		title: "NPC Generator",
		framework: techNames[0],
		techs: [techNames[0], techNames[5]],
		gitHubUrl: "https://github.com/Lunaliar/npc-generator",
		deployUrl: "https://npc-generator-two.vercel.app/",
		url: "/about/npcgenerator",
		image: npcgenimg,
		description:
			"I started the project with the help of my two friends Jake and Lino. I wanted an easier way to create random Non player characters for my D&D campaigns. I had an absolute blast making this app and it was one of my first times truly working alongside other developers. I can't wait to use this for my games and share it with my friends.",
	},
	calculator: {
		title: "Calculator",
		framework: techNames[0],
		techs: [techNames[0], techNames[5]],
		gitHubUrl: "https://github.com/Lunaliar/Calculator",
		deployUrl: "https://calculator-orpin-beta.vercel.app/",
		url: "/about/calculator",
		image: calcimg,
		description:
			"Calculators are a marathon, a very simple problem that gets exponentially bigger if anything is added ontop of the basic functions. I originally made this app about a year ago while learning JavaScript. I wanted to come back and try to refactor this into something more cohesive and simpler with React.",
	},
	hangman: {
		title: "Hangman",
		framework: techNames[0],
		techs: [techNames[0], techNames[5], techNames[6], techNames[7]],
		gitHubUrl: "https://github.com/Lunaliar/hangman",
		deployUrl: "https://hangman-dun-delta.vercel.app/",
		url: "/about/hangman",
		image: hangmanimg,
		description:
			"This is a little practice project I made with some help to solidify my working knowledge of typescript. It was one of my first forrays into TypeScript and it was a tricky conundrum. I truly enjoyed this project and I learned so much even outside of the TypeScript knowledge I was cementing.",
	},
	todolist: {
		title: "To-do List",
		framework: techNames[0],
		techs: [techNames[0], techNames[5]],
		gitHubUrl: "https://github.com/Lunaliar/Todo-List",
		deployUrl: "https://todo-list-olive-psi.vercel.app/",
		url: "/about/todolist",
		image: todolistimg,
		description:
			"Everyone has to make at least one of these I hear and I really wanted to give it some fun flair while not making it too complicated. I often find myself on the hunt for a new todo app every month or so and I don't like all of the extra bells and whistles I end up finding. My goal for this project was to make it function perfectly and only go crazy with the styling this time.",
	},
	// jarprep: {
	// import jarprepimg from "../public/assets/projects/jarprep.png";
	// 	title: "Jar Prep",
	// 	framework: "CSS/React JS",
	// 	techs: ["React JS", "CSS"],
	// 	gitHubUrl: "https://github.com/Lunaliar/Jar-Prep-App",
	// 	deployUrl: "https://jar-prep-app.vercel.app/",
	// 	url: "/about/jarprep",
	// 	image: jarprepimg,
	// 	description:
	// 		"This is a recipe website Im working on for simple jar recipes. As someone who often struggles to avoid fastfood or delivery mealprepping my meals has become a neccessity in my daily life both for my happiness and my wallet!",
	// },
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
