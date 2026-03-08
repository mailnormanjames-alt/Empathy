"use client"

import { allServices } from "contentlayer/generated"
import { notFound } from "next/navigation"
import { useMDXComponent } from "next-contentlayer/hooks"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Heart, Search, PenTool, Code, MessageSquare, Zap, Target } from "lucide-react"

const icons: Record<string, any> = {
  Search,
  PenTool,
  Code,
  MessageSquare,
  Zap,
  Target,
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = allServices.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  const MDXContent = useMDXComponent(service.body.code)
  const Icon = icons[service.icon] || Search

  return (
    <article className="pt-32 pb-24 min-h-screen bg-warm-light dark:bg-warm-dark">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          href="/services"
          className="inline-flex items-center space-x-2 text-zinc-600 dark:text-zinc-400 hover:text-empathy-orange transition-colors mb-12 font-medium"
        >
          <ArrowLeft size={20} />
          <span>Back to All Services</span>
        </Link>

        <header className="mb-20">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-20 h-20 rounded-3xl bg-empathy-orange/10 text-empathy-orange flex items-center justify-center">
              <Icon size={40} />
            </div>
            <div className="flex items-center space-x-2 text-empathy-orange">
              <Heart size={20} fill="currentColor" />
              <span className="font-bold uppercase tracking-widest text-sm tracking-tight">Expert Service</span>
            </div>
          </div>
          <h1 className="font-serif text-5xl md:text-8xl font-bold mb-10 tracking-tight leading-tight">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl italic mb-16">
            "{service.description}"
          </p>
        </header>

        <div className="prose prose-lg dark:prose-invert prose-empathy max-w-none mb-32">
          <MDXContent />
        </div>

        <section className="bg-white dark:bg-zinc-900 p-12 md:p-24 rounded-[4rem] border border-zinc-200 dark:border-zinc-800 shadow-2xl shadow-empathy-orange/5 text-center">
          <h2 className="font-serif text-3xl md:text-6xl font-bold mb-8 italic">Ready to transform your digital experience?</h2>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto mb-16 leading-relaxed">
            "Let's talk about how we can help you build something that truly matters to your users. Our consultation is the first step toward a more human digital presence."
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-empathy-orange hover:bg-empathy-orange/90 text-white px-10 py-5 rounded-full font-bold text-xl transition-all hover:scale-105 shadow-xl shadow-empathy-orange/20"
            >
              Book a Consultation
            </Link>
            <Link
              href="/projects"
              className="w-full sm:w-auto bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700 px-10 py-5 rounded-full font-bold text-xl hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all"
            >
              View Our Work
            </Link>
          </div>
        </section>
      </div>
    </article>
  )
}
