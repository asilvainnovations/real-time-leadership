import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { Search, Filter, Clock, Users, Star, Play, TrendingUp, Shield, Brain, BarChart3, CheckCircle } from 'lucide-react';
import { realTimeLeadershipCourse } from '@/data/realTimeLeadershipCourse';
import { modules } from '@/data/realTimeLeadershipModules';
import CoursePlayer from './CoursePlayer';

const CoursesContent: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCoursePlayer, setShowCoursePlayer] = useState(false);

  const courses = [
    {
      id: 1,
      title: 'Systems Thinking in Local Government Finance',
      description: 'Master holistic approaches to financial management, budgeting, and resource allocation in local government contexts.',
      instructor: 'Dr. Sarah Johnson',
      duration: '8 weeks',
      students: 847,
      rating: 4.9,
      level: 'Advanced',
      category: 'Finance',
      image: 'bg-gradient-to-br from-emerald-500 to-teal-700',
      progress: 0,
      icon: TrendingUp
    },
    {
      id: 2,
      title: realTimeLeadershipCourse.title,
      description: realTimeLeadershipCourse.description,
      instructor: realTimeLeadershipCourse.instructor,
      duration: realTimeLeadershipCourse.totalTime,
      students: 1156,
      rating: 4.8,
      level: realTimeLeadershipCourse.level,
      category: realTimeLeadershipCourse.category,
      image: 'bg-gradient-to-br from-blue-500 to-indigo-700',
      heroImage: realTimeLeadershipCourse.heroImage,
      progress: 0,
      icon: Brain,
      isRealTimeCourse: true
    },
    {
      id: 3,
      title: 'Integrated Risk and Resilience Management',
      description: 'Comprehensive framework for identifying, assessing, and managing risks while building organizational resilience.',
      instructor: 'Dr. Lisa Rodriguez',
      duration: '10 weeks',
      students: 634,
      rating: 4.7,
      level: 'Advanced',
      category: 'Risk Management',
      image: 'bg-gradient-to-br from-red-500 to-orange-700',
      progress: 0,
      icon: Shield
    },
    {
      id: 4,
      title: 'AI-Driven Performance Data Analytics',
      description: 'Leverage artificial intelligence and advanced analytics to drive performance insights and data-driven decision making.',
      instructor: 'James Wilson',
      duration: '7 weeks',
      students: 923,
      rating: 4.9,
      level: 'Advanced',
      category: 'Analytics',
      image: 'bg-gradient-to-br from-purple-500 to-pink-700',
      progress: 0,
      icon: BarChart3
    }
  ];

  const categories = ['All', 'Finance', 'Leadership', 'Risk Management', 'Analytics'];

  const openCourseDetail = (course: any) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const startCourse = () => {
    if (selectedCourse?.isRealTimeCourse) {
      setIsModalOpen(false);
      setShowCoursePlayer(true);
    }
  };

  if (showCoursePlayer) {
    return <CoursePlayer onBack={() => setShowCoursePlayer(false)} />;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Professional Development Courses</h1>
          <p className="text-gray-600 mt-1">Specialized training for government, SME, and non-profit professionals</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input placeholder="Search courses..." className="pl-10" />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />Filter
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge key={category} variant={category === 'All' ? 'default' : 'secondary'} className="cursor-pointer hover:bg-blue-600 hover:text-white">
            {category}
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => {
          const IconComponent = course.icon;
          return (
            <Card key={course.id} className="hover:shadow-xl transition-all duration-300 group cursor-pointer border-0 shadow-lg" onClick={() => openCourseDetail(course)}>
              {course.heroImage ? (
                <div className="h-40 rounded-t-lg overflow-hidden">
                  <img src={course.heroImage} alt={course.title} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className={`h-40 ${course.image} rounded-t-lg flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <IconComponent className="h-12 w-12 text-white z-10" />
                </div>
              )}
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">{course.category}</Badge>
                  <Badge variant="destructive" className="bg-red-100 text-red-800">{course.level}</Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors leading-tight line-clamp-2">{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600 line-clamp-2">{course.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1"><Clock className="h-4 w-4" />{course.duration}</div>
                  <div className="flex items-center gap-1"><Users className="h-4 w-4" />{course.students.toLocaleString()}</div>
                  <div className="flex items-center gap-1"><Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />{course.rating}</div>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm text-gray-600 font-medium">by {course.instructor}</span>
                  <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Play className="h-4 w-4 mr-1" />Enroll Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedCourse && (
            <>
              <DialogHeader>
                {selectedCourse.heroImage ? (
                  <div className="h-48 rounded-lg overflow-hidden mb-4">
                    <img src={selectedCourse.heroImage} alt={selectedCourse.title} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className={`h-32 ${selectedCourse.image} rounded-lg flex items-center justify-center mb-4`}>
                    <selectedCourse.icon className="h-12 w-12 text-white" />
                  </div>
                )}
                <DialogTitle className="text-2xl">{selectedCourse.title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="flex items-center gap-4 flex-wrap">
                  <Badge variant="secondary">{selectedCourse.category}</Badge>
                  <Badge variant="destructive">{selectedCourse.level}</Badge>
                  <div className="flex items-center gap-1 text-sm text-gray-600"><Clock className="h-4 w-4" />{selectedCourse.duration}</div>
                  <div className="flex items-center gap-1 text-sm text-gray-600"><Users className="h-4 w-4" />{selectedCourse.students.toLocaleString()} students</div>
                  <div className="flex items-center gap-1 text-sm text-gray-600"><Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />{selectedCourse.rating}</div>
                </div>
                <div><h3 className="font-semibold mb-2">Course Description</h3><p className="text-gray-600">{selectedCourse.description}</p></div>
                <div><h3 className="font-semibold mb-2">Instructor</h3><p className="text-gray-600">{selectedCourse.instructor}</p></div>
                {selectedCourse.isRealTimeCourse && (
                  <>
                    <div><h3 className="font-semibold mb-2">Target Audience</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {realTimeLeadershipCourse.targetAudience.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div><h3 className="font-semibold mb-4">Course Modules ({modules.length} modules)</h3>
                      <div className="space-y-3">
                        {modules.map((module) => (
                          <div key={module.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                            <div className="flex items-center gap-3">
                              <div className="h-5 w-5 border-2 border-gray-300 rounded-full" />
                              <div><h4 className="font-medium">{module.title}</h4><p className="text-sm text-gray-600">{module.duration}</p></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
                <div className="flex gap-4 pt-4 border-t">
                  <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" onClick={startCourse}>
                    <Play className="h-4 w-4 mr-2" />Start Course
                  </Button>
                  <Button variant="outline" onClick={() => setIsModalOpen(false)}>Close</Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CoursesContent;
