import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Sprout, 
  Briefcase, 
  User, 
  Send, 
  Globe, 
  Menu, 
  X,
  Leaf,
  TrendingUp,
  Settings,
  LogOut
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Logo } from '../components/Logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"

export default function Dashboard() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { role: 'ai', text: 'Namaste! I am KrishiSahAI. How can I help you with your farm today?' }
  ]);
  const navigate = useNavigate();

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    setChatHistory([...chatHistory, { role: 'user', text: message }]);
    setMessage('');
    
    // Simulate AI response
    setTimeout(() => {
      setChatHistory(prev => [...prev, { role: 'ai', text: 'I am analyzing your query. Please wait a moment...' }]);
    }, 1000);
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[#F1F8E9]">
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Logo />
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <Button variant="ghost" size="sm" className="hidden sm:flex gap-2 text-gray-600">
                <Globe className="h-4 w-4" />
                <span>EN</span>
              </Button>

              {/* Profile Button with Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="h-10 w-10 rounded-full bg-[#E8F5E9] flex items-center justify-center text-[#1B5E20] font-bold border border-[#1B5E20]/20 cursor-pointer hover:bg-[#C8E6C9] transition-colors">
                    JD
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <div className="px-2 py-1.5 text-sm text-gray-500">
                    <p className="font-medium text-gray-900">John Doe</p>
                    <p>john.doe@example.com</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50" onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[calc(100vh-8rem)]">
          
          {/* LEFT SIDE - Chatbot Section (Span 7 cols) */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <Card className="flex-1 flex flex-col shadow-md border-0 overflow-hidden h-full">
              <CardHeader className="bg-white border-b border-gray-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#E8F5E9] p-2 rounded-lg">
                    <Sprout className="h-6 w-6 text-[#1B5E20]" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Ask AI</CardTitle>
                    <CardDescription>Ask anything about your farm</CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50/50">
                {chatHistory.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                        msg.role === 'user'
                          ? 'bg-[#1B5E20] text-white rounded-br-none'
                          : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </CardContent>

              <div className="p-4 bg-white border-t border-gray-100">
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your question here..."
                    className="flex-1 bg-gray-50 border-gray-200 focus-visible:ring-[#1B5E20]"
                  />
                  <Button type="submit" size="icon" className="bg-[#1B5E20] hover:bg-[#1B5E20]/90 rounded-xl w-12">
                    <Send className="h-5 w-5" />
                  </Button>
                </form>
              </div>
            </Card>
          </div>

          {/* RIGHT SIDE - Feature Cards (Span 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 h-full">
            
            {/* Crop Care Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] flex-1">
              <CardContent className="p-8 flex flex-col justify-center h-full gap-6">
                <div className="h-20 w-20 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors text-white backdrop-blur-sm">
                  <Leaf className="h-10 w-10" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white font-display mb-2">Crop Care</h3>
                  <p className="text-white/80 text-lg">Protect your crops with AI diagnosis</p>
                </div>
              </CardContent>
            </Card>

            {/* Business Advisory Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-gradient-to-br from-[#0D47A1] to-[#1565C0] flex-1">
              <CardContent className="p-8 flex flex-col justify-center h-full gap-6">
                <div className="h-20 w-20 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors text-white backdrop-blur-sm">
                  <TrendingUp className="h-10 w-10" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white font-display mb-2">Business Advisory</h3>
                  <p className="text-white/80 text-lg">Grow your agri business & profits</p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </main>
    </div>
  );
}
