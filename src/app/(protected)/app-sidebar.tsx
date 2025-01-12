"use client";

import {
  Bot,
  CreditCard,
  LayoutDashboard,
  Plus,
  Presentation,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "~/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "~/components/ui/sidebar";
import { cn } from "~/lib/utils";
import localFont from "next/font/local";

// Set up the custom font
const meillina = localFont({
  src: "./Meillina.ttf",
  variable: "--font-meillina",
});

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Q&A",
    url: "/qa",
    icon: Bot,
  },
  {
    title: "Meeting",
    url: "/meeting",
    icon: Presentation,
  },
  {
    title: "Billing",
    url: "/billing",
    icon: CreditCard,
  },
];

const projects = [
  {
    name: "Project 1",
  },
  {
    name: "Project 2",
  },
  {
    name: "Project 3",
  },
  {
    name: "Project 4",
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { open } = useSidebar();
  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader>
        {!open && (
          <span
            className={`${meillina.className} items-center text-center text-3xl`}
            style={{ color: "#020f40" }}
          >
            Sh
          </span>
        )}
        {open && (
          <span
            className={`${meillina.className} items-center text-center text-3xl`}
            style={{ color: "#020f40" }}
          >
            Shadwal
          </span>
        )}
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className={cn(
                          {
                            "!bg-primary !text-white": pathname === item.url,
                          },
                          "list-none",
                        )}
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Your Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {projects.map((projects) => {
                return (
                  <SidebarMenuItem key={projects.name}>
                    <SidebarMenuButton asChild>
                      <div>
                        {!open ? (
                          <div
                            className={cn(
                              "-ml-[2.65] flex min-h-[22px] min-w-[22px] items-center justify-center rounded-sm border bg-white text-xs text-primary",
                              {
                                "bg-primary text-white": true,
                              },
                            )}
                          >
                            {projects.name[0]}
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <div
                              className={cn(
                                "flex h-8 w-8 items-center justify-center rounded-sm border bg-white text-sm text-primary",
                                {
                                  "bg-primary text-white": true,
                                },
                              )}
                            >
                              {projects.name[0]}
                            </div>
                            <span>{projects.name}</span>
                          </div>
                        )}
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
              <div className="h-2"></div>
              <SidebarMenuItem>
                <Link href="/create">
                  <Button size="sm" variant="outline" className="w-fit">
                    {!open ? (
                      <div
                        className={cn(
                          "flex h-10 w-1.5 items-center justify-center rounded-lg transition-colors",
                          "cursor-pointer",
                        )}
                      >
                        <Plus />
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Plus />
                        Create Project
                      </div>
                    )}
                  </Button>
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
