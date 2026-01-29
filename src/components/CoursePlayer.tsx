import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle, 
  Circle, 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  Award,
  PlayCircle,
  FileText
} from 'lucide-react';

// FIX: Corrected named import to match realTimeLeadershipModules.ts
import { realTimeLeadershipModules } from '@/data/realTimeLeadershipModules';
import { useAuth } from '@/contexts/AuthContext';
import { generateCertificate } from '@/utils/certificateGenerator';

const CoursePlayer: React.FC = () => {
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const { user, updateProgress } = useAuth();
  
  const currentModule = realTimeLeadershipModules[currentModuleIndex];
  const isLastModule = currentModuleIndex === realTimeLeadershipModules.length - 1;
  const overallProgress = Math.round(((currentModuleIndex + 1) / realTimeLeadershipModules.length) * 100);

  // Sync progress with AuthContext/LocalStorage whenever the user views a module
  useEffect(() => {
    updateProgress(currentModule.id, 100);
  }, [currentModuleIndex, currentModule.id, updateProgress]);

  const handleNext = () => {
    if (currentModuleIndex < realTimeLeadershipModules.length - 1) {
      setCurrentModuleIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentModuleIndex > 0) {
      setCurrentModuleIndex(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCompleteCourse = () => {
    if (user) {
      generateCertificate(user.name, "Real-Time Leadership for Resilient Organizations");
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-20 animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="flex flex-col md:row md:items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-600 rounded-lg">
            <Award className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest">MOVE Framework</h2>
            <h1 className="text-2xl font-bold text-gray-900">{currentModule.title}</h1>
          </div>
        </div>
        <div className="w-full md:w-72 space-y-2">
          <div className="flex justify-between text-xs font-bold text-gray-500 uppercase">
            <span>Course Progress</span>
            <span>{overallProgress}%</span>
          </div>
          <Progress value={overallProgress} className="h-2" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Module Content */}
        <div className="lg:col-span-3 space-y-6">
          <Card className="border-0 shadow-xl overflow-hidden bg-white">
            <div className="aspect-video bg-slate-900 flex items-center justify-center relative group">
              <PlayCircle className="h-20 w-20 text-white/50 group-hover:text-white/90 transition-all cursor-pointer" />
              <div className="absolute bottom-4 left-4">
                <Badge variant="secondary" className="bg-black/60 text-white border-0 backdrop-blur-md">
                  {currentModule.duration}
                </Badge>
              </div>
            </div>
            
            <CardContent className="p-8">
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" /> Learning Objectives
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {currentModule.keyPoints.map((point, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-gray-50 border border-gray-100 text-gray-700 text-sm">
                      {point}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" /> Leadership Tools
                </h3>
                <div className="flex flex-wrap gap-3">
                  {currentModule.tools.map((tool, idx) => (
                    <Button key={idx} variant="outline" className="border-blue-100 bg-blue-50/30 text-blue-700 hover:bg-blue-100">
                      <Download className="h-4 w-4 mr-2" /> {tool}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Nav Controls */}
          <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm">
            <Button variant="ghost" onClick={handlePrevious} disabled={currentModuleIndex === 0}>
              <ChevronLeft className="mr-2 h-4 w-4" /> Previous Module
            </Button>
            
            {isLastModule ? (
              <Button onClick={handleCompleteCourse} className="bg-emerald-600 hover:bg-emerald-700 text-white px-8">
                Generate My Certificate <Award className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={handleNext} className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                Continue <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Curriculum Sidebar */}
        <div className="lg:col-span-1">
          <Card className="border-0 shadow-lg sticky top-24">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="text-xs font-black uppercase tracking-widest text-gray-400">Curriculum</CardTitle>
            </CardHeader>
            <div className="divide-y divide-gray-100">
              {realTimeLeadershipModules.map((mod, idx) => {
                const isActive = idx === currentModuleIndex;
                const isCompleted = idx < currentModuleIndex;
                return (
                  <button
                    key={mod.id}
                    onClick={() => setCurrentModuleIndex(idx)}
                    className={`w-full text-left p-4 flex items-center gap-3 transition-all ${
                      isActive ? 'bg-blue-50 border-l-4 border-blue-600' : 'hover:bg-gray-50 border-l-4 border-transparent'
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <Circle className={`h-4 w-4 ${isActive ? 'text-blue-600' : 'text-gray-300'}`} />
                    )}
                    <span className={`text-xs font-bold ${isActive ? 'text-blue-700' : 'text-gray-500'}`}>
                      {idx + 1}. {mod.title.split(':')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CoursePlayer;