import Link from "next/link"
import { Heart, Instagram, Twitter, Linkedin, Facebook } from "lucide-react"

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "UX Research", href: "/services/ux-research" },
      { name: "UI Design", href: "/services/ui-design" },
      { name: "Development", href: "/services/development" },
      { name: "Branding", href: "/services/branding" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Process", href: "/process" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "/projects" },
      { name: "Design Guides", href: "/resources" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 group mb-6">
              <Heart className="w-8 h-8 text-empathy-orange fill-empathy-orange group-hover:scale-110 transition-transform duration-300" />
              <span className="font-serif text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-empathy-orange to-empathy-purple">
                EMPATHY
              </span>
            </Link>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-sm mb-8 leading-relaxed">
              India's No. 1 Web Design Agency. We create digital experiences that feel human, approachable, and deeply empathetic.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="p-2 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-empathy-orange hover:border-empathy-orange transition-all">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-empathy-orange hover:border-empathy-orange transition-all">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-empathy-orange hover:border-empathy-orange transition-all">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-empathy-orange hover:border-empathy-orange transition-all">
                <Facebook size={20} />
              </Link>
            </div>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-zinc-600 dark:text-zinc-400 hover:text-empathy-orange transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-10 flex flex-col md:row items-center justify-between text-sm text-zinc-500 dark:text-zinc-600">
          <p>© 2024 EMPATHY WEB DESIGN AGENCY. Made with heart in India.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-empathy-orange transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-empathy-orange transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
