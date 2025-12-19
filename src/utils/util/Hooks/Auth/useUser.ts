import GetUser from "@/utils/services/Auth/getUser";
import { useQuery } from "@tanstack/react-query";

export default function useUser(){
    return useQuery({
        queryKey: ['me'],
        queryFn: GetUser,
        staleTime: 1000 * 7 * 60
    })
}