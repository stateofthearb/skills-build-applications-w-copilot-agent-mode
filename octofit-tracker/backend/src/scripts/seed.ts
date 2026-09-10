import mongoose from 'mongoose';
import { Activity, Leaderboard, Team, User, Workout } from '../models.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    // Seed the octofit_db database with test data.
    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    await User.insertMany([
      { username: 'alex', email: 'alex@example.com', displayName: 'Alex Morgan', avatar: 'AM' },
      { username: 'jamie', email: 'jamie@example.com', displayName: 'Jamie Chen', avatar: 'JC' },
      { username: 'riley', email: 'riley@example.com', displayName: 'Riley Patel', avatar: 'RP' },
    ]);

    await Team.insertMany([
      { name: 'Summit Seekers', motto: 'Small steps, strong finish.', memberUsernames: ['alex', 'jamie'] },
      { name: 'Trail Blazers', motto: 'Move together.', memberUsernames: ['riley'] },
    ]);

    await Activity.insertMany([
      { username: 'alex', type: 'Run', durationMinutes: 32, distanceKm: 5.2, completedAt: new Date('2026-09-08T07:30:00Z') },
      { username: 'jamie', type: 'Cycling', durationMinutes: 45, distanceKm: 14.8, completedAt: new Date('2026-09-08T18:15:00Z') },
      { username: 'riley', type: 'Strength', durationMinutes: 28, completedAt: new Date('2026-09-09T06:45:00Z') },
    ]);

    await Leaderboard.insertMany([
      { username: 'alex', points: 420, rank: 1, week: '2026-W37' },
      { username: 'jamie', points: 365, rank: 2, week: '2026-W37' },
      { username: 'riley', points: 310, rank: 3, week: '2026-W37' },
    ]);

    await Workout.insertMany([
      {
        title: 'Morning Momentum', focus: 'Full body', difficulty: 'Beginner', durationMinutes: 20,
        equipment: ['Yoga mat'], exercises: ['Bodyweight squats', 'Incline push-ups', 'Bird dogs'],
      },
      {
        title: 'Core and Cardio', focus: 'Core', difficulty: 'Intermediate', durationMinutes: 30,
        equipment: ['Jump rope'], exercises: ['Mountain climbers', 'Plank', 'High knees'],
      },
    ]);

    console.log('Database seeding complete: 3 users, 2 teams, 3 activities, 3 leaderboard entries, and 2 workouts.');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
