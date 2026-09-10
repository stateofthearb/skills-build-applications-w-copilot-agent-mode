import CollectionView from './CollectionView';

export default function Activities() {
  return <CollectionView collection="activities" title="Activity log" description="Every run, ride, and strength session in one focused view." columns={[
    { key: 'username', label: 'Athlete' }, { key: 'type', label: 'Activity' },
    { key: 'durationMinutes', label: 'Minutes' }, { key: 'distanceKm', label: 'Distance (km)' },
  ]} />;
}