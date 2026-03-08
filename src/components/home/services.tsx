"use client"

import { motion } from "framer-motion"
import { Search, PenTool, Code, MessageSquare, Zap, Target } from "lucide-react"

const services = [
  {
    title: "UX Research & Strategy",
    description: "Deeply understanding your users to build experiences that truly resonate and solve real human problems.",
    icon: Search,
    color: "bg-empathy-blue/10 text-empathy-blue",
  },
  {
    title: "Empathetic UI Design",
    description: "Interfaces that don't just look beautiful but feel warm, approachable, and human in every interaction.",
    icon: PenTool,
    color: "bg-empathy-orange/10 text-empathy-orange",
  },
  {
    title: "Accessible Development",
    description: "Building for everyone. Our code is as inclusive as our design, ensuring no user is left behind.",
    icon: Code,
    color: "bg-empathy-purple/10 text-empathy-purple",
  },
  {
    title: "Brand Storytelling",
    description: "Connecting with your audience emotionally through narratives that humanize your brand.",
    icon: MessageSquare,
    color: "bg-empathy-orange/10 text-empathy-orange",
  },
  {
    title: "Performance Optimization",
    description: "Ensuring your site loads instantly for everyone, even on slower connections across India.",
    icon: Zap,
    color: "bg-empathy-blue/10 text-empathy-blue",
  },
  {
    title: "Local Business SEO",
    description: "Tailoring your digital presence for the Indian market, reaching the right people in the right places.",
    icon: Target,
    color: "bg-empathy-purple/10 text-empathy-purple",
  },
]

export default function Services() {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Human-Centered Services</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Our approach goes beyond pixels and code. We focus on the person on the other side of the screen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-empathy-orange/50 transition-all hover:shadow-xl hover:shadow-empathy-orange/5 group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.color} group-hover:scale-110 transition-transform`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                {service.description}
              </p>
              <button className="text-empathy-orange font-bold flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
                <span>Learn More</span>
                <span className="text-xl">→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
