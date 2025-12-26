import MakeWishlist from "@/utils/services/Wishlists/makeWishlist";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useMakeWishlist(payload: string | undefined){
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:()=> MakeWishlist(payload!),
        onSuccess: () =>{
            queryClient.invalidateQueries({
                queryKey: ['wishlist']
            })
            toast('Berhasil Menambahkan Wishlist')
        }
    })
}