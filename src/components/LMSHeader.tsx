import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bell, Search, User, Menu, GraduationCap, LogOut } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext'; //

interface LMSHeaderProps {
  onMenuClick: () => void;
  isMobile: boolean;
}

const LMSHeader: React.FC<LMSHeaderProps> = ({ onMenuClick, isMobile }) => {
  const { user, logout } = useAuth(); // Access auth state

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm sticky top-0 z-40">
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
          <div className="hidden md:block">
            <h1 className="text-xl font-bold text-gray-900 leading-none">Leadership Center</h1>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Real-Time Leadership</p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative hidden lg:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input 
            placeholder="Search modules, analytics, or forum..." 
            className="pl-10 w-80 border-gray-200 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5 text-gray-600" />
            <Badge className="absolute top-1 right-1 h-2 w-2 rounded-full p-0 bg-red-500 border-2 border-white" />
          </Button>
          
          <div className="flex items-center gap-3 ml-2 pl-4 border-l border-gray-100">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-gray-900">{user?.name || 'Learner'}</p>
              <p className="text-xs text-blue-600 font-medium">Lvl 12 MOVE Expert</p>
            </div>
            <div className="group relative">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center cursor-pointer shadow-md">
                <User className="h-5 w-5 text-white" />
              </div>
              {/* Simple Profile Dropdown */}
              <div className="hidden group-hover:block absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-lg shadow-xl p-2 animate-in slide-in-from-top-1">
                <Button variant="ghost" className="w-full justify-start text-xs text-red-600 hover:bg-red-50 hover:text-red-700" onClick={logout}>
                  <LogOut className="h-3 w-3 mr-2" /> Sign Out
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LMSHeader;
