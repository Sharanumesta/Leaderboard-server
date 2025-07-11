import dotenv from 'dotenv';
import connectDB from './db/db.js';
import { app } from './app.js';

dotenv.config({ path: './.env' });

const PORT = process.env.PORT || 8080;

const startServer = async () => {
  try {
    await connectDB();
    // local server
    // app.listen(PORT, () => {
    //   console.log(`✅ Server is running at http://localhost:${PORT}`);
    // });

    // for vercel
    app(req, res);
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1);
  }
};

startServer();
