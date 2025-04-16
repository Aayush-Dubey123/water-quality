import { Suspense } from "react"
import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DevicesTable } from "@/components/devices/devices-table"
import { DevicesTableSkeleton } from "@/components/devices/devices-table-skeleton"
import { DevicesFilters } from "@/components/devices/devices-filters"

export const metadata: Metadata = {
  title: "Devices - AquaMonitor Pro",
  description: "Manage your IoT devices and sensors",
}

export default function DevicesPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Devices" text="Manage your IoT devices and sensors." />
      <DevicesFilters />
      <Suspense fallback={<DevicesTableSkeleton />}>
        <DevicesTable />
      </Suspense>
    </DashboardShell>
  )
}
