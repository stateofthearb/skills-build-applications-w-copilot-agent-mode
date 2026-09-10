import CollectionView from './CollectionView';

export default function Leaderboard() {
  return <CollectionView collection="leaderboard" title="Leaderboard" description="Friendly competition powered by consistent movement." columns={[
    { key: 'rank', label: 'Rank' }, { key: 'username', label: 'Athlete' },
    { key: 'points', label: 'Points' }, { key: 'week', label: 'Week' },
  ]} />;
}