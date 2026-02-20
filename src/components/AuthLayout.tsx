import React from 'react';
import { Logo } from './Logo';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
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
             {/* Logo placeholder - using the component but styling for dark bg */}
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
            Empowering agriculture with AI-driven insights for a sustainable future.
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
            <h2 className="text-3xl font-bold text-[#1B5E20] font-display">{title}</h2>
            <p className="text-gray-500 mt-2">{subtitle}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
