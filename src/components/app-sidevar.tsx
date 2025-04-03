// AppSidebar.tsx
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaHome } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";

const menu = [
  {
    title: "Home",
    url: "/dashboard/home",
    icon: FaHome,
  },
  {
    title: "Materi",
    url: "/dashboard/materi",
    icon: MdLibraryBooks,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="lg:block hidden">
      <SidebarGroup className="border-b-2 p-4">
        <SidebarContent className="text-xl flex justify-between items-center">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/images/bot.png" alt="BotKom Logo" />
            <AvatarFallback>BotKom</AvatarFallback>
          </Avatar>
          <span>ChatBot Dashboard</span>
        </SidebarContent>
      </SidebarGroup>

      <SidebarGroup>
        <SidebarContent>
          <SidebarMenu>
            {menu.map((item) => (
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
        </SidebarContent>
      </SidebarGroup>
    </Sidebar>
  );
}
