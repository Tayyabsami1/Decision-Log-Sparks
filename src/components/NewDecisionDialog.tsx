import { cn } from '@/lib/utils'
import { useId, useState } from 'react'
import type { FormEvent } from 'react'
import { Plus } from 'lucide-react'
import { Dropdown } from '@/components/Dropdown'
import { PrimaryButton } from '@/components/PrimaryButton'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import type { Decision } from '@/data/decisions'
import { Team, type DecisionTeam } from '@/types/demo'

interface NewDecisionDialogProps {
  onCreate: (decision: Decision) => void
}

const teamOptions = Object.values(Team)
  .filter((team): team is DecisionTeam => team !== Team.All)
  .map((team) => ({ label: team, value: team }))

const detailFields = [
  {
    name: 'context',
    label: 'What prompted this?',
    placeholder: 'The situation or problem behind the decision.',
    required: true,
  },
  {
    name: 'decision',
    label: 'What did you decide?',
    placeholder: 'The direction you chose.',
    required: true,
  },
  {
    name: 'reasoning',
    label: 'Why this direction?',
    placeholder: 'The reasoning worth keeping.',
    required: true,
  },
  {
    name: 'alternatives',
    label: 'Alternatives considered',
    placeholder: 'One alternative per line. Optional.',
    required: false,
  },
  {
    name: 'consequences',
    label: 'Consequences & follow-up',
    placeholder: 'What happens next? Optional.',
    required: false,
  },
]

function clearFieldError(event: FormEvent<HTMLFormElement>) {
  const field = event.target

  if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) {
    field.setCustomValidity('')
  }
}

export function NewDecisionDialog({ onCreate }: NewDecisionDialogProps) {
  const [open, setOpen] = useState(false)
  const id = useId()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const value = (name: string) => String(data.get(name) ?? '').trim()

    for (const name of ['title', 'owner', 'context', 'decision', 'reasoning']) {
      if (!value(name)) {
        const field = form.elements.namedItem(name)

        if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) {
          field.setCustomValidity('Please add a little context here.')
          field.reportValidity()
        }

        return
      }
    }
    const team = teamOptions.find((option) => option.value === value('team'))?.value

    if (!team) return

    const decision: Decision = {
      id: `DEC-${crypto.randomUUID().slice(0, 6).toUpperCase()}`,
      title: value('title'),
      owner: value('owner'),
      team,
      date: new Date().toISOString().slice(0, 10),
      status: 'Active',
      context: value('context'),
      decision: value('decision'),
      reasoning: value('reasoning'),
      alternatives: value('alternatives')
        ? value('alternatives').split('\n').filter(Boolean)
        : ['No alternatives recorded yet.'],
      consequences: value('consequences') || 'No follow-up recorded yet.',
      related: 'No related decisions yet.',
    }

    onCreate(decision)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<PrimaryButton className="max-[760px]:w-full" />}>
        <Plus size={16} />
        New decision
      </DialogTrigger>
      <DialogContent
        className={cn(
          'w-[min(620px,_calc(100vw_-_32px))] max-w-155 max-h-[calc(100dvh_-_40px)]',
          'overflow-y-auto p-7 rounded-xl max-[640px]:py-6 max-[640px]:px-5',
          'max-[640px]:max-h-[calc(100dvh_-_24px)] [&_[data-slot=dialog-close]]:size-11',
        )}
      >
        <DialogHeader>
          <div
            className={cn(
              'flex items-center gap-3 text-[#777b6c] text-[10px] leading-[1.7] font-mono',
              'tracking-[1.3px]',
            )}
          >
            KEEP THE WHY
          </div>
          <DialogTitle className="text-[28px] tracking-[-1px] mt-2">
            Capture a decision.
          </DialogTitle>
          <DialogDescription>
            A few clear sentences today save a lot of questions later.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit}
          onInput={clearFieldError}
          className="grid gap-4.5 mt-2"
        >
          <div className="grid gap-[7px] min-w-0">
            <label
              className="text-[12px] font-semibold text-[#677456]"
              htmlFor={`${id}-title`}
            >
              Decision title
            </label>
            <Input
              className="text-[13px] w-full h-10 max-[640px]:text-[16px]"
              id={`${id}-title`}
              name="title"
              required
              maxLength={140}
              placeholder="e.g. Keep our public API versioned"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 max-[640px]:grid-cols-1">
            <div className="grid gap-[7px] min-w-0">
              <label
                className="text-[12px] font-semibold text-[#677456]"
                htmlFor={`${id}-owner`}
              >
                Owner
              </label>
              <Input
                className="text-[13px] w-full h-10 max-[640px]:text-[16px]"
                id={`${id}-owner`}
                name="owner"
                required
                maxLength={60}
                placeholder="Your name"
              />
            </div>
            <Dropdown
              label="Team"
              placeholder="Select a team"
              options={teamOptions}
              name="team"
              defaultValue={Team.Engineering}
              required
            />
          </div>
          {detailFields.map(({ name, label, placeholder, required }) => (
            <div className="grid gap-[7px] min-w-0" key={name}>
              <label
                className="text-[12px] font-semibold text-[#677456]"
                htmlFor={`${id}-${name}`}
              >
                {label}
              </label>
              <Textarea
                className="text-[13px] w-full min-h-18 resize-y max-[640px]:text-[16px]"
                id={`${id}-${name}`}
                name={name}
                placeholder={placeholder}
                required={required}
                maxLength={2000}
                rows={2}
              />
            </div>
          ))}
          <div
            className={cn(
              'flex justify-between items-center gap-4.5 pt-5 border-t border-t-line-soft',
              'max-[640px]:flex-col-reverse max-[640px]:items-stretch',
              'max-[640px]:text-center',
            )}
          >
            <span className="text-[10px] text-[#88957b]">
              Saved in this demo session only.
            </span>
            <PrimaryButton type="submit">Save decision</PrimaryButton>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
