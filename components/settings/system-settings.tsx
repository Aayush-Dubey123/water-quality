"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export function SystemSettings() {
  return (
    <Tabs defaultValue="general">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="data">Data Management</TabsTrigger>
        <TabsTrigger value="advanced">Advanced</TabsTrigger>
      </TabsList>

      <TabsContent value="general">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>System Information</CardTitle>
              <CardDescription>View system information and status</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-muted-foreground">Version</Label>
                  <div className="font-medium">v1.5.2</div>
                </div>
                <div>
                  <Label className="text-muted-foreground">Last Updated</Label>
                  <div className="font-medium">April 10, 2023</div>
                </div>
                <div>
                  <Label className="text-muted-foreground">Database</Label>
                  <div className="font-medium">PostgreSQL 14.2</div>
                </div>
                <div>
                  <Label className="text-muted-foreground">API Version</Label>
                  <div className="font-medium">v2.1</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label className="text-muted-foreground">System Health</Label>
                  <span className="text-green-500 font-medium">Good</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label className="text-muted-foreground">Database Storage</Label>
                  <span className="text-muted-foreground">45.2 GB / 100 GB</span>
                </div>
                <Progress value={45} className="h-2" />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Check for Updates</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API Configuration</CardTitle>
              <CardDescription>Configure API settings and access</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="api-enabled">Enable API Access</Label>
                <Switch id="api-enabled" defaultChecked />
              </div>

              <div className="space-y-2">
                <Label htmlFor="api-key">API Key</Label>
                <div className="flex gap-2">
                  <Input id="api-key" value="••••••••••••••••••••••••••••••" readOnly />
                  <Button variant="outline" size="sm">
                    Regenerate
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">Last regenerated: March 15, 2023</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="api-rate-limit">Rate Limit (requests/minute)</Label>
                <Input id="api-rate-limit" defaultValue="60" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="api-allowed-origins">Allowed Origins</Label>
                <Textarea
                  id="api-allowed-origins"
                  placeholder="Enter allowed origins (one per line)"
                  defaultValue="https://example.com
https://api.example.com"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="data">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Data Retention</CardTitle>
              <CardDescription>Configure data retention policies</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="raw-data-retention">Raw Sensor Data</Label>
                <Select defaultValue="90">
                  <SelectTrigger id="raw-data-retention">
                    <SelectValue placeholder="Select retention period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 days</SelectItem>
                    <SelectItem value="60">60 days</SelectItem>
                    <SelectItem value="90">90 days</SelectItem>
                    <SelectItem value="180">180 days</SelectItem>
                    <SelectItem value="365">1 year</SelectItem>
                    <SelectItem value="730">2 years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="aggregated-data-retention">Aggregated Data</Label>
                <Select defaultValue="730">
                  <SelectTrigger id="aggregated-data-retention">
                    <SelectValue placeholder="Select retention period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="90">90 days</SelectItem>
                    <SelectItem value="180">180 days</SelectItem>
                    <SelectItem value="365">1 year</SelectItem>
                    <SelectItem value="730">2 years</SelectItem>
                    <SelectItem value="1825">5 years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="alert-data-retention">Alert History</Label>
                <Select defaultValue="365">
                  <SelectTrigger id="alert-data-retention">
                    <SelectValue placeholder="Select retention period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="90">90 days</SelectItem>
                    <SelectItem value="180">180 days</SelectItem>
                    <SelectItem value="365">1 year</SelectItem>
                    <SelectItem value="730">2 years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="report-data-retention">Generated Reports</Label>
                <Select defaultValue="365">
                  <SelectTrigger id="report-data-retention">
                    <SelectValue placeholder="Select retention period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="90">90 days</SelectItem>
                    <SelectItem value="180">180 days</SelectItem>
                    <SelectItem value="365">1 year</SelectItem>
                    <SelectItem value="730">2 years</SelectItem>
                    <SelectItem value="1825">5 years</SelectItem>
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
              <CardTitle>Data Export & Backup</CardTitle>
              <CardDescription>Configure data export and backup settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="backup-frequency">Automated Backup Frequency</Label>
                <Select defaultValue="daily">
                  <SelectTrigger id="backup-frequency">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hourly">Hourly</SelectItem>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="backup-retention">Backup Retention</Label>
                <Select defaultValue="30">
                  <SelectTrigger id="backup-retention">
                    <SelectValue placeholder="Select retention period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7">7 days</SelectItem>
                    <SelectItem value="14">14 days</SelectItem>
                    <SelectItem value="30">30 days</SelectItem>
                    <SelectItem value="90">90 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="backup-location">Backup Location</Label>
                <Input id="backup-location" defaultValue="/var/backups/aquamonitor" />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="backup-encryption">Encrypt Backups</Label>
                <Switch id="backup-encryption" defaultChecked />
              </div>

              <div className="pt-4 flex flex-col gap-2">
                <Button variant="outline">Export All Data</Button>
                <Button variant="outline">Backup Now</Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="advanced">
        <Card>
          <CardHeader>
            <CardTitle>Advanced Settings</CardTitle>
            <CardDescription>Configure advanced system settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Logging</h3>
                <div className="space-y-2 mt-2">
                  <div className="space-y-2">
                    <Label htmlFor="log-level">Log Level</Label>
                    <Select defaultValue="info">
                      <SelectTrigger id="log-level">
                        <SelectValue placeholder="Select log level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="debug">Debug</SelectItem>
                        <SelectItem value="info">Info</SelectItem>
                        <SelectItem value="warning">Warning</SelectItem>
                        <SelectItem value="error">Error</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="log-rotation">Enable Log Rotation</Label>
                    <Switch id="log-rotation" defaultChecked />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="log-retention">Log Retention</Label>
                    <Select defaultValue="30">
                      <SelectTrigger id="log-retention">
                        <SelectValue placeholder="Select retention period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7">7 days</SelectItem>
                        <SelectItem value="14">14 days</SelectItem>
                        <SelectItem value="30">30 days</SelectItem>
                        <SelectItem value="90">90 days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium">Performance</h3>
                <div className="space-y-2 mt-2">
                  <div className="space-y-2">
                    <Label htmlFor="data-sampling-rate">Data Sampling Rate (seconds)</Label>
                    <Select defaultValue="60">
                      <SelectTrigger id="data-sampling-rate">
                        <SelectValue placeholder="Select sampling rate" />
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

                  <div className="space-y-2">
                    <Label htmlFor="data-aggregation-interval">Data Aggregation Interval</Label>
                    <Select defaultValue="hourly">
                      <SelectTrigger id="data-aggregation-interval">
                        <SelectValue placeholder="Select aggregation interval" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5min">5 minutes</SelectItem>
                        <SelectItem value="15min">15 minutes</SelectItem>
                        <SelectItem value="30min">30 minutes</SelectItem>
                        <SelectItem value="hourly">Hourly</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="enable-caching">Enable Data Caching</Label>
                    <Switch id="enable-caching" defaultChecked />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium">System Maintenance</h3>
                <div className="space-y-2 mt-2">
                  <div className="space-y-2">
                    <Label htmlFor="maintenance-window">Maintenance Window</Label>
                    <Select defaultValue="sunday-2am">
                      <SelectTrigger id="maintenance-window">
                        <SelectValue placeholder="Select maintenance window" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sunday-2am">Sunday, 2:00 AM</SelectItem>
                        <SelectItem value="monday-2am">Monday, 2:00 AM</SelectItem>
                        <SelectItem value="wednesday-2am">Wednesday, 2:00 AM</SelectItem>
                        <SelectItem value="saturday-2am">Saturday, 2:00 AM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="auto-vacuum">Enable Automatic Database Vacuum</Label>
                    <Switch id="auto-vacuum" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="auto-update">Enable Automatic Updates</Label>
                    <Switch id="auto-update" defaultChecked />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Reset to Defaults</Button>
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
