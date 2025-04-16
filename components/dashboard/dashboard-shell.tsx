import type React from "react"
interface DashboardShellProps {
  children: React.ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  return <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">{children}</div>
}
