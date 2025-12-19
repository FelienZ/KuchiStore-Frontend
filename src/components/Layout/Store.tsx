import { Outlet } from "react-router";
import Navbar from "../Common/Navbar";
import '@/app.css'
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { AppSidebar } from "../Common/Sidebar";
import ScrollHelper from "@/utils/util/Helper/scrollTop";
import { Toaster } from "../ui/sonner";
export default function Store(){
    ScrollHelper()
    return(
        <SidebarProvider /* defaultOpen */>
            <AppSidebar/>
            <section className="font-[Poppins] grid text-foreground overflow-x-auto scrollbar-hide">
                <SidebarTrigger className="fixed top-[30vh] z-30 bg-background border rounded-none rounded-r-md"/>
                <Navbar/>
                <Toaster/>
                <section className="w-screen min-h-screen my-5">
                    <Outlet/>
                </section>
            </section>
        </SidebarProvider>
    )
}