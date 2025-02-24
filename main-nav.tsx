import Link from "next/link"
import { Button } from "@/components/ui/button"

export function MainNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">HealthCare Platform</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/dashboard" className="transition-colors hover:text-foreground/80">
              Dashboard
            </Link>
            <Link href="/appointments" className="transition-colors hover:text-foreground/80">
              Appointments
            </Link>
            <Link href="/medicines" className="transition-colors hover:text-foreground/80">
              Medicines
            </Link>
            <Link href="/tests" className="transition-colors hover:text-foreground/80">
              Diagnostic Tests
            </Link>
          </nav>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/register">Register</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

