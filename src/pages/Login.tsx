import React from 'react';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../components/AuthLayout';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Checkbox } from '../components/ui/checkbox';

export default function Login() {
  return (
    <AuthLayout title="Login" subtitle="Welcome Back">
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2">
          <Label htmlFor="email">Email or Phone Number</Label>
          <Input id="email" placeholder="Enter your email or phone" type="text" />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="Enter your password" type="password" />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <label
              htmlFor="remember"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-600"
            >
              Remember Me
            </label>
          </div>
          <Link to="#" className="text-sm font-medium text-[#1B5E20] hover:underline">
            Forgot Password?
          </Link>
        </div>

        <Link to="/dashboard">
            <Button className="w-full h-12 text-lg bg-[#1B5E20] hover:bg-[#1B5E20]/90 mt-2">
            Login
            </Button>
        </Link>

        <div className="text-center text-sm text-gray-500 mt-4">
          Don't have an account?{' '}
          <Link to="/signup" className="font-semibold text-[#1B5E20] hover:underline">
            Sign Up
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}
