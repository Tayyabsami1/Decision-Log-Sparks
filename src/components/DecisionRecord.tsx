import { cn } from '@/lib/utils'
import { Check, Clock3, FileText, GitBranch, MessageSquare } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { displayDate, type Decision } from '@/data/decisions'

export function DecisionRecord({ decision }: { decision: Decision }) {
  return (
    <article className="p-8 min-w-0 max-[1000px]:p-6.5 max-[640px]:py-6 max-[640px]:px-4.5">
      <div className="flex items-center gap-3">
        <span
          className={cn(
            'flex items-center gap-1.5 text-[11px] leading-normal font-mono',
            'text-[#848c79]',
          )}
        >
          <FileText size={14} /> {decision.id}
        </span>
        <Badge
          className={cn(
            'bg-[#edf3e7] text-[#58733d] border border-[#dee8d4] rounded text-[10px]',
            'font-normal py-1 px-[7px] h-auto',
            decision.status === 'Superseded' &&
              'bg-[#f1f1ef] text-[#78796f] border-[#e4e4df]',
          )}
        >
          <span className="inline-block w-[5px] h-[5px] rounded-full bg-current" />
          {decision.status}
        </Badge>
      </div>
      <h3
        className={cn(
          'font-semibold text-[27px] tracking-[-0.8px] leading-[1.3] mt-3.5 max-w-147.5',
          'max-[640px]:text-[23px]',
        )}
      >
        {decision.title}
      </h3>
      <div
        className={cn(
          'flex gap-2 items-center text-[11px] text-[#7e8275] mt-4 mx-0 mb-[25px]',
          'flex-wrap max-[640px]:gap-[7px]',
        )}
      >
        <span
          className={cn(
            'inline-grid place-items-center w-6 h-6 rounded-full bg-[#ebe4d5]',
            'text-[#8b7454] text-[9px] shrink-0',
          )}
        >
          {decision.owner
            .split(' ')
            .map((name) => name[0])
            .join('')}
        </span>
        <span>{decision.owner}</span>
        <span>·</span>
        <span>{decision.team}</span>
        <span className="ml-auto max-[1000px]:ml-0 max-[640px]:w-full max-[640px]:pl-[31px]">
          {displayDate(decision.date)}
        </span>
      </div>
      <Tabs defaultValue="decision">
        <TabsList
          className={cn(
            'border-b border-b-[#e8eae2] w-full h-11 justify-start p-0 rounded-none max-[380px]:grid max-[380px]:grid-cols-3',
            'max-[640px]:h-11',
          )}
          variant="line"
          aria-label="Decision details"
        >
          <TabsTrigger
            className={cn(
              'flex-[0_1_auto] py-2 px-3.5 text-[11px] max-[640px]:px-2.5',
              'max-[640px]:min-h-11 max-[640px]:text-[11px] max-[380px]:min-w-0 max-[380px]:px-1',
            )}
            value="decision"
          >
            <FileText className="w-[13px] max-[380px]:hidden" />
            Decision
          </TabsTrigger>
          <TabsTrigger
            className={cn(
              'flex-[0_1_auto] py-2 px-3.5 text-[11px] max-[640px]:px-2.5',
              'max-[640px]:min-h-11 max-[640px]:text-[11px] max-[380px]:min-w-0 max-[380px]:px-1',
            )}
            value="alternatives"
          >
            <GitBranch className="w-[13px] max-[380px]:hidden" />
            Alternatives
          </TabsTrigger>
          <TabsTrigger
            className={cn(
              'flex-[0_1_auto] py-2 px-3.5 text-[11px] max-[640px]:px-2.5',
              'max-[640px]:min-h-11 max-[640px]:text-[11px] max-[380px]:min-w-0 max-[380px]:px-1',
            )}
            value="history"
          >
            <Clock3 className="w-[13px] max-[380px]:hidden" />
            History
          </TabsTrigger>
        </TabsList>
        <TabsContent className="min-h-80" value="decision">
          <div className="mt-5.5">
            <h4
              className={cn(
                'flex gap-[7px] items-center text-[10px] leading-normal font-mono',
                'tracking-[0.8px] text-[#858a7b] mb-2.5',
              )}
            >
              THE CONTEXT
            </h4>
            <p className="text-[13px] leading-[1.8] text-[#686d60] whitespace-pre-line">
              {decision.context}
            </p>
          </div>
          <div
            className={cn(
              'bg-[#f7f8f0] border border-[#e7ebda] border-l-2 border-l-[#b0bb8a] rounded',
              'py-4 px-4.5 mt-5.5',
            )}
          >
            <h4
              className={cn(
                'flex gap-[7px] items-center text-[10px] leading-normal font-mono',
                'tracking-[0.8px] mb-2.5 text-[#6d7d4b]',
              )}
            >
              <Check size={15} /> WHAT WE DECIDED
            </h4>
            <p className="text-[13px] leading-[1.8] text-[#4e5940] whitespace-pre-line">
              {decision.decision}
            </p>
          </div>
          <div className="mt-5.5">
            <h4
              className={cn(
                'flex gap-[7px] items-center text-[10px] leading-normal font-mono',
                'tracking-[0.8px] text-[#858a7b] mb-2.5',
              )}
            >
              WHY THIS DIRECTION
            </h4>
            <p className="text-[13px] leading-[1.8] text-[#686d60] whitespace-pre-line">
              {decision.reasoning}
            </p>
          </div>
          <div className="mt-5.5">
            <h4
              className={cn(
                'flex gap-[7px] items-center text-[10px] leading-normal font-mono',
                'tracking-[0.8px] text-[#858a7b] mb-2.5',
              )}
            >
              CONSEQUENCES & FOLLOW-UP
            </h4>
            <p className="text-[13px] leading-[1.8] text-[#686d60] whitespace-pre-line">
              {decision.consequences}
            </p>
          </div>
        </TabsContent>
        <TabsContent className="min-h-80" value="alternatives">
          <div className="mt-5.5">
            <h4
              className={cn(
                'flex gap-[7px] items-center text-[10px] leading-normal font-mono',
                'tracking-[0.8px] text-[#858a7b] mb-2.5',
              )}
            >
              THE OPTIONS WE CONSIDERED
            </h4>
            <ul className="my-4 pl-5 list-disc text-[#626958] text-[14px] leading-[1.8]">
              {decision.alternatives.map((alternative, index) => (
                <li className="mb-3.5" key={`${index}-${alternative}`}>
                  {alternative}
                </li>
              ))}
            </ul>
          </div>
          <div
            className={cn(
              'bg-[#f7f8f0] border border-[#e7ebda] border-l-2 border-l-[#b0bb8a] rounded',
              'py-4 px-4.5 mt-5.5',
            )}
          >
            <h4
              className={cn(
                'flex gap-[7px] items-center text-[10px] leading-normal font-mono',
                'tracking-[0.8px] mb-2.5 text-[#6d7d4b]',
              )}
            >
              THE TRADE-OFF
            </h4>
            <p className="text-[13px] leading-[1.8] text-[#4e5940] whitespace-pre-line">
              {decision.reasoning}
            </p>
          </div>
        </TabsContent>
        <TabsContent className="min-h-80" value="history">
          <div className="flex gap-[15px] my-7.5 text-[14px]">
            <span className="w-2 h-2 bg-primary rounded-full mt-1.5" />
            <div>
              <strong>{decision.owner} recorded this decision</strong>
              <p className="text-[#7d8373] mt-2 text-[12px]">
                {displayDate(decision.date)} · {decision.team}
              </p>
            </div>
          </div>
          <div className="mt-5.5">
            <h4
              className={cn(
                'flex gap-[7px] items-center text-[10px] leading-normal font-mono',
                'tracking-[0.8px] text-[#858a7b] mb-2.5',
              )}
            >
              <MessageSquare size={14} /> ATTACHED CONTEXT
            </h4>
            <p className="text-[13px] leading-[1.8] text-[#686d60] whitespace-pre-line">
              {decision.consequences}
            </p>
          </div>
          <div className="flex items-center gap-2 py-[15px] px-0 text-[13px] text-[#7e6c40]">
            <GitBranch size={16} />
            {decision.related}
          </div>
        </TabsContent>
      </Tabs>
      <div
        className={cn(
          'flex justify-between text-[#969b8d] text-[10px] border-t border-t-[#eceee6]',
          'pt-[15px] mt-6 max-[640px]:gap-3 max-[640px]:flex-wrap',
        )}
      >
        <span className="flex items-center gap-1.5">
          <GitBranch size={14} />
          Reasoning, kept together.
        </span>
        <span>Sample workspace</span>
      </div>
    </article>
  )
}
