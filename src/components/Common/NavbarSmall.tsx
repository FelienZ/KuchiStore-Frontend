import { HelpCircle, Home, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router";

type TriggerStatus = {
  isOpen: boolean;
};
export default function NavbarSmall({ isOpen }: TriggerStatus) {
  return (
    isOpen && (
      <nav className="grid gap-3 pt-3 border-b divide-y">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "justify-center pb-6 pt-3 w-full h-full flex items-center gap-2 text-sm"
              : "flex justify-center pb-6 pt-3 items-center gap-2 text-sm"
          }
        >
          <Home className="size-4" />
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? "justify-center pb-6 pt-3  w-full h-full flex items-center gap-2 text-sm"
              : "flex justify-center pb-6 pt-3 items-center gap-2 text-sm"
          }
        >
          <ShoppingCart className="size-4" />
          Product
        </NavLink>
        <NavLink
          to="/information"
          className={({ isActive }) =>
            isActive
              ? "justify-center pb-6 pt-3  w-full h-full flex items-center gap-2 text-sm"
              : "flex justify-center pb-6 pt-3 items-center gap-2 text-sm"
          }
        >
          <HelpCircle className="size-4" />
          Help
        </NavLink>
      </nav>
    )
  );
}
