import CollectionView from './CollectionView';

const activitiesEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/';

export default function Activities() {
  return <CollectionView collection={activitiesEndpoint} title="Activity log" description="Every run, ride, and strength session in one focused view." columns={[
    { key: 'username', label: 'Athlete' }, { key: 'type', label: 'Activity' },
    { key: 'durationMinutes', label: 'Minutes' }, { key: 'distanceKm', label: 'Distance (km)' },
  ]} />;
}