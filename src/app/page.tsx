import Hero from "@/components/home/hero"
import Services from "@/components/home/services"
import FeaturedProjects from "@/components/home/featured-projects"
import Process from "@/components/home/process"
import FAQ from "@/components/home/faq"
import CTA from "@/components/home/cta"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Services />
      <FeaturedProjects />
      <Process />
      <FAQ />
      <CTA />
    </div>
  )
}
