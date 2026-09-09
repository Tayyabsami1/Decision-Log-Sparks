import { AudienceSection } from '@/components/landing/AudienceSection'
import { ProblemSection } from '@/components/landing/ProblemSection'
import { ProductOverview } from '@/components/landing/ProductOverview'
import { MemorySection } from '@/components/landing/MemorySection'
import { BenefitsSection } from '@/components/landing/BenefitsSection'
import { TestimonialSection } from '@/components/landing/TestimonialSection'

export function LandingSections() {
  return (
    <>
      <AudienceSection />
      <ProblemSection />
      <ProductOverview />
      <MemorySection />
      <BenefitsSection />
      <TestimonialSection />
    </>
  )
}
