import mongoose, { mongo } from "mongoose";

async function conectaNaDatabase() {
    mongoose.connect(process.env.MONGODB_URI);
    return mongoose.connection;
};

export default conectaNaDatabase;



