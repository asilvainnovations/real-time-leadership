import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Trophy, Clock, TrendingUp, Play, Target, Brain, Shield, BarChart3, Award } from 'lucide-react';
import { realTimeLeadershipCourse } from '@/data/realTimeLeadershipCourse';

const DashboardContent: React.FC = () => {
  const stats = [
    { title: 'Courses Enrolled', value: '4', icon: BookOpen, color: 'bg-blue-500' },
    { title: 'Skills Earned', value: '12', icon: Trophy, color: 'bg-yellow-500' },
    { title: 'Study Hours', value: '89', icon: Clock, color: 'bg-green-500' },
    { title: 'Certification Progress', value: '67%', icon: TrendingUp, color: 'bg-purple-500' },
  ];

  const recentCourses = [
    { title: 'Systems Thinking in Local Government Finance', progress: 45, category: 'Finance', icon: TrendingUp, color: 'from-emerald-500 to-teal-700' },
    { title: 'Real-Time Leadership for Resilient Organizations', progress: 0, category: 'Leadership', icon: Brain, color: 'from-blue-500 to-indigo-700' },
    { title: 'Integrated Risk and Resilience Management', progress: 23, category: 'Risk Management', icon: Shield, color: 'from-red-500 to-orange-700' },
  ];

  const achievements = [
    { title: 'Systems Thinking Fundamentals', icon: '🎯', date: '3 days ago', category: 'Finance' },
    { title: 'Leadership Assessment Complete', icon: '🧠', date: '1 week ago', category: 'Leadership' },
    { title: 'Risk Analysis Certification', icon: '🛡️', date: '2 weeks ago', category: 'Risk Management' },
  ];

  const upcomingGoals = [
    { title: 'Complete AI Analytics Module', progress: 30, dueDate: 'Next Week' },
    { title: 'Finish Risk Assessment Project', progress: 60, dueDate: '3 Days' },
    { title: 'Leadership Simulation Exercise', progress: 0, dueDate: '2 Weeks' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome back!</h1>
          <p className="text-gray-600 mt-1">Continue your specialized development journey</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          <Play className="h-4 w-4 mr-2" />Continue Learning
        </Button>
      </div>

      <Card className="border-0 shadow-xl overflow-hidden">
        <div className="relative h-64">
          <img src={realTimeLeadershipCourse.heroImage} alt="Real-Time Leadership" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90 flex items-center">
            <div className="p-8 text-white">
              <Badge className="mb-3 bg-white/20 text-white border-0">Featured Course</Badge>
              <h2 className="text-3xl font-bold mb-2">{realTimeLeadershipCourse.title}</h2>
              <p className="text-blue-100 mb-4 max-w-2xl">{realTimeLeadershipCourse.subtitle}</p>
              <div className="flex gap-3">
                <Button className="bg-white text-blue-900 hover:bg-blue-50">
                  <Play className="h-4 w-4 mr-2" />Start Course
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">Learn More</Button>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.color}`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />Continue Learning
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentCourses.map((course, index) => {
              const IconComponent = course.icon;
              return (
                <div key={index} className="space-y-3 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${course.color}`}>
                        <IconComponent className="h-4 w-4 text-white" />
                      </div>
                      <h4 className="font-medium text-sm">{course.title}</h4>
                    </div>
                    <Badge variant="secondary" className="text-xs">{course.category}</Badge>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600">{course.progress}% complete</p>
                    <Button size="sm" variant="ghost" className="h-8">
                      <Play className="h-3 w-3 mr-1" />Continue
                    </Button>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />Recent Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg hover:shadow-md transition-shadow">
                <span className="text-2xl">{achievement.icon}</span>
                <div className="flex-1">
                  <h4 className="font-medium">{achievement.title}</h4>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-gray-600">{achievement.date}</p>
                    <Badge variant="outline" className="text-xs">{achievement.category}</Badge>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />Learning Goals
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {upcomingGoals.map((goal, index) => (
              <div key={index} className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-medium mb-2">{goal.title}</h4>
                <Progress value={goal.progress} className="h-2 mb-2" />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{goal.progress}% complete</span>
                  <Badge variant="outline" className="text-xs">Due: {goal.dueDate}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardContent;
