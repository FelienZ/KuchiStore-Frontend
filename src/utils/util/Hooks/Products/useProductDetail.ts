import { useQuery } from "@tanstack/react-query";
import getProductDetail from "../../../services/Products/getProductDetail";
import type { Product } from "../../../types/Products/Products";
import type { ProductItemData } from "../../../types/Products/ProductData";

export default function useProductDetail(id: string){
    return useQuery<Product<ProductItemData>>({
        queryKey:['productId', id],
        queryFn: ()=> getProductDetail(id),
        staleTime: 1000 * 60 * 5
    })
}