import { allPosts } from "contentlayer/generated"
import { notFound } from "next/navigation"
import { useMDXComponent } from "next-contentlayer/hooks"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Calendar, User, Tag, Heart } from "lucide-react"
import { formatDate } from "@/lib/utils"

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const MDXContent = useMDXComponent(post.body.code)

  return (
    <article className="pt-32 pb-24 min-h-screen bg-warm-light dark:bg-warm-dark">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          href="/blog"
          className="inline-flex items-center space-x-2 text-zinc-600 dark:text-zinc-400 hover:text-empathy-orange transition-colors mb-12 font-medium"
        >
          <ArrowLeft size={20} />
          <span>Back to All Insights</span>
        </Link>

        <header className="mb-16">
          <div className="flex items-center space-x-2 text-empathy-orange mb-6">
            <Heart size={20} fill="currentColor" />
            <span className="font-bold uppercase tracking-widest text-sm">Design Insight</span>
          </div>
          <h1 className="font-serif text-5xl md:text-8xl font-bold mb-10 tracking-tight leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-zinc-500 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800 pb-12 mb-12">
            <div className="flex items-center space-x-2">
              <Calendar size={20} />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <User size={20} />
              <span>By {post.author}</span>
            </div>
            <div className="flex-1" />
            <div className="flex flex-wrap gap-2">
              {post.tags?.map((tag) => (
                <span key={tag} className="bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full text-xs font-bold text-zinc-600 dark:text-zinc-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="relative aspect-[16/9] rounded-[4rem] overflow-hidden shadow-2xl shadow-empathy-orange/10 border border-zinc-200 dark:border-zinc-800">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert prose-empathy max-w-none mb-24">
          <MDXContent />
        </div>

        <footer className="pt-24 border-t border-zinc-200 dark:border-zinc-800">
          <div className="bg-zinc-50 dark:bg-zinc-900 p-12 md:p-20 rounded-[4rem] text-center border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-empathy-orange/5">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8">Stay Insightful</h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed italic">
              "Get our latest thoughts on human-centered design, user psychology, and digital impact delivered straight to your inbox."
            </p>
            <div className="max-w-md mx-auto">
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 outline-none focus:border-empathy-orange focus:ring-4 focus:ring-empathy-orange/10 transition-all"
                />
                <button className="bg-empathy-orange hover:bg-empathy-orange/90 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105 shadow-xl shadow-empathy-orange/20">
                  Join Us
                </button>
              </form>
            </div>
          </div>
        </footer>
      </div>
    </article>
  )
}
