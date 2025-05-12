import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useProductStore } from "@/src/store/useProductStore";
import { Product } from "../types/products";
import { useEffect } from "react";

// Sample data (to be replaced with API call)
const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Broccoli",
    label: "Organic",
    price: 80,
    image: "broccoli.svg",
  },
  {
    id: "2",
    name: "Bell Pepper Red",
    label: "Organic",
    price: 80,
    image: "bell_pepper_red.svg",
  },
  {
    id: "3",
    name: "Bell Pepper Red",
    label: "Organic",
    price: 80,
    image: "bell_peppera_red.svg",
  },
  {
    id: "4",
    name: "Bell Pepper Red",
    label: "Organic",
    price: 80,
    image: "bell_peppera_red.svg",
  },
];

// Fetch function (to be used with Axios)
const fetchProducts = async (): Promise<Product[]> => {
  // Uncomment this when the backend is ready
  // const response = await axios.get<Product[]>('https://your-api-endpoint/products');
  // return response.data;

  // Using sample data for now
  return sampleProducts;
};

export const useFetchProducts = () => {
  const { setProducts } = useProductStore();

  const query = useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  // Use useEffect to update the store when data is fetched
  useEffect(() => {
    if (query.data) {
      setProducts(query.data);
    }
  }, [query.data, setProducts]);

  return query;
};
