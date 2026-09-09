import { Team, type DecisionTeam } from '@/types/demo'

export type Decision = {
  id: string
  title: string
  team: DecisionTeam
  owner: string
  date: string
  status: 'Active' | 'Superseded'
  context: string
  decision: string
  alternatives: string[]
  reasoning: string
  consequences: string
  related: string
}

export const sampleDecisions: Decision[] = [
  {
    id: 'DEC-024',
    title: 'Move session storage from Redis to PostgreSQL',
    team: Team.Engineering,
    owner: 'Alex Morgan',
    date: '2026-08-14',
    status: 'Active',
    context:
      'Session data was split between Redis and our primary database. A cache eviction during the July traffic spike signed users out unexpectedly.',
    decision:
      'Store sessions in PostgreSQL, alongside the accounts they belong to. Keep Redis for disposable application caching.',
    alternatives: [
      'A dedicated Redis cluster — adds another service to operate.',
      'Signed cookies — makes immediate session revocation harder.',
    ],
    reasoning:
      'At our current scale, predictable behavior matters more than shaving milliseconds off a session lookup. PostgreSQL gives us transactional updates, one backup policy, and fewer moving parts.',
    consequences:
      'Add an expiry index and a scheduled cleanup job. Revisit if session reads exceed 5,000 per second.',
    related: 'DEC-021 · Consolidate our infrastructure',
  },
  {
    id: 'DEC-023',
    title: 'Migrate payments to Payment Intents',
    team: Team.Engineering,
    owner: 'Maya Chen',
    date: '2026-08-08',
    status: 'Active',
    context:
      'Our checkout assumes a payment succeeds in a single request. Customers who need an additional authentication step cannot finish checkout reliably.',
    decision:
      'Move new checkouts from the Charges flow to Payment Intents. Roll out behind a feature flag, starting with the internal test workspace.',
    alternatives: [
      'Patch the existing checkout — preserves a brittle payment state model.',
      'Replace the payment provider — increases migration scope without addressing our immediate need.',
    ],
    reasoning:
      'A payment should have an explicit lifecycle. The new flow lets us model authentication, retries, and completion without treating every intermediate state as a failure.',
    consequences:
      'Handle completion through verified webhooks. Keep the existing flow available during the staged rollout.',
    related: 'DEC-018 · Introduce checkout feature flags',
  },
  {
    id: 'DEC-022',
    title: 'Make the first workspace invitation optional',
    team: Team.Product,
    owner: 'Sam Rivera',
    date: '2026-08-05',
    status: 'Active',
    context:
      'New users were asked to invite a teammate before they had experienced the product. In five onboarding interviews, people said they wanted to explore on their own first.',
    decision:
      'Let people create their first decision before asking them to invite their team.',
    alternatives: [
      'Keep a required invitation step — adds friction before the first useful moment.',
      'Remove invitations entirely — makes collaboration harder to discover.',
    ],
    reasoning:
      'Earn the invitation. People should have something useful to share before we ask them to bring their team.',
    consequences:
      'Move the invitation prompt to the first saved decision. Review activation and invitation rates after four weeks.',
    related: 'DEC-016 · Define the first useful moment',
  },
  {
    id: 'DEC-020',
    title: 'Price by workspace, not by reader',
    team: Team.Business,
    owner: 'Jordan Lee',
    date: '2026-07-28',
    status: 'Active',
    context:
      'Decision context becomes more useful when more people can access it. Charging every reader would encourage teams to keep that context inside a smaller group.',
    decision: 'Explore workspace pricing with unlimited readers for the initial launch.',
    alternatives: [
      'Per-seat pricing — easy to understand, but discourages sharing.',
      'Per-decision pricing — makes capturing knowledge feel like a cost.',
    ],
    reasoning:
      'Reading a decision should never require a budget conversation. We want teams to share context freely.',
    consequences:
      'Validate willingness to pay before announcing a paid plan. This is a sample business decision, not a published price.',
    related: 'DEC-014 · Open access to decision context',
  },
  {
    id: 'DEC-017',
    title: 'Use Redis as the primary session store',
    team: Team.Engineering,
    owner: 'Alex Morgan',
    date: '2026-06-10',
    status: 'Superseded',
    context:
      'We expected high session traffic and already used Redis for application caching.',
    decision: 'Store sessions in the existing Redis instance with a 30-day expiry.',
    alternatives: ['PostgreSQL — assumed to add unnecessary read load.'],
    reasoning:
      'Reuse the infrastructure we already operate. This assumption was revisited after the July cache eviction incident.',
    consequences:
      'Superseded by DEC-024. Kept here so the original reasoning is still available.',
    related: 'DEC-024 · Move session storage to PostgreSQL',
  },
]

export const memoryQuestions = [
  {
    question: 'Why did we move away from Redis for sessions?',
    answer:
      'A cache eviction unexpectedly signed users out. The team chose PostgreSQL for predictable session storage and simpler operations. Redis is still used for disposable caching.',
    note: 'Revisit when session reads exceed 5,000 per second.',
    decisionId: 'DEC-024',
  },
  {
    question: 'Why can new users skip inviting their team?',
    answer:
      'Onboarding interviews showed that people wanted to experience the product before inviting colleagues. The team moved the invitation prompt to the first saved decision.',
    note: 'The working principle: earn the invitation.',
    decisionId: 'DEC-022',
  },
  {
    question: 'Why are we considering workspace pricing?',
    answer:
      'Charging for every reader could discourage teams from sharing context. The proposed workspace model keeps reading open to the whole team.',
    note: 'Paid pricing is still being validated; this is a sample scenario.',
    decisionId: 'DEC-020',
  },
]

export function displayDate(date: string) {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(date + 'T12:00:00Z'))
}
