import Link from "next/link"
import Image from "next/image"
import { Heart, Users, Sparkles, Target, Quote } from "lucide-react"

const values = [
  {
    title: "Deep Empathy",
    description: "We don't just design for users; we design with them. Understanding human emotion is at the core of everything we do.",
    icon: Heart,
    color: "bg-empathy-orange/10 text-empathy-orange",
  },
  {
    title: "Inclusive Design",
    description: "Digital experiences should be for everyone. We build with accessibility and diversity in mind from day one.",
    icon: Users,
    color: "bg-empathy-blue/10 text-empathy-blue",
  },
  {
    title: "Relentless Excellence",
    description: "We combine our heart-centered approach with technical precision to deliver world-class digital solutions.",
    icon: Sparkles,
    color: "bg-empathy-purple/10 text-empathy-purple",
  },
]

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-warm-light dark:bg-warm-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="font-serif text-5xl md:text-8xl font-bold mb-10 tracking-tight leading-tight">
            Why <span className="text-empathy-orange italic">Empathy</span> Drives Everything We Do
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl mx-auto italic mb-12">
            "We believe that the most powerful digital experiences are the ones that feel the most human."
          </p>
          <div className="relative aspect-video rounded-[4rem] overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800">
            <Image
              src="https://images.unsplash.com/photo-1522071823991-b1ae5e6a3048?auto=format&fit=crop&q=80&w=1200"
              alt="Our Team"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="font-serif text-4xl md:text-6xl font-bold leading-tight">Born in India, <br />Designed for the <span className="text-empathy-orange">World</span></h2>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Founded in the heart of India's digital revolution, Empathy Web Design Agency was born from a simple observation: technology was becoming faster, but digital experiences were becoming colder.
              </p>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We set out to change that. By combining deep user research with heart-centered design and world-class engineering, we build digital bridges that truly connect businesses with their audiences.
              </p>
              <div className="flex items-center space-x-6 pt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-empathy-orange mb-1">100+</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-zinc-400">Happy Clients</div>
                </div>
                <div className="w-px h-12 bg-zinc-200 dark:bg-zinc-800" />
                <div className="text-center">
                  <div className="text-4xl font-bold text-empathy-blue mb-1">50+</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-zinc-400">Stories of Impact</div>
                </div>
                <div className="w-px h-12 bg-zinc-200 dark:bg-zinc-800" />
                <div className="text-center">
                  <div className="text-4xl font-bold text-empathy-purple mb-1">10+</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-zinc-400">Awards Won</div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-12 md:p-16 rounded-[4rem] border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-empathy-orange/5 relative">
              <Quote className="absolute top-10 right-10 w-20 h-20 text-empathy-orange/10" />
              <p className="text-2xl md:text-3xl font-serif font-bold italic mb-8 leading-relaxed relative z-10">
                "Our mission is to humanize the digital world, one heart-centered design at a time. We're not just building websites; we're building empathy."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-zinc-200">
                  <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" alt="Founder" width={64} height={64} />
                </div>
                <div>
                  <div className="font-bold text-xl">Arjun Mehta</div>
                  <div className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Founder & Creative Lead</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">Our Core Values</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              These principles guide every decision we make and every digital experience we create.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((value) => (
              <div key={value.title} className="bg-white dark:bg-zinc-900 p-10 rounded-[3rem] border border-zinc-200 dark:border-zinc-800 hover:border-empathy-orange/50 transition-all group">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${value.color} group-hover:scale-110 transition-transform`}>
                  <value.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed italic">
                  "{value.description}"
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-empathy-orange/10 dark:bg-zinc-900 p-12 md:p-24 rounded-[4rem] text-center border border-empathy-orange/20">
          <h2 className="font-serif text-3xl md:text-6xl font-bold mb-8">Join the Empathy Movement</h2>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto mb-16 leading-relaxed">
            Whether you're a business looking to connect or a designer who cares deeply, we'd love to have you with us.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/contact" className="w-full sm:w-auto bg-empathy-orange text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-xl shadow-empathy-orange/20">
              Work With Us
            </Link>
            <Link href="/careers" className="w-full sm:w-auto bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700 px-10 py-5 rounded-full font-bold text-xl hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all">
              Join the Team
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
