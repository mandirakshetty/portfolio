"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { RESUME_DATA } from "@/data/resume"
import {
  ArrowUp,
  Check,
  Copy,
  FileDown,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"

const hasRealProfileLink = (url?: string) =>
  Boolean(url && /^https?:\/\//.test(url) && !/^https?:\/\/(www\.)?(github|linkedin)\.com\/?$/.test(url))

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = React.useState(false)
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const copyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(formData.subject)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )
    window.location.href = `mailto:${RESUME_DATA.email}?subject=${subject}&body=${body}`
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const showGithub = hasRealProfileLink(RESUME_DATA.github)
  const showLinkedin = hasRealProfileLink(RESUME_DATA.linkedin)

  return (
    <section id="contact" className="pt-20 pb-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <Badge
            variant="outline"
            className="font-mono text-xs mb-3 border-pink-500/30 bg-pink-500/10 text-pink-600 dark:text-pink-400 px-3 py-1"
          >
            06 / Let&apos;s Connect
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Initiate a <span className="text-gradient-pink">Conversation</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mt-2 max-w-xl">
            Currently open for full-time Software Development Engineer, Full-Stack, and Applied Systems roles.
            Reach out directly via email or use the form below to get in touch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Direct Details Card (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="neon-card rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-foreground mb-1">
                Direct Communication
              </h3>
              <p className="text-xs text-muted-foreground mb-6">
                Best way to reach me is by email.
              </p>

              <div className="space-y-4">
                {/* Email Box */}
                <div className="p-4 rounded-xl border border-border bg-card/40 hover:border-pink-500/40 transition-colors flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="size-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-500 shrink-0">
                      <Mail className="size-4" />
                    </div>
                    <div className="flex flex-col truncate">
                      <span className="text-[10px] font-mono text-pink-600 dark:text-pink-400 uppercase font-semibold">
                        Primary Email
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-foreground truncate">
                        {RESUME_DATA.email}
                      </span>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={copyEmail}
                    className="size-9 p-0 shrink-0 hover:bg-pink-500/15 hover:text-pink-500 cursor-pointer"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="size-4 text-pink-500" />
                    ) : (
                      <Copy className="size-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>

                {/* Location */}
                <div className="p-4 rounded-xl border border-border bg-card/40 flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-muted/40 border border-border flex items-center justify-center text-muted-foreground shrink-0">
                    <MapPin className="size-4 text-pink-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase">
                      Location & Timezone
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-foreground">
                      {RESUME_DATA.location} (IST • UTC+5:30)
                    </span>
                  </div>
                </div>

                {/* Phone / Privacy placeholder */}
                <div className="p-4 rounded-xl border border-border bg-card/40 flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-muted/40 border border-border flex items-center justify-center text-muted-foreground shrink-0">
                    <Phone className="size-4 text-pink-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase">
                      Phone Number
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                      Available upon request (Provided during interview stage)
                    </span>
                  </div>
                </div>

                {/* Verified Privacy Note */}
                <div className="p-3.5 rounded-xl border border-border bg-muted/20 flex items-center gap-2.5 text-xs font-mono text-muted-foreground">
                  <ShieldCheck className="size-4 text-emerald-500 shrink-0" />
                  <span>Available for full-time SWE, backend, and applied AI/ML roles.</span>
                </div>

                {/* Social Profiles & Download Resume in 1 line */}
                <div className="pt-2 flex flex-wrap sm:flex-nowrap items-center gap-2.5">
                  {showLinkedin && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 text-xs gap-1.5 rounded-xl border-border bg-card/60 hover:border-pink-500/40 hover:bg-pink-500/10 text-foreground py-4.5 cursor-pointer"
                    >
                      <a href={RESUME_DATA.linkedin} target="_blank" rel="noopener noreferrer">
                        <LinkedinIcon className="size-3.5 text-pink-500" />
                        LinkedIn
                      </a>
                    </Button>
                  )}
                  {showGithub && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 text-xs gap-1.5 rounded-xl border-border bg-card/60 hover:border-pink-500/40 hover:bg-pink-500/10 text-foreground py-4.5 cursor-pointer"
                    >
                      <a href={RESUME_DATA.github} target="_blank" rel="noopener noreferrer">
                        <GithubIcon className="size-3.5 text-pink-500" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 text-xs gap-1.5 rounded-xl border-pink-500/40 bg-pink-500/10 hover:bg-pink-500/20 text-foreground py-4.5 cursor-pointer font-semibold shadow-[0_0_15px_rgba(255,42,133,0.15)]"
                  >
                    <a href="/api/resume" download="Mandira_K_Shetty_Resume.pdf">
                      <FileDown className="size-3.5 text-pink-500" />
                      Resume PDF
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="neon-card rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-foreground mb-1">
                Send an Opportunity or Message
              </h3>
              <p className="text-xs text-muted-foreground mb-6">
                This form opens your email client with the message pre-filled.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono text-muted-foreground uppercase mb-1.5 font-semibold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-border bg-background text-foreground focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-muted-foreground uppercase mb-1.5 font-semibold">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="jane@company.com"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-border bg-background text-foreground focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-muted-foreground uppercase mb-1.5 font-semibold">
                    Subject / Position
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="Software Engineer / Full-Stack Role"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-border bg-background text-foreground focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-muted-foreground uppercase mb-1.5 font-semibold">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Hi Mandira, we were impressed by your backend query optimization at Broadridge..."
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-border bg-background text-foreground focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full text-xs font-bold gap-2 h-11 rounded-xl neon-glow-button text-white cursor-pointer"
                >
                  <Send className="size-4" />
                  Open Email Draft
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2.5">
            <div className="size-6 rounded-lg bg-gradient-to-tr from-pink-500 to-rose-500 text-white font-mono text-[10px] font-bold flex items-center justify-center shadow-[0_0_10px_rgba(255,42,133,0.3)]">
              MS
            </div>
            <span>
              &copy; {new Date().getFullYear()} {RESUME_DATA.name} • {RESUME_DATA.title}
            </span>
          </div>

          <div className="flex items-center gap-5">
            <span className="font-mono text-[11px] text-pink-600 dark:text-pink-400">{RESUME_DATA.location}</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs font-mono hover:text-pink-500 transition-colors p-1 rounded-md cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="size-3.5" />
            </button>
          </div>
        </footer>
      </div>
    </section>
  )
}
