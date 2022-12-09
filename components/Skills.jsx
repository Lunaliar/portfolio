import Image from "next/image";
import React from "react";
const tw = {
	component: "w-full lg:h-screen p-2 pt-24",
	container: "max-w-[1240px] mx-auto flex flex-col justify-center h-full",
	skillTitle: "text-xl tracking-widest uppercase text-[#5651e5]",
	skillh2: "py-4",
	GridContainer: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
	GridCard: "p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300",
	GridItem: "grid grid-cols-2 gap-4 justify-center items-center",
	itemTop: "m-auto",
	itemBottom: "flex flex-col item-center justify-center",
};

const skillIcons = [
	{
		title: "HTML",
		img: "html.png",
	},
	{
		title: "CSS",
		img: "css.png",
	},
	{
		title: "JavaScript",
		img: "js.png",
	},
	{
		title: "Node JS",
		img: "nodeJS.png",
	},
	{
		title: "Git Bash",
		img: "gitbash.png",
	},
	{
		title: "Mongo DB",
		img: "mongodb.png",
	},
	{
		title: "React",
		img: "react.png",
	},
	{
		title: "SASS",
		img: "scss.png",
	},
	{
		title: "Firebase",
		img: "firebase.png",
	},
	{
		title: "Next JS",
		img: "nextJS.png",
	},
	{
		title: "Tailwind",
		img: "tailwind.png",
	},
	{
		title: "GitHub",
		img: "github.png",
	},
];

function Skills() {
	function SkillCard({img, title}) {
		return (
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
		);
	}
	return (
		<div id="skills" className={tw.component}>
			<div className={tw.container}>
				<p className={tw.skillTitle}>Skills</p>
				<h2 className={tw.skillh2}>What I can do</h2>
				<div className={tw.GridContainer}>
					{skillIcons.map((s) => {
						return <SkillCard img={s.img} title={s.title} key={s.title} />;
					})}
				</div>
			</div>
		</div>
	);
}

export default Skills;
