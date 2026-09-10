import CollectionView from './CollectionView';

const teamsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/';

export default function Teams() {
  return <CollectionView collection={teamsEndpoint} title="Teams" description="Find your people, share a motto, and keep moving together." columns={[
    { key: 'name', label: 'Team' }, { key: 'motto', label: 'Motto' },
    { key: 'memberUsernames', label: 'Members' },
  ]} />;
}