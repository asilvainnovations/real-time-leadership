import React, { useState } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { useIsMobile } from '@/hooks/use-mobile';
import LMSHeader from './LMSHeader';
import LMSSidebar from './LMSSidebar';
import DashboardContent from './DashboardContent';
import CoursesContent from './CoursesContent';
import SkillsContent from './SkillsContent';

const AppLayout: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useAppContext();
  const isMobile = useIsMobile();
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'courses':
        return <CoursesContent />;
      case 'skills':
        return <SkillsContent />;
      case 'achievements':
      case 'community':
      case 'analytics':
      case 'goals':
      case 'settings':
        return (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
              </h2>
              <p className="text-gray-600">This section is coming soon!</p>
            </div>
          </div>
        );
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <LMSSidebar 
        isOpen={sidebarOpen} 
        isMobile={isMobile}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      
      <div className="flex-1 flex flex-col">
        <LMSHeader 
          onMenuClick={toggleSidebar}
          isMobile={isMobile}
        />
        
        <main className="flex-1 p-6 overflow-auto">
          {renderContent()}
        </main>
      </div>
      
      {isMobile && sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40" 
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default AppLayout;