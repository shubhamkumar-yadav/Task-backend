import mongoose from 'mongoose';
const Connection = async () => {
    try {
        const URL = 'mongodb+srv://codeWithShubham:shubhamkinidhi130617@ecommerceweb.spevi.mongodb.net/PROJECT?retryWrites=true&w=majority';
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('connected to database');
    } catch (error) {
        console.log('Error while connecting database', error.message);
    }
};
export { Connection };