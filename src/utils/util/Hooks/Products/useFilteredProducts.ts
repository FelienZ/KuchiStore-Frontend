import GetFilteredProducts from "../../../services/Products/getFilteredProducts"
import { useQuery } from "@tanstack/react-query"
import type { Product } from "../../../types/Products/Products"
import type { ProductItemData } from "../../../types/Products/ProductData"

// query cache product via label
export default function useFilteredProducts(query: string, filter:string){
    return useQuery<Product<ProductItemData[]>>({
        queryKey: ['filteredProducts', filter],
        queryFn: ()=> GetFilteredProducts(query, filter),
        staleTime: 1000 * 60 * 5
    })
}