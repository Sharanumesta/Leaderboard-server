import dotenv from 'dotenv';
import connectDB from './db/db.js';
import { app } from './app.js';

dotenv.config({ path: './.env' });

const handler = async (req, res) => {
  try {
    await connectDB();
    app(req, res);
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    res.status(500).send('Error while connecting to the database');
  }
};

export default handler;
