import CollectionView from './CollectionView';

const usersEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/';

export default function Users() {
  return <CollectionView collection={usersEndpoint} title="Athletes" description="The OctoFit community, ready for its next good habit." columns={[
    { key: 'displayName', label: 'Name' }, { key: 'username', label: 'Username' },
    { key: 'email', label: 'Email' },
  ]} />;
}