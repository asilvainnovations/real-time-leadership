import { ModuleContent } from './moduleContentTypes';

// MODULE 6: REMOTE LEADERSHIP
export const module6Content: ModuleContent = {
  moduleId: 'm6',
  introduction: 'Remote and hybrid teams face unique challenges. This module covers establishing clarity, trust, and cadence in distributed settings.',
  learningObjectives: [
    'Draft effective communication charters',
    'Design async-first workflows',
    'Build trust in remote settings',
    'Run effective virtual meetings'
  ],
  video: { 
    title: 'Leading Remote Teams', 
    url: 'https://www.youtube.com/embed/vradYqcXfGQ', 
    duration: '2:24', 
    thumbnail: 'https://appimize.app/assets/apps/user_1097/images/bc695532d57b_962_1097.png' 
  },
  keyConceptsText: [
    'Communication Charter: A team agreement on how, when, and where to communicate.', 
    'Async-First: Defaulting to asynchronous communication unless real-time is essential.', 
    'Virtual Presence: Techniques for maintaining connection and engagement remotely.'
  ],
  collaborationExercise: { 
    title: 'Communication Charter Workshop', 
    description: 'Create a communication charter for your team.', 
    steps: ['List all communication channels', 'Define purpose of each channel', 'Set response time expectations', 'Agree on meeting norms'], 
    duration: '30 minutes' 
  },
  knowledgeChecks: [
    { 
      question: 'What is async-first communication?', 
      options: ['Always using video calls', 'Defaulting to asynchronous unless real-time needed', 'Never having meetings', 'Using only email'], 
      correctIndex: 1, 
      explanation: 'Async-first means defaulting to asynchronous communication and reserving synchronous for when truly needed.' 
    }
  ],
  reflection: { 
    prompt: 'Evaluate your team\'s remote communication.', 
    guideQuestions: ['What works well?', 'What causes friction?', 'What norms would help?'] 
  },
  references: [
    { title: 'Communication Charter Template', type: 'tool' }, 
    { title: 'Async Workboard Checklist', type: 'tool' }
  ],
  gamification: { type: 'badge', description: 'Earn the Remote Leader badge', points: 50 }
};

// MODULE 7: APPLIED MOVE SPRINT (CASE STUDY)
export const module7Content: ModuleContent = {
  moduleId: 'm7',
  introduction: 'This module integrates all MOVE elements in a realistic, time-bound case study. Apply everything you\'ve learned in a compressed decision cycle.',
  learningObjectives: [
    'Master the Moment during high-pressure scenarios',
    'Generate diverse Options under time constraints',
    'Validate Choices against organizational values',
    'Execute and Evaluate outcomes for continuous learning'
  ],
  video: { 
    title: 'Real-Time Leadership in Action', 
    url: 'https://www.facebook.com/share/r/1AnekHgExb/', 
    duration: '1:00', 
    thumbnail: 'https://appimize.app/assets/apps/user_1097/images/366345443b65_946_1097.png' 
  },
  caseStudy: {
    title: "The Midnight Recall Crisis",
    scenario: "At 11:00 PM, you receive word that a critical software bug in your company's medical device is causing minor malfunctions. The Board wants an immediate global shutdown, but Engineering argues a patch is ready in 4 hours.",
    phases: [
      { step: "1. Master the Moment", action: "Identify internal 'heat.' Move from reactive fear of the Board to proactive decision-making." },
      { step: "2. Generate Options", action: "Move beyond 'Shut down' vs. 'Wait.' Consider regional isolation or immediate safety warnings." },
      { step: "3. Validate Choices", action: "Which path aligns with 'Patient Safety' while minimizing unnecessary healthcare disruption?" },
      { step: "4. Execute and Evaluate", action: "Deploy the chosen path and set a 2-hour checkpoint to measure patch success rate." }
    ]
  },
  keyConceptsText: [
    'MOVE Integration: Combining Master, Generate, Validate, and Execute in a fluid cycle.',
    'Compressed Cycle: Running through MOVE in 15-20 minutes for rapid decisions.',
    'Integrated Artifacts: Documentation showing the full decision logic.'
  ],
  collaborationExercise: { 
    title: 'MOVE Sprint Simulation', 
    description: 'Work through the Midnight Recall Crisis with your group.', 
    steps: ['Master the Moment (3 min)', 'Generate Options (5 min)', 'Validate Choices (5 min)', 'Execute and Evaluate plan (5 min)'], 
    duration: '20 minutes' 
  },
  knowledgeChecks: [
    { 
      question: 'What is the goal of a compressed MOVE cycle?', 
      options: ['To skip steps', 'To make rapid decisions while maintaining quality', 'To avoid documentation', 'To work alone'], 
      correctIndex: 1, 
      explanation: 'Compressed cycles allow rapid decision-making while still applying the quality controls of the MOVE framework.' 
    }
  ],
  reflection: { 
    prompt: 'Reflect on the MOVE sprint experience.', 
    guideQuestions: ['Which element felt most natural?', 'Which was most challenging?', 'What would you do differently?'] 
  },
  references: [
    { title: 'Integrated Sprint Packet', type: 'tool' }, 
    { title: 'MOVE Quick Reference Card', type: 'tool' }
  ],
  gamification: { type: 'simulation', description: 'Complete the Crisis Response Sprint', points: 100 }
};

// MODULE 8: FINAL POST-TEST & ASSESSMENT
export const module8Content: ModuleContent = {
  moduleId: 'm8',
  introduction: 'To conclude your journey, you will complete the official Real-Time Leadership Assessment as a post-test to measure your growth and leadership agility.',
  learningObjectives: [
    'Assess leadership growth post-training',
    'Identify remaining blind spots in the MOVE cycle',
    'Establish a long-term development plan'
  ],
  video: { 
    title: 'Closing Thoughts & Next Steps', 
    url: 'https://www.facebook.com/share/r/1AnekHgExb/', 
    duration: '1:00',
    thumbnail: 'https://appimize.app/assets/apps/user_1097/images/eeab3b519f0e_622_1097.png'
  },
  keyConceptsText: [
    'Post-Test Baseline: Comparing your current agility to your Module 0 starting point.',
    'Sustained Practice: Moving from classroom theory to daily leadership habits.',
    'Feedback Loop: Using assessment data to drive your next 90 days of development.'
  ],
  collaborationExercise: { 
    title: 'Results Debrief', 
    description: 'After taking the assessment, share your primary "Growth Area" with your cohort.', 
    steps: ['Complete the online assessment', 'Identify one specific behavior to change', 'Share your commitment in the forum'], 
    duration: '20 minutes' 
  },
  knowledgeChecks: [
    { 
      question: 'What is the primary purpose of the Final Assessment?', 
      options: ['To give a final grade', 'To measure growth and identify future focus areas', 'To finish the app', 'To test memory'], 
      correctIndex: 1, 
      explanation: 'The final assessment tracks your improvement across the MOVE pillars and sets the stage for ongoing practice.' 
    }
  ],
  reflection: { 
    prompt: 'Final Reflection', 
    guideQuestions: ['How has your approach to crisis changed?', 'What MOVE element will you use tomorrow morning?'] 
  },
  references: [
    { 
      title: 'Real-Time Leadership Assessment (POST-TEST)', 
      author: 'Asilva Innovations', 
      url: 'https://asilvainnovations.com/rtl-assessment/', 
      type: 'tool' 
    }
  ],
  gamification: { type: 'certificate', description: 'Earn your MOVE Leadership Certification', points: 200 }
};