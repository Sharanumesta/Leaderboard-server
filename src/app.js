import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

import userRouter from './routes/user.router.js';

app.use("/api/v1/leaderboard", userRouter);

export { app };
