import Link from "next/link"
import React from "react"
import { HiOutlineChevronDoubleUp } from "react-icons/hi"
import ContactForm from "./ContactForm"
import ContactIcons from "./ContactIcons"

const tw = {
  component: "w-full lg:h-screen pt-24 p-2",
  container: "max-w-[1240px] px-2 w-full flex flex-col justify-center mx-auto",
  titleP: "text-xl tracking-widest uppercase text-[#5651e5]",
  titleH2: "py-4",
  gridContainer: "grid lg:grid-cols-5 gap-8",
  leftSide:
    "col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4",
  leftContainer: "lg:p-4 h-full rounded-xl",
  leftImage: "rounded-xl hover:scale-105 ease-in duration-300",
  leftH2: "py-2",
  leftP2: "py-4",
  leftP3: "uppercase pt-8",
  iconBox: "flex items-center justify-around py-4",
  icon: "rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300",
  rightSide:
    "col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4",
  rightContainer: "p-4",
  formGrid: "grid md:grid-cols-2 gap-4 w-full py-2",
  inputContainer: "flex flex-col py-2",
  label: "uppercase text-sm py-2",
  input: "border-2 rounded-lg p-3 flex border-gray-300",
  textArea: "border-2 rounded-lg p-3 border-gray-300",
  button: "w-full p-4 mt-4 text-gray-100",
  chevContainer: "flex justify-center py-12",
  chevIcon:
    "rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-[#5651e5]",
}

function Contact() {
  return (
    <div id="contact" className={tw.component}>
      <div className={tw.container}>
        <p className={tw.titleP}>Contact</p>
        <h2 className={tw.titleH2}>Get In Touch</h2>
        <div className={tw.gridContainer}>
          <div className={tw.leftSide}>
            <div className={tw.leftContainer}>
              <>
                <picture>
                  <source
                    srcSet="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
                    type="image/webp"
                  />
                  <img
                    className={tw.leftImage}
                    src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
                    alt="/"
                  />
                </picture>
              </>
              <>
                <h2 className={tw.leftH2}>Sav</h2>
                <p>Front-End Developer</p>
                <p className={tw.leftP2}>
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </>
              <>
                <p className={tw.leftP3}>Connect With Me</p>
                <ContactIcons
                  boxStyle={tw.iconBox}
                  iconStyle={tw.icon}
                  size="40"
                />
              </>
            </div>
          </div>
          <div className={tw.rightSide}>
            <div className={tw.rightContainer}>
              <ContactForm />
            </div>
          </div>
        </div>
        <div className={tw.chevContainer}>
          <Link href="/">
            <div className={tw.chevIcon}>
              <HiOutlineChevronDoubleUp size={40} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact
