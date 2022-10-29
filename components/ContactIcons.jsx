import React from "react";
import {GrMailOption} from "react-icons/gr";
import {FaGit, FaGithub, FaLinkedinIn} from "react-icons/fa";
import {BsFillPersonLinesFill} from "react-icons/bs";
function ContactIcons({boxStyle, iconStyle, size}) {
	return (
		<div className={boxStyle}>
			<div className={iconStyle}>
				<FaLinkedinIn size={size} />
			</div>
			<div className={iconStyle}>
				<FaGithub size={size} />
			</div>
			<div className={iconStyle}>
				<GrMailOption size={size} />
			</div>
			<div className={iconStyle}>
				<BsFillPersonLinesFill size={size} />
			</div>
		</div>
	);
}

export default ContactIcons;
