"use client"

import { Activity, AlertTriangle, Droplets, Thermometer } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function OverviewStats() {
  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">pH Level</CardTitle>
          <Droplets className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">7.2</div>
          <p className="text-xs text-muted-foreground">Normal range (6.5-8.5)</p>
          <div className="mt-2 h-1.5 w-full rounded-full bg-muted">
            <div className="h-1.5 rounded-full bg-green-500" style={{ width: "70%" }} />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Chlorine Level</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1.2 ppm</div>
          <p className="text-xs text-muted-foreground">Normal range (0.5-2.0 ppm)</p>
          <div className="mt-2 h-1.5 w-full rounded-full bg-muted">
            <div className="h-1.5 rounded-full bg-green-500" style={{ width: "60%" }} />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Temperature</CardTitle>
          <Thermometer className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">24.5°C</div>
          <p className="text-xs text-muted-foreground">Normal range (20-30°C)</p>
          <div className="mt-2 h-1.5 w-full rounded-full bg-muted">
            <div className="h-1.5 rounded-full bg-green-500" style={{ width: "45%" }} />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
          <AlertTriangle className="h-4 w-4 text-amber-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">3</div>
          <p className="text-xs text-muted-foreground">2 warnings, 1 critical</p>
          <div className="mt-2 flex gap-1">
            <span className="h-2 w-2 rounded-full bg-red-500"></span>
            <span className="h-2 w-2 rounded-full bg-amber-500"></span>
            <span className="h-2 w-2 rounded-full bg-amber-500"></span>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
