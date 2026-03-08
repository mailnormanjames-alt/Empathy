"use client"

import { allServices } from "contentlayer/generated"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Search, PenTool, Code, MessageSquare, Zap, Target, CheckCircle2, Heart } from "lucide-react"

const icons: Record<string, any> = {
  Search,
  PenTool,
  Code,
  MessageSquare,
  Zap,
  Target,
}

const pricingTiers = [
  {
    name: "Foundation",
    description: "Perfect for startups looking to build a digital presence with heart.",
    price: "Custom",
    features: [
      "User Research & Empathy Mapping",
      "Human-Centered UI Design (Up to 10 pages)",
      "Accessible React Development",
      "Performance Optimization",
      "Basic SEO Strategy",
    ],
    highlight: false,
  },
  {
    name: "Impact",
    description: "Designed for businesses ready to transform their digital experience and human connection.",
    price: "Custom",
    features: [
      "Everything in Foundation",
      "Advanced User Psychology Research",
      "Comprehensive UI/UX Strategy",
      "Full Stack Development",
      "Interactive Micro-interactions",
      "Dedicated Project Lead",
    ],
    highlight: true,
  },
  {
    name: "Holistic",
    description: "For established brands seeking a complete digital transformation with empathy at its core.",
    price: "Custom",
    features: [
      "Everything in Impact",
      "Ongoing User Research & Iteration",
      "Omnichannel Experience Design",
      "Brand Storytelling & Narrative Strategy",
      "Priority Support & Maintenance",
      "Performance & Accessibility Audits",
    ],
    highlight: false,
  },
]

export default function ServicesPage() {
  const services = allServices.sort((a, b) => a.order - b.order)

  return (
    <div className="pt-32 pb-24 min-h-screen bg-warm-light dark:bg-warm-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="flex items-center justify-center space-x-2 text-empathy-orange mb-6">
            <Heart size={32} fill="currentColor" className="animate-pulse" />
            <span className="font-bold uppercase tracking-widest text-lg">Design with Heart, Build with Excellence</span>
          </div>
          <h1 className="font-serif text-5xl md:text-8xl font-bold mb-10 tracking-tight leading-tight">
            Our Human-Centered <span className="text-empathy-orange italic">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl mx-auto italic">
            "We don't just build websites; we create digital bridges that connect your business with the hearts and minds of your users."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {services.map((service) => {
            const Icon = icons[service.icon] || Search
            return (
              <Link
                key={service.slug}
                href={service.url}
                className="group relative bg-white dark:bg-zinc-900 p-12 rounded-[3rem] border border-zinc-200 dark:border-zinc-800 hover:border-empathy-orange/50 transition-all hover:shadow-2xl hover:shadow-empathy-orange/10"
              >
                <div className="flex flex-col h-full">
                  <div className="w-20 h-20 rounded-3xl bg-empathy-orange/10 text-empathy-orange flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <Icon size={40} />
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 group-hover:text-empathy-orange transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    <span className="text-empathy-orange font-bold flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
                      <span>Explore Service</span>
                      <ArrowRight size={24} />
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">Value with <span className="text-empathy-orange italic">Heart</span></h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Transparent, human-centered pricing that reflects the value and impact we bring to your business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={cn(
                  "relative p-10 rounded-[3rem] border flex flex-col h-full transition-all",
                  tier.highlight
                    ? "bg-zinc-900 text-white border-empathy-orange shadow-2xl shadow-empathy-orange/20"
                    : "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white border-zinc-200 dark:border-zinc-800"
                )}
              >
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-empathy-orange text-white px-6 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Impactful
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                  <p className={cn("text-lg italic", tier.highlight ? "text-zinc-400" : "text-zinc-500")}>
                    "{tier.description}"
                  </p>
                </div>
                <div className="mb-10">
                  <span className="text-4xl font-bold">{tier.price}</span>
                </div>
                <ul className="space-y-4 mb-12 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-3">
                      <CheckCircle2 className={cn("mt-1 shrink-0", tier.highlight ? "text-empathy-orange" : "text-empathy-blue")} size={20} />
                      <span className={tier.highlight ? "text-zinc-300" : "text-zinc-600 dark:text-zinc-400"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={cn(
                    "w-full py-5 rounded-full font-bold text-center transition-all",
                    tier.highlight
                      ? "bg-empathy-orange text-white hover:bg-empathy-orange/90"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700"
                  )}
                >
                  Start Your Journey
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Quiz Placeholder */}
        <section className="bg-empathy-blue/10 dark:bg-zinc-900 p-12 md:p-20 rounded-[4rem] text-center border border-empathy-blue/20">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">Find Your Needs</h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Not sure what you need? Take our interactive quiz to help us understand your goals and find the best path forward.
          </p>
          <button className="bg-empathy-blue text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-xl shadow-empathy-blue/20">
            Start the Quiz
          </button>
        </section>
      </div>
    </div>
  )
}
