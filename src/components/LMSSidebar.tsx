import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, Trophy, Users, BarChart3, Settings, 
  Home, Target, Brain, Shield, TrendingUp, ChevronLeft, ChevronRight 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';

interface LMSSidebarProps {
  isOpen: boolean;
  isMobile: boolean;
  activeSection: string;
  onSectionChange: (section: string) => void;
  onToggle?: () => void; 
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'courses', label: 'My Courses', icon: BookOpen, badge: '4' },
  { id: 'analytics', label: 'Agility Metrics', icon: BarChart3 },
  { id: 'goals', label: 'Action Goals', icon: Target },
  { id: 'community', label: 'MOVE Forum', icon: Users },
  { id: 'settings', label: 'Settings', icon: Settings },
];

const specializations = [
  { id: 'leadership', label: 'RTL Framework', icon: Brain, color: 'from-blue-500 to-indigo-600' },
  { id: 'risk', label: 'Risk Resilience', icon: Shield, color: 'from-red-500 to-orange-600' },
];

const LMSSidebar: React.FC<LMSSidebarProps> = ({ 
  isOpen, isMobile, activeSection, onSectionChange 
}) => {
  const { user } = useAuth();
  
  // Calculate total progress for the progress bar
  const totalProgress = user ? Math.round(Object.values(user.progress).reduce((a, b) => a + b, 0) / 8) : 0;

  return (
    <aside className={cn(
      "bg-slate-950 text-white transition-all duration-300 flex flex-col z-50",
      isMobile ? (isOpen ? "fixed inset-y-0 left-0 w-64 shadow-2xl" : "hidden") : (isOpen ? "w-64" : "w-20")
    )}>
      <div className="p-6 border-b border-slate-800 flex items-center justify-between">
        {(isOpen || isMobile) ? (
          <div className="flex items-center gap-2">
            <span className="font-black text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">MOVE</span>
            <Badge variant="outline" className="text-[9px] border-slate-700 text-slate-400">v2.0</Badge>
          </div>
        ) : (
          <div className="w-full flex justify-center">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold">M</div>
          </div>
        )}
      </div>
      
      <nav className="flex-1 p-3 space-y-1 mt-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <Button
              key={item.id}
              variant="ghost"
              className={cn(
                "w-full transition-all duration-200 group relative",
                isActive 
                  ? "bg-blue-600/10 text-blue-400 border-r-2 border-blue-500 rounded-none" 
                  : "text-slate-400 hover:text-white hover:bg-slate-900",
                isOpen ? "justify-start px-4" : "justify-center px-0"
              )}
              onClick={() => onSectionChange(item.id)}
            >
              <Icon className={cn("h-5 w-5", isActive && "text-blue-400")} />
              {(isOpen || isMobile) && (
                <span className="ml-3 font-medium flex-1">{item.label}</span>
              )}
              {(isOpen || isMobile) && item.badge && (
                <Badge className="bg-blue-600 text-[10px] h-4 w-4 p-0 flex items-center justify-center">{item.badge}</Badge>
              )}
              {/* Tooltip for collapsed mode */}
              {!isOpen && !isMobile && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-slate-800 text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 whitespace-nowrap">
                  {item.label}
                </div>
              )}
            </Button>
          );
        })}
      </nav>

      {(isOpen || isMobile) && (
        <div className="p-4 bg-slate-900/50 m-3 rounded-xl border border-slate-800">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] font-bold text-slate-500 uppercase">Overall Course</span>
            <span className="text-[10px] font-bold text-blue-400">{totalProgress}%</span>
          </div>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${totalProgress}%` }} />
          </div>
        </div>
      )}

      {(isOpen || isMobile) && (
        <div className="p-6 border-t border-slate-800">
          <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Focus Areas</h3>
          <div className="space-y-3">
            {specializations.map((spec) => (
              <div key={spec.id} className="flex items-center gap-3 group cursor-pointer">
                <div className={cn("p-1.5 rounded-md bg-gradient-to-r", spec.color)}>
                  <spec.icon className="h-3 w-3 text-white" />
                </div>
                <span className="text-xs text-slate-400 group-hover:text-slate-200 transition-colors">{spec.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
};

export default LMSSidebar;
