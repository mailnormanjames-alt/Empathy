"use client"

import { motion } from "framer-motion"
import { Heart, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-empathy-orange/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-empathy-purple/10 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />

      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-empathy-orange/10 text-empathy-orange px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-empathy-orange/20"
        >
          <Sparkles size={16} />
          <span>India's No. 1 Web Design Agency</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight max-w-5xl mx-auto"
        >
          Design with <span className="text-empathy-orange italic">Heart</span>,
          <br />
          Build with <span className="gradient-text">Excellence</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          We bridge the gap between technology and human emotion. Our websites aren't just code; they're experiences built with deep empathy for your users.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-empathy-orange hover:bg-empathy-orange/90 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center space-x-2 transition-all hover:scale-105 shadow-lg shadow-empathy-orange/20"
          >
            <span>Start Your Journey</span>
            <ArrowRight size={20} />
          </Link>
          <Link
            href="/projects"
            className="w-full sm:w-auto bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all"
          >
            View Our Work
          </Link>
        </motion.div>

        {/* Hero Illustration Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 relative max-w-5xl mx-auto"
        >
          <div className="aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 border-8 border-white dark:border-zinc-950 shadow-2xl relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Heart className="w-24 h-24 text-empathy-orange mx-auto mb-4 animate-pulse fill-empathy-orange" />
                <p className="text-zinc-500 dark:text-zinc-400 font-medium">Interactive Empathy Engine Loading...</p>
              </div>
            </div>
            {/* Design/Wireframe Transformation Simulation would go here */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
