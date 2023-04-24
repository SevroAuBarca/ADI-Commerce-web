import { create } from "zustand";

const useStore = create((set) => ({
  jwt: "",
  id_product: 0,
  user: {},
  products: [],
  setToken: (token) => set((_) => ({ jwt: token })),
  setIdProduct: (id) => set({ id_product: id }),
  setProducts: (products) => set({ products: products }),
  setUser: (user) => set({ user: user }),
}));

export default useStore;
