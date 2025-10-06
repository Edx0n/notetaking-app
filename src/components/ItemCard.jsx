import useAppStore from '../store/useAppStore';

function ItemCard({ item }) {
  const removeItem = useAppStore((state) => state.removeItem);

  const handleDelete = () => {
    if (window.confirm('Delete this item?')) {
      removeItem(item.id);
    }
  };

  return (
    <div className="item-card">
      <h3>{item.title}</h3>
      <p>{item.content}</p>
      {item.timestamp && (
        <small className="timestamp">
          {new Date(item.timestamp).toLocaleString()}
        </small>
      )}
      <div className="item-actions">
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
