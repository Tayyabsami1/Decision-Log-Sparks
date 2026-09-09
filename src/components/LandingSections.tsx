import {
  AudienceSection,
  BenefitsSection,
  FinalCallToAction,
  MemorySection,
  PricingSection,
  ProblemSection,
  ProductOverview,
  SiteFooter,
  TestimonialSection,
  WorkflowSection,
} from '@/components'

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
