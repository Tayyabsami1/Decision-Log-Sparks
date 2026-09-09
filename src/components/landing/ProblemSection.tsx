import { cn } from '@/lib/utils'
import {
  ArrowRight,
  BookOpen,
  Clock3,
  FileText,
  GitBranch,
  Hash,
  Users,
} from 'lucide-react'
import { SectionLabel } from './SectionLabel'

export function ProblemSection() {
  return (
    <section
      className="py-25 bg-surface-soft border-y border-y-line-soft max-[640px]:py-15"
      id="problem"
    >
      <div className="max-w-290 px-8 mx-auto max-[640px]:px-5.5">
        <div
          className={cn(
            'mb-11.5 grid grid-cols-[1.35fr_1fr] items-end gap-15 max-[900px]:gap-7.5',
            'max-[640px]:mb-8 max-[640px]:grid-cols-1 max-[640px]:gap-0',
          )}
        >
          <div>
            <SectionLabel number="01">THE CONTEXT GAP</SectionLabel>
            <h2
              className={cn(
                'text-[clamp(30px,_3.5vw,_44px)] leading-[1.16] font-semibold',
                'tracking-[-1.7px] text-balance mt-4.5',
              )}
            >
              The decision stays.
              <br />
              <span className="text-[#838a78]">The reason disappears.</span>
            </h2>
          </div>
          <p className="max-w-142.5 mt-5.5 text-[15px] leading-[1.85] text-text-soft">
            Your product is the sum of a thousand decisions. But the thinking behind them?
            Buried in a thread, lost in a meeting, or gone with the person who made the
            call.
          </p>
        </div>
        <div
          className={cn(
            'max-[480px]:hidden relative grid grid-cols-3 gap-5 pt-[15px] px-[15px] pb-17.5',
            'max-[900px]:gap-3 max-[900px]:px-0 max-[640px]:grid-cols-1',
            'max-[640px]:pt-1.5 max-[640px]:px-2 max-[640px]:pb-19.5 max-[640px]:gap-4',
          )}
        >
          <div
            className={cn(
              'p-6 bg-card border border-line-soft rounded-lg shadow-[0_8px_25px_#29351506]',
              '-rotate-3 max-[900px]:p-4.5 max-[640px]:p-5',
            )}
          >
            <span className="flex items-center gap-[7px] text-[11px] font-semibold max-[900px]:flex-wrap">
              <Hash size={15} />
              Slack{' '}
              <span className="ml-auto text-[9px] text-[#838977] font-normal max-[900px]:ml-0">
                12 weeks ago
              </span>
            </span>
            <p
              className={cn(
                'text-[16px] leading-[1.6] my-5 mx-0 tracking-[-0.35px] max-[640px]:my-3.5',
                'max-[640px]:mx-0',
              )}
            >
              “Didn’t we already discuss this?”
            </p>
            <div className="h-[5px] bg-[#eff1e9] w-[85%] my-2 rounded-xs" />
            <div className="h-[5px] bg-[#eff1e9] w-[85%] my-2 rounded-xs" />
            <span className="block mt-4.5 text-[10px] text-[#848a7a]">
              148 replies. One missing answer.
            </span>
          </div>
          <div
            className={cn(
              'p-6 bg-card border border-line-soft rounded-lg shadow-[0_8px_25px_#29351506]',
              'translate-y-4.5 rotate-1 max-[900px]:p-4.5 max-[640px]:p-5',
              'max-[640px]:rotate-1',
            )}
          >
            <span className="flex items-center gap-[7px] text-[11px] font-semibold max-[900px]:flex-wrap">
              <GitBranch size={15} />
              GitHub{' '}
              <span className="ml-auto text-[9px] text-[#838977] font-normal max-[900px]:ml-0">
                PR #284
              </span>
            </span>
            <p
              className={cn(
                'text-[16px] leading-[1.6] my-5 mx-0 tracking-[-0.35px] max-[640px]:my-3.5',
                'max-[640px]:mx-0',
              )}
            >
              “Temporary workaround.
              <br />
              We’ll revisit this later.”
            </p>
            <span
              className={cn(
                'block p-3 bg-surface-soft text-[#879074] text-[10px] leading-normal',
                'font-mono',
              )}
            >
              // TODO: explain why
            </span>
          </div>
          <div
            className={cn(
              'p-6 bg-card border border-line-soft rounded-lg shadow-[0_8px_25px_#29351506]',
              'rotate-3 max-[900px]:p-4.5 max-[640px]:p-5 max-[640px]:-rotate-1',
            )}
          >
            <span className="flex items-center gap-[7px] text-[11px] font-semibold max-[900px]:flex-wrap">
              <FileText size={15} />
              Meeting notes
            </span>
            <p
              className={cn(
                'text-[16px] leading-[1.6] my-5 mx-0 tracking-[-0.35px] max-[640px]:my-3.5',
                'max-[640px]:mx-0',
              )}
            >
              “Let’s go with option B.”
            </p>
            <div className="h-[5px] bg-[#eff1e9] w-[85%] my-2 rounded-xs" />
            <div className="h-[5px] bg-[#eff1e9] w-[85%] my-2 rounded-xs" />
            <span className="block mt-4.5 text-[10px] text-[#848a7a]">
              No alternatives. No owner. No why.
            </span>
          </div>
          <div
            className={cn(
              'absolute bottom-0.5 left-[50%] -translate-x-1/2 flex items-center gap-3.5',
              'w-max max-w-full py-4.5 px-6 border border-[#d4d9c8] rounded-lg bg-white',
              'shadow-[0_8px_24px_#27330e0c] text-[16px] max-[640px]:p-3.5',
              'max-[640px]:gap-2 max-[640px]:text-[12px]',
            )}
          >
            <span
              className={cn(
                'grid place-items-center w-7.5 h-7.5 bg-[#f5eddc] rounded-full font-serif',
                'text-[#966b24]',
              )}
            >
              ?
            </span>
            <span>“Why did we build it this way?”</span>
            <span className="w-[1px] h-5 bg-primary" />
          </div>
        </div>
        <div
          className={cn(
            'flex items-center justify-center flex-wrap gap-3.5 mt-10 text-[#868c7b]',
            'text-[11px] max-[640px]:gap-2.5 max-[640px]:text-[10px]',
          )}
        >
          <span>Slack</span>
          <ArrowRight className="w-3 h-3 text-[#bdc3b1]" />
          <span>Meetings</span>
          <ArrowRight className="w-3 h-3 text-[#bdc3b1]" />
          <span>GitHub</span>
          <ArrowRight className="w-3 h-3 text-[#bdc3b1]" />
          <span>Jira</span>
          <ArrowRight className="w-3 h-3 text-[#bdc3b1]" />
          <span>Notion</span>
          <ArrowRight className="w-3 h-3 text-[#bdc3b1]" />
          <span>Someone’s memory</span>
        </div>
        <div
          className={cn(
            'flex justify-between flex-wrap gap-4.5 border-t border-t-line-soft mt-10',
            'pt-7 max-[640px]:grid max-[640px]:gap-4',
          )}
        >
          <span className="flex gap-[9px] items-center text-[#666f59] text-[12px]">
            <Clock3 className="w-4 h-4" />
            The same debate, again.
          </span>
          <span className="flex gap-[9px] items-center text-[#666f59] text-[12px]">
            <Users className="w-4 h-4" />A slow start for new teammates.
          </span>
          <span className="flex gap-[9px] items-center text-[#666f59] text-[12px]">
            <BookOpen className="w-4 h-4" />
            Knowledge that walks out the door.
          </span>
        </div>
      </div>
    </section>
  )
}
