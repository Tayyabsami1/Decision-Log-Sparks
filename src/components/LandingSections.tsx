import { AudienceSection } from '@/components/landing/AudienceSection'
import { ProblemSection } from '@/components/landing/ProblemSection'
import { ProductOverview } from '@/components/landing/ProductOverview'
import { MemorySection } from '@/components/landing/MemorySection'

export function LandingSections() {
  return (
    <>
      <AudienceSection />
      <ProblemSection />
      <ProductOverview />
      <MemorySection />
    </>
  )
}
