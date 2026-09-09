import { AudienceSection } from '@/components/landing/AudienceSection'
import { ProblemSection } from '@/components/landing/ProblemSection'
import { ProductOverview } from '@/components/landing/ProductOverview'
import { MemorySection } from '@/components/landing/MemorySection'
import { BenefitsSection } from '@/components/landing/BenefitsSection'
import { TestimonialSection } from '@/components/landing/TestimonialSection'
import { WorkflowSection } from '@/components/landing/WorkflowSection'
import { PricingSection } from '@/components/landing/PricingSection'
import { FinalCallToAction } from '@/components/landing/FinalCallToAction'
import { SiteFooter } from '@/components/landing/SiteFooter'

export function LandingSections() {
  return (
    <>
      <AudienceSection />
      <ProblemSection />
      <ProductOverview />
      <MemorySection />
      <BenefitsSection />
      <TestimonialSection />
      <WorkflowSection />
      <PricingSection />
      <FinalCallToAction />
      <SiteFooter />
    </>
  )
}
