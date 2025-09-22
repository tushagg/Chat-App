import { create } from 'zustand';

const useImageModalStore = create((set) => ({
  isOpen: false,
  imageUrl: '',
  openModal: (imageUrl) => set({ isOpen: true, imageUrl }),
  closeModal: () => set({ isOpen: false, imageUrl: '' }),
}));

export default useImageModalStore;
