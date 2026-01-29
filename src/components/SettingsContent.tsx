import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { User, Bell, Shield, Key } from 'lucide-react';

const SettingsContent: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <User className="h-5 w-5" /> Profile Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-500">First Name</label>
              <Input defaultValue="Learner" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-500">Email Address</label>
              <Input defaultValue="learner@example.com" disabled />
            </div>
          </div>
          <Button className="w-full bg-slate-900">Update Profile</Button>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Shield className="h-5 w-5" /> Privacy & Security
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Key className="h-4 w-4 text-gray-600" />
              <div className="text-sm">
                <p className="font-medium">Password Recovery</p>
                <p className="text-xs text-gray-500">Last changed 2 months ago</p>
              </div>
            </div>
            <Button variant="outline" size="sm">Change</Button>
          </div>
          <div className="flex items-center justify-between px-1">
            <span className="text-sm font-medium">Public Profile Visibility</span>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Bell className="h-5 w-5" /> Notifications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <span className="text-sm font-medium">Module Completion Reminders</span>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between px-1">
            <span className="text-sm font-medium">Discussion Forum Replies</span>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsContent;
