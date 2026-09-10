import CollectionView from './CollectionView';

const workoutsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/';

export default function Workouts() {
  return <CollectionView collection={workoutsEndpoint} title="Workouts" description="Short, practical sessions for wherever today finds you." columns={[
    { key: 'title', label: 'Workout' }, { key: 'focus', label: 'Focus' },
    { key: 'difficulty', label: 'Level' }, { key: 'durationMinutes', label: 'Minutes' },
  ]} />;
}