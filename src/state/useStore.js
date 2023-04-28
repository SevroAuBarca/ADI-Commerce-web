import { create } from "zustand";

const useStore = create((set) => ({
  jwt: "",
  id_product: "",
  user: {},
  products: [],
  product: {},
  setToken: (token) => set((_) => ({ jwt: token })),
  setProducts: (products) => set({ products: products }),
  setIdProduct: (id) => set({ id_product: id }),
  setProduct: (data) => set({ product: data }),
  setUser: (user) => set({ user: user }),
}));

export default useStore;
