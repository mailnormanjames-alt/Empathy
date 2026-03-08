"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { Heart, Send, MessageCircle, Phone, Mail, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  interest: z.enum(["UX Research", "UI Design", "Development", "Branding", "Other"]),
})

type ContactFormValues = z.infer<typeof contactSchema>

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)
    alert("Thank you for reaching out with heart! We'll be in touch soon.")
    reset()
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-warm-light dark:bg-warm-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="flex items-center justify-center space-x-2 text-empathy-orange mb-6">
            <Heart size={32} fill="currentColor" className="animate-bounce" />
            <span className="font-bold uppercase tracking-widest text-lg">Let's Connect</span>
          </div>
          <h1 className="font-serif text-5xl md:text-8xl font-bold mb-8 tracking-tight leading-tight">
            We're Here to <span className="text-empathy-orange italic">Listen</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto italic">
            "Your digital journey starts with a conversation. Let's build something beautiful and human together."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-8">
              <h2 className="font-serif text-3xl font-bold mb-8">Reach Out directly</h2>
              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-empathy-orange/10 text-empathy-orange flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Call Us</h3>
                  <p className="text-zinc-500 dark:text-zinc-400">+91-XXXXXXXXXX</p>
                </div>
              </div>
              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-empathy-blue/10 text-empathy-blue flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">WhatsApp Us</h3>
                  <p className="text-zinc-500 dark:text-zinc-400">Available 24/7 for you</p>
                </div>
              </div>
              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-empathy-purple/10 text-empathy-purple flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Email Us</h3>
                  <p className="text-zinc-500 dark:text-zinc-400">hello@empathyagency.in</p>
                </div>
              </div>
              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Visit Us</h3>
                  <p className="text-zinc-500 dark:text-zinc-400">Digital Plaza, Mumbai, India</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-10 rounded-[3rem] border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-empathy-orange/5">
              <h3 className="font-serif text-2xl font-bold mb-6 italic">"Design is not just what it looks like and feels like. Design is how it works."</h3>
              <p className="text-lg text-zinc-500 dark:text-zinc-400 font-medium">— Steve Jobs</p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-zinc-900 p-12 md:p-16 rounded-[4rem] border border-zinc-200 dark:border-zinc-800 shadow-2xl shadow-empathy-orange/5">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-zinc-400">Full Name</label>
                    <input
                      {...register("name")}
                      placeholder="Your Name"
                      className={cn(
                        "w-full bg-zinc-50 dark:bg-zinc-800 border rounded-2xl px-6 py-4 outline-none transition-all focus:border-empathy-orange focus:ring-4 focus:ring-empathy-orange/10",
                        errors.name ? "border-red-500" : "border-zinc-200 dark:border-zinc-700"
                      )}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-zinc-400">Email Address</label>
                    <input
                      {...register("email")}
                      placeholder="Your Email"
                      className={cn(
                        "w-full bg-zinc-50 dark:bg-zinc-800 border rounded-2xl px-6 py-4 outline-none transition-all focus:border-empathy-orange focus:ring-4 focus:ring-empathy-orange/10",
                        errors.email ? "border-red-500" : "border-zinc-200 dark:border-zinc-700"
                      )}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-zinc-400">Interested In</label>
                  <select
                    {...register("interest")}
                    className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl px-6 py-4 outline-none transition-all focus:border-empathy-orange focus:ring-4 focus:ring-empathy-orange/10 appearance-none"
                  >
                    <option value="UX Research">UX Research & Strategy</option>
                    <option value="UI Design">Empathetic UI Design</option>
                    <option value="Development">Accessible Development</option>
                    <option value="Branding">Brand Storytelling</option>
                    <option value="Other">Other Heart-Centered Needs</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-zinc-400">Your Story / Message</label>
                  <textarea
                    {...register("message")}
                    placeholder="Tell us about your project and your users..."
                    rows={6}
                    className={cn(
                      "w-full bg-zinc-50 dark:bg-zinc-800 border rounded-2xl px-6 py-4 outline-none transition-all focus:border-empathy-orange focus:ring-4 focus:ring-empathy-orange/10 resize-none",
                      errors.message ? "border-red-500" : "border-zinc-200 dark:border-zinc-700"
                    )}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-empathy-orange hover:bg-empathy-orange/90 text-white py-6 rounded-2xl font-bold text-xl transition-all hover:scale-105 shadow-xl shadow-empathy-orange/20 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:scale-100"
                >
                  {isSubmitting ? (
                    <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send with Heart</span>
                      <Send size={24} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
