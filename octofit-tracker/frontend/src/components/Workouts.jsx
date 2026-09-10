import CollectionView from './CollectionView';

export default function Workouts() {
  return <CollectionView collection="workouts" title="Workouts" description="Short, practical sessions for wherever today finds you." columns={[
    { key: 'title', label: 'Workout' }, { key: 'focus', label: 'Focus' },
    { key: 'difficulty', label: 'Level' }, { key: 'durationMinutes', label: 'Minutes' },
  ]} />;
}