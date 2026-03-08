"use client"

import { allProjects } from "contentlayer/generated"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Filter } from "lucide-react"

export default function ProjectsPage() {
  const projects = allProjects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="pt-32 pb-24 min-h-screen bg-warm-light dark:bg-warm-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8">Stories of Human Impact</h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Explore our portfolio of projects where we've used empathy-driven design to solve real-world problems and transform lives across India.
          </p>
        </div>

        <div className="flex flex-col md:row items-center justify-between mb-12 space-y-4 md:space-y-0 border-b border-zinc-200 dark:border-zinc-800 pb-8">
          <div className="flex items-center space-x-6 overflow-x-auto pb-4 md:pb-0 no-scrollbar">
            <button className="text-empathy-orange font-bold whitespace-nowrap">All Stories</button>
            <button className="text-zinc-500 hover:text-empathy-orange transition-colors whitespace-nowrap">HealthTech</button>
            <button className="text-zinc-500 hover:text-empathy-orange transition-colors whitespace-nowrap">EdTech</button>
            <button className="text-zinc-500 hover:text-empathy-orange transition-colors whitespace-nowrap">E-commerce</button>
            <button className="text-zinc-500 hover:text-empathy-orange transition-colors whitespace-nowrap">FinTech</button>
          </div>
          <button className="flex items-center space-x-2 bg-white dark:bg-zinc-900 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 text-sm font-medium">
            <Filter size={16} />
            <span>Filter by Impact</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={project.url}
              className="group block"
            >
              <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-8 border border-zinc-200 dark:border-zinc-800 shadow-sm group-hover:shadow-2xl group-hover:shadow-empathy-orange/10 transition-all">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-empathy-orange border border-empathy-orange/20">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="font-serif text-3xl md:text-4xl font-bold group-hover:text-empathy-orange transition-colors">
                  {project.title}
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 italic">
                  "{project.description}"
                </p>
                <div className="flex items-center space-x-4 pt-2">
                  <div className="flex items-center space-x-2 text-empathy-blue font-bold text-sm italic">
                    <div className="w-8 h-px bg-empathy-blue" />
                    <span>{project.humanImpact}</span>
                  </div>
                  <div className="flex-1" />
                  <span className="text-empathy-orange font-bold flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
                    <span>Read Story</span>
                    <ArrowRight size={20} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
