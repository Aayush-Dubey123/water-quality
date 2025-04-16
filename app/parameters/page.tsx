import { Suspense } from "react"
import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { ParameterTabs } from "@/components/parameters/parameter-tabs"
import { ParametersSkeleton } from "@/components/parameters/parameters-skeleton"

export const metadata: Metadata = {
  title: "Parameters - AquaMonitor Pro",
  description: "Detailed view of all water quality parameters",
}

export default function ParametersPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Parameters" text="Detailed view of all water quality parameters." />
      <Suspense fallback={<ParametersSkeleton />}>
        <ParameterTabs />
      </Suspense>
    </DashboardShell>
  )
}
