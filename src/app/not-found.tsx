import Link from "next/link"
import { Heart, Home, ArrowLeft } from "lucide-react"

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-warm-light dark:bg-warm-dark text-center px-4">
      <div className="relative mb-12">
        <Heart size={120} className="text-empathy-orange/10 animate-pulse fill-empathy-orange/5" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-serif text-9xl font-black text-empathy-orange tracking-tighter">404</h1>
        </div>
      </div>
      <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 italic">Even hearts get lost sometimes...</h2>
      <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-16 leading-relaxed italic">
        "We couldn't find the page you're looking for, but don't worry, we're here to help you find your way back home."
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
        <Link
          href="/"
          className="w-full sm:w-auto bg-empathy-orange hover:bg-empathy-orange/90 text-white px-10 py-5 rounded-full font-bold text-xl transition-all hover:scale-105 shadow-xl shadow-empathy-orange/20 flex items-center justify-center space-x-2"
        >
          <Home size={24} />
          <span>Back to Home</span>
        </Link>
        <Link
          href="/contact"
          className="w-full sm:w-auto bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700 px-10 py-5 rounded-full font-bold text-xl hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all flex items-center justify-center space-x-2"
        >
          <ArrowLeft size={24} />
          <span>Need Help?</span>
        </Link>
      </div>
    </div>
  )
}
