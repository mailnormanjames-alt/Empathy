"use client"

import { motion } from "framer-motion"
import { Heart, Search, Target, Sparkles, MessageSquare } from "lucide-react"

const steps = [
  {
    title: "Deep Listening",
    description: "We start by listening. We understand your business goals, your user's pain points, and the human story behind your brand.",
    icon: MessageSquare,
    color: "bg-empathy-blue/10 text-empathy-blue",
  },
  {
    title: "User Empathy Mapping",
    description: "We map out user journeys, identifying emotional touchpoints where we can create moments of delight and understanding.",
    icon: Search,
    color: "bg-empathy-orange/10 text-empathy-orange",
  },
  {
    title: "Heart-Centered Design",
    description: "Our designers craft interfaces that feel warm, approachable, and human, ensuring every interaction feels natural and caring.",
    icon: Heart,
    color: "bg-empathy-purple/10 text-empathy-purple",
  },
  {
    title: "Empathetic Development",
    description: "We build with a focus on performance and accessibility, ensuring your digital experience is inclusive for everyone.",
    icon: Sparkles,
    color: "bg-empathy-blue/10 text-empathy-blue",
  },
]

export default function Process() {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 italic">The Empathy Approach</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Our methodology is built on a simple foundation: understanding humans first.
          </p>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-zinc-200 dark:bg-zinc-800 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 relative group"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${step.color} group-hover:scale-110 transition-transform relative z-20`}>
                  <step.icon size={32} />
                </div>
                <div className="absolute top-8 right-8 text-4xl font-serif font-black text-zinc-100 dark:text-zinc-800 -z-10 group-hover:text-empathy-orange/10 transition-colors">
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed italic">
                  "{step.description}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
