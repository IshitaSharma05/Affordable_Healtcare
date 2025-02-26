import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AuthPage() {
  return (
    <div className="container flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Welcome to HealthCare Platform</CardTitle>
          <CardDescription>Choose an option to continue</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button asChild className="w-full">
            <Link href="/auth/login">Existing User</Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/auth/register">New User</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

