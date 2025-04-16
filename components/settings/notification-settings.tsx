"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function NotificationSettings() {
  return (
    <Tabs defaultValue="channels">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="channels">Notification Channels</TabsTrigger>
        <TabsTrigger value="rules">Notification Rules</TabsTrigger>
      </TabsList>

      <TabsContent value="channels">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Email Notifications</CardTitle>
              <CardDescription>Configure email notification settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="email-enabled">Enable Email Notifications</Label>
                <Switch id="email-enabled" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-recipients">Recipients</Label>
                <Input
                  id="email-recipients"
                  placeholder="Enter email addresses (comma separated)"
                  defaultValue="operator@example.com, manager@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-frequency">Frequency</Label>
                <Select defaultValue="immediate">
                  <SelectTrigger id="email-frequency">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediate</SelectItem>
                    <SelectItem value="hourly">Hourly Digest</SelectItem>
                    <SelectItem value="daily">Daily Digest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>SMS Notifications</CardTitle>
              <CardDescription>Configure SMS notification settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="sms-enabled">Enable SMS Notifications</Label>
                <Switch id="sms-enabled" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sms-recipients">Phone Numbers</Label>
                <Input
                  id="sms-recipients"
                  placeholder="Enter phone numbers (comma separated)"
                  defaultValue="+1234567890, +0987654321"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sms-severity">Minimum Severity</Label>
                <Select defaultValue="critical">
                  <SelectTrigger id="sms-severity">
                    <SelectValue placeholder="Select severity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Alerts</SelectItem>
                    <SelectItem value="warning">Warning & Critical</SelectItem>
                    <SelectItem value="critical">Critical Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>In-App Notifications</CardTitle>
              <CardDescription>Configure in-app notification settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="inapp-enabled">Enable In-App Notifications</Label>
                <Switch id="inapp-enabled" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="inapp-sound">Sound Alerts</Label>
                <Switch id="inapp-sound" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="inapp-desktop">Desktop Notifications</Label>
                <Switch id="inapp-desktop" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="inapp-retention">Retention Period</Label>
                <Select defaultValue="30">
                  <SelectTrigger id="inapp-retention">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7">7 days</SelectItem>
                    <SelectItem value="14">14 days</SelectItem>
                    <SelectItem value="30">30 days</SelectItem>
                    <SelectItem value="90">90 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Webhook Notifications</CardTitle>
              <CardDescription>Configure webhook notification settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="webhook-enabled">Enable Webhook Notifications</Label>
                <Switch id="webhook-enabled" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="webhook-url">Webhook URL</Label>
                <Input id="webhook-url" placeholder="Enter webhook URL" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="webhook-format">Payload Format</Label>
                <Select defaultValue="json">
                  <SelectTrigger id="webhook-format">
                    <SelectValue placeholder="Select format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="json">JSON</SelectItem>
                    <SelectItem value="xml">XML</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="rules">
        <Card>
          <CardHeader>
            <CardTitle>Notification Rules</CardTitle>
            <CardDescription>Configure when and how notifications are sent</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="rounded-md border p-4">
                <div className="font-medium">Critical Alerts</div>
                <p className="text-sm text-muted-foreground">Notifications for critical threshold violations</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Switch id="critical-email" defaultChecked />
                    <Label htmlFor="critical-email">Email</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="critical-sms" defaultChecked />
                    <Label htmlFor="critical-sms">SMS</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="critical-inapp" defaultChecked />
                    <Label htmlFor="critical-inapp">In-App</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="critical-webhook" />
                    <Label htmlFor="critical-webhook">Webhook</Label>
                  </div>
                </div>
              </div>

              <div className="rounded-md border p-4">
                <div className="font-medium">Warning Alerts</div>
                <p className="text-sm text-muted-foreground">Notifications for warning threshold violations</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Switch id="warning-email" defaultChecked />
                    <Label htmlFor="warning-email">Email</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="warning-sms" />
                    <Label htmlFor="warning-sms">SMS</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="warning-inapp" defaultChecked />
                    <Label htmlFor="warning-inapp">In-App</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="warning-webhook" />
                    <Label htmlFor="warning-webhook">Webhook</Label>
                  </div>
                </div>
              </div>

              <div className="rounded-md border p-4">
                <div className="font-medium">System Events</div>
                <p className="text-sm text-muted-foreground">
                  Notifications for system events (device offline, maintenance, etc.)
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Switch id="system-email" defaultChecked />
                    <Label htmlFor="system-email">Email</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="system-sms" />
                    <Label htmlFor="system-sms">SMS</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="system-inapp" defaultChecked />
                    <Label htmlFor="system-inapp">In-App</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="system-webhook" />
                    <Label htmlFor="system-webhook">Webhook</Label>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
