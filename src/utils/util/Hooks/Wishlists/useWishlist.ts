import useAuth from "@/hooks/useAuth";
import GetWishlist from "@/utils/services/Wishlists/getWishlist";
import type { WishlistData } from "@/utils/types/Wishlists/WishlistData";
import type { Wishlist } from "@/utils/types/Wishlists/Wishlists";
import { useQuery } from "@tanstack/react-query";

export default function useWishlist(){
    const {isAuthenticated} = useAuth()
    return useQuery<Wishlist<WishlistData[]>>({
        queryKey: ['wishlist'],
        queryFn: ()=> GetWishlist(),
        staleTime: 60 * 1000 * 5,
        enabled: isAuthenticated
    })
}