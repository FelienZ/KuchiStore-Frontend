import { Outlet } from "react-router";
import Navbar from "../Common/Navbar";
import "@/app.css";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { AppSidebar } from "../Common/Sidebar";
import ScrollHelper from "@/utils/util/Helper/scrollTop";
import { Toaster } from "../ui/sonner";
import { useEffect, useState } from "react";
import NavbarSmall from "../Common/NavbarSmall";
import useWidth from "@/hooks/useWindow";
export default function Store() {
  ScrollHelper();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenNav, setIsOpenNav] = useState(false);
  const width = useWidth();
  function handleTrigger() {
    setIsOpenNav(!isOpenNav);
  }
  function handleClose() {
    setIsOpenNav(false);
  }
  useEffect(() => {
    if (width > 550) {
      handleClose();
    }
  }, [width]);
  return (
    <SidebarProvider /* defaultOpen */>
      <AppSidebar />
      <section
        className={`font-[Poppins] ${
          isOpen ? "" : "place-content-center"
        } grid text-foreground overflow-x-auto scrollbar-hide`}
      >
        <SidebarTrigger
          onClick={() => setIsOpen(true)}
          className="fixed top-[50vh] z-30 bg-background border rounded-none rounded-r-md"
        />
        <header className="flex flex-col">
          <Navbar handleTrigger={handleTrigger} />
          <NavbarSmall isOpen={isOpenNav} />
        </header>
        <Toaster />
        <section className="w-screen min-h-screen my-5">
          <Outlet />
        </section>
      </section>
    </SidebarProvider>
  );
}
