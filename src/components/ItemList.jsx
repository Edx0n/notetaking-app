import useAppStore from '../store/useAppStore';
import ItemCard from './ItemCard';

function ItemList() {
  const items = useAppStore((state) => state.items);

  if (items.length === 0) {
    return (
      <div className="empty-state">
        <p>ðŸ“­ No items yet. Add your first item!</p>
      </div>
    );
  }

  return (
    <div className="item-list">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemList;
