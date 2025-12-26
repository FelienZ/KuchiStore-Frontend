import DeleteWishlist from "@/utils/services/Wishlists/deleteWishlist";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useDeleteWishlist(payload: string | undefined){
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:()=> DeleteWishlist(payload!),
        onSuccess: () =>{
            queryClient.invalidateQueries({
                queryKey: ['wishlist']
            })
            toast('Berhasil Menghapus Wishlist')
        }
    })
}