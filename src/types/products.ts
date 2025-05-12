export type Product = {
  id: string;
  name: string;
  label: string;
  price: number;
  image: string;
};

export type ProductState = {
  products: Product[];
  setProducts: (products: Product[]) => void;
};
