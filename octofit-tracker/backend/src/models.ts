import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
	username: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	displayName: { type: String, required: true },
	avatar: String,
}, { timestamps: true });

const teamSchema = new Schema({
	name: { type: String, required: true },
	motto: String,
	memberUsernames: [{ type: String }],
}, { timestamps: true });

const activitySchema = new Schema({
	username: { type: String, required: true },
	type: { type: String, required: true },
	durationMinutes: { type: Number, required: true },
	distanceKm: Number,
	completedAt: { type: Date, required: true },
}, { timestamps: true });

const leaderboardSchema = new Schema({
	username: { type: String, required: true },
	points: { type: Number, required: true },
	rank: { type: Number, required: true },
	week: { type: String, required: true },
}, { timestamps: true });

const workoutSchema = new Schema({
	title: { type: String, required: true },
	focus: { type: String, required: true },
	difficulty: { type: String, required: true },
	durationMinutes: { type: Number, required: true },
	equipment: [{ type: String }],
	exercises: [{ type: String }],
}, { timestamps: true });

export const User = mongoose.models.User || mongoose.model('User', userSchema, 'users');
export const Team = mongoose.models.Team || mongoose.model('Team', teamSchema, 'teams');
export const Activity = mongoose.models.Activity || mongoose.model('Activity', activitySchema, 'activities');
export const Leaderboard = mongoose.models.Leaderboard || mongoose.model('Leaderboard', leaderboardSchema, 'leaderboard');
export const Workout = mongoose.models.Workout || mongoose.model('Workout', workoutSchema, 'workouts');