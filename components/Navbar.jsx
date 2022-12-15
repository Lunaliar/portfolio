import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { GrClose, GrMenu } from "react-icons/gr"
import ContactIcons from "./ContactIcons"
const tw = {
  componentShadow:
    "fixed w-full h-18 shadow-xl z-[100] ease-in-out duration-300",
  componentNoShadow: "fixed w-full h-18 z-[100]",
  container: "flex justify-between items-center w-full h-full px-2 2xl:px-16",
  logoImg: "cursor-pointer",
  linkUl: "hidden md:flex",
  linkLi: "ml-10 text-sm uppercase hover:text-[#5651e5]",
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
  drawerLinkUl: "uppercase",
  drawerLinkLi: "py-4 text-sm",
  contactContainer: "pt-8",
  contactP: "uppercase tracking-widest text-[#5651e5]",
  iconBox: "flex items-center justify-around my-4 w-full sm:w-[80%]",
  icon: "rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300",
}
const linkData = [
  { name: "Home", url: "/" },
  { name: "About", url: "/#about" },
  { name: "Skills", url: "/#skills" },
  { name: "Projects", url: "/#projects" },
  { name: "Contact", url: "/#contact" },
]

function WitchHat({ size }) {
  return (
    <Image
      src="/assets/witch-hat.png"
      alt="/"
      className={tw.logoImg}
      width={size}
      height={size}
    />
  )
}

function Navbar() {
  const router = useRouter()
  const isHomePage = router.pathname === "/"

  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  const [hasShadow, setHasShadow] = useState(false)

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setHasShadow(true)
      } else {
        setHasShadow(false)
      }
    }
    window.addEventListener("scroll", handleShadow)
  }, [])

  function Links({ ulTw, liTw }) {
    return (
      <ul className={ulTw}>
        {linkData.map(link => {
          return (
            <Link href={link.url} key={link.name}>
              <li onClick={() => setDrawerIsOpen(false)} className={liTw}>
                {link.name}
              </li>
            </Link>
          )
        })}
      </ul>
    )
  }
  const handleDrawer = () => {
    setDrawerIsOpen(drawerOpen => !drawerOpen)
  }

  return (
    <div
      style={{ backgroundColor: isHomePage ? "#ecf0f3" : "transparent" }}
      className={hasShadow ? tw.componentShadow : tw.componentNoShadow}
    >
      <div className={tw.container}>
        <WitchHat size={70} />
        <div style={{ color: isHomePage ? "#1f2937" : "#ecf0f3" }}>
          <Links ulTw={tw.linkUl} liTw={tw.linkLi} />
          <div onClick={handleDrawer} className={tw.openDrawer}>
            <GrMenu size={25} />
          </div>
        </div>
      </div>

      <div className={drawerIsOpen ? tw.drawerComponent : ""}>
        <div
          className={
            drawerIsOpen ? tw.drawerContainerOpen : tw.drawerContainerClosed
          }
        >
          <>
            <div className={tw.drawerTop}>
              <WitchHat size={60} />
              <div onClick={handleDrawer} className={tw.closeDrawer}>
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
            <Links ulTw={tw.drawerLinkUl} liTw={tw.drawerLinkLi} />
            <div className={tw.contactContainer}>
              <p className={tw.contactP}>Let&apos;s Connect</p>
              <ContactIcons boxStyle={tw.iconBox} iconStyle={tw.icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
