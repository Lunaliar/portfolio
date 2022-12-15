import Image from "next/image"
import Link from "next/link"
import React from "react"
const tw = {
  component: "w-full lg:h-screen p-2 pt-24",
  container: "max-w-[1240px] mx-auto flex flex-col justify-center h-full",
  skillTitle: "text-xl tracking-widest uppercase text-[#5651e5]",
  skillh2: "py-4",
  GridContainer: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
  GridCard:
    "p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer",
  GridItem: "grid grid-cols-2 gap-4 justify-center items-center",
  itemTop: "m-auto",
  itemBottom: "flex flex-col item-center justify-center",
}

const skillIcons = [
  {
    title: "HTML",
    img: "html.png",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    title: "CSS",
    img: "css.png",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    title: "JavaScript",
    img: "js.png",
    url: "https://www.javascript.com/",
  },
  {
    title: "Node.js",
    img: "nodeJS.png",
    url: "https://nodejs.org/en/",
  },
  {
    title: "Git Bash",
    img: "gitbash.png",
    url: "https://git-scm.com/",
  },
  {
    title: "MongoDB",
    img: "mongodb.png",
    url: "https://www.mongodb.com/home",
  },
  {
    title: "React",
    img: "react.png",
    url: "https://reactjs.org/",
  },
  {
    title: "Sass",
    img: "scss.png",
    url: "https://sass-lang.com/",
  },
  {
    title: "Firebase",
    img: "firebase.png",
    url: "https://firebase.google.com/",
  },
  {
    title: "Next.js",
    img: "nextJS.png",
    url: "https://nextjs.org/",
  },
  {
    title: "Tailwind CSS",
    img: "tailwind.png",
    url: "https://tailwindcss.com/",
  },
  {
    title: "GitHub",
    img: "github.png",
    url: "https://github.com/Lunaliar",
  },
]

function Skills() {
  function SkillCard({ img, title, url }) {
    return (
      <Link href={url} target="_blank" rel="noreferrer">
        <div className={tw.GridCard} key={title}>
          <div className={tw.GridItem}>
            <div className={tw.itemTop}>
              <Image
                className="w-[auto] h-[64px]"
                src={`/assets/skills/${img}`}
                width={64}
                height={64}
                alt="/"
              />
            </div>
            <div className={tw.itemBottom}>
              <h3>{title}</h3>
            </div>
          </div>
        </div>
      </Link>
    )
  }
  return (
    <div id="skills" className={tw.component}>
      <div className={tw.container}>
        <p className={tw.skillTitle}>Skills</p>
        <h2 className={tw.skillh2}>What I can do</h2>
        <div className={tw.GridContainer}>
          {skillIcons.map(s => {
            return (
              <SkillCard
                img={s.img}
                title={s.title}
                key={s.title}
                url={s.url}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Skills
