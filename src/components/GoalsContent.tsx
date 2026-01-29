import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Circle, Plus, Target } from 'lucide-react';

const GoalsContent: React.FC = () => {
  const goals = [
    { id: 1, title: 'Complete RTL Baseline Assessment', status: 'completed', category: 'Orientation' },
    { id: 2, title: 'Apply Triage Mapping to Weekly Meeting', status: 'in-progress', category: 'Mastery' },
    { id: 3, title: 'Reduce "Either/Or" decisions by 50%', status: 'pending', category: 'Generate' },
    { id: 4, title: 'Earn MOVE Leadership Certification', status: 'pending', category: 'Milestone' },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <Target className="h-6 w-6 text-red-500" /> My Learning Goals
        </h2>
        <Button size="sm" className="bg-blue-600">
          <Plus className="h-4 w-4 mr-2" /> Add Goal
        </Button>
      </div>

      <div className="grid gap-4">
        {goals.map((goal) => (
          <Card key={goal.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-4 flex items-center gap-4">
              {goal.status === 'completed' ? (
                <CheckCircle2 className="h-6 w-6 text-emerald-500" />
              ) : (
                <Circle className="h-6 w-6 text-gray-300" />
              )}
              <div className="flex-1">
                <h4 className={`font-medium ${goal.status === 'completed' ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                  {goal.title}
                </h4>
                <Badge variant="outline" className="text-[10px] mt-1">{goal.category}</Badge>
              </div>
              <Button variant="ghost" size="sm">Edit</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GoalsContent;
