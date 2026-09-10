import CollectionView from './CollectionView';

const leaderboardEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/';

export default function Leaderboard() {
  return <CollectionView collection={leaderboardEndpoint} title="Leaderboard" description="Friendly competition powered by consistent movement." columns={[
    { key: 'rank', label: 'Rank' }, { key: 'username', label: 'Athlete' },
    { key: 'points', label: 'Points' }, { key: 'week', label: 'Week' },
  ]} />;
}