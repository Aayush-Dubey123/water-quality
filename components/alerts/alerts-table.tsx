"use client"

import { useState } from "react"
import { AlertTriangle, CheckCircle2, ChevronDown, Clock, MoreHorizontal, XCircle } from "lucide-react"
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"

export function AlertsTable() {
  const [selectedAlerts, setSelectedAlerts] = useState<string[]>([])
  const [acknowledgeDialogOpen, setAcknowledgeDialogOpen] = useState(false)

  const alerts = [
    {
      id: "1",
      parameter: "TDS",
      value: "342 ppm",
      threshold: "300 ppm",
      severity: "critical",
      time: "10 minutes ago",
      timestamp: "2023-04-15T14:30:00Z",
      device: "Sensor-TDS-001",
      location: "Treatment Plant A",
      acknowledged: false,
    },
    {
      id: "2",
      parameter: "Turbidity",
      value: "3.8 NTU",
      threshold: "3.0 NTU",
      severity: "warning",
      time: "25 minutes ago",
      timestamp: "2023-04-15T14:15:00Z",
      device: "Sensor-TRB-002",
      location: "Treatment Plant A",
      acknowledged: false,
    },
    {
      id: "3",
      parameter: "Chlorine",
      value: "0.4 ppm",
      threshold: "0.5 ppm",
      severity: "warning",
      time: "1 hour ago",
      timestamp: "2023-04-15T13:40:00Z",
      device: "Sensor-CL-003",
      location: "Distribution Node B",
      acknowledged: true,
    },
    {
      id: "4",
      parameter: "pH",
      value: "8.7",
      threshold: "8.5",
      severity: "warning",
      time: "3 hours ago",
      timestamp: "2023-04-15T11:30:00Z",
      device: "Sensor-PH-001",
      location: "Treatment Plant A",
      acknowledged: true,
    },
    {
      id: "5",
      parameter: "Temperature",
      value: "32.1°C",
      threshold: "30.0°C",
      severity: "warning",
      time: "5 hours ago",
      timestamp: "2023-04-15T09:30:00Z",
      device: "Sensor-TEMP-002",
      location: "Distribution Node C",
      acknowledged: false,
    },
    {
      id: "6",
      parameter: "Dissolved Oxygen",
      value: "4.2 mg/L",
      threshold: "6.0 mg/L",
      severity: "critical",
      time: "6 hours ago",
      timestamp: "2023-04-15T08:30:00Z",
      device: "Sensor-DO-001",
      location: "Treatment Plant B",
      acknowledged: true,
    },
  ]

  const toggleSelectAll = () => {
    if (selectedAlerts.length === alerts.length) {
      setSelectedAlerts([])
    } else {
      setSelectedAlerts(alerts.map((alert) => alert.id))
    }
  }

  const toggleSelectAlert = (id: string) => {
    if (selectedAlerts.includes(id)) {
      setSelectedAlerts(selectedAlerts.filter((alertId) => alertId !== id))
    } else {
      setSelectedAlerts([...selectedAlerts, id])
    }
  }

  const handleAcknowledge = () => {
    // In a real app, this would send data to the server
    setAcknowledgeDialogOpen(false)
  }

  return (
    <div className="rounded-md border">
      <div className="flex items-center justify-between p-4">
        <div className="flex flex-1 items-center space-x-2">
          <Checkbox checked={selectedAlerts.length === alerts.length} onCheckedChange={toggleSelectAll} />
          <Button
            variant="outline"
            size="sm"
            className="ml-2 h-8"
            disabled={selectedAlerts.length === 0}
            onClick={() => setAcknowledgeDialogOpen(true)}
          >
            <CheckCircle2 className="mr-2 h-4 w-4" />
            Acknowledge
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
            <TableHead>Parameter</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Severity</TableHead>
            <TableHead>Device</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {alerts.map((alert) => (
            <TableRow key={alert.id}>
              <TableCell>
                <Checkbox
                  checked={selectedAlerts.includes(alert.id)}
                  onCheckedChange={() => toggleSelectAlert(alert.id)}
                />
              </TableCell>
              <TableCell className="font-medium">{alert.parameter}</TableCell>
              <TableCell>
                {alert.value}
                <span className="ml-2 text-xs text-muted-foreground">(Threshold: {alert.threshold})</span>
              </TableCell>
              <TableCell>
                <Badge
                  variant={alert.severity === "critical" ? "destructive" : "outline"}
                  className={alert.severity === "warning" ? "text-amber-500 border-amber-500" : ""}
                >
                  {alert.severity === "critical" ? (
                    <XCircle className="mr-1 h-3 w-3" />
                  ) : (
                    <AlertTriangle className="mr-1 h-3 w-3" />
                  )}
                  {alert.severity}
                </Badge>
              </TableCell>
              <TableCell>{alert.device}</TableCell>
              <TableCell>{alert.location}</TableCell>
              <TableCell>{alert.time}</TableCell>
              <TableCell>
                {alert.acknowledged ? (
                  <Badge variant="outline" className="text-green-500 border-green-500">
                    <CheckCircle2 className="mr-1 h-3 w-3" />
                    Acknowledged
                  </Badge>
                ) : (
                  <Badge variant="outline" className="text-amber-500 border-amber-500">
                    <Clock className="mr-1 h-3 w-3" />
                    Pending
                  </Badge>
                )}
              </TableCell>
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
                    {!alert.acknowledged && (
                      <DropdownMenuItem onClick={() => setAcknowledgeDialogOpen(true)}>Acknowledge</DropdownMenuItem>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>View device</DropdownMenuItem>
                    <DropdownMenuItem>View parameter history</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={acknowledgeDialogOpen} onOpenChange={setAcknowledgeDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Acknowledge Alerts</DialogTitle>
            <DialogDescription>Add a comment about the action taken to resolve these alerts.</DialogDescription>
          </DialogHeader>
          <Textarea placeholder="Describe the actions taken to resolve the issue..." className="min-h-[100px]" />
          <DialogFooter>
            <Button variant="outline" onClick={() => setAcknowledgeDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAcknowledge}>Acknowledge Alerts</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
