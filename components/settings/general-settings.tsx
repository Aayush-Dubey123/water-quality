"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export function GeneralSettings() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Organization</CardTitle>
          <CardDescription>Manage your organization settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="org-name">Organization Name</Label>
            <Input id="org-name" defaultValue="AquaTech Industries" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="org-id">Organization ID</Label>
            <Input id="org-id" defaultValue="ORG-12345" readOnly />
          </div>
          <div className="space-y-2">
            <Label htmlFor="industry">Industry</Label>
            <Select defaultValue="water-treatment">
              <SelectTrigger id="industry">
                <SelectValue placeholder="Select industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="water-treatment">Water Treatment</SelectItem>
                <SelectItem value="manufacturing">Manufacturing</SelectItem>
                <SelectItem value="food-beverage">Food & Beverage</SelectItem>
                <SelectItem value="pharmaceutical">Pharmaceutical</SelectItem>
                <SelectItem value="other">Other</SelectItem>
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
          <CardTitle>Display</CardTitle>
          <CardDescription>Customize your display preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="timezone">Timezone</Label>
            <Select defaultValue="utc-8">
              <SelectTrigger id="timezone">
                <SelectValue placeholder="Select timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="utc-12">UTC-12:00</SelectItem>
                <SelectItem value="utc-11">UTC-11:00</SelectItem>
                <SelectItem value="utc-10">UTC-10:00</SelectItem>
                <SelectItem value="utc-9">UTC-09:00</SelectItem>
                <SelectItem value="utc-8">UTC-08:00 (Pacific)</SelectItem>
                <SelectItem value="utc-7">UTC-07:00 (Mountain)</SelectItem>
                <SelectItem value="utc-6">UTC-06:00 (Central)</SelectItem>
                <SelectItem value="utc-5">UTC-05:00 (Eastern)</SelectItem>
                <SelectItem value="utc-4">UTC-04:00</SelectItem>
                <SelectItem value="utc-3">UTC-03:00</SelectItem>
                <SelectItem value="utc-2">UTC-02:00</SelectItem>
                <SelectItem value="utc-1">UTC-01:00</SelectItem>
                <SelectItem value="utc">UTC+00:00</SelectItem>
                <SelectItem value="utc+1">UTC+01:00</SelectItem>
                <SelectItem value="utc+2">UTC+02:00</SelectItem>
                <SelectItem value="utc+3">UTC+03:00</SelectItem>
                <SelectItem value="utc+4">UTC+04:00</SelectItem>
                <SelectItem value="utc+5">UTC+05:00</SelectItem>
                <SelectItem value="utc+5:30">UTC+05:30</SelectItem>
                <SelectItem value="utc+6">UTC+06:00</SelectItem>
                <SelectItem value="utc+7">UTC+07:00</SelectItem>
                <SelectItem value="utc+8">UTC+08:00</SelectItem>
                <SelectItem value="utc+9">UTC+09:00</SelectItem>
                <SelectItem value="utc+10">UTC+10:00</SelectItem>
                <SelectItem value="utc+11">UTC+11:00</SelectItem>
                <SelectItem value="utc+12">UTC+12:00</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="date-format">Date Format</Label>
            <Select defaultValue="mm-dd-yyyy">
              <SelectTrigger id="date-format">
                <SelectValue placeholder="Select date format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mm-dd-yyyy">MM/DD/YYYY</SelectItem>
                <SelectItem value="dd-mm-yyyy">DD/MM/YYYY</SelectItem>
                <SelectItem value="yyyy-mm-dd">YYYY/MM/DD</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="units">Units</Label>
            <Select defaultValue="metric">
              <SelectTrigger id="units">
                <SelectValue placeholder="Select units" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="metric">Metric</SelectItem>
                <SelectItem value="imperial">Imperial</SelectItem>
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
          <CardTitle>Preferences</CardTitle>
          <CardDescription>Manage your application preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="auto-refresh">Auto-refresh Dashboard</Label>
            <Switch id="auto-refresh" defaultChecked />
          </div>
          <div className="space-y-2">
            <Label htmlFor="refresh-interval">Refresh Interval (seconds)</Label>
            <Select defaultValue="30">
              <SelectTrigger id="refresh-interval">
                <SelectValue placeholder="Select interval" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10 seconds</SelectItem>
                <SelectItem value="30">30 seconds</SelectItem>
                <SelectItem value="60">1 minute</SelectItem>
                <SelectItem value="300">5 minutes</SelectItem>
                <SelectItem value="600">10 minutes</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="sound-alerts">Sound Alerts</Label>
            <Switch id="sound-alerts" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="desktop-notifications">Desktop Notifications</Label>
            <Switch id="desktop-notifications" defaultChecked />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
