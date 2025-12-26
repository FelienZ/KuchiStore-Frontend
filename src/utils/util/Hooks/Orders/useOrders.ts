import useAuth from "@/hooks/useAuth";
import GetOrders from "@/utils/services/Orders/GET/getOrder";
import { useQuery } from "@tanstack/react-query";

export default function useOrder(){
    const {isAuthenticated} = useAuth()
    return useQuery({
        queryKey: ['orders'],
        queryFn: ()=> GetOrders(),
        staleTime: 1000 * 5 * 60,
        enabled: isAuthenticated
    })
}