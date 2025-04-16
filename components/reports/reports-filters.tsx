"use client"

import { Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export function ReportsFilters() {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex flex-1 items-center space-x-2">
        <Input placeholder="Search reports..." className="h-8 w-[150px] lg:w-[250px]" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-8 border-dashed">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuLabel>Filter by</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Type</DropdownMenuLabel>
            <DropdownMenuCheckboxItem checked>Daily</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Weekly</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Monthly</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Quarterly</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Annual</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Custom</DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Format</DropdownMenuLabel>
            <DropdownMenuCheckboxItem checked>PDF</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Excel</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>CSV</DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Author</DropdownMenuLabel>
            <DropdownMenuCheckboxItem checked>System</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Operator</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex flex-wrap gap-1">
          <Badge variant="secondary" className="rounded-sm px-1 font-normal">
            PDF
            <Button variant="ghost" size="icon" className="ml-1 h-3 w-3 text-muted-foreground">
              <X className="h-3 w-3" />
              <span className="sr-only">Remove filter</span>
            </Button>
          </Badge>
          <Badge variant="secondary" className="rounded-sm px-1 font-normal">
            System
            <Button variant="ghost" size="icon" className="ml-1 h-3 w-3 text-muted-foreground">
              <X className="h-3 w-3" />
              <span className="sr-only">Remove filter</span>
            </Button>
          </Badge>
        </div>
      </div>
      <div className="flex-none">
        <Button variant="outline" size="sm" className="ml-auto h-8">
          Clear filters
        </Button>
      </div>
    </div>
  )
}
