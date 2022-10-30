import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import {GrClose, GrMailOption, GrMenu} from "react-icons/gr";
import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import {BsFillPersonLinesFill} from "react-icons/bs";
import ContactIcons from "./ContactIcons";
const tw = {
	componentShadow:
		"fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300",
	componentNoShadow: "fixed w-full h-20 z-[100]",
	container: "flex justify-between items-center w-full h-full px-2 2xl:px-16",
	logoImg: "cursor-pointer",
	ulLink: "hidden md:flex",
	liLink: "ml-10 text-sm uppercase hover:text-[#5651e5]",
	openDrawer: "md:hidden",
	drawerComponent: "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70",
	drawerContainerOpen:
		"fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45] h-screen bg-[#ecf0f3] p-10 ease-in duration-500",
	drawerContainerClosed: "fixed left-[-100%] top-0 p-10 ease-in duration-500",
	drawerTop: "flex w-full items-center justify-between",
	closeDrawer: "rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer",
	messageContainer: "border-b border-gray-300 my-4",
	drawerMessage: "w-[85%] md:w-[90%] py-4",
	drawerLinkContainer: "py-4 flex flex-col",
	drawerUlLink: "uppercase",
	drawerLiLink: "py-4 text-sm",
	contactContainer: "pt-8",
	contactP: "uppercase tracking-widest text-[#5651e5]",
	iconBox: "flex items-center justify-around my-4 w-full sm:w-[80%]",
	icon: "rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300",
};
const linkData = [
	{name: "Home", url: "/"},
	{name: "About", url: "/#about"},
	{name: "Skills", url: "/#skills"},
	{name: "Projects", url: "/#projects"},
	{name: "Contact", url: "/#contact"},
];
function Links({ulTail, liTail}) {
	return (
		<ul className={ulTail}>
			{linkData.map((link) => {
				return (
					<Link href={link.url} key={link.name}>
						<li onClick={() => setNav(false)} className={liTail}>
							{link.name}
						</li>
					</Link>
				);
			})}
		</ul>
	);
}

function WitchHat({size}) {
	return (
		<Image
			src="/../public/assets/witch-hat.png"
			alt="/"
			className={tw.logoImg}
			width={size}
			height={size}
		/>
	);
}

function Navbar() {
	const router = useRouter();
	const isHomePage = router.pathname === "/";

	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		};
		window.addEventListener("scroll", handleShadow);
	}, []);

	const handleNav = () => {
		setNav((currNav) => !currNav);
	};

	return (
		<div
			style={{backgroundColor: isHomePage ? "#ecf0f3" : "transparent"}}
			className={shadow ? tw.componentShadow : tw.componentNoShadow}
		>
			<div className={tw.container}>
				<WitchHat size={70} />
				<div style={{color: isHomePage ? "#1f2937" : "#ecf0f3"}}>
					<Links ulTail={tw.ulLink} liTail={tw.liLink} />
					<div onClick={handleNav} className={tw.openDrawer}>
						<GrMenu size={25} />
					</div>
				</div>
			</div>

			<div className={nav ? tw.drawerComponent : ""}>
				<div
					className={nav ? tw.drawerContainerOpen : tw.drawerContainerClosed}
				>
					<>
						<div className={tw.drawerTop}>
							<WitchHat size={60} />
							<div onClick={handleNav} className={tw.closeDrawer}>
								<GrClose />
							</div>
						</div>
						<div className={tw.messageContainer}>
							<p className={tw.drawerMessage}>
								Let&apos;s build something truly magical
							</p>
						</div>
					</>
					<div className={tw.drawerLinkContainer}>
						<Links ulTail={tw.drawerUlLink} liTail={tw.drawerLiLink} />
						<div className={tw.contactContainer}>
							<p className={tw.contactP}>Let&apos;s Connect</p>
							<ContactIcons boxStyle={tw.iconBox} iconStyle={tw.icon} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
