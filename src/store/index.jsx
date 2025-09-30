export const Loader = create((set) => ({
  index: false,
  openLoader: set(() => (index: true)),
  closeLoader: set(() => (index: false)),
}));
