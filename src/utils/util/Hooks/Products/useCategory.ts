import getProductsByCategory from "@/utils/services/Products/GET/getProductsByCategory";
import { useQuery } from "@tanstack/react-query";

export default function useCategory(payload: string) {
    return useQuery({
        queryKey: ['categories', payload],
        queryFn:()=> getProductsByCategory(payload),
        staleTime: 1000 * 60 * 5
    })
}