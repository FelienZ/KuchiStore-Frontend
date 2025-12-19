import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { useIsMobile } from "@/hooks/use-mobile"
import { HelpCircle, Home, Menu, ShoppingCart } from "lucide-react"
import { NavLink, useNavigate } from "react-router"
import { ComboboxDemo } from "./Combobox"
import useWidth from "@/hooks/useWindow"
import { Button } from "../ui/button"

export default function Navbar(){
    const isMobile = useIsMobile()
    const width = useWidth();
    const navigate = useNavigate()
    return(
        <NavigationMenu viewport={isMobile} className="w-screen font-[Roboto] bg-background text-foreground drop-shadow-sm border-b">
            <NavigationMenuList className="w-screen flex-wrap justify-between px-10 h-15">
                <NavigationMenuItem onClick={()=> navigate('/')} className="flex hover:cursor-pointer items-center gap-3">
                    <img src="/Kuchistore.svg" alt="" className="rounded-xs size-8 border"/>
                    <h1 className="font-bold text-xl">Kuchi Store</h1>
                </NavigationMenuItem>
                {width < 550 ? (
                    (width >= 265)?(<Button variant={'outline'} className="rounded-xs"><Menu/></Button>) : ''
                ): (
                    <NavigationMenuItem className="flex items-center h-full gap-8">
                        <NavLink to="/" className={({isActive}) => isActive ? 'border-b-foreground border-b-3 h-full flex items-center gap-2 text-sm' : 'flex items-center gap-2 text-sm'}><Home className="size-4"/>Home</NavLink>
                        <NavLink to="/products" className={({isActive}) => isActive ? 'border-b-foreground border-b-3 h-full flex items-center gap-2 text-sm' : 'flex items-center gap-2 text-sm'}><ShoppingCart className="size-4"/>Product</NavLink>
                        <NavLink to="/information" className={({isActive}) => isActive ? 'border-b-foreground border-b-3 h-full flex items-center gap-2 text-sm' : 'flex items-center gap-2 text-sm'}><HelpCircle className="size-4"/>Help</NavLink>
                    </NavigationMenuItem>
                )}
                <NavigationMenuItem className="max-md:hidden">
                    <ComboboxDemo/>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}