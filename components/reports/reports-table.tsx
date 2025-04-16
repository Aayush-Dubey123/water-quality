"use client"

import { BarChart3, ChevronDown, Clock, Download, FileText, MoreHorizontal, Printer, Share2 } from "lucide-react"
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

export function ReportsTable() {
  const reports = [
    {
      id: "1",
      name: "Daily Water Quality Report",
      type: "Daily",
      format: "PDF",
      date: "April 15, 2023",
      time: "11:59 PM",
      size: "1.2 MB",
      author: "System",
      status: "Generated",
    },
    {
      id: "2",
      name: "Weekly Compliance Report",
      type: "Weekly",
      format: "PDF",
      date: "April 14, 2023",
      time: "11:59 PM",
      size: "2.5 MB",
      author: "System",
      status: "Generated",
    },
    {
      id: "3",
      name: "Monthly Parameter Analysis",
      type: "Monthly",
      format: "PDF",
      date: "March 31, 2023",
      time: "11:59 PM",
      size: "4.8 MB",
      author: "System",
      status: "Generated",
    },
    {
      id: "4",
      name: "Quarterly Regulatory Compliance",
      type: "Quarterly",
      format: "PDF",
      date: "March 31, 2023",
      time: "11:59 PM",
      size: "6.2 MB",
      author: "System",
      status: "Generated",
    },
    {
      id: "5",
      name: "Custom Parameter Report",
      type: "Custom",
      format: "Excel",
      date: "April 10, 2023",
      time: "3:45 PM",
      size: "1.8 MB",
      author: "Operator",
      status: "Generated",
    },
    {
      id: "6",
      name: "Annual Water Quality Summary",
      type: "Annual",
      format: "PDF",
      date: "December 31, 2022",
      time: "11:59 PM",
      size: "12.5 MB",
      author: "System",
      status: "Generated",
    },
  ]

  return (
    <div className="rounded-md border">
      <div className="flex items-center justify-between p-4">
        <div className="flex flex-1 items-center space-x-2">
          <Button variant="outline" size="sm" className="h-8">
            <FileText className="mr-2 h-4 w-4" />
            Generate Report
          </Button>
          <Button variant="outline" size="sm" className="h-8">
            <BarChart3 className="mr-2 h-4 w-4" />
            Analytics
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="h-8">
            <Clock className="mr-2 h-4 w-4" />
            Last 30 days
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">
              <Checkbox />
            </TableHead>
            <TableHead>Report Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Format</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reports.map((report) => (
            <TableRow key={report.id}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell className="font-medium">{report.name}</TableCell>
              <TableCell>{report.type}</TableCell>
              <TableCell>
                <Badge variant="outline">{report.format}</Badge>
              </TableCell>
              <TableCell>{report.date}</TableCell>
              <TableCell>{report.time}</TableCell>
              <TableCell>{report.size}</TableCell>
              <TableCell>{report.author}</TableCell>
              <TableCell>
                <Badge variant="outline" className="text-green-500 border-green-500">
                  {report.status}
                </Badge>
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
                    <DropdownMenuItem>
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Printer className="mr-2 h-4 w-4" />
                      Print
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>View details</DropdownMenuItem>
                    <DropdownMenuItem>Generate similar</DropdownMenuItem>
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
