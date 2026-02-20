import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Logo } from '../components/Logo';

export default function Signup() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    state: '',
    district: '',
    village: '',
    landArea: '',
    landUnit: 'acre',
    landType: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send formData to a backend here
    console.log('Form Submitted:', formData);
    navigate('/dashboard');
  };

  return (
    <div className="flex min-h-screen w-full">
      {/* Left Side - Hero */}
      <div className="hidden lg:flex w-1/2 flex-col justify-between bg-gradient-to-br from-[#1B5E20] to-[#0D47A1] p-12 text-white relative overflow-hidden">
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3">
             <div className="bg-white/90 p-3 rounded-xl backdrop-blur-sm shadow-lg">
                <Logo className="h-10 w-10" textClassName="text-2xl" />
             </div>
          </div>
        </div>

        <div className="relative z-10 max-w-lg">
          <h1 className="text-5xl font-bold font-display leading-tight mb-6">
            The unfair advantage every farmer deserves.
          </h1>
          <p className="text-lg text-white/80 font-light">
            Join thousands of farmers using AI to optimize their yield.
          </p>
        </div>

        <div className="relative z-10 text-sm text-white/60">
          © 2026 KrishiSahAI. All rights reserved.
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-[#F1F8E9] p-8">
        <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-[#1B5E20] font-display">Sign Up</h2>
            <p className="text-gray-500 mt-2 font-medium">
              {step === 1 && "Step 1: Personal Details"}
              {step === 2 && "Step 2: Location Details"}
              {step === 3 && "Step 3: Land & Area Details"}
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mb-8 gap-2">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-2 w-16 rounded-full transition-colors ${
                  s <= step ? 'bg-[#1B5E20]' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input 
                    id="fullName" 
                    placeholder="John Doe" 
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    placeholder="+91 98765 43210" 
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="••••••••" 
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Select value={formData.state} onValueChange={(val) => handleSelectChange('state', val)}>
                    <SelectTrigger id="state">
                      <SelectValue placeholder="Select State" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mh">Maharashtra</SelectItem>
                      <SelectItem value="gj">Gujarat</SelectItem>
                      <SelectItem value="pb">Punjab</SelectItem>
                      <SelectItem value="ka">Karnataka</SelectItem>
                      <SelectItem value="tn">Tamil Nadu</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="district">District</Label>
                  <Input 
                    id="district" 
                    placeholder="Enter District" 
                    value={formData.district}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="village">Village/Town</Label>
                  <Input 
                    id="village" 
                    placeholder="Enter Village" 
                    value={formData.village}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="space-y-2">
                  <Label htmlFor="landArea">Total Land Area</Label>
                  <div className="flex gap-2">
                    <Input 
                      id="landArea" 
                      placeholder="e.g. 5" 
                      className="flex-1" 
                      value={formData.landArea}
                      onChange={handleInputChange}
                    />
                    <Select value={formData.landUnit} onValueChange={(val) => handleSelectChange('landUnit', val)}>
                      <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="acre">Acre</SelectItem>
                        <SelectItem value="hectare">Hectare</SelectItem>
                        <SelectItem value="guntha">Guntha</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="landType">Type of Land</Label>
                  <Select value={formData.landType} onValueChange={(val) => handleSelectChange('landType', val)}>
                    <SelectTrigger id="landType">
                      <SelectValue placeholder="Select Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="irrigated">Irrigated</SelectItem>
                      <SelectItem value="rainfed">Rainfed</SelectItem>
                      <SelectItem value="both">Both</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            <div className="flex gap-4 pt-4">
              {step > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  className="flex-1 h-12 text-lg border-[#1B5E20] text-[#1B5E20] hover:bg-[#E8F5E9]"
                >
                  Back
                </Button>
              )}
              {step < 3 ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="flex-1 h-12 text-lg bg-[#1B5E20] hover:bg-[#1B5E20]/90 ml-auto w-full"
                >
                  Next
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="flex-1 h-12 text-lg bg-[#1B5E20] hover:bg-[#1B5E20]/90"
                >
                  Submit
                </Button>
              )}
            </div>
          </form>

          <div className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-[#1B5E20] hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
