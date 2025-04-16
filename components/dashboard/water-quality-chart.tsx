"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
} from "@/components/ui/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Generate mock data
const generateData = (days = 7) => {
  const data = []
  const now = new Date()

  for (let i = 0; i < days * 24; i++) {
    const date = new Date(now.getTime() - (days * 24 - i) * 60 * 60 * 1000)

    data.push({
      date: date.toISOString(),
      ph: 7 + Math.sin(i / 10) * 0.5 + (Math.random() * 0.2 - 0.1),
      chlorine: 1 + Math.cos(i / 15) * 0.3 + (Math.random() * 0.2 - 0.1),
      temperature: 23 + Math.sin(i / 20) * 2 + (Math.random() * 0.5 - 0.25),
      oxygen: 8 + Math.cos(i / 12) * 0.8 + (Math.random() * 0.3 - 0.15),
      turbidity: 2 + Math.sin(i / 8) * 1 + (Math.random() * 0.4 - 0.2),
      tds: 300 + Math.cos(i / 18) * 50 + (Math.random() * 20 - 10),
    })
  }

  return data
}

export function WaterQualityChart() {
  const [timeRange, setTimeRange] = useState("7d")
  const data = generateData(timeRange === "24h" ? 1 : timeRange === "7d" ? 7 : 30)

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return timeRange === "24h"
      ? date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      : date.toLocaleDateString([], { month: "short", day: "numeric" })
  }

  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Water Quality Trends</CardTitle>
          <CardDescription>Historical parameter values over time</CardDescription>
        </div>
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
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="ph">
          <TabsList className="mb-4">
            <TabsTrigger value="ph">pH</TabsTrigger>
            <TabsTrigger value="chlorine">Chlorine</TabsTrigger>
            <TabsTrigger value="temperature">Temperature</TabsTrigger>
            <TabsTrigger value="oxygen">Dissolved Oxygen</TabsTrigger>
          </TabsList>
          <TabsContent value="ph" className="h-[300px]">
            <ChartContainer data={data}>
              <ChartLegend>
                <ChartLegendItem name="pH Level" color="#0ea5e9" />
              </ChartLegend>
              <Chart>
                <ChartGrid horizontal vertical />
                <ChartXAxis tickCount={5} tickFormatter={formatDate} dataKey="date" />
                <ChartYAxis tickCount={5} domain={[6, 8]} />
                <ChartLine dataKey="ph" name="pH Level" color="#0ea5e9" />
                <ChartTooltip content={<ChartTooltipContent />} />
              </Chart>
            </ChartContainer>
          </TabsContent>
          <TabsContent value="chlorine" className="h-[300px]">
            <ChartContainer data={data}>
              <ChartLegend>
                <ChartLegendItem name="Chlorine (ppm)" color="#10b981" />
              </ChartLegend>
              <Chart>
                <ChartGrid horizontal vertical />
                <ChartXAxis tickCount={5} tickFormatter={formatDate} dataKey="date" />
                <ChartYAxis tickCount={5} domain={[0, 2]} />
                <ChartLine dataKey="chlorine" name="Chlorine (ppm)" color="#10b981" />
                <ChartTooltip content={<ChartTooltipContent />} />
              </Chart>
            </ChartContainer>
          </TabsContent>
          <TabsContent value="temperature" className="h-[300px]">
            <ChartContainer data={data}>
              <ChartLegend>
                <ChartLegendItem name="Temperature (°C)" color="#f59e0b" />
              </ChartLegend>
              <Chart>
                <ChartGrid horizontal vertical />
                <ChartXAxis tickCount={5} tickFormatter={formatDate} dataKey="date" />
                <ChartYAxis tickCount={5} domain={[20, 30]} />
                <ChartLine dataKey="temperature" name="Temperature (°C)" color="#f59e0b" />
                <ChartTooltip content={<ChartTooltipContent />} />
              </Chart>
            </ChartContainer>
          </TabsContent>
          <TabsContent value="oxygen" className="h-[300px]">
            <ChartContainer data={data}>
              <ChartLegend>
                <ChartLegendItem name="Dissolved Oxygen (mg/L)" color="#6366f1" />
              </ChartLegend>
              <Chart>
                <ChartGrid horizontal vertical />
                <ChartXAxis tickCount={5} tickFormatter={formatDate} dataKey="date" />
                <ChartYAxis tickCount={5} domain={[6, 10]} />
                <ChartLine dataKey="oxygen" name="Dissolved Oxygen (mg/L)" color="#6366f1" />
                <ChartTooltip content={<ChartTooltipContent />} />
              </Chart>
            </ChartContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
