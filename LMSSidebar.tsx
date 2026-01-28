import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Trophy, 
  Users, 
  BarChart3, 
  Settings, 
  Home,
  GraduationCap,
  Target,
  Brain,
  Shield,
  TrendingUp
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface LMSSidebarProps {
  isOpen: boolean;
  isMobile: boolean;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'courses', label: 'Courses', icon: BookOpen, badge: '4' },
  { id: 'skills', label: 'Skills', icon: GraduationCap },
  { id: 'achievements', label: 'Achievements', icon: Trophy, badge: '2' },
  { id: 'community', label: 'Community', icon: Users },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'goals', label: 'Goals', icon: Target },
  { id: 'settings', label: 'Settings', icon: Settings },
];

const specializations = [
  { id: 'finance', label: 'Finance Systems', icon: TrendingUp, color: 'from-emerald-500 to-teal-600' },
  { id: 'leadership', label: 'Real-Time Leadership', icon: Brain, color: 'from-blue-500 to-indigo-600' },
  { id: 'risk', label: 'Risk Management', icon: Shield, color: 'from-red-500 to-orange-600' },
  { id: 'analytics', label: 'AI Analytics', icon: BarChart3, color: 'from-purple-500 to-pink-600' },
];

const LMSSidebar: React.FC<LMSSidebarProps> = ({ 
  isOpen, 
  isMobile, 
  activeSection, 
  onSectionChange 
}) => {
  return (
    <aside className={cn(
      "bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white transition-all duration-300 flex flex-col shadow-2xl",
      isMobile ? (
        isOpen ? "fixed inset-y-0 left-0 z-50 w-64" : "hidden"
      ) : (
        isOpen ? "w-64" : "w-16"
      )
    )}>
      <div className="p-4 border-b border-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-sm">PD</span>
          </div>
          {(isOpen || !isMobile) && (
            <div>
              <h3 className="font-bold text-lg">Real-Time Leadership Center</h3>
              <p className="text-xs text-slate-400">Your Learning Partner</p>
            </div>
          )}
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <Button
              key={item.id}
              variant={isActive ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 text-left transition-all duration-200",
                isActive 
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg" 
                  : "text-slate-300 hover:text-white hover:bg-slate-700/50",
                !isOpen && !isMobile && "justify-center px-2"
              )}
              onClick={() => onSectionChange(item.id)}
              aria-label={item.label}
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              {(isOpen || isMobile) && (
                <>
                  <span className="flex-1">{item.label}</span>
                  {item.badge && (
                    <Badge variant="secondary" className="ml-auto bg-blue-100 text-blue-800">
                      {item.badge}
                    </Badge>
                  )}
                </>
              )}
            </Button>
          );
        })}
      </nav>

      {(isOpen || isMobile) && (
        <div className="p-4 border-t border-slate-700">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Specializations</h3>
          <div className="space-y-2">
            {specializations.map((spec) => {
              const Icon = spec.icon;
              return (
                <div key={spec.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-700/50 transition-colors cursor-pointer">
                  <div className={`p-1.5 rounded-md bg-gradient-to-r ${spec.color}`}>
                    <Icon className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-xs text-slate-300">{spec.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </aside>
  );
};

export default LMSSidebar;