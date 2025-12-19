import { useQuery } from "@tanstack/react-query";
import GetProducts from "../../../services/Products/getProducts";
import type { Product } from "../../../types/Products/Products";
import type { ProductItemData } from "../../../types/Products/ProductData";

export default function useProducts(pages: string){
    return useQuery<Product<ProductItemData[]>>({
        queryKey: ['products', pages],
        queryFn: ()=> GetProducts(pages),
        staleTime: 60 * 1000 * 5
    })
}