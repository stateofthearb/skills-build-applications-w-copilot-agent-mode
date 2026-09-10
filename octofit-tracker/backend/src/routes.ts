import { Router } from 'express';
import { Activity, Leaderboard, Team, User, Workout } from './models.js';

function collectionRoute(model: typeof User): Router {
  const router = Router();

  router.get('/', async (_request, response) => {
    try {
      response.json(await model.find().lean());
    } catch (error) {
      console.error(error);
      response.status(503).json({ error: 'Database unavailable' });
    }
  });

  return router;
}

export const userRoutes = collectionRoute(User);
export const teamRoutes = collectionRoute(Team);
export const activityRoutes = collectionRoute(Activity);
export const leaderboardRoutes = collectionRoute(Leaderboard);
export const workoutRoutes = collectionRoute(Workout);