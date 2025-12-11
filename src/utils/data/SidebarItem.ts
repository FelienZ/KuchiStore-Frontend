import { Heart, History, ShoppingCart, UserRound, type LucideProps } from "lucide-react"
import type { ForwardRefExoticComponent, RefAttributes } from "react"

interface SidebarItem{
    title: string,
    url: string,
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
}

export const SideBarData: SidebarItem[] = [
    {
        title: 'Your Profile',
        url: '/profile',
        icon: UserRound
    },
    {
        title: 'Your Orders',
        url: '/orders',
        icon: ShoppingCart
    },
    {
        title: 'Your Wishlist',
        url: '/wishlist',
        icon: Heart
    },
    {
        title: 'Your History',
        url: '/history',
        icon: History
    }
]