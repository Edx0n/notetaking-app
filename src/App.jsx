import { useState } from 'react';
import useAppStore from './store/useAppStore';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import './App.css';

function App() {
  const [showForm, setShowForm] = useState(false);
  const items = useAppStore((state) => state.items);

  return (
    <div className="App">
      <header className="app-header">
        <h1>âš¡ React App</h1>
        <p>Built with Vite + React + Zustand</p>
      </header>

      <div className="container">
        <div className="actions">
          <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Hide Form' : '+ Add New Item'}
          </button>
        </div>

        {showForm && <ItemForm onClose={() => setShowForm(false)} />}

        <div className="stats">
          <p>Total Items: {items.length}</p>
        </div>

        <ItemList />
      </div>
    </div>
  );
}

export default App;
