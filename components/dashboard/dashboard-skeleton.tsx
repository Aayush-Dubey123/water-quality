import { Skeleton } from "@/components/ui/skeleton"

export function DashboardSkeleton() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} className="h-28" />
          ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} className="h-40" />
          ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Skeleton className="h-[350px]" />
        <div className="grid gap-4">
          <Skeleton className="h-[160px]" />
          <Skeleton className="h-[160px]" />
        </div>
      </div>
    </div>
  )
}
