import { useState } from 'react';
import useAppStore from '../store/useAppStore';

function ItemForm({ onClose }) {
  const addItem = useAppStore((state) => state.addItem);
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.trim()) {
      addItem(formData);
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Add New Item</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title *</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Enter title..."
              required
            />
          </div>
          <div className="form-group">
            <label>Content</label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              placeholder="Enter content..."
              rows="4"
            />
          </div>
          <div className="form-actions">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ItemForm;
