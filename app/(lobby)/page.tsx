import CreatorGrid from "@/components/layout/creator-grid";
import HeroSection from "@/components/layout/hero-section";
import HowItWorksSection from "@/components/layout/product-section";


export default function IndexPage() {
  return (
    <div>
      <HeroSection />
      <CreatorGrid />
      <HowItWorksSection />
      
    </div>
  );
}
