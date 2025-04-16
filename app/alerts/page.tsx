import { Suspense } from "react"
import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { AlertsTable } from "@/components/alerts/alerts-table"
import { AlertsTableSkeleton } from "@/components/alerts/alerts-table-skeleton"
import { AlertsFilters } from "@/components/alerts/alerts-filters"

export const metadata: Metadata = {
  title: "Alerts - AquaMonitor Pro",
  description: "View and manage system alerts",
}

export default function AlertsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Alerts" text="View and manage system alerts." />
      <AlertsFilters />
      <Suspense fallback={<AlertsTableSkeleton />}>
        <AlertsTable />
      </Suspense>
    </DashboardShell>
  )
}
