import { TableOfContents, LayoutDashboard, BookMarked, CircleHelp, ChartPie, Settings, LogOut } from "lucide-react"
import Logo from '../assets/logo.svg';

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
    {
        title: "Dashboard",
        url: "#",
        icon: LayoutDashboard,
    },
    {
        title: "Student",
        url: "#",
        icon: BookMarked,
    },
    {
        title: "Chapter",
        url: "#",
        icon: TableOfContents,
    },
    {
        title: "Help",
        url: "#",
        icon: CircleHelp,
    },
    {
        title: "Reports",
        url: "#",
        icon: ChartPie,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
    {
        title:"Logout",
        url:"/",
        icon:LogOut,
    }
]

export default function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <img src={Logo} alt="logo" width={100} />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>

                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
