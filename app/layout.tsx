import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/components/auth-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AquaMonitor Pro - Industrial Water Quality Monitoring",
  description: "Real-time industrial water quality monitoring and analytics platform",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <SidebarProvider>
              <div className="flex h-screen">
                <AppSidebar />
                <main className="flex-1 overflow-auto">{children}</main>
              </div>
              <Toaster />
            </SidebarProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'