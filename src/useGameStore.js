import { create } from 'zustand';

export const useGameStore = create((set) => ({
  selectedCategory: "", // Yeh aapka data hai
  
  // Yeh woh function hai jo pota direct chalaye ga
  setCategory: (category) => set({ selectedCategory: category }),
}));