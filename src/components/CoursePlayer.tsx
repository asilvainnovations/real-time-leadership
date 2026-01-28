import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Circle, ChevronLeft, ChevronRight, Download, Award } from 'lucide-react';
import { modules } from '@/data/realTimeLeadershipModules';

interface CoursePlayerProps {
  onBack: () => void;
}

const CoursePlayer: React.FC<CoursePlayerProps> = ({ onBack }) => {
  const [currentModule, setCurrentModule] = useState(0);
  const [completedModules, setCompletedModules] = useState<number[]>([]);

  const handleComplete = () => {
    if (!completedModules.includes(currentModule)) {
      setCompletedModules([...completedModules, currentModule]);
    }
    if (currentModule < modules.length - 1) {
      setCurrentModule(currentModule + 1);
    }
  };

  const progress = (completedModules.length / modules.length) * 100;
  const module = modules[currentModule];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={onBack}><ChevronLeft className="h-4 w-4 mr-2" />Back to Courses</Button>
        <div className="text-sm text-gray-600">Module {currentModule + 1} of {modules.length}</div>
      </div>

      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="secondary" className="bg-white/20 text-white">{module.duration}</Badge>
            {module.moveElement && <Badge variant="secondary" className="bg-white/20 text-white">{module.moveElement}</Badge>}
          </div>
          <CardTitle className="text-2xl">{module.title}</CardTitle>
          <p className="text-blue-100 mt-2">{module.description}</p>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
            <img src={module.icon} alt={module.title} className="w-48 h-48 object-cover rounded-lg" />
          </div>

          {module.keyRoles && (
            <div>
              <h3 className="font-semibold mb-2">Key Leadership Roles</h3>
              <div className="flex flex-wrap gap-2">
                {module.keyRoles.map((role, idx) => (
                  <Badge key={idx} variant="outline">{role}</Badge>
                ))}
              </div>
            </div>
          )}

          <div>
            <h3 className="font-semibold mb-2">Key Learning Points</h3>
            <ul className="space-y-2">
              {module.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Tools & Resources</h3>
            <div className="space-y-2">
              {module.tools.map((tool, idx) => (
                <Button key={idx} variant="outline" size="sm" className="w-full justify-between">
                  {tool}
                  <Download className="h-4 w-4" />
                </Button>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-4 border-t">
            <Button variant="outline" disabled={currentModule === 0} onClick={() => setCurrentModule(currentModule - 1)}>
              <ChevronLeft className="h-4 w-4 mr-2" />Previous
            </Button>
            <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600" onClick={handleComplete}>
              {currentModule === modules.length - 1 ? 'Complete Course' : 'Mark Complete & Continue'}
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Course Progress</CardTitle>
          <Progress value={progress} className="mt-2" />
          <p className="text-sm text-gray-600 mt-2">{completedModules.length} of {modules.length} modules completed</p>
        </CardHeader>
      </Card>
    </div>
  );
};

export default CoursePlayer;
