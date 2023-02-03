import React from "react"
import calcimg from "../public/assets/projects/calcimg.png"
import dadjokesimg from "../public/assets/projects/dadjokes.png"
import chatappimg from "../public/assets/projects/groupchat.png"
import hangmanimg from "../public/assets/projects/hangman.png"
import npcgenimg from "../public/assets/projects/npcgen.png"
import todolistimg from "../public/assets/projects/todolist.png"
import weatherappimg from "../public/assets/projects/weatherapp.png"
import ProjectItem from "./ProjectItem"

const tw = {
  component: "w-full h-auto pt-8 p-2",
  container: "max-w-[1240px] mx-auto px-2 py-16 flex flex-col justify-center",
  titleP: "text-xl tracking-widest uppercase text-[#5651e5]",
  titleH2: "py-4",
  projectContainer: "h-auto grid md:grid-cols-2 gap-8",
}

const tech = {
  react: "React",
  sass: "Sass",
  firebase: "Firebase",
  axios: "Axios",
  css: "CSS",
  typescript: "TypeScript",
  vite: "Vite",
}

export const projectData = {
  chatapp: {
    title: "Chatty Friends",
    framework: tech.react,
    techs: [tech.react, tech.sass, tech.firebase, tech.tailwind],
    gitHubUrl: "https://github.com/Lunaliar/Chatty-Friends",
    deployUrl: "https://chatty-friends.vercel.app/login",
    url: "/about/chatapp",
    image: chatappimg,
    prevURL: "/about/todolist",
    nextURL: "/about/weatherapp",
    description:
      "This is a chat app I made to practice and solidify my knowledge of Firebase. I also wanted to get my boots wet with a new styling framework, so I used Tailwind CSS for this project. I enjoyed making this and learned more in this small project than in other larger ones I've worked on.",
  },
  weatherapp: {
    title: "Weather App",
    framework: tech.react,
    techs: [tech.react, tech.axios, tech.sass],
    gitHubUrl: "https://github.com/Lunaliar/Weather-app",
    deployUrl: "https://weather-app-psi-sand-70.vercel.app/",
    url: "/about/weatherapp",
    image: weatherappimg,
    prevURL: "/about/chatapp",
    nextURL: "/about/dadjokes",
    description:
      "Here is my weather app! I wanted to make one to practice working with an unknown API. OpenWeatherAPI is excellent, but it can be tricky to work with if you're trying to search with a city name, as you have to make an API call dependent on another API call. Nevertheless, it was a delight to work on it, and Axios made this kind of project a breeze.",
  },
  dadjokes: {
    title: "Dad Jokes",
    framework: tech.react,
    techs: [tech.react, tech.axios, tech.css],
    gitHubUrl: "https://github.com/Lunaliar/cheezjokes",
    deployUrl: "https://dadjokes-liard.vercel.app/",
    url: "/about/dadjokes",
    image: dadjokesimg,
    prevURL: "/about/weatherapp",
    nextURL: "/about/npcgenerator",
    description:
      "This is my Dad Joke Generator. I made it during a Colt Steele Udemy course on reacting. It was my first time making a react app, and it is still one of my favorite things I've ever made. Once I got more comfortable with react, I refactored it from class to functional components. Warning! Use caution when sharing these jokes; they can be very 'd[e]adly.'",
  },
  npcgenerator: {
    title: "NPC Generator",
    framework: tech.react,
    techs: [tech.react, tech.css],
    gitHubUrl: "https://github.com/Lunaliar/npc-generator",
    deployUrl: "https://npc-generator-two.vercel.app/",
    url: "/about/npcgenerator",
    image: npcgenimg,
    prevURL: "/about/dadjokes",
    nextURL: "/about/calculator",
    description:
      "I started the project with the help of my two friends, Jake and Lino. I wanted an easier way to create random Nonplayer characters for my D&D campaigns. I had an absolute blast making this app; it was one of my first times truly working alongside other developers. I can't wait to use this for my games and share it with my friends.",
  },
  calculator: {
    title: "Calculator",
    framework: tech.react,
    techs: [tech.react, tech.css, tech.vite],
    gitHubUrl: "https://github.com/Lunaliar/sav-calc",
    deployUrl: "https://sav-calc.vercel.app/",
    url: "/about/calculator",
    image: calcimg,
    prevURL: "/about/npcgenerator",
    nextURL: "/about/hangman",
    description:
      "Calculators are a marathon, a very simple problem that gets exponentially bigger as progress is made. I originally made this app about a year ago while learning JavaScript. I wanted to come back and try to refactor this into something more cohesive and simpler with React.",
  },
  hangman: {
    title: "Hangman",
    framework: tech.react,
    techs: [tech.react, tech.css, tech.typescript, tech.vite],
    gitHubUrl: "https://github.com/Lunaliar/hangman",
    deployUrl: "https://hangman-dun-delta.vercel.app/",
    url: "/about/hangman",
    image: hangmanimg,
    prevURL: "/about/calculator",
    nextURL: "/about/todolist",
    description:
      "I did this little practice project with some help to solidify my working knowledge of TypeScript. It was one of my first forrays into TypeScript, and it was a tricky conundrum. However, I truly enjoyed this project and learned much, even outside the TypeScript knowledge I was cementing.",
  },
  todolist: {
    title: "To-do List",
    framework: tech.react,
    techs: [tech.react, tech.css],
    gitHubUrl: "https://github.com/Lunaliar/Todo-List",
    deployUrl: "https://todo-list-olive-psi.vercel.app/",
    url: "/about/todolist",
    image: todolistimg,
    prevURL: "/about/hangman",
    nextURL: "/about/chatapp",
    description:
      "Everyone has to make at least one of these, and I wanted to give it some fun flair while not making it too complicated. I often find myself on the hunt for a new to-do app every month, and I don't like all the extra bells and whistles I find. So my goal for this project was to make the basics function perfectly and only go crazy with the styling this time.",
  },
}

function Projects() {
  return (
    <div id="projects" className={tw.component}>
      <div className={tw.container}>
        <p className={tw.titleP}>Projects</p>
        <h2 className={tw.titleH2}>What I&apos;ve Built</h2>
        <div className={tw.projectContainer}>
          {Object.values(projectData).map(m => {
            return (
              <ProjectItem
                title={m.title}
                type={m.type}
                url={m.url}
                image={m.image}
                key={m.title}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects
