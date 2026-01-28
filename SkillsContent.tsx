import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Target, 
  TrendingUp, 
  Award, 
  BookOpen,
  Users,
  Star,
  Brain,
  Shield,
  BarChart3,
  DollarSign
} from 'lucide-react';

const SkillsContent: React.FC = () => {
  const skillCategories = [
    {
      title: 'Systems Thinking & Financial Management',
      skills: [
        { name: 'Holistic Financial Planning', level: 75, courses: 2, icon: DollarSign },
        { name: 'Budget Systems Integration', level: 60, courses: 3, icon: TrendingUp },
        { name: 'Resource Allocation Strategy', level: 45, courses: 2, icon: Target },
      ],
      color: 'from-emerald-500 to-teal-700'
    },
    {
      title: 'Real-Time Leadership',
      skills: [
        { name: 'Adaptive Decision Making', level: 85, courses: 2, icon: Brain },
        { name: 'Dynamic Team Management', level: 70, courses: 3, icon: Users },
        { name: 'Crisis Leadership', level: 55, courses: 2, icon: Target },
      ],
      color: 'from-blue-500 to-indigo-700'
    },
    {
      title: 'Risk & Resilience Management',
      skills: [
        { name: 'Risk Assessment & Analysis', level: 65, courses: 3, icon: Shield },
        { name: 'Organizational Resilience', level: 50, courses: 2, icon: TrendingUp },
        { name: 'Crisis Response Planning', level: 40, courses: 2, icon: Target },
      ],
      color: 'from-red-500 to-orange-700'
    },
    {
      title: 'AI-Driven Analytics',
      skills: [
        { name: 'Performance Data Analysis', level: 80, courses: 2, icon: BarChart3 },
        { name: 'AI Implementation Strategy', level: 35, courses: 3, icon: Brain },
        { name: 'Data-Driven Decision Making', level: 70, courses: 2, icon: TrendingUp },
      ],
      color: 'from-purple-500 to-pink-700'
    }
  ];

  const achievements = [
    { title: 'Systems Thinking Expert', description: 'Mastered financial systems integration', icon: '🎯', earned: true },
    { title: 'Real-Time Leader', description: 'Completed adaptive leadership track', icon: '🧠', earned: true },
    { title: 'Risk Management Pro', description: 'Expert in organizational resilience', icon: '🛡️', earned: false },
    { title: 'AI Analytics Pioneer', description: 'Advanced data analytics certification', icon: '📊', earned: false },
  ];

  const overallStats = {
    mastered: 8,
    inProgress: 6,
    notStarted: 2,
    totalProgress: 62
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Professional Skills Development</h1>
          <p className="text-gray-600 mt-1">Master specialized competencies for government, SME, and non-profit leadership</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          <Target className="h-4 w-4 mr-2" />
          Set Learning Goals
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="hover:shadow-xl transition-shadow border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.color}`}></div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={skillIndex} className="space-y-3 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                            <IconComponent className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-gray-700">{skill.level}%</span>
                          <Badge variant="outline" className="text-xs">
                            {skill.courses} courses
                          </Badge>
                        </div>
                      </div>
                      <Progress value={skill.level} className="h-3" />
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Skill Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{overallStats.totalProgress}%</div>
                <p className="text-sm text-gray-600">Overall Progress</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Skills Mastered</span>
                  <span className="font-medium text-green-600">{overallStats.mastered}/16</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>In Progress</span>
                  <span className="font-medium text-blue-600">{overallStats.inProgress}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Not Started</span>
                  <span className="font-medium text-gray-600">{overallStats.notStarted}</span>
                </div>
              </div>
              <Progress value={overallStats.totalProgress} className="h-3" />
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Professional Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-lg border transition-all ${
                    achievement.earned 
                      ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 shadow-sm' 
                      : 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{achievement.icon}</span>
                    <div className="flex-1">
                      <h4 className={`font-medium ${
                        achievement.earned ? 'text-green-800' : 'text-gray-600'
                      }`}>
                        {achievement.title}
                      </h4>
                      <p className={`text-xs ${
                        achievement.earned ? 'text-green-600' : 'text-gray-500'
                      }`}>
                        {achievement.description}
                      </p>
                    </div>
                    {achievement.earned && (
                      <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SkillsContent;