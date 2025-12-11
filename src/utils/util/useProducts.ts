import { useQuery } from "@tanstack/react-query";
import GetProducts from "../services/getProducts";
import type { Product } from "../types/Products";
import type { ProductItemData } from "../types/ProductData";

export default function useProducts(){
    return useQuery<Product<ProductItemData[]>>({
        queryKey: ['products'],
        queryFn: ()=> GetProducts(),
        staleTime: 60 * 1000 * 10
    })
}