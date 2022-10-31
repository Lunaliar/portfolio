import React from "react";
import {GrMailOption} from "react-icons/gr";
import {FaGit, FaGithub, FaLinkedinIn} from "react-icons/fa";
import {BsFillPersonLinesFill} from "react-icons/bs";
function ContactIcons({boxStyle, iconStyle, size}) {
	return (
		<div className={boxStyle}>
			<a href="https://www.linkedin.com/in/savcodes/" aria-label="Github">
				<div className={iconStyle}>
					<FaLinkedinIn size={size} />
				</div>
			</a>
			<a href="https://github.com/Lunaliar" aria-label="LinkedIn">
				<div className={iconStyle}>
					<FaGithub size={size} />
				</div>
			</a>
		</div>
	);
}

export default ContactIcons;
