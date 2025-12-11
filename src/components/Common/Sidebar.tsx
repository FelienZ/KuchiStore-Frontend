'use client'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui//button"
import { motion } from "motion/react"
import { Moon, SunMedium } from "lucide-react"
import useTheme from "@/hooks/useTheme"
import { SideBarData } from "@/utils/data/SidebarItem"
import { NavLink } from "react-router"

export function AppSidebar() {
  const {theme, setTheme} = useTheme()
  return (
    <Sidebar className="font-[Roboto">
      <SidebarContent>
        <SidebarGroup className="h-full items-center">
          <SidebarGroupLabel className="font-bold text-sm my-2"><h2>{'Store MenuBar'.toUpperCase()}</h2></SidebarGroupLabel>
          <SidebarGroupContent className="h-full">
            <SidebarMenu className="mt-6 px-1 gap-4">
                {SideBarData.map(i=> (
                  <SidebarMenuItem key={i.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={i.url} className={({isActive}) => isActive ? '' : ''}>
                      <i.icon />
                      <span>{i.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem className="flex items-center justify-between p-2">
                <p className="font-medium text-sm">Theme</p>
                <Button onClick={()=>setTheme()} className={`rounded-full transition-colors ease-in-out duration-300 flex w-12 h-6 p-1 ${theme === 'dark' ? 'justify-end bg-neutral-700 hover:bg-neutral-800' : 'justify-start bg-neutral-200 hover:bg-neutral-300'}`}>
                <motion.div
                    className={`size-5 rounded-full transition-colors duration-200 ease-in-out ${theme === 'light' ? 'bg-neutral-300 text-neutral-600' : 'bg-neutral-800 text-white'} items-center justify-center flex my-0`}
                    layout
                    transition={{
                        type: "spring",
                        visualDuration: 0.2,
                        bounce: 0.2,
                    }}
                >
                  {theme === 'light' ? <SunMedium/> : <Moon/>}
                  </motion.div>
                </Button>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
  )
}