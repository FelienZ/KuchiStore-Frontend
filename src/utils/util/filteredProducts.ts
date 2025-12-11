import GetFilteredProducts from "../services/getFilteredProducts"
import { useQuery } from "@tanstack/react-query"
import type { Product } from "../types/Products"
import type { ProductItemData } from "../types/ProductData"

export default function useFilteredProducts(query: string, filter:string){
    return useQuery<Product<ProductItemData[]>>({
        queryKey: ['filteredProducts', filter],
        queryFn: ()=> GetFilteredProducts(query, filter),
        staleTime: 1000 * 60 * 5
    })
}