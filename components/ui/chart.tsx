"use client"

import * as React from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip"
import { XAxis, YAxis, CartesianGrid, Line, LineChart, Area, Legend, ResponsiveContainer } from "recharts"

interface ChartProps {
  children: React.ReactNode
}

export const ChartContainer = ({ children }: ChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      {children}
    </ResponsiveContainer>
  )
}

interface ChartTooltipContentProps {
  payload: any[]
  label: string
  formatter?: (value: any, name: string) => string | number | React.ReactNode
}

export const ChartTooltipContent = ({ payload, label, formatter }: ChartTooltipContentProps) => {
  if (!payload || payload.length === 0) {
    return null
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div>
            <div className="font-medium">{label}</div>
            <ul className="list-none pl-0">
              {payload.map((item, index) => (
                <li key={`tooltip-item-${index}`} className="flex items-center gap-1 py-1">
                  <span
                    style={{
                      display: "inline-block",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: item.color,
                      marginRight: "4px",
                    }}
                  ></span>
                  <span>{item.name}:</span>&nbsp;
                  <span>{formatter ? formatter(item.value, item.name) : item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </TooltipTrigger>
        <TooltipContent></TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

interface ChartLegendProps {
  children: React.ReactNode
}

export const ChartLegend = ({ children }: ChartLegendProps) => {
  return (
    <Legend
      content={
        <ul className="flex items-center gap-2">
          {React.Children.map(children, (child, index) => (
            <li key={`legend-item-${index}`} className="flex items-center gap-1">
              {child}
            </li>
          ))}
        </ul>
      }
    />
  )
}

interface ChartLegendItemProps {
  name: string
  color: string
}

export const ChartLegendItem = ({ name, color }: ChartLegendItemProps) => {
  return (
    <>
      <span
        style={{
          display: "inline-block",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: color,
          marginRight: "4px",
        }}
      ></span>
      <span>{name}</span>
    </>
  )
}

interface ChartGridProps {
  horizontal?: boolean
  vertical?: boolean
}

export const ChartGrid = ({ horizontal, vertical }: ChartGridProps) => {
  return <CartesianGrid strokeDasharray="3 3" horizontal={horizontal} vertical={vertical} />
}

interface ChartLineProps {
  dataKey: string
  name: string
  color: string
  strokeWidth?: number
  strokeDasharray?: string
}

export const ChartLine = ({ dataKey, name, color, strokeWidth, strokeDasharray }: ChartLineProps) => {
  return (
    <Line
      type="monotone"
      dataKey={dataKey}
      name={name}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeDasharray={strokeDasharray}
      dot={false}
    />
  )
}

interface ChartAreaProps {
  dataKey: string
  fill: string
  fillOpacity?: number
}

export const ChartArea = ({ dataKey, fill, fillOpacity }: ChartAreaProps) => {
  return <Area type="monotone" dataKey={dataKey} stroke={fill} fill={fill} fillOpacity={fillOpacity} />
}

interface ChartXAxisProps {
  dataKey: string
  tickFormatter?: (value: any) => string
  tickCount?: number
}

export const ChartXAxis = ({ dataKey, tickFormatter, tickCount }: ChartXAxisProps) => {
  return <XAxis dataKey={dataKey} tickFormatter={tickFormatter} tickCount={tickCount} />
}

interface ChartYAxisProps {
  tickFormatter?: (value: any) => string
  domain?: number[]
  tickCount?: number
}

export const ChartYAxis = ({ tickFormatter, domain, tickCount }: ChartYAxisProps) => {
  return <YAxis tickFormatter={tickFormatter} domain={domain} tickCount={tickCount} />
}

export const Chart = ({ children }: ChartProps) => {
  return <LineChart>{children}</LineChart>
}

export const ChartTooltip = ChartTooltipContent
