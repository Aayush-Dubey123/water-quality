"use client"

import { Activity, Droplets, Gauge, Thermometer, Waves, Wind } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ParameterCards() {
  const parameters = [
    {
      name: "pH Level",
      value: "7.2",
      unit: "",
      status: "normal",
      trend: "stable",
      icon: Droplets,
      color: "bg-green-500",
    },
    {
      name: "Chlorine",
      value: "1.2",
      unit: "ppm",
      status: "normal",
      trend: "increasing",
      icon: Activity,
      color: "bg-green-500",
    },
    {
      name: "Temperature",
      value: "24.5",
      unit: "°C",
      status: "normal",
      trend: "stable",
      icon: Thermometer,
      color: "bg-green-500",
    },
    {
      name: "Dissolved Oxygen",
      value: "8.3",
      unit: "mg/L",
      status: "normal",
      trend: "stable",
      icon: Wind,
      color: "bg-green-500",
    },
    {
      name: "Turbidity",
      value: "3.8",
      unit: "NTU",
      status: "warning",
      trend: "increasing",
      icon: Waves,
      color: "bg-amber-500",
    },
    {
      name: "TDS",
      value: "342",
      unit: "ppm",
      status: "critical",
      trend: "increasing",
      icon: Gauge,
      color: "bg-red-500",
    },
  ]

  return (
    <>
      {parameters.map((param) => (
        <Card key={param.name} className="overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{param.name}</CardTitle>
            <param.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {param.value} {param.unit}
            </div>
            <div className="mt-3 flex items-center">
              <span className={`mr-2 h-3 w-3 rounded-full ${param.color}`}></span>
              <span className="text-sm capitalize">{param.status}</span>
              <Badge variant="outline" className="ml-auto text-xs">
                {param.trend}
              </Badge>
            </div>
          </CardContent>
          <CardFooter className="p-2 pt-0">
            <div className="h-12 w-full">
              {/* Mini sparkline chart would go here */}
              <div className="flex h-full items-end space-x-1">
                {Array(10)
                  .fill(0)
                  .map((_, i) => {
                    const height = Math.max(20, Math.floor(Math.random() * 100))
                    return (
                      <div
                        key={i}
                        className={`w-full rounded-sm ${param.color}`}
                        style={{ height: `${height}%` }}
                      ></div>
                    )
                  })}
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </>
  )
}
