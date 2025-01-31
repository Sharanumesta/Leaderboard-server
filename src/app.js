import express, { json } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// import router
import userRouter from './routes/user.router.js';

// route middleware
app.use("/api/v1/leaderboard", userRouter);

export { app };