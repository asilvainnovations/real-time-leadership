import { ModuleContent } from './moduleContentTypes';

// MODULE 0: ORIENTATION
export const module0Content: ModuleContent = {
  moduleId: 'm0',
  introduction: 'Welcome to the Real-Time Leadership program. This orientation module is designed to set the stage for your growth, introduce the MOVE framework, and establish your leadership baseline.',
  learningObjectives: [
    'Understand the core philosophy of Real-Time Leadership',
    'Navigate the course structure and MOVE framework',
    'Establish your baseline leadership profile via the RTL Assessment',
    'Set personalized goals for the program'
  ],
  video: {
    title: 'Orientation & The MOVE Framework',
    url: 'https://www.tiktok.com/@asilvainnovations/video/7450115520835194130?is_from_webapp=1&sender_device=pc',
    duration: '1:26',
    thumbnail: 'https://appimize.app/assets/apps/user_1097/images/41a64f3da705_999_1097.png'
  },
  keyConceptsText: [
    'The MOVE Framework: A four-pillar approach (Master the Moment, Generate Options, Validate Choices, Execute & Evaluate) to high-stakes leadership.',
    'Real-Time Assessment: A diagnostic tool to measure your current leadership agility and blind spots.',
    'Baseline: Your starting point for measuring improvement throughout the modules.'
  ],
  infographicData: [
    { label: 'Baseline Readiness', value: 100, color: '#3b82f6' },
    { label: 'Module Progress', value: 0, color: '#10b981' }
  ],
  collaborationExercise: {
    title: 'Initial Assessment & Alignment',
    description: 'Complete the official Real-Time Leadership Assessment and share one high-level insight with your peer group.',
    steps: [
      'Navigate to the external assessment link provided below',
      'Complete the self-diagnostic (approx. 10 minutes)',
      'Note your primary "Leader Persona" from the results',
      'Post your persona and one goal in the orientation forum'
    ],
    duration: '15 minutes'
  },
  knowledgeChecks: [
    { 
      question: 'What is the primary purpose of the Real-Time Leadership Assessment?', 
      options: ['To provide a grade', 'To establish a baseline for growth', 'To complete a resume', 'To test technical skills'], 
      correctIndex: 1, 
      explanation: 'The assessment establishes a baseline profile of your leadership habits before you dive into the framework.' 
    }
  ],
  reflection: { 
    prompt: 'Reflect on your current leadership challenges before starting the modules.', 
    guideQuestions: [
      'What is the biggest hurdle you face when leading in real-time?', 
      'What do you hope to change about your decision-making process?', 
      'Based on your Assessment, what is your most prominent strength?'
    ] 
  },
  references: [
    { 
      title: 'Real-Time Leadership Assessment', 
      author: 'Asilva Innovations', 
      url: 'https://asilvainnovations.com/rtl-assessment/', 
      type: 'tool' 
    },
    { 
      title: 'Program Curriculum Roadmap', 
      type: 'document',
      description: 'M1: Make Sense | M2: Organize | M3: Values | M4: Execute | M6: Remote | M7: Sprint | M8: Post-Test'
    }
  ],
  gamification: { type: 'onboarding', description: 'Complete your profile and assessment to unlock Module 1', points: 25 }
};

// MODULE 1: MAKE SENSE (SITUATIONAL AWARENESS)
export const module1Content: ModuleContent = {
  moduleId: 'm1',
  introduction: 'In crisis situations, leaders often fall into tunnel vision. This module teaches you to build rapid situational awareness using the "Make Sense" element of the MOVE framework.',
  learningObjectives: [
    'Apply stakeholder lens analysis to broaden perspective',
    'Use triage mapping to classify urgency vs. impact',
    'Recognize and avoid common tunnel vision traps',
    'Build a rapid context brief in under 5 minutes'
  ],
  video: {
    title: 'Present Awareness in Crisis Leadership',
    url: 'https://www.facebook.com/share/r/1AuU9B633B/',
    duration: '0:59',
    thumbnail: 'https://appimize.app/assets/apps/user_1097/images/1584c96e2624_471_1097.png',
  },
  keyConceptsText: [
    'Tunnel Vision: Focusing narrowly on immediate problems while missing broader context.',
    'Stakeholder Lens: Viewing situations from multiple perspectives (Team, Customer, Board).',
    'Triage Mapping: Prioritizing issues by urgency and impact.'
  ],
  infographicData: [
    { label: 'Tunnel Vision Risk', value: 73, color: '#ef4444' },
    { label: 'Context Awareness', value: 45, color: '#3b82f6' },
    { label: 'Stakeholder Coverage', value: 62, color: '#10b981' },
    { label: 'Decision Quality', value: 58, color: '#8b5cf6' }
  ],
  collaborationExercise: {
    title: 'Stakeholder Mapping Workshop',
    description: 'Work with your team to map all stakeholders affected by a recent organizational challenge.',
    steps: [
      'Identify a recent challenge your team faced', 
      'List all stakeholders (internal and external)', 
      'Rate impact on each stakeholder (1-5)', 
      'Identify blind spots you initially missed'
    ],
    duration: '20 minutes'
  },
  knowledgeChecks: [
    { 
      question: 'What is the primary risk of tunnel vision in crisis leadership?', 
      options: ['Moving too slowly', 'Missing critical context and stakeholder impacts', 'Over-communicating', 'Delegating too much'], 
      correctIndex: 1, 
      explanation: 'Tunnel vision causes leaders to focus narrowly on obvious problems while missing broader context.' 
    },
    { 
      question: 'Which tool helps classify issues by urgency and impact?', 
      options: ['SWOT Analysis', 'Triage Mapping', 'Gantt Chart', 'Mind Map'], 
      correctIndex: 1, 
      explanation: 'Triage Mapping helps prioritize by classifying urgency and impact.' 
    }
  ],
  reflection: { 
    prompt: 'Think about a recent situation where you may have experienced tunnel vision.', 
    guideQuestions: ['What did you focus on initially?', 'What did you miss?', 'How could stakeholder lens analysis have helped?'] 
  },
  references: [
    { title: 'MOVE Framework Overview', author: 'Noble & Kauffman', type: 'book' },
    { 
      title: 'Rapid Context Brief Template', 
      type: 'tool',
      description: 'A 4-part template: 1. Situation (Fact) | 2. Complication (Obstacle) | 3. Stakeholders (Impacted) | 4. Core Question (Decision needed).'
    },
    { 
      title: 'Sensemaking Triage Map', 
      type: 'tool',
      description: 'A 2x2 Matrix: X-axis (Urgency), Y-axis (Impact). Place issues to determine what to ignore, delegate, or lead personally.'
    }
  ],
  gamification: { type: 'scenario', description: 'Complete the Typhoon Response Scenario to earn 50 points', points: 50 }
};