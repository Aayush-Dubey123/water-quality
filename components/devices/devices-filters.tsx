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

export function DevicesFilters() {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex flex-1 items-center space-x-2">
        <Input placeholder="Search devices..." className="h-8 w-[150px] lg:w-[250px]" />
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
            <DropdownMenuLabel>Status</DropdownMenuLabel>
            <DropdownMenuCheckboxItem checked>Online</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Offline</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Maintenance</DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Type</DropdownMenuLabel>
            <DropdownMenuCheckboxItem checked>pH</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Chlorine</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Temperature</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Dissolved Oxygen</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Turbidity</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>TDS</DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Location</DropdownMenuLabel>
            <DropdownMenuCheckboxItem checked>Treatment Plant A</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Treatment Plant B</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Distribution Node C</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex flex-wrap gap-1">
          <Badge variant="secondary" className="rounded-sm px-1 font-normal">
            Online
            <Button variant="ghost" size="icon" className="ml-1 h-3 w-3 text-muted-foreground">
              <X className="h-3 w-3" />
              <span className="sr-only">Remove filter</span>
            </Button>
          </Badge>
          <Badge variant="secondary" className="rounded-sm px-1 font-normal">
            pH
            <Button variant="ghost" size="icon" className="ml-1 h-3 w-3 text-muted-foreground">
              <X className="h-3 w-3" />
              <span className="sr-only">Remove filter</span>
            </Button>
          </Badge>
          <Badge variant="secondary" className="rounded-sm px-1 font-normal">
            Treatment Plant A
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
