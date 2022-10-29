import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import {GrClose, GrMailOption, GrMenu} from "react-icons/gr";
import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import {BsFillPersonLinesFill} from "react-icons/bs";
import ContactIcons from "./ContactIcons";
function Navbar() {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);
	const [navBg, setNavBg] = useState("#ecf0f3");
	const [linkColor, setLinkColor] = useState("#1f2937");
	const router = useRouter();

	useEffect(() => {
		if (
			router.pathname === "/dadjokes" ||
			router.pathname === "/chatapp" ||
			router.pathname === "/jarprep" ||
			router.pathname === "/todolist" ||
			router.pathname === "/weatherapp"
		) {
			setNavBg("transparent");
			setLinkColor("#ecf0f3");
		} else {
			setNavBg("#ecf0f3");
			setLinkColor("#1f2937");
		}
	}, [router]);

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
		iconBox: "flex items-center justify-between my-4 w-full sm:w-[80%]",
		icon: "rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300",
	};
	function links(ulTail, liTail) {
		return (
			<ul className={ulTail}>
				<Link href="/">
					<li onClick={() => setNav(false)} className={liTail}>
						Home
					</li>
				</Link>
				<Link href="/#about">
					<li onClick={() => setNav(false)} className={liTail}>
						About
					</li>
				</Link>
				<Link href="/#skills">
					<li onClick={() => setNav(false)} className={liTail}>
						Skills
					</li>
				</Link>
				<Link href="/#projects">
					<li onClick={() => setNav(false)} className={liTail}>
						Projects
					</li>
				</Link>
				<Link href="/#contact">
					<li onClick={() => setNav(false)} className={liTail}>
						Contact
					</li>
				</Link>
			</ul>
		);
	}
	const handleNav = () => {
		setNav((currNav) => !currNav);
	};
	const imageRender = (s) => {
		return (
			// <Link href="/">
			// </Link> //!Nice Idea but causes errors and is a bit redundant
			<Image
				src="/../public/assets/witch-hat.png"
				alt="/"
				className={tw.logoImg}
				width={s}
				height={s}
			/>
		);
	};
	return (
		<div
			style={{backgroundColor: `${navBg}`}}
			className={shadow ? tw.componentShadow : tw.componentNoShadow}
		>
			<div className={tw.container}>
				{imageRender(75)}
				<div style={{color: `${linkColor}`}}>
					{links(tw.ulLink, tw.liLink)}
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
							{imageRender(60)}
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
						{links(tw.drawerUlLink, tw.drawerLiLink)}
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
