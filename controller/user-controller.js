import { ContactForm } from "../model/user.js";
const getUser = async (request,response)=>{
    try {
        const user = request.body;
        const newUser = new ContactForm(user);
        await newUser.save();
        response.status(200).json({
            success: true,
            message: "Data added successfully",
          });
    } catch (error) {
        response.status(500).json({
            success: false,
            message: error.message,
          });
    }
};
const getData = async (request,response)=>{
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
export {getUser,getData};