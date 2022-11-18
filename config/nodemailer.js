import nodemailer from "nodemailer";
const emailFrom = process.env.EMAIL_FROM;
const emailTo = process.env.EMAIL_TO
const pass = process.env.EMAIL_PASS;
export const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: emailFrom,
		pass,
	},
});
export const mailOptions = {
	from: emailFrom,
	to: emailTo,
};
