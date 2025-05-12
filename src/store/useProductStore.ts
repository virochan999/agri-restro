import { create } from "zustand";
import { ProductState } from "@/src/types/products";

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));
