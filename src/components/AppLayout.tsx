import React, { useState } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { useIsMobile } from '@/hooks/use-mobile';
import LMSHeader from './LMSHeader';
import LMSSidebar from './LMSSidebar';
import DashboardContent from './DashboardContent';
import CoursesContent from './CoursesContent';
import SkillsContent from './SkillsContent';
import AnalyticsContent from './AnalyticsContent';
import GoalsContent from './GoalsContent';
import SettingsContent from './SettingsContent';
import { MessageSquare } from 'lucide-react';

const AppLayout: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useAppContext();
  const isMobile = useIsMobile();
  const [activeSection, setActiveSection] = useState('dashboard');

  /**
   * Orchestrates the main content area based on sidebar selection.
   * Integrates the new Analytics, Goals, and Settings modules.
   */
  const renderContent = () => {
    switch (activeSection) {
      case 'courses':
        return <CoursesContent />;
      case 'skills':
        return <SkillsContent />;
      case 'analytics':
        return <AnalyticsContent />;
      case 'goals':
        return <GoalsContent />;
      case 'settings':
        return <SettingsContent />;
      case 'achievements':
        // If an AchievementsContent.tsx exists, it would be mapped here
        return (
          <div className="flex items-center justify-center h-64 text-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">My Achievements</h2>
              <p className="text-gray-600">Your earned certificates and badges will appear here.</p>
            </div>
          </div>
        );
      case 'community':
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center animate-in fade-in zoom-in duration-300">
            <div className="p-6 bg-blue-50 rounded-full mb-4">
              <MessageSquare className="h-12 w-12 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">MOVE Discussion Forum</h2>
            <p className="text-gray-600 max-w-md">
              Collaborate with peers, ask questions, and share insights about the MOVE framework.
              The forum is currently being provisioned for your cohort.
            </p>
          </div>
        );
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex overflow-hidden">
      {/* Sidebar Navigation */}
      <LMSSidebar 
        isOpen={sidebarOpen} 
        isMobile={isMobile}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Global Header */}
        <LMSHeader 
          onMenuClick={toggleSidebar}
          isMobile={isMobile}
        />
        
        {/* Main Application Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
      
      {/* Mobile Backdrop Overlay */}
      {isMobile && sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity" 
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default AppLayout;
