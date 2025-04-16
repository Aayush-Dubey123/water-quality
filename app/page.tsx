import { Suspense } from "react"
import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { OverviewStats } from "@/components/dashboard/overview-stats"
import { ParameterCards } from "@/components/dashboard/parameter-cards"
import { RecentAlerts } from "@/components/dashboard/recent-alerts"
import { SystemStatus } from "@/components/dashboard/system-status"
import { WaterQualityChart } from "@/components/dashboard/water-quality-chart"
import { DashboardSkeleton } from "@/components/dashboard/dashboard-skeleton"

export const metadata: Metadata = {
  title: "Dashboard - AquaMonitor Pro",
  description: "Monitor your water quality parameters in real-time",
}

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" text="Monitor your water quality parameters in real-time." />
      <Suspense fallback={<DashboardSkeleton />}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <OverviewStats />
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <ParameterCards />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <WaterQualityChart />
          <div className="grid gap-4">
            <RecentAlerts />
            <SystemStatus />
          </div>
        </div>
      </Suspense>
    </DashboardShell>
  )
}
