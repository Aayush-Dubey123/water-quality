"use client"

import { useState } from "react"
import { Activity, AlertTriangle, Calendar, Clock, Download, Info, Settings } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Chart,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendItem,
  ChartGrid,
  ChartLine,
  ChartXAxis,
  ChartYAxis,
  ChartArea,
} from "@/components/ui/chart"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"

interface ParameterDetailProps {
  name: string
  value: number
  unit: string
  minThreshold: number
  maxThreshold: number
  description: string
  criticalLow: number
  criticalHigh: number
  warningLow: number
  warningHigh: number
  optimalLow: number
  optimalHigh: number
}

export function ParameterDetail({
  name,
  value,
  unit,
  minThreshold,
  maxThreshold,
  description,
  criticalLow,
  criticalHigh,
  warningLow,
  warningHigh,
  optimalLow,
  optimalHigh,
}: ParameterDetailProps) {
  const [timeRange, setTimeRange] = useState("24h")

  // Generate mock data
  const generateData = (days = 1) => {
    const data = []
    const now = new Date()
    const paramKey = name.toLowerCase().replace(/\s+/g, "_")

    for (let i = 0; i < days * 24; i++) {
      const date = new Date(now.getTime() - (days * 24 - i) * 60 * 60 * 1000)

      // Generate a value that oscillates around the current value
      const paramValue =
        value +
        Math.sin(i / 10) * (maxThreshold - minThreshold) * 0.1 +
        (Math.random() * (maxThreshold - minThreshold) * 0.05 - (maxThreshold - minThreshold) * 0.025)

      data.push({
        date: date.toISOString(),
        [paramKey]: paramValue,
        min: minThreshold,
        max: maxThreshold,
      })
    }

    return data
  }

  const data = generateData(timeRange === "24h" ? 1 : timeRange === "7d" ? 7 : 30)

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return timeRange === "24h"
      ? date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      : date.toLocaleDateString([], { month: "short", day: "numeric" })
  }

  // Determine status
  const getStatus = () => {
    if (value < criticalLow || value > criticalHigh) {
      return "critical"
    } else if (value < warningLow || value > warningHigh) {
      return "warning"
    } else {
      return "normal"
    }
  }

  const status = getStatus()
  const paramKey = name.toLowerCase().replace(/\s+/g, "_")

  return (
    <div className="grid gap-4 md:grid-cols-7">
      <Card className="md:col-span-5">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>{name} Trends</CardTitle>
            <CardDescription>Historical values over time</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Select range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="24h">Last 24 hours</SelectItem>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="h-[400px]">
          <ChartContainer data={data}>
            <ChartLegend>
              <ChartLegendItem name={`${name} ${unit}`} color="#0ea5e9" />
              <ChartLegendItem name="Min Threshold" color="#f97316" />
              <ChartLegendItem name="Max Threshold" color="#f97316" />
            </ChartLegend>
            <Chart>
              <ChartGrid horizontal vertical />
              <ChartXAxis tickCount={5} tickFormatter={formatDate} dataKey="date" />
              <ChartYAxis
                tickCount={5}
                domain={[
                  Math.min(criticalLow, Math.floor(value * 0.8)),
                  Math.max(criticalHigh, Math.ceil(value * 1.2)),
                ]}
              />
              <ChartLine dataKey={paramKey} name={`${name} ${unit}`} color="#0ea5e9" strokeWidth={2} />
              <ChartLine dataKey="min" name="Min Threshold" color="#f97316" strokeDasharray="3 3" strokeWidth={1} />
              <ChartLine dataKey="max" name="Max Threshold" color="#f97316" strokeDasharray="3 3" strokeWidth={1} />
              <ChartArea dataKey={paramKey} fill="#0ea5e9" fillOpacity={0.1} />
              <ChartTooltip content={<ChartTooltipContent />} />
            </Chart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Last updated: 2 minutes ago</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Calendar className="mr-2 h-4 w-4" />
              Custom Range
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="mr-2 h-4 w-4" />
              Configure
            </Button>
          </div>
        </CardFooter>
      </Card>

      <div className="grid gap-4 md:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Current Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center gap-2 py-4">
              <div className="text-4xl font-bold">
                {value} {unit}
              </div>
              <div className="flex items-center gap-2">
                {status === "critical" ? (
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                ) : status === "warning" ? (
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                ) : (
                  <Activity className="h-5 w-5 text-green-500" />
                )}
                <span
                  className={`text-sm font-medium capitalize ${
                    status === "critical" ? "text-red-500" : status === "warning" ? "text-amber-500" : "text-green-500"
                  }`}
                >
                  {status}
                </span>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Target Range:</span>
                <span className="font-medium">
                  {optimalLow} - {optimalHigh} {unit}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Warning Range:</span>
                <span className="font-medium">
                  {warningLow} - {warningHigh} {unit}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Critical Range:</span>
                <span className="font-medium">
                  {criticalLow} - {criticalHigh} {unit}
                </span>
              </div>
            </div>

            <div className="mt-6 h-4 w-full rounded-full bg-muted">
              <div
                className={`h-4 rounded-full ${
                  status === "critical" ? "bg-red-500" : status === "warning" ? "bg-amber-500" : "bg-green-500"
                }`}
                style={{
                  width: `${Math.min(100, Math.max(0, ((value - criticalLow) / (criticalHigh - criticalLow)) * 100))}%`,
                }}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Information</CardTitle>
          </CardHeader>
          <CardContent>
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>About {name}</AlertTitle>
              <AlertDescription>{description}</AlertDescription>
            </Alert>

            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Sensor ID:</span>
                <span className="font-medium">SEN-{Math.floor(Math.random() * 10000)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Calibrated:</span>
                <span className="font-medium">7 days ago</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Accuracy:</span>
                <span className="font-medium">±0.1 {unit}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
