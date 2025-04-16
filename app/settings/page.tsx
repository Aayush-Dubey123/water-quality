import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { SettingsTabs } from "@/components/settings/settings-tabs"

export const metadata: Metadata = {
  title: "Settings - AquaMonitor Pro",
  description: "Manage your application settings",
}

export default function SettingsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Settings" text="Manage your application settings." />
      <SettingsTabs />
    </DashboardShell>
  )
}
