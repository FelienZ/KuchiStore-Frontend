import useAuth from "@/hooks/useAuth";
import GetAccount from "@/utils/services/Auth/getAccount";
import { useMutation } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router";
import { queryClient } from "../../Helper/QueryClientInstance";

export default function useAccount(email: string, password: string){
    const {revalidateAuth} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from.pathname
    return useMutation({
        mutationFn:()=> GetAccount(email, password),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['me']})
            revalidateAuth()
            navigate(from, {replace: true})
        },
    })
}