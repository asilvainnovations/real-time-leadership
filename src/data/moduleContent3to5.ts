import { ModuleContent } from './moduleContentTypes';

// MODULE 3: VALIDATE CHOICES
export const module3Content: ModuleContent = {
  moduleId: 'm3',
  introduction: 'Data paralysis is real—leaders either wait too long for perfect data or ignore data entirely. This module teaches data-informed decision making using the "Validate Choices" element.',
  learningObjectives: [
    'Define clear decision thresholds', 
    'Identify the smallest useful dataset', 
    'Run effective pre-mortems', 
    'Balance speed with accuracy'
  ],
  video: { 
    title: 'Data-Informed Decision Making', 
    url: 'https://www.facebook.com/share/r/1GLjL6v5Kf/', 
    duration: '1:42', 
    thumbnail: 'https://appimize.app/assets/apps/user_1097/images/bc695532d57b_962_1097.png' 
  },
  keyConceptsText: [
    'Decision Threshold: The minimum objective conditions that must be met before committing to action.', 
    'Smallest Useful Dataset: The minimum viable data needed to make a confident decision—aiming for 70% certainty.', 
    'Pre-Mortem: A strategy where you imagine a decision has failed and work backward to identify risks.'
  ],
  infographicData: [
    { label: 'Data Confidence', value: 78, color: '#3b82f6' }, 
    { label: 'Decision Speed', value: 65, color: '#10b981' }, 
    { label: 'Risk Awareness', value: 82, color: '#ef4444' }
  ],
  collaborationExercise: { 
    title: 'Pre-Mortem Workshop', 
    description: 'Practice identifying failure modes before they happen.', 
    steps: [
      'State a pending decision', 
      'Imagine it failed completely 6 months from now', 
      'List all possible reasons for that failure', 
      'Identify preventive actions for the top 3 risks'
    ], 
    duration: '20 minutes' 
  },
  knowledgeChecks: [
    { 
      question: 'What is a pre-mortem?', 
      options: ['Post-failure analysis', 'Imagining failure before it happens', 'Medical procedure', 'Budget review'], 
      correctIndex: 1, 
      explanation: 'Pre-mortems allow teams to identify and mitigate risks while they still have time to change the plan.' 
    }
  ],
  reflection: { 
    prompt: 'Think about a decision you delayed while waiting for more data.', 
    guideQuestions: [
      'What was the cost of that delay?', 
      'What was the smallest useful dataset you actually needed?', 
      'Did the extra data change your final decision?'
    ] 
  },
  references: [
    { 
      title: 'Decision Threshold Sheet', 
      type: 'tool',
      description: 'A Go/No-Go checklist: 1. Core objective met? 2. Resources available? 3. Stakeholder buy-in? 4. Reversibility score? (If 3/4 are yes, move to Execute).'
    }, 
    { 
      title: 'Pre-Mortem Guide', 
      type: 'tool',
      description: 'A 4-step framework: 1. The hypothetical disaster. 2. Brainstorm reasons. 3. Categorize (Internal vs External). 4. Mitigation plan.'
    }
  ],
  gamification: { type: 'quiz', description: 'Complete the Data Threshold Quiz', points: 35 }
};

// MODULE 4: EXECUTE & EVALUATE
export const module4Content: ModuleContent = {
  moduleId: 'm4',
  introduction: 'Great decisions fail without great execution. This module covers the "Execute & Evaluate" element—activating people, clarifying roles, and running tight feedback loops.',
  learningObjectives: [
    'Create clear role assignments using RACI', 
    'Design effective feedback loops', 
    'Run concise one-page briefings', 
    'Use decision logs for accountability'
  ],
  video: { 
    title: 'Orchestrating Action', 
    url: 'https://www.facebook.com/share/r/184T5B1c3p/', 
    duration: '10:00',
    thumbnail: 'https://appimize.app/assets/apps/user_1097/images/366345443b65_946_1097.png' 
  },
  keyConceptsText: [
    'RACI Matrix: Clarifying roles—Responsible (The Doer), Accountable (The Owner), Consulted (The Expert), Informed (The Notified).', 
    'Feedback Loops: Rapid check-ins (Daily Standups/OODA loops) to assess progress.', 
    'Decision Log: A record of "Who decided what, why, and what happened next."'
  ],
  collaborationExercise: { 
    title: 'RACI Mapping Exercise', 
    description: 'Create a RACI matrix for a current initiative.', 
    steps: [
      'List the 5 most critical tasks', 
      'List key stakeholders', 
      'Assign R, A, C, or I to each intersection', 
      'Ensure every task has exactly one "A"'
    ], 
    duration: '25 minutes' 
  },
  knowledgeChecks: [
    { 
      question: 'In a RACI matrix, how many people should be "Accountable" (A) for a single task?', 
      options: ['Two', 'Only one', 'All team members', 'The CEO only'], 
      correctIndex: 1, 
      explanation: 'To avoid confusion, only one person should be held Accountable for the completion of a task.' 
    }
  ],
  reflection: { 
    prompt: 'Consider a project where roles were unclear.', 
    guideQuestions: [
      'What confusion arose regarding who had the final say?', 
      'How did role ambiguity affect the timeline?', 
      'Who should have been "Consulted" but was missed?'
    ] 
  },
  references: [
    { 
      title: 'Decision Log Template', 
      type: 'tool',
      description: 'Columns: Date | Decision | Rationale | Alternatives Considered | Owner | Outcome (to be filled later).'
    }, 
    { 
      title: 'Commit Calendar', 
      type: 'tool',
      description: 'A visual timeline focused on "Hard Commits" (non-negotiable deadlines) vs "Soft Targets" (flexible milestones).'
    }
  ],
  gamification: { type: 'simulation', description: 'Complete the Team Coordination Simulation', points: 45 }
};

// MODULE 5: PERSONAL RESILIENCE (MASTER THE MOMENT)
export const module5Content: ModuleContent = {
  moduleId: 'm5',
  introduction: 'Sustainable leadership requires personal resilience. This module covers micro-resets, energy budgeting, and recovery practices to help you "Master the Moment."',
  learningObjectives: [
    'Apply micro-reset techniques', 
    'Budget energy for critical decisions', 
    'Design personal recovery routines', 
    'Recognize burnout warning signs'
  ],
  video: { 
    title: 'Building Personal Resilience', 
    url: 'https://www.facebook.com/share/r/1GyVDuVhhL/', 
    duration: '0:24',
    thumbnail: 'https://appimize.app/assets/apps/user_1097/images/eeab3b519f0e_622_1097.png'
  },
  keyConceptsText: [
    'Micro-Reset: A 60-90 second physiological practice (like Box Breathing) to shift from sympathetic to parasympathetic nervous system.', 
    'Energy Budgeting: Treating mental energy like a finite currency, spent on decisions and preserved during low-stakes tasks.', 
    'Recovery Routine: Scheduled downtime that restores cognitive and emotional capacity.'
  ],
  collaborationExercise: { 
    title: 'Micro-Reset Practice', 
    description: 'Learn and practice micro-reset techniques together.', 
    steps: [
      'Practice Box Breathing (4-4-4-4)', 
      'Perform a 5-Sense Grounding scan', 
      'Identify your "Energy Leaks" in the workday', 
      'Commit to one reset before every high-stakes meeting'
    ], 
    duration: '15 minutes' 
  },
  knowledgeChecks: [
    { 
      question: 'How long is a typical micro-reset?', 
      options: ['5-10 minutes', '60-90 seconds', '30 minutes', 'An entire lunch hour'], 
      correctIndex: 1, 
      explanation: 'Micro-resets are designed to be done "in the moment" without leaving your desk or stopping the workflow.' 
    }
  ],
  reflection: { 
    prompt: 'Assess your current energy management.', 
    guideQuestions: [
      'At what time of day do you make your worst decisions?', 
      'What "Energy Leak" (unnecessary task) can you eliminate tomorrow?', 
      'What does a successful "Recovery Routine" look like for you?'
    ] 
  },
  references: [
    { 
      title: 'Energy Budget Planner', 
      type: 'tool',
      description: 'Identify High-Spend tasks (Conflict resolution, Strategy) vs Low-Spend tasks (Email, Admin). Schedule High-Spend tasks during your peak energy hours.'
    }, 
    { 
      title: 'Recovery Plan Worksheet', 
      type: 'tool',
      description: 'Define your Daily (Sleep/Rest), Weekly (Social/Nature), and Quarterly (Unplugged) recovery non-negotiables.'
    }
  ],
  gamification: { type: 'streak', description: 'Complete 7 days of micro-resets', points: 70 }
};