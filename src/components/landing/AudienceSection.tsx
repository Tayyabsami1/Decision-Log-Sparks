import type { ReactNode } from 'react'
import { Code2, Compass, Layers } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export function AudienceSection() {
  return (
    <section
      className="mx-auto max-w-6xl px-6 pt-6 pb-10 text-center sm:px-8 sm:pt-8 sm:pb-14"
      aria-label="Who Decision Log is for"
    >
      <p className="font-mono text-xs leading-relaxed tracking-widest text-text-soft">
        FOR TEAMS BUILDING SOMETHING THAT LASTS
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-4 sm:gap-x-12">
        <AudienceLabel icon={Code2}>Engineering teams</AudienceLabel>
        <AudienceLabel icon={Layers}>Product teams</AudienceLabel>
        <AudienceLabel icon={Compass}>Founders & operators</AudienceLabel>
      </div>
    </section>
  )
}

interface AudienceLabelProps {
  icon: LucideIcon
  children: ReactNode
}

function AudienceLabel({ icon: Icon, children }: AudienceLabelProps) {
  return (
    <span className="flex items-center gap-2 text-xs text-text-soft sm:text-sm">
      <Icon className="size-5" aria-hidden="true" />
      {children}
    </span>
  )
}
