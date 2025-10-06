import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAppStore = create(
  persist(
    (set) => ({
      items: [
        { id: 1, title: 'Welcome!', content: 'This is a basic template', timestamp: new Date().toISOString() },
        { id: 2, title: 'Getting Started', content: 'Edit this app to make it yours', timestamp: new Date().toISOString() }
      ],
      addItem: (item) => set((state) => ({ 
        items: [...state.items, { ...item, id: Date.now(), timestamp: new Date().toISOString() }] 
      })),
      removeItem: (id) => set((state) => ({ 
        items: state.items.filter((item) => item.id !== id) 
      })),
      updateItem: (id, updatedItem) => set((state) => ({
        items: state.items.map((item) => item.id === id ? { ...item, ...updatedItem } : item)
      })),
      clearItems: () => set({ items: [] }),
    }),
    {
      name: 'app-storage'
    }
  )
);

export default useAppStore;
