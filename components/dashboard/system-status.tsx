"use client"

import { CloudOff, Server, Wifi } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SystemStatus() {
  const systems = [
    {
      name: "Sensor Network",
      status: "online",
      icon: Wifi,
      lastUpdate: "2 min ago",
    },
    {
      name: "Data Processing",
      status: "online",
      icon: Server,
      lastUpdate: "1 min ago",
    },
    {
      name: "Cloud Storage",
      status: "degraded",
      icon: CloudOff,
      lastUpdate: "5 min ago",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Server className="h-5 w-5" />
          System Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {systems.map((system) => (
            <div key={system.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <system.icon className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">{system.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  variant={
                    system.status === "online" ? "outline" : system.status === "degraded" ? "secondary" : "destructive"
                  }
                  className={system.status === "online" ? "text-green-500 border-green-500" : ""}
                >
                  {system.status}
                </Badge>
                <span className="text-xs text-muted-foreground">{system.lastUpdate}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
