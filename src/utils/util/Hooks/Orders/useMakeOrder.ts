import MakeOrder from "@/utils/services/Orders/POST/makeOrder";
import type { CreateOrder } from "@/utils/types/Orders/Actions/makeOrder";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Dispatch, SetStateAction } from "react";
import { toast } from "sonner";

export default function useMakeOrder(payload: CreateOrder, setOrder: Dispatch<SetStateAction<number>>){
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: () =>MakeOrder(payload),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['productId', payload.id]
            })
            queryClient.invalidateQueries({
                queryKey: ['orders']
            })
            setOrder(0)
            toast('Berhasil Memesan Barang')
        },
        onError:()=> {
            setOrder(0)
            toast('Gagal Memesan Barang')
        }
    })
}