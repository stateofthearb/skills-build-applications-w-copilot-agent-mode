import express from "express";
import { connectDatabase } from './config/database.js';
import {
  activityRoutes,
  leaderboardRoutes,
  teamRoutes,
  userRoutes,
  workoutRoutes,
} from './routes.js';

const app = express();
const port = 8000;
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${port}`;

app.use(express.json());

app.get("/", (_request, response) => {
  response.json({ name: "OctoFit Tracker API", status: "ok", baseUrl });
});

app.use('/api/users', userRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/leaderboard', leaderboardRoutes);
app.use('/api/workouts', workoutRoutes);

app.listen(port, async () => {
  console.log(`OctoFit Tracker API listening at ${baseUrl}`);
  try {
    await connectDatabase();
  } catch (error) {
    console.error('Database unavailable; API started without a database connection.', error);
  }
});