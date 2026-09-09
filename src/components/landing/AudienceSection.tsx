import { cn } from '@/lib/utils'
import { Code2, Compass, Layers } from 'lucide-react'

export function AudienceSection() {
  return (
    <section
      className={cn(
        'max-w-290 px-8 mx-auto max-[640px]:px-5.5 pt-8 pb-13.5 text-center',
        'max-[640px]:pt-6 max-[640px]:pb-10.5',
      )}
      aria-label="Who Decision Log is for"
    >
      <p className="text-[#7f8575] text-[9px] leading-[1.8] font-mono tracking-[1.5px]">
        FOR TEAMS BUILDING SOMETHING THAT LASTS
      </p>
      <div className="flex flex-wrap justify-center gap-11.5 mt-6 max-[640px]:gap-[16px_24px]">
        <span className="flex items-center gap-2.5 text-[15px] text-[#606855] max-[640px]:text-[12px]">
          <Code2 className="w-5 h-5" />
          Engineering teams
        </span>
        <span className="flex items-center gap-2.5 text-[15px] text-[#606855] max-[640px]:text-[12px]">
          <Layers className="w-5 h-5" />
          Product teams
        </span>
        <span className="flex items-center gap-2.5 text-[15px] text-[#606855] max-[640px]:text-[12px]">
          <Compass className="w-5 h-5" />
          Founders & operators
        </span>
      </div>
    </section>
  )
}
