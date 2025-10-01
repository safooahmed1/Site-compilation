import { create } from "zustand";

export const LoadeR = create((set) => ({
  index: false,

  openLoader: () => set({ index: true }),
  closeLoader: () => set({ index: false }),
}));
