import { ContactForm } from "../model/user.js";
import nodemailer from 'nodemailer';
const getUser = async (request, response) => {
    try {
        const user = request.body;
        const newUser = new ContactForm(user);
        await newUser.save();
        response.status(200).json({
            success: true,
            message: "Data added successfully",
        });
        var transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: 'growsynonymss@gmail.com',
                pass: ''
            }
        });
        var mailOptions = {
            from: 'growsynonymss@gmail.com',
            to: user.Email,
            subject: 'Response',
            text: 'Done'
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            }
            else {
                console.log("Mail Sent Successfully", info.response);
            }
        });
    } catch (error) {
        response.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
const getData = async (request, response) => {
    try {
        const { secret } = request.params;
        const data = await ContactForm.find({ Secret: secret });
        if (data.length === 0) {
            throw new Error("Invalid secret passed");
        } else {
            response.status(200).json({
                success: true,
                message: "Data fetched successfully",
                data,
            });
        }
    } catch (error) {
        response.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
export { getUser, getData };
