import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());
app.use(express.json())

const sendEmail = (options) => {
	try {
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: "giorgi.gomu@gmail.com",
				pass: "berniko1234",
			},
		});
		const mailOptions = {
			from: "giorgi.gomu@gmail.com",
			to: "giorgi.gomu@gmail.com",
			subject: options.subject,
			html: options.message,
		};

		transporter.sendMail(mailOptions, (error, info) => {
			if (error) throw error;
		});
	} catch (error) {
		console.log(error);
	}
};

app.route('/send_email').post(async (req, res) => {
	try {
		const { name, email, title, message } = req.body.contactInfo;
		console.log(req.body.contactInfo)
		let mailMessage = `
	            <h1>Sent from: ${email}</h1>
	            <h2>Name: ${name}</h2>
	            <h4>Title: ${title}</h4>
	            <p>Message: ${message}</p>
	        `;
		sendEmail({
			subject: title,
			message: mailMessage,
		});
		res.status(200).json({ message: "Email sent succesfully" });
	} catch (error) {
		return res.status(400).json({error: error.message });
	}
});

app.listen(process.env.PORT || 5000, (error) => {
	error && console.log(error);
	console.log(`Server connected`);
});


const __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

let NODE_ENV = 'production'

__dirname = path.resolve();
if (NODE_ENV) {
	app.use(express.static(path.join(__dirname,'/client/build')))
	app.get('*',(req,res) => {
		res.sendFile(path.resolve(__dirname,'client','build','index.html'))
	})
} else {
	app.get("/", (req, res) => {
		res.send("API is running");
	});
}
