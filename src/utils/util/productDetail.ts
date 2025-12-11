import { useQuery } from "@tanstack/react-query";
import getProductDetail from "../services/getProductDetail";
import type { ProductItemData } from "../types/ProductData";
import type { Product } from "../types/Products";

export default function useProductDetail(id: string){
    return useQuery<Product<ProductItemData>>({
        queryKey:['productId', id],
        queryFn: ()=> getProductDetail(id),
        staleTime: 1000 * 60 * 5
    })
}