"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { RESUME_DATA } from "@/data/resume"
import { Mail, Menu, X } from "lucide-react"

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Credentials", href: "#education" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 dark:bg-[#09090b]/85 backdrop-blur-xl border-b border-border shadow-xs"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2">
        {/* Brand with Monogram - strictly one line */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
          className="flex items-center gap-2.5 group transition-transform active:scale-95 shrink-0 whitespace-nowrap"
        >
          <div className="size-9 sm:size-10 rounded-xl bg-gradient-to-br from-pink-500 via-rose-500 to-violet-600 text-white font-mono font-bold flex items-center justify-center text-sm sm:text-base shadow-[0_0_15px_rgba(255,42,133,0.35)] group-hover:scale-105 transition-transform shrink-0">
            MS
          </div>
          <span className="font-black text-base sm:text-lg lg:text-xl tracking-tight text-foreground group-hover:text-pink-500 transition-colors whitespace-nowrap">
            {RESUME_DATA.name}
          </span>
        </a>

        {/* Desktop Navigation - compact & balanced */}
        <nav className="hidden md:flex items-center gap-0.5 bg-muted/40 dark:bg-white/[0.04] border border-border/80 dark:border-white/10 rounded-full px-2 py-0.5 backdrop-blur-md shrink-0">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-[11px] lg:text-xs font-medium text-muted-foreground hover:text-foreground px-2.5 lg:px-3 py-1 rounded-full transition-all hover:bg-background/80 hover:text-pink-600 dark:hover:text-pink-400 cursor-pointer whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions with Theme Toggle, Status Badge & Contact Button */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <ThemeToggle />

          <Badge
            variant="outline"
            className="hidden xl:inline-flex gap-1.5 py-0.5 px-2.5 text-[10px] font-mono border-pink-500/40 bg-pink-500/10 text-pink-600 dark:text-pink-400 whitespace-nowrap"
          >
            <span className="size-1.5 rounded-full bg-pink-500 animate-pulse" />
            Open for SWE & AI Roles
          </Badge>

          <Button
            asChild
            size="sm"
            className="rounded-full text-xs gap-1.5 h-8 px-3.5 font-semibold bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white shadow-[0_0_15px_rgba(255,42,133,0.3)] cursor-pointer whitespace-nowrap"
          >
            <a href={`mailto:${RESUME_DATA.email}`}>
              <Mail className="size-3" />
              Contact
            </a>
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-foreground hover:bg-muted transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="size-5 text-pink-500" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background/95 backdrop-blur-2xl px-5 py-5 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-border">
            <span className="text-xs font-mono text-muted-foreground">
              {RESUME_DATA.title} • {RESUME_DATA.subtitle}
            </span>
            <Badge
              variant="outline"
              className="gap-1.5 text-[10px] border-pink-500/40 text-pink-600 dark:text-pink-400 bg-pink-500/10"
            >
              <span className="size-1.5 rounded-full bg-pink-500" />
              Open for SWE & AI Roles
            </Badge>
          </div>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                setMobileMenuOpen(false)
                handleNavClick(e, item.href)
              }}
              className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-pink-500 hover:bg-muted/50 rounded-lg transition-colors cursor-pointer"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <Button asChild size="sm" variant="outline" className="w-full justify-center border-pink-500/40 text-foreground hover:bg-pink-500/10 cursor-pointer">
              <a href="/api/resume" download="Mandira_K_Shetty_Resume.pdf">
                Download Resume PDF
              </a>
            </Button>
            <Button asChild size="sm" className="w-full justify-center bg-gradient-to-r from-pink-500 to-rose-500 text-white font-medium cursor-pointer">
              <a href={`mailto:${RESUME_DATA.email}`}>
                <Mail className="size-4 mr-2" />
                {RESUME_DATA.email}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
