import CollectionView from './CollectionView';

export default function Teams() {
  return <CollectionView collection="teams" title="Teams" description="Find your people, share a motto, and keep moving together." columns={[
    { key: 'name', label: 'Team' }, { key: 'motto', label: 'Motto' },
    { key: 'memberUsernames', label: 'Members' },
  ]} />;
}