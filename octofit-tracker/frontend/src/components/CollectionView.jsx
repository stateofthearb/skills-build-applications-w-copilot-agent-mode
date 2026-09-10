import { useEffect, useState } from 'react';
import { fetchCollection } from '../api';

function formatValue(value) {
  if (value === null || value === undefined || value === '') return 'Not set';
  if (Array.isArray(value)) return value.join(', ');
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value);
}

export default function CollectionView({ collection, title, description, columns }) {
  const [records, setRecords] = useState([]);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    fetchCollection(collection)
      .then((items) => {
        if (active) {
          setRecords(items);
          setStatus('ready');
        }
      })
      .catch((requestError) => {
        if (active) {
          setError(requestError.message);
          setStatus('error');
        }
      });
    return () => { active = false; };
  }, [collection]);

  return (
    <section className="view-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Live collection</p>
          <h1>{title}</h1>
          <p className="section-description">{description}</p>
        </div>
        <span className="record-count">{status === 'ready' ? `${records.length} records` : 'Syncing'}</span>
      </div>
      {status === 'loading' && <div className="empty-state">Loading the latest {title.toLowerCase()}.</div>}
      {status === 'error' && <div className="empty-state error-state">{error}</div>}
      {status === 'ready' && records.length === 0 && <div className="empty-state">No records yet.</div>}
      {status === 'ready' && records.length > 0 && (
        <div className="table-wrap">
          <table className="data-table">
            <thead><tr>{columns.map((column) => <th key={column.key}>{column.label}</th>)}</tr></thead>
            <tbody>{records.map((record, index) => (
              <tr key={record._id || `${collection}-${index}`}>
                {columns.map((column) => <td key={column.key}>{formatValue(record[column.key])}</td>)}
              </tr>
            ))}</tbody>
          </table>
        </div>
      )}
    </section>
  );
}