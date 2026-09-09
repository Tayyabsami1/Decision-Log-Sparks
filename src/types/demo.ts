export enum Team {
  All = 'All teams',
  Engineering = 'Engineering',
  Product = 'Product',
  Business = 'Business',
}

export enum Mode {
  Decisions = 'decisions',
  Memory = 'memory',
}

export type DecisionTeam = Exclude<Team, Team.All>
