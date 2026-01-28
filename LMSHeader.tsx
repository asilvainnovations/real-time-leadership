import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bell, Search, User, Menu, GraduationCap } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface LMSHeaderProps {
  onMenuClick: () => void;
  isMobile: boolean;
}

const LMSHeader: React.FC<LMSHeaderProps> = ({ onMenuClick, isMobile }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-4">
        {isMobile && (
          <Button variant="ghost" size="sm" onClick={onMenuClick}>
            <Menu className="h-5 w-5" />
          </Button>
        )}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Real-Time Leadership Center</h1>
            <p className="text-xs text-gray-500 hidden sm:block">Reat-Time Leasdership</p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input 
            placeholder="Search courses, skills, analytics..." 
            className="pl-10 w-72 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="relative hover:bg-blue-50">
            <Bell className="h-5 w-5 text-gray-600" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-gradient-to-r from-red-500 to-pink-500 border-2 border-white">
              2
            </Badge>
          </Button>
          
          <div className="hidden sm:flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
            <div className="text-sm">
              <p className="font-medium text-gray-900">You</p>
              <p className="text-xs text-gray-500">Learner</p>
            </div>
          </div>
          
          <Button variant="ghost" size="sm" className="sm:hidden hover:bg-blue-50">
            <User className="h-5 w-5 text-gray-600" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default LMSHeader;