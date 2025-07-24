import { LoginForm } from "@/components/auth/login-form"
import { GraduationCap } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="text-center mb-8">
            <Link href="/" className="flex items-center justify-center space-x-2 mb-6">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-outfit font-bold text-gray-900">EduCore</span>
            </Link>
            <h2 className="text-3xl font-outfit font-bold text-gray-900">Welcome back</h2>
            <p className="mt-2 text-gray-600">Sign in to access your dashboard</p>
          </div>

          <LoginForm />

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link href="/auth/register" className="font-medium text-blue-600 hover:text-blue-500">
                Request access
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/placeholder.svg?height=800&width=600"
          alt="School building"
        />
        <div className="absolute inset-0 bg-blue-600 bg-opacity-20" />
      </div>
    </div>
  )
}
