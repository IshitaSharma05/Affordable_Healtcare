import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { HeartPulse, PillIcon as Pills, Stethoscope, ClipboardCheck } from "lucide-react"

export default function Page() {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Affordable Healthcare Solutions
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Access quality healthcare services, diagnostic tests, and medicines at affordable prices. Powered by AI
                for personalized care recommendations.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/register">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <Card>
              <CardHeader>
                <HeartPulse className="w-8 h-8 text-primary" />
                <CardTitle>Health Monitoring</CardTitle>
                <CardDescription>Regular health checkups and diagnostic tests at your convenience.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Blood sugar monitoring</li>
                  <li>Blood pressure checks</li>
                  <li>Basic health parameters</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Pills className="w-8 h-8 text-primary" />
                <CardTitle>Medicine Delivery</CardTitle>
                <CardDescription>Monthly supply of essential medicines delivered to your doorstep.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Generic medicines</li>
                  <li>Monthly subscriptions</li>
                  <li>Automatic refills</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Stethoscope className="w-8 h-8 text-primary" />
                <CardTitle>Doctor Consultations</CardTitle>
                <CardDescription>Connect with healthcare professionals when you need them.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Online consultations</li>
                  <li>Specialist referrals</li>
                  <li>24/7 support</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Affordable Healthcare Plans</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Choose from our range of affordable healthcare plans designed to fit your needs and budget. All plans
                include access to essential healthcare services starting at just ₹500 per month.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Plan</CardTitle>
                  <CardDescription>Essential healthcare coverage</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">₹500/month</div>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center">
                      <ClipboardCheck className="mr-2 h-4 w-4 text-primary" />
                      Basic health checkups
                    </li>
                    <li className="flex items-center">
                      <ClipboardCheck className="mr-2 h-4 w-4 text-primary" />
                      Generic medicines
                    </li>
                    <li className="flex items-center">
                      <ClipboardCheck className="mr-2 h-4 w-4 text-primary" />
                      Online consultations
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Subscribe Now</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Premium Plan</CardTitle>
                  <CardDescription>Comprehensive healthcare solution</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">₹999/month</div>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center">
                      <ClipboardCheck className="mr-2 h-4 w-4 text-primary" />
                      All Basic Plan features
                    </li>
                    <li className="flex items-center">
                      <ClipboardCheck className="mr-2 h-4 w-4 text-primary" />
                      Specialist consultations
                    </li>
                    <li className="flex items-center">
                      <ClipboardCheck className="mr-2 h-4 w-4 text-primary" />
                      Family coverage
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Subscribe Now</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

