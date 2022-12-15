import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
function ContactIcons({ boxStyle, iconStyle, size }) {
  return (
    <div className={boxStyle}>
      <a href="https://www.linkedin.com/in/savcodes/" aria-label="Github">
        <div className={iconStyle}>
          <FaLinkedin size={size} color="#0A66C2" />
        </div>
      </a>
      <a href="https://github.com/Lunaliar" aria-label="LinkedIn">
        <div className={iconStyle}>
          <FaGithub size={size} color="#171515" />
        </div>
      </a>
    </div>
  )
}

export default ContactIcons
