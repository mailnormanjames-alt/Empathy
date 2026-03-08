"use client"

import { allPosts } from "contentlayer/generated"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, User, Tag } from "lucide-react"
import { formatDate } from "@/lib/utils"

export default function BlogPage() {
  const posts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="pt-32 pb-24 min-h-screen bg-warm-light dark:bg-warm-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h1 className="font-serif text-5xl md:text-8xl font-bold mb-8 tracking-tight">
            Digital <span className="text-empathy-orange italic">Insights</span> & Empathy
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl italic">
            "Explore our thoughts on human-centered design, user psychology, and building digital bridges."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={post.url}
              className="group flex flex-col h-full bg-white dark:bg-zinc-900 rounded-[3rem] border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:border-empathy-orange/50 transition-all hover:shadow-2xl hover:shadow-empathy-orange/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-10 flex flex-col flex-1">
                <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar size={14} />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="w-1 h-1 bg-zinc-300 rounded-full" />
                  <div className="flex items-center space-x-2">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                </div>
                <h2 className="font-serif text-3xl font-bold mb-6 group-hover:text-empathy-orange transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed line-clamp-3 italic">
                  "{post.description}"
                </p>
                <div className="mt-auto pt-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-empathy-blue text-sm font-bold uppercase tracking-widest">
                    <Tag size={14} />
                    <span>{post.tags?.[0]}</span>
                  </div>
                  <span className="text-empathy-orange font-bold flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
                    <span>Read More</span>
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
