"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Why does empathy matter in web design?",
    answer: "Websites are for humans, not search engines. Empathy helps us understand user needs, emotions, and pain points, allowing us to build experiences that feel natural, caring, and intuitive.",
  },
  {
    question: "How do you tailor your design for the Indian market?",
    answer: "We understand India's diverse digital landscape. From language support and accessibility to performance for varying internet speeds, we design with the unique needs of the Indian audience in mind.",
  },
  {
    question: "What's the 'Empathy' process like?",
    answer: "Our process is human-centered from start to finish. We begin with deep listening, mapping out user journeys, and heart-centered design, ensuring every interaction feels warm and approachable.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Every project is unique, but we usually deliver within 8-12 weeks, ensuring high quality and a focus on human impact at every stage.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-empathy-orange mb-4">
            <Heart size={20} fill="currentColor" />
            <span className="font-bold uppercase tracking-widest text-sm">Got Questions?</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Conversations with Heart</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            We're here to listen and help. Here are some common questions we get from our clients.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={cn(
                "border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden transition-all",
                openIndex === index ? "bg-white dark:bg-zinc-900 shadow-xl shadow-empathy-orange/5" : "bg-transparent hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-8 text-left"
              >
                <span className="text-xl font-bold">{faq.question}</span>
                <div className={cn(
                  "p-2 rounded-full transition-colors",
                  openIndex === index ? "bg-empathy-orange text-white" : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                )}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-8 pt-0 text-lg text-zinc-600 dark:text-zinc-400 italic">
                      "{faq.answer}"
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
