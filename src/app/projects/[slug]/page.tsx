"use client"

import { allProjects } from "contentlayer/generated"
import { notFound } from "next/navigation"
import { useMDXComponent } from "next-contentlayer/hooks"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Heart, Calendar, User } from "lucide-react"
import { formatDate } from "@/lib/utils"

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = allProjects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  const MDXContent = useMDXComponent(project.body.code)

  return (
    <article className="pt-32 pb-24 min-h-screen bg-warm-light dark:bg-warm-dark">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          href="/projects"
          className="inline-flex items-center space-x-2 text-zinc-600 dark:text-zinc-400 hover:text-empathy-orange transition-colors mb-12 font-medium"
        >
          <ArrowLeft size={20} />
          <span>Back to All Stories</span>
        </Link>

        <header className="mb-16">
          <div className="flex items-center space-x-2 text-empathy-orange mb-6">
            <Heart size={20} fill="currentColor" />
            <span className="font-bold uppercase tracking-widest text-sm">{project.category}</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-zinc-500 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800 pb-12 mb-12">
            <div className="flex items-center space-x-2">
              <Calendar size={20} />
              <span>{formatDate(project.date)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <User size={20} />
              <span>Client: {project.client}</span>
            </div>
          </div>
          <div className="relative aspect-[16/9] rounded-[3rem] overflow-hidden shadow-2xl shadow-empathy-orange/10 border border-zinc-200 dark:border-zinc-800">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 prose prose-lg dark:prose-invert prose-empathy max-w-none">
            <MDXContent />
          </div>
          <aside className="space-y-12">
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 shadow-sm sticky top-32">
              <h3 className="font-serif text-2xl font-bold mb-6">Human Impact</h3>
              <p className="text-lg text-empathy-blue italic font-medium mb-8">
                "{project.humanImpact}"
              </p>
              <div className="space-y-6">
                <div className="flex flex-col space-y-2">
                  <span className="text-sm font-bold uppercase tracking-widest text-zinc-400">The Challenge</span>
                  <p className="text-zinc-600 dark:text-zinc-400">{project.challenge}</p>
                </div>
                <div className="flex flex-col space-y-2">
                  <span className="text-sm font-bold uppercase tracking-widest text-zinc-400">Our Solution</span>
                  <p className="text-zinc-600 dark:text-zinc-400">{project.solution}</p>
                </div>
              </div>
              <div className="pt-8 mt-8 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap gap-2">
                {project.tags?.map((tag) => (
                  <span key={tag} className="bg-zinc-50 dark:bg-zinc-800 px-3 py-1 rounded-full text-xs font-bold text-zinc-600 dark:text-zinc-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <footer className="mt-24 pt-24 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex flex-col md:row items-center justify-between space-y-8 md:space-y-0">
            <div className="max-w-md">
              <h3 className="font-serif text-3xl font-bold mb-4">Want to create your own story of impact?</h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Let's talk about how we can help you build something that truly matters to your users.
              </p>
            </div>
            <Link
              href="/contact"
              className="bg-empathy-orange hover:bg-empathy-orange/90 text-white px-10 py-5 rounded-full font-bold text-xl transition-all hover:scale-105 shadow-xl shadow-empathy-orange/20"
            >
              Start Your Story
            </Link>
          </div>
        </footer>
      </div>
    </article>
  )
}
