import React from "react"
import Image from "next/image"
import Link from "next/link"

const tw = {
  projectItemContainer:
    "relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ",
  projectImage: "rounded-xl group-hover:opacity-10",
  overlay:
    "hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]",
  overlayTitle: "text-2xl text-white tracking-wider text-center",
  overlayType: "pb-4 pt-2 text-white text-center",
  overlayLinkText:
    "text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer",
}

function ProjectItem({ title, type, image, url }) {
  return (
    <div className={tw.projectItemContainer}>
      <Image className={tw.projectImage} src={image} alt="/" />
      <div className={tw.overlay}>
        <h3 className={tw.overlayTitle}>{title}</h3>
        <p className={tw.overlayType}>{type}</p>
        <Link href={url}>
          <p className={tw.overlayLinkText}>More Info</p>
        </Link>
      </div>
    </div>
  )
}

export default ProjectItem
