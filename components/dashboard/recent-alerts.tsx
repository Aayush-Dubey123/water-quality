"use client"

import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

export function RecentAlerts() {
  const alerts = [
    {
      id: 1,
      parameter: "TDS",
      value: "342 ppm",
      threshold: "300 ppm",
      severity: "critical",
      time: "10 minutes ago",
      acknowledged: false,
    },
    {
      id: 2,
      parameter: "Turbidity",
      value: "3.8 NTU",
      threshold: "3.0 NTU",
      severity: "warning",
      time: "25 minutes ago",
      acknowledged: false,
    },
    {
      id: 3,
      parameter: "Chlorine",
      value: "0.4 ppm",
      threshold: "0.5 ppm",
      severity: "warning",
      time: "1 hour ago",
      acknowledged: true,
    },
    {
      id: 4,
      parameter: "pH",
      value: "8.7",
      threshold: "8.5",
      severity: "warning",
      time: "3 hours ago",
      acknowledged: true,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-amber-500" />
          Recent Alerts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[160px]">
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div key={alert.id} className="flex items-start gap-2">
                {alert.severity === "critical" ? (
                  <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
                ) : (
                  <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
                )}
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">
                      {alert.parameter}: {alert.value}
                    </p>
                    <Badge variant={alert.severity === "critical" ? "destructive" : "outline"} className="ml-2">
                      {alert.severity}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Threshold: {alert.threshold} • {alert.time}
                  </p>
                </div>
                {alert.acknowledged && <CheckCircle2 className="h-4 w-4 text-muted-foreground" />}
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
