import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto p-6">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="flex flex-col items-center space-y-4">
          <Skeleton className="w-24 h-24 rounded-full" />
          <Skeleton className="h-8 w-[200px]" />
        </CardHeader>
        <CardContent className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </CardContent>
      </Card>
    </div>
  );
}