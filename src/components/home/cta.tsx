"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Heart, ArrowRight, MessageCircle, Phone, Mail } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-empathy-orange/10 via-empathy-purple/10 to-empathy-blue/10 dark:from-zinc-950 dark:to-zinc-950">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-empathy-orange/5">
          {/* Animated Background Orbs */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-empathy-orange/10 rounded-full blur-3xl -z-10 animate-pulse" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-empathy-purple/10 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />

          <div className="relative z-10">
            <div className="flex items-center justify-center space-x-2 text-empathy-orange mb-8">
              <Heart size={32} fill="currentColor" className="animate-bounce" />
              <span className="font-bold uppercase tracking-widest text-lg">Let's Connect</span>
            </div>
            <h2 className="font-serif text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              Ready to <span className="text-empathy-orange italic">humanize</span> your digital presence?
            </h2>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-16 leading-relaxed">
              We're here to listen, understand, and build something beautiful together. Reach out and let's start the conversation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-zinc-50 dark:bg-zinc-800 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-700 hover:border-empathy-orange transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-empathy-orange/10 text-empathy-orange flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <MessageCircle size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">WhatsApp Us</h3>
                <p className="text-zinc-500 dark:text-zinc-400">Instant chat support</p>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-800 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-700 hover:border-empathy-orange transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-empathy-blue/10 text-empathy-blue flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <Phone size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-zinc-500 dark:text-zinc-400">Let's talk on the phone</p>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-800 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-700 hover:border-empathy-orange transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-empathy-purple/10 text-empathy-purple flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <Mail size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-zinc-500 dark:text-zinc-400">Send us your thoughts</p>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-empathy-orange hover:bg-empathy-orange/90 text-white px-10 py-5 rounded-full font-bold text-xl transition-all hover:scale-105 shadow-xl shadow-empathy-orange/20 group"
            >
              <span>Book Your Consultation</span>
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
