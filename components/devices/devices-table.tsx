"use client"

import { useState } from "react"
import {
  Battery,
  BatteryLow,
  ChevronDown,
  Clock,
  MoreHorizontal,
  Power,
  PowerOff,
  RefreshCw,
  Settings,
  Wifi,
  WifiOff,
} from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"

export function DevicesTable() {
  const [selectedDevices, setSelectedDevices] = useState<string[]>([])

  const devices = [
    {
      id: "1",
      name: "pH Sensor 01",
      type: "pH",
      status: "online",
      battery: 85,
      signal: 92,
      lastReading: "2 minutes ago",
      location: "Treatment Plant A",
      lastMaintenance: "2023-03-15",
    },
    {
      id: "2",
      name: "Chlorine Sensor 01",
      type: "Chlorine",
      status: "online",
      battery: 72,
      signal: 88,
      lastReading: "5 minutes ago",
      location: "Treatment Plant A",
      lastMaintenance: "2023-03-10",
    },
    {
      id: "3",
      name: "Temperature Sensor 01",
      type: "Temperature",
      status: "offline",
      battery: 15,
      signal: 0,
      lastReading: "2 hours ago",
      location: "Treatment Plant A",
      lastMaintenance: "2023-02-28",
    },
    {
      id: "4",
      name: "Dissolved Oxygen Sensor 01",
      type: "Dissolved Oxygen",
      status: "online",
      battery: 65,
      signal: 78,
      lastReading: "10 minutes ago",
      location: "Treatment Plant B",
      lastMaintenance: "2023-03-05",
    },
    {
      id: "5",
      name: "Turbidity Sensor 01",
      type: "Turbidity",
      status: "maintenance",
      battery: 90,
      signal: 85,
      lastReading: "1 day ago",
      location: "Treatment Plant B",
      lastMaintenance: "2023-04-15",
    },
    {
      id: "6",
      name: "TDS Sensor 01",
      type: "TDS",
      status: "online",
      battery: 45,
      signal: 65,
      lastReading: "15 minutes ago",
      location: "Distribution Node C",
      lastMaintenance: "2023-03-20",
    },
  ]

  const toggleSelectAll = () => {
    if (selectedDevices.length === devices.length) {
      setSelectedDevices([])
    } else {
      setSelectedDevices(devices.map((device) => device.id))
    }
  }

  const toggleSelectDevice = (id: string) => {
    if (selectedDevices.includes(id)) {
      setSelectedDevices(selectedDevices.filter((deviceId) => deviceId !== id))
    } else {
      setSelectedDevices([...selectedDevices, id])
    }
  }

  return (
    <div className="rounded-md border">
      <div className="flex items-center justify-between p-4">
        <div className="flex flex-1 items-center space-x-2">
          <Checkbox checked={selectedDevices.length === devices.length} onCheckedChange={toggleSelectAll} />
          <Button variant="outline" size="sm" className="ml-2 h-8" disabled={selectedDevices.length === 0}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          <Button variant="outline" size="sm" className="h-8" disabled={selectedDevices.length === 0}>
            <Settings className="mr-2 h-4 w-4" />
            Configure
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="h-8">
            <Clock className="mr-2 h-4 w-4" />
            Last 24 hours
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]"></TableHead>
            <TableHead>Device</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Battery</TableHead>
            <TableHead>Signal</TableHead>
            <TableHead>Last Reading</TableHead>
            <TableHead>Location</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {devices.map((device) => (
            <TableRow key={device.id}>
              <TableCell>
                <Checkbox
                  checked={selectedDevices.includes(device.id)}
                  onCheckedChange={() => toggleSelectDevice(device.id)}
                />
              </TableCell>
              <TableCell className="font-medium">{device.name}</TableCell>
              <TableCell>{device.type}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    device.status === "online"
                      ? "outline"
                      : device.status === "maintenance"
                        ? "secondary"
                        : "destructive"
                  }
                  className={device.status === "online" ? "text-green-500 border-green-500" : ""}
                >
                  {device.status === "online" ? (
                    <Power className="mr-1 h-3 w-3" />
                  ) : device.status === "offline" ? (
                    <PowerOff className="mr-1 h-3 w-3" />
                  ) : (
                    <Settings className="mr-1 h-3 w-3" />
                  )}
                  {device.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  {device.battery < 20 ? (
                    <BatteryLow className="h-4 w-4 text-red-500" />
                  ) : (
                    <Battery className="h-4 w-4 text-muted-foreground" />
                  )}
                  <Progress
                    value={device.battery}
                    className="h-2 w-16"
                    indicatorClassName={
                      device.battery < 20 ? "bg-red-500" : device.battery < 50 ? "bg-amber-500" : "bg-green-500"
                    }
                  />
                  <span className="text-xs">{device.battery}%</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  {device.signal === 0 ? (
                    <WifiOff className="h-4 w-4 text-red-500" />
                  ) : (
                    <Wifi className="h-4 w-4 text-muted-foreground" />
                  )}
                  <Progress
                    value={device.signal}
                    className="h-2 w-16"
                    indicatorClassName={
                      device.signal < 20 ? "bg-red-500" : device.signal < 50 ? "bg-amber-500" : "bg-green-500"
                    }
                  />
                  <span className="text-xs">{device.signal}%</span>
                </div>
              </TableCell>
              <TableCell>{device.lastReading}</TableCell>
              <TableCell>{device.location}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>View details</DropdownMenuItem>
                    <DropdownMenuItem>Configure</DropdownMenuItem>
                    <DropdownMenuItem>Calibrate</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>View readings</DropdownMenuItem>
                    <DropdownMenuItem>View alerts</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
