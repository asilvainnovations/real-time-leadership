import { ModuleContent } from './moduleContentTypes';

export const module2Content: ModuleContent = {
  moduleId: 'm2',
  introduction: 'Under pressure, leaders often fall into false binaries—"we must do A or B." This module teaches you to expand viable options rapidly using the "Generate Options" element of MOVE.',
  learningObjectives: [
    'Recognize and challenge false binary thinking',
    'Generate at least three viable pathways for any decision',
    'Use the Pathways Canvas to structure options',
    'Apply creative constraints to spark innovation'
  ],
  video: { 
    title: 'Breaking False Binaries', 
    url: 'https://www.facebook.com/share/r/18CU3g2sxu/', 
    duration: '1:29',
    thumbnail: 'https://appimize.app/assets/apps/user_1097/images/9eb05cb5cd2f_115_1097.jpg' 
  },
  keyConceptsText: [
    'False Binary: The cognitive trap of seeing only two options when more exist. Example: "We must cut costs OR maintain quality."',
    'Third Way Thinking: Actively seeking alternatives beyond the obvious two choices, often by blending elements of different paths.',
    'Pathways Canvas: A visual framework for mapping multiple solution paths alongside their trade-offs and resource requirements.'
  ],
  infographicData: [
    { label: 'Options Generated', value: 85, color: '#3b82f6' },
    { label: 'Binary Traps Avoided', value: 67, color: '#10b981' },
    { label: 'Innovation Score', value: 72, color: '#8b5cf6' },
    { label: 'Team Alignment', value: 78, color: '#f59e0b' }
  ],
  collaborationExercise: {
    title: 'Option Generation Sprint',
    description: 'Practice generating multiple options for a real challenge using structured brainstorming.',
    steps: [
      'Present a current challenge (2 min)', 
      'Silent brainstorming - each person writes 5 options (5 min)', 
      'Share and cluster similar ideas (5 min)', 
      'Vote on top 3 to explore further (3 min)'
    ],
    duration: '15 minutes'
  },
  knowledgeChecks: [
    { 
      question: 'What is a false binary?', 
      options: ['A computer error', 'Seeing only two options when more exist', 'A type of data structure', 'A leadership style'], 
      correctIndex: 1, 
      explanation: 'False binaries limit thinking to two options when creative alternatives often exist.' 
    },
    { 
      question: 'How many viable pathways should you aim to generate?', 
      options: ['One best option', 'Two alternatives', 'At least three', 'As many as possible'], 
      correctIndex: 2, 
      // FIXED: Escaped the single quotes below to prevent build transformation errors
      explanation: 'Having at least three options (The \'Third Way\') ensures you have effectively broken free from binary thinking.' 
    }
  ],
  reflection: { 
    prompt: 'Recall a decision where you felt stuck between two options.', 
    guideQuestions: [
      'What were the two options you saw?', 
      'What third option might have existed?', 
      'What assumptions limited your thinking?'
    ] 
  },
  references: [
    { 
      title: 'Pathways Canvas Template', 
      type: 'tool',
      description: 'A 3-column workspace: 1. Option Description | 2. Trade-offs (What we give up) | 3. Requirements (What we need to succeed).'
    },
    { 
      title: 'False Binary Checklist', 
      type: 'tool',
      description: 'A 5-point audit to identify "Either/Or" thinking and force the generation of a third alternative.'
    },
    { 
      title: 'Creative Constraints in Decision Making', 
      author: 'Harvard Business Review', 
      type: 'article' 
    }
  ],
  gamification: { type: 'challenge', description: 'Generate 5 unique options for the Supply Chain Crisis scenario', points: 40 }
};