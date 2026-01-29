import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BarChart3, TrendingUp, Brain, Target, Zap } from 'lucide-react';

const AnalyticsContent: React.FC = () => {
  const moveMetrics = [
    { label: 'Master the Moment', value: 75, color: 'bg-blue-500' },
    { label: 'Generate Options', value: 60, color: 'bg-purple-500' },
    { label: 'Validate Choices', value: 45, color: 'bg-indigo-500' },
    { label: 'Execute & Evaluate', value: 30, color: 'bg-emerald-500' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-0 shadow-md bg-gradient-to-br from-blue-600 to-blue-700 text-white">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-blue-100 text-sm">Overall Agility Score</p>
                <h3 className="text-3xl font-bold">72/100</h3>
              </div>
              <TrendingUp className="h-8 w-8 opacity-20" />
            </div>
            <p className="mt-4 text-xs text-blue-200">+12% from Orientation Baseline</p>
          </CardContent>
        </Card>
        {/* Additional Stats Cards */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Brain className="h-5 w-5 text-purple-600" /> MOVE Pillar Mastery
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {moveMetrics.map((metric) => (
              <div key={metric.label} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-700">{metric.label}</span>
                  <span className="text-gray-500">{metric.value}%</span>
                </div>
                <Progress value={metric.value} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-blue-600" /> Quiz Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
             <div className="h-[200px] flex items-end justify-around gap-2 pt-4">
                {[40, 70, 90, 65, 85].map((h, i) => (
                  <div key={i} className="w-full flex flex-col items-center gap-2">
                    <div className="w-full bg-blue-100 rounded-t-md transition-all duration-1000" style={{ height: `${h}%` }}>
                      <div className="w-full bg-blue-500 rounded-t-md" style={{ height: '30%' }}></div>
                    </div>
                    <span className="text-[10px] text-gray-400">Mod {i+1}</span>
                  </div>
                ))}
             </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsContent;
