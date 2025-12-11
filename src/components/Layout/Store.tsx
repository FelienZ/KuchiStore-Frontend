import { Outlet } from "react-router";
import Navbar from "../Common/Navbar";
import '@/app.css'
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { AppSidebar } from "../Common/Sidebar";
import ScrollHelper from "@/utils/util/scrollTop";
export default function Store(){
    ScrollHelper()
    return(
        <SidebarProvider /* defaultOpen */>
            <AppSidebar/>
            <section className="font-[Poppins] grid min-h-screen text-foreground overflow-x-auto scrollbar-hide">
                <SidebarTrigger className="fixed top-[30vh] z-30 bg-background border rounded-none rounded-r-md"/>
                <Navbar/>
                <section className="w-[95vw] min-h-screen py-5 place-self-center">
                    <Outlet/>
                </section>
        </section>
        </SidebarProvider>
    )
}