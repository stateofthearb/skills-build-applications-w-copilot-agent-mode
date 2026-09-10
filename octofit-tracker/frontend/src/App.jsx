import { NavLink, Route, Routes } from 'react-router-dom';
import { getApiBaseUrl } from './api';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';

const links = [
  { to: '/', label: 'Overview' }, { to: '/activities', label: 'Activities' },
  { to: '/leaderboard', label: 'Leaderboard' }, { to: '/teams', label: 'Teams' },
  { to: '/users', label: 'Athletes' }, { to: '/workouts', label: 'Workouts' },
];

function Overview() {
  return (
    <section className="overview">
      <p className="eyebrow">OctoFit Tracker</p>
      <h1>Make momentum visible.</h1>
      <p className="lead">A calm home base for logging movement, finding your team, and seeing the week add up.</p>
      <div className="overview-grid">
        <NavLink className="feature-link feature-link-coral" to="/activities"><span>01</span><strong>Log movement</strong><small>See every session in one place.</small></NavLink>
        <NavLink className="feature-link feature-link-teal" to="/leaderboard"><span>02</span><strong>Track the climb</strong><small>Celebrate consistency with your crew.</small></NavLink>
        <NavLink className="feature-link feature-link-gold" to="/workouts"><span>03</span><strong>Find your next</strong><small>Choose a workout that fits today.</small></NavLink>
      </div>
    </section>
  );
}

export default function App() {
  const configured = Boolean(import.meta.env.VITE_CODESPACE_NAME);
  return (
    <div className="app-shell">
      <header className="topbar">
        <NavLink className="brand" to="/"><img className="brand-logo" src="/octofitapp-small.png" alt="" /><span>OctoFit</span></NavLink>
        <nav aria-label="Primary navigation">{links.map((link) => <NavLink key={link.to} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to={link.to}>{link.label}</NavLink>)}</nav>
      </header>
      {!configured && <div className="config-note">Using localhost API. Set <code>VITE_CODESPACE_NAME</code> in <code>.env.local</code> for Codespaces.</div>}
      <main><Routes><Route path="/" element={<Overview />} /><Route path="/activities" element={<Activities />} /><Route path="/leaderboard" element={<Leaderboard />} /><Route path="/teams" element={<Teams />} /><Route path="/users" element={<Users />} /><Route path="/workouts" element={<Workouts />} /></Routes></main>
      <footer><span>API</span><code>{getApiBaseUrl()}</code></footer>
    </div>
  );
}