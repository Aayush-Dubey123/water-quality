"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GeneralSettings } from "@/components/settings/general-settings"
import { NotificationSettings } from "@/components/settings/notification-settings"
import { ThresholdSettings } from "@/components/settings/threshold-settings"
import { UserManagement } from "@/components/settings/user-management"
import { SystemSettings } from "@/components/settings/system-settings"

export function SettingsTabs() {
  return (
    <Tabs defaultValue="general" className="w-full">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="thresholds">Thresholds</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
        <TabsTrigger value="users">Users</TabsTrigger>
        <TabsTrigger value="system">System</TabsTrigger>
      </TabsList>
      <TabsContent value="general">
        <GeneralSettings />
      </TabsContent>
      <TabsContent value="thresholds">
        <ThresholdSettings />
      </TabsContent>
      <TabsContent value="notifications">
        <NotificationSettings />
      </TabsContent>
      <TabsContent value="users">
        <UserManagement />
      </TabsContent>
      <TabsContent value="system">
        <SystemSettings />
      </TabsContent>
    </Tabs>
  )
}
