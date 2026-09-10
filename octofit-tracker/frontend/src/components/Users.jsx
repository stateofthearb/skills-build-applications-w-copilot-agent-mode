import CollectionView from './CollectionView';

export default function Users() {
  return <CollectionView collection="users" title="Athletes" description="The OctoFit community, ready for its next good habit." columns={[
    { key: 'displayName', label: 'Name' }, { key: 'username', label: 'Username' },
    { key: 'email', label: 'Email' },
  ]} />;
}