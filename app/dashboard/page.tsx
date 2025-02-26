import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, User, Activity, Pill, FileText } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="container p-4 md:p-6">
      <div className="grid gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <Button>Book Appointment</Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Next Appointment</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">March 1, 2024</div>
              <p className="text-xs text-muted-foreground">Dr. Smith - General Checkup</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Medicine Refill</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7 Days</div>
              <p className="text-xs text-muted-foreground">Until next refill due</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Health Score</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">85/100</div>
              <p className="text-xs text-muted-foreground">Based on recent checkup</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Plan Status</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Basic Plan</div>
              <p className="text-xs text-muted-foreground">Active until Apr 2024</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Medications</CardTitle>
              <CardDescription>Your prescribed medicines for the next 7 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Metformin", dosage: "500mg", schedule: "Twice daily" },
                  { name: "Aspirin", dosage: "75mg", schedule: "Once daily" },
                ].map((medicine, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <Pill className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-sm font-medium">{medicine.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {medicine.dosage} - {medicine.schedule}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recent Test Results</CardTitle>
              <CardDescription>Latest diagnostic reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Blood Sugar Test", date: "Feb 20, 2024", status: "Normal" },
                  { name: "Blood Pressure", date: "Feb 20, 2024", status: "Elevated" },
                ].map((test, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <FileText className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-sm font-medium">{test.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {test.date} - {test.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

