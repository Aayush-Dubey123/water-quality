"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  AlertTriangle,
  BarChart3,
  Bell,
  Droplets,
  Gauge,
  LayoutDashboard,
  LogOut,
  Settings,
  User,
  Wifi,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 px-2">
          <Droplets className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">AquaMonitor Pro</span>
        </Link>
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/"} tooltip="Dashboard">
              <Link href="/">
                <LayoutDashboard />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/parameters"} tooltip="Parameters">
              <Link href="/parameters">
                <Gauge />
                <span>Parameters</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/alerts"} tooltip="Alerts">
              <Link href="/alerts">
                <AlertTriangle />
                <span>Alerts</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/devices"} tooltip="Devices">
              <Link href="/devices">
                <Wifi />
                <span>Devices</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/reports"} tooltip="Reports">
              <Link href="/reports">
                <BarChart3 />
                <span>Reports</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/settings"} tooltip="Settings">
              <Link href="/settings">
                <Settings />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter className="flex items-center justify-between p-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 h-auto p-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback>OP</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start text-sm">
                <span className="font-medium">Operator</span>
                <span className="text-xs text-muted-foreground">operator@example.com</span>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Bell className="mr-2 h-4 w-4" />
              <span>Notifications</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <ModeToggle />
      </SidebarFooter>
    </Sidebar>
  )
}
