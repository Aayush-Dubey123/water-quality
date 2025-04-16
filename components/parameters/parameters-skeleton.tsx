import { Skeleton } from "@/components/ui/skeleton"

export function ParametersSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-10 w-full" />
      <div className="grid gap-4 md:grid-cols-7">
        <Skeleton className="h-[500px] md:col-span-5" />
        <div className="grid gap-4 md:col-span-2">
          <Skeleton className="h-[250px]" />
          <Skeleton className="h-[220px]" />
        </div>
      </div>
    </div>
  )
}
