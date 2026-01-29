import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, ThumbsUp, CheckCircle } from 'lucide-react';

interface Post {
  id: number;
  author: string;
  text: string;
  votes: number;
  isInstructor: boolean;
  isSolution: boolean;
}

export const DiscussionForum: React.FC<{ moduleId: string }> = ({ moduleId }) => {
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, author: "Lead Instructor", text: "Welcome to Module 1! Post your questions here.", votes: 5, isInstructor: true, isSolution: false }
  ]);

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-8">
      <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
        <MessageSquare className="h-5 w-5 text-blue-600" /> Discussion Forum
      </h3>
      <div className="space-y-4">
        {posts.map(post => (
          <div key={post.id} className={`p-4 rounded-lg border ${post.isSolution ? 'border-green-500 bg-green-50' : 'border-gray-100'}`}>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold text-sm">{post.author}</span>
              {post.isInstructor && <Badge className="bg-blue-600">Instructor</Badge>}
              {post.isSolution && <Badge className="bg-green-600 ml-auto">Solution</Badge>}
            </div>
            <p className="text-gray-700 mb-3">{post.text}</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="gap-1">
                <ThumbsUp className="h-4 w-4" /> {post.votes}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
