"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Bharat Health",
    description: "A human-centered healthcare platform connecting doctors and patients across rural India.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    impact: "Impact: Improved healthcare access for 10,000+ users.",
    category: "HealthTech",
  },
  {
    title: "Education for All",
    description: "An accessible learning management system designed for varying internet speeds in tier 2 and 3 cities.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
    impact: "Impact: 5,000+ students empowered with digital learning.",
    category: "EdTech",
  },
  {
    title: "Sustainable Crafts",
    description: "An e-commerce experience celebrating local Indian artisans and their stories through empathetic design.",
    image: "https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?auto=format&fit=crop&q=80&w=800",
    impact: "Impact: Supporting 500+ local families through digital trade.",
    category: "E-commerce",
  },
]

export default function FeaturedProjects() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:row items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Stories of Human Impact</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              We don't just build websites; we create digital bridges that empower people and transform lives.
            </p>
          </div>
          <Link
            href="/projects"
            className="group flex items-center space-x-2 text-empathy-orange font-bold text-lg hover:translate-x-2 transition-transform"
          >
            <span>View All Stories</span>
            <ArrowRight size={24} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 border border-zinc-200 dark:border-zinc-800 shadow-sm group-hover:shadow-xl group-hover:shadow-empathy-orange/10 transition-all">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <div className="text-white">
                    <span className="text-sm font-bold uppercase tracking-widest mb-2 block">{project.category}</span>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-empathy-orange transition-colors">{project.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed line-clamp-2">
                {project.description}
              </p>
              <div className="flex items-center space-x-2 text-empathy-blue font-semibold italic text-sm">
                <div className="w-6 h-px bg-empathy-blue" />
                <span>{project.impact}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
