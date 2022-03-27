import mongoose from 'mongoose';
const contactFormSchema = new mongoose.Schema(
    {
      Name: {
        type: String,
        required: true,
      },
      Address: {
        type: String,
        required: true,
      },
      Email: {
        type: String,
        match: /.+\@.+\..+/,
        required: true,
      },
      JobStatus: {
        type: String,
        required: true,
        enum: ["Unemployed", "Working", "Student", "Retired"],
      },
      DoLiketoCode: {
        type: String,
        required: true,
      },
      Secret: {
        type: String,
        required: true,
      },
    },
    { timestamp: true }
  );
const ContactForm = mongoose.model('ContactForm',contactFormSchema);
export {ContactForm};