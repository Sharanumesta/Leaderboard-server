import dotenv from 'dotenv';
import connectDB from './db/db.js';
import { app } from './app.js';

dotenv.config({ path: './.env'});

connectDB().then(() => {
    app.on("error", (err) => {
        console.log("ERROR :", err);
        throw err;
    });
    
    app.listen(process.env.PORT,() => {
        console.log(`🚀 Server is running at ${process.env.PORT}`);
    });
}).catch((err) => {
    console.log("MongoDB connection failed !!!", err);
});