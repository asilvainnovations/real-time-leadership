export type Module = {
  id: string;
  title: string;
  description: string;
  duration: string;
  moveElement?: string;
  icon?: string;
  keyRoles?: string[];
  keyPoints: string[];
  tools: string[];
};

export const realTimeLeadershipModules: Module[] = [
  {
    id: 'm1',
    title: 'Master the Moment: Situational Awareness',
    description: 'Learn to build rapid situational awareness and avoid tunnel vision under pressure.',
    duration: '12-15 min',
    moveElement: 'Make Sense',
    icon: '/icons/make-sense.svg',
    keyRoles: ['Decision Maker', 'Risk Analyst'],
    keyPoints: [
      'Use stakeholder lenses to broaden perspective',
      'Apply triage mapping to classify urgency vs. impact',
    ],
    tools: ['Rapid Context Brief Template', 'Sensemaking Triage Map'],
  },
  {
    id: 'm2',
    title: 'Generate Options: Open Multiple Pathways',
    description: 'Expand viable options rapidly and avoid false binaries.',
    duration: '12-15 min',
    moveElement: 'Open Options',
    icon: '/icons/open-options.svg',
    keyRoles: ['Innovator', 'Strategist'],
    keyPoints: [
      'Challenge false binaries',
      'Generate at least three viable pathways',
    ],
    tools: ['Pathways Canvas', 'False Binary Checklist'],
  },
  {
    id: 'm3',
    title: 'Validate Choices: Data-Informed Choices',
    description: 'Make decisions grounded in the smallest useful dataset.',
    duration: '10-12 min',
    moveElement: 'Validate',
    icon: '/icons/validate.svg',
    keyRoles: ['Evaluator', 'Risk Manager'],
    keyPoints: [
      'Define decision thresholds',
      'Run pre-mortems to anticipate failure modes',
    ],
    tools: ['Decision Threshold Sheet', 'Pre-Mortem Guide'],
  },
  {
    id: 'm4',
    title: 'Execute & Evaluate: Valuing Actions to Innovate',
    description: 'Activate people, clarify roles, and run tight feedback loops.',
    duration: '12-15 min',
    moveElement: 'Engage & Execute',
    icon: '/icons/engage-execute.svg',
    keyRoles: ['Leader', 'Coordinator'],
    keyPoints: [
      'Use decision logs for accountability',
      'Run concise one-page briefings',
    ],
    tools: ['Decision Log Template', 'Commit Calendar'],
  },
  {
    id: 'm5',
    title: 'Resilience Fundamentals',
    description: 'Build personal routines that stabilize presence and decision quality.',
    duration: '8-10 min',
    moveElement: 'Resilience',
    icon: '/icons/resilience.svg',
    keyRoles: ['Self-Regulator'],
    keyPoints: [
      'Apply micro-resets to manage stress',
      'Budget energy for critical decisions',
    ],
    tools: ['Energy Budget Planner', 'Recovery Plan Worksheet'],
  },
  {
    id: 'm6',
    title: 'Leading Remote Teams',
    description: 'Establish clarity, trust, and cadence in hybrid/remote settings.',
    duration: '10-12 min',
    moveElement: 'Remote Leadership',
    icon: '/icons/remote.svg',
    keyRoles: ['Remote Team Lead'],
    keyPoints: [
      'Draft communication charters',
      'Design async-first workflows',
    ],
    tools: ['Communication Charter Template', 'Async Workboard Checklist'],
  },
  {
    id: 'm7',
    title: 'Applied MOVE Sprint',
    description: 'Combine all MOVE steps on a realistic, time-bound case.',
    duration: '12-15 min',
    moveElement: 'Integration',
    icon: '/icons/integration.svg',
    keyRoles: ['Integrator'],
    keyPoints: [
      'Run compressed decision cycles',
      'Produce integrated MOVE artifacts',
    ],
    tools: ['Integrated Sprint Packet'],
  },
  {
    id: 'm8',
    title: 'Capstone: Real-World Application',
    description: 'Apply MOVE to a live leadership challenge and reflect on outcomes.',
    duration: '15-20 min',
    moveElement: 'Capstone',
    icon: '/icons/capstone.svg',
    keyRoles: ['Reflective Practitioner'],
    keyPoints: [
      'Document MOVE application',
      'Reflect using What/So What/Now What',
    ],
    tools: ['Capstone Report Template'],
  },
];