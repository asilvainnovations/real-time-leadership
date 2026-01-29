export interface VideoContent {
  title: string;
  url: string;
  duration: string;
  thumbnail?: string;
}

export interface KnowledgeCheck {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Reflection {
  prompt: string;
  guideQuestions: string[];
}

export interface CollaborationExercise {
  title: string;
  description: string;
  steps: string[];
  duration: string;
}

export interface Reference {
  title: string;
  author?: string;
  type: 'article' | 'book' | 'video' | 'tool';
  url?: string;
}

export interface ModuleContent {
  moduleId: string;
  introduction: string;
  learningObjectives: string[];
  video?: VideoContent;
  keyConceptsText: string[];
  infographicData?: { label: string; value: number; color: string }[];
  collaborationExercise?: CollaborationExercise;
  knowledgeChecks: KnowledgeCheck[];
  reflection: Reflection;
  references: Reference[];
  gamification?: { type: string; description: string; points: number };
}
