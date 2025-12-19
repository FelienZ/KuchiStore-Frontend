import { useQuery } from "@tanstack/react-query";
import GetProductsByName from "../../../services/Products/getProductsByName";

export default function useSearch(name: string){
    return useQuery({
        queryKey: ['search', name],
        queryFn: ()=> GetProductsByName(name),
        staleTime: 1000 * 60 * 5
    })
}