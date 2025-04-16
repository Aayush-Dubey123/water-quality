import { Suspense } from "react"
import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { ReportsFilters } from "@/components/reports/reports-filters"
import { ReportsTable } from "@/components/reports/reports-table"
import { ReportsTableSkeleton } from "@/components/reports/reports-table-skeleton"

export const metadata: Metadata = {
  title: "Reports - AquaMonitor Pro",
  description: "Generate and view water quality reports",
}

export default function ReportsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Reports" text="Generate and view water quality reports." />
      <ReportsFilters />
      <Suspense fallback={<ReportsTableSkeleton />}>
        <ReportsTable />
      </Suspense>
    </DashboardShell>
  )
}
