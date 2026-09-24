"use client"

import * as React from "react"
import Image from "next/image"
import gsap from "gsap"
import {
  ArrowDown,
  Check,
  Code2,
  Copy,
  Database,
  MapPin,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { RESUME_DATA } from "@/data/resume"

export function Hero() {
  const heroRef = React.useRef<HTMLElement>(null)
  const avatarWrapperRef = React.useRef<HTMLDivElement>(null)
  const avatarImageRef = React.useRef<HTMLDivElement>(null)
  const statVal0 = React.useRef<HTMLSpanElement>(null)
  const statVal1 = React.useRef<HTMLSpanElement>(null)
  const statVal2 = React.useRef<HTMLSpanElement>(null)
  const statVal3 = React.useRef<HTMLSpanElement>(null)
  const [copiedEmail, setCopiedEmail] = React.useState(false)

  // Fix hash jumping on reload so page NEVER jumps or scrolls away!
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual"
      }
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname)
      }
      window.scrollTo({ top: 0, behavior: "instant" })
      const t = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "instant" })
      }, 50)
      return () => clearTimeout(t)
    }
  }, [])

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.fromTo(
        ".gsap-hero-pill",
        { opacity: 0, y: -8 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, clearProps: "transform" }
      )
        .fromTo(
          ".gsap-hero-title",
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.55, stagger: 0.08, clearProps: "transform" },
          "-=0.15"
        )
        .fromTo(
          ".gsap-hero-copy",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.45, clearProps: "transform" },
          "-=0.2"
        )
        .fromTo(
          ".gsap-hero-cta",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, clearProps: "transform" },
          "-=0.2"
        )
        .fromTo(
          ".gsap-stat-card",
          { opacity: 0, y: 16, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.06, clearProps: "transform" },
          "-=0.2"
        )
        .fromTo(
          avatarWrapperRef.current,
          { opacity: 0, scale: 0.92 },
          { opacity: 1, scale: 1, duration: 0.65, ease: "back.out(1.2)" },
          "-=0.4"
        )
        // Animate outer wrapper so inner rotation angle is NEVER overwritten to 0deg!
        .fromTo(
          ".gsap-float-badge",
          { opacity: 0, scale: 0.75 },
          { opacity: 1, scale: 1, duration: 0.45, stagger: 0.08, ease: "back.out(1.6)" },
          "-=0.3"
        )

      // Animated counters for stats
      const statsObj = { cgpa: 0, internships: 0, research: 0, latency: 0 }
      gsap.to(statsObj, {
        cgpa: 9.29,
        internships: 3,
        research: 1,
        latency: 87,
        duration: 1.5,
        ease: "power2.out",
        onUpdate: () => {
          if (statVal0.current) statVal0.current.innerText = statsObj.cgpa.toFixed(2)
          if (statVal1.current) statVal1.current.innerText = Math.round(statsObj.internships).toString()
          if (statVal2.current) statVal2.current.innerText = Math.round(statsObj.research).toString()
          if (statVal3.current) statVal3.current.innerText = Math.round(statsObj.latency).toString()
        },
      })

      // Gentle floating animation on avatar (NO 360 spin!)
      if (avatarImageRef.current) {
        gsap.to(avatarImageRef.current, {
          y: -6,
          duration: 2.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        })
      }

      // Subtle float on background decorative particles
      gsap.to(".gsap-bg-dot", {
        y: "-=10",
        x: "+=5",
        duration: 4.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5,
      })
    }, heroRef)

    // Micro parallax tilt (stable max 2 deg, NO 360 spin)
    const handleMouseMove = (e: MouseEvent) => {
      if (!avatarWrapperRef.current) return
      const rect = avatarWrapperRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const deltaX = Math.max(-1, Math.min(1, (e.clientX - centerX) / (rect.width / 2)))
      const deltaY = Math.max(-1, Math.min(1, (e.clientY - centerY) / (rect.height / 2)))

      gsap.to(avatarWrapperRef.current, {
        rotateY: deltaX * 2.2,
        rotateX: -deltaY * 2.2,
        transformPerspective: 1000,
        ease: "power1.out",
        duration: 0.4,
      })
    }

    const resetTilt = () => {
      if (!avatarWrapperRef.current) return
      gsap.to(avatarWrapperRef.current, {
        rotateY: 0,
        rotateX: 0,
        ease: "power2.out",
        duration: 0.4,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", resetTilt)

    return () => {
      ctx.revert()
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", resetTilt)
    }
  }, [])

  const copyEmail = async () => {
    await navigator.clipboard.writeText(RESUME_DATA.email)
    setCopiedEmail(true)
    window.setTimeout(() => setCopiedEmail(false), 2000)
  }

  const scrollToExperience = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
  }

  const linkedinUrl = RESUME_DATA.linkedin || RESUME_DATA.social?.linkedin || "https://linkedin.com/in/mandirakshetty"
  const githubUrl = RESUME_DATA.github || RESUME_DATA.social?.github || "https://github.com/mandirakshetty"

  return (
    <TooltipProvider>
      <section
        id="about"
        ref={heroRef}
        className="relative overflow-hidden pt-16 sm:pt-20 pb-6 sm:pb-8"
      >
        {/* Subtle Minimalist Background with Glowing Dots & Ambient Aura */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden select-none">
          {/* Soft ambient aura glows */}
          <div className="absolute left-6 top-16 size-[380px] rounded-full bg-pink-500/10 blur-[110px] dark:opacity-45 opacity-25" />
          <div className="absolute right-[10%] top-[15%] size-[480px] rounded-full bg-gradient-to-tr from-pink-500/20 via-rose-500/12 to-violet-500/15 blur-[120px] dark:opacity-65 opacity-35" />
          <div className="absolute bottom-10 right-[25%] size-[320px] rounded-full bg-violet-500/10 blur-[90px] dark:opacity-35 opacity-20" />

          {/* Minimalist Glowing Dots in random places with subtle luminous pulse */}
          <div className="gsap-bg-dot absolute top-[16%] left-[8%] size-2.5 rounded-full bg-pink-500/40 shadow-[0_0_12px_rgba(255,42,133,0.7)]" />
          <div className="gsap-bg-dot absolute top-[30%] left-[44%] size-2 rounded-full bg-violet-500/40 shadow-[0_0_10px_rgba(168,85,247,0.6)]" />
          <div className="gsap-bg-dot absolute top-[14%] right-[22%] size-2.5 rounded-full bg-pink-500/35 shadow-[0_0_12px_rgba(255,42,133,0.6)]" />
          <div className="gsap-bg-dot absolute bottom-[28%] left-[16%] size-2 rounded-full bg-pink-500/30 shadow-[0_0_8px_rgba(255,42,133,0.5)]" />
          <div className="gsap-bg-dot absolute bottom-[24%] right-[36%] size-2.5 rounded-full bg-violet-500/35 shadow-[0_0_12px_rgba(168,85,247,0.6)]" />
          <div className="gsap-bg-dot absolute top-[64%] left-[4%] size-2 rounded-full bg-pink-500/30 shadow-[0_0_8px_rgba(255,42,133,0.4)]" />
          <div className="gsap-bg-dot absolute top-[76%] right-[8%] size-2.5 rounded-full bg-pink-500/35 shadow-[0_0_10px_rgba(255,42,133,0.5)]" />

          {/* Subtle floating tech accents for texture without clutter */}
          <div className="gsap-bg-dot absolute top-24 left-[22%] font-mono text-sm text-pink-500/20 dark:text-pink-400/15">
            +
          </div>
          <div className="gsap-bg-dot absolute top-36 left-[50%] font-mono text-xs text-violet-500/20 dark:text-violet-400/15">
            {"{ }"}
          </div>
          <div className="gsap-bg-dot absolute top-20 right-[32%] font-mono text-xs text-pink-500/20 dark:text-pink-400/15">
            // systems
          </div>
          <div className="gsap-bg-dot absolute bottom-20 left-[30%] font-mono text-xs text-pink-500/20 dark:text-pink-400/15">
            {"< />"}
          </div>

          {/* Masked engineering dot matrix grid */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_0)] bg-[size:30px_30px] opacity-45 dark:opacity-20 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,#000_65%,transparent_100%)]" />
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 w-full">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10 mb-6 sm:mb-8">
            {/* Left Content Column (7 cols) - Spacious and beautifully proportioned */}
            <div className="z-10 lg:col-span-7 flex flex-col items-start text-left">
              {/* Status Bar */}
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <Badge
                  variant="outline"
                  className="gsap-hero-pill gap-1.5 border-pink-500/35 bg-pink-500/5 px-2.5 py-1 font-mono text-[11px] text-foreground"
                >
                  <MapPin className="size-3 text-pink-500" />
                  {RESUME_DATA.location}
                </Badge>
                <Badge
                  variant="outline"
                  className="gsap-hero-pill gap-1.5 border-pink-500/40 bg-pink-500/10 px-2.5 py-1 font-mono text-[11px] text-pink-600 dark:text-pink-400"
                >
                  <span className="size-1.5 rounded-full bg-pink-500 animate-pulse" />
                  Open for SWE & AI/ML roles
                </Badge>
                <Badge
                  variant="outline"
                  className="gsap-hero-pill gap-1.5 border-border bg-muted/40 px-2.5 py-1 font-mono text-[11px] text-muted-foreground hidden sm:inline-flex"
                >
                  <Code2 className="size-3 text-pink-500" />
                  React • FastAPI • PostgreSQL
                </Badge>
              </div>

              {/* Headline */}
              <div className="mb-3 space-y-1">
                <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.12] tracking-tight text-foreground">
                  <span className="gsap-hero-title block">{RESUME_DATA.title}</span>
                  <span className="gsap-hero-title block text-gradient-pink">{RESUME_DATA.subtitle}</span>
                </h1>
                <p className="gsap-hero-title text-sm sm:text-base lg:text-lg font-medium text-muted-foreground pt-0.5">
                  {RESUME_DATA.tagline}
                </p>
              </div>

              {/* Narrative Description - Balanced & comfortable */}
              <p className="gsap-hero-copy max-w-xl text-xs sm:text-[13.5px] leading-relaxed text-muted-foreground mb-4 font-normal">
                {RESUME_DATA.summary}
              </p>

              {/* Action Buttons Row: View Experience -> Email Copy -> LinkedIn -> GitHub (1 Clean Line) */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 mb-2 w-full sm:w-auto">
                {/* 1. View Industry Experience Button */}
                <Button
                  type="button"
                  onClick={scrollToExperience}
                  size="sm"
                  className="gsap-hero-cta neon-glow-button h-9.5 rounded-xl px-3.5 text-xs font-semibold text-white shrink-0 cursor-pointer"
                >
                  <Sparkles className="mr-1.5 size-3.5" />
                  View Industry Experience
                  <ArrowDown className="ml-1.5 size-3.5" />
                </Button>

                {/* 2. Email Address with Copy Functionality */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={copyEmail}
                      size="sm"
                      className="gsap-hero-cta h-9.5 rounded-xl border-border bg-card hover:border-pink-500/40 hover:bg-pink-500/10 px-3 text-xs font-mono text-foreground transition-colors shrink-0 cursor-pointer"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="mr-1.5 size-3.5 text-pink-500" />
                          <span className="text-pink-500 font-semibold">Email Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="mr-1.5 size-3.5 text-pink-500" />
                          <span>{RESUME_DATA.email}</span>
                        </>
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Click to copy email address</TooltipContent>
                </Tooltip>

                {/* 3. LinkedIn Profile Button */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="gsap-hero-cta h-9.5 rounded-xl border-border bg-card hover:border-pink-500/40 hover:text-pink-500 px-3 text-xs gap-1.5 text-foreground transition-colors shrink-0 cursor-pointer"
                    >
                      <a
                        href={linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                      >
                        <LinkedinIcon className="size-3.5 text-pink-500" />
                        <span>LinkedIn</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>View LinkedIn Profile</TooltipContent>
                </Tooltip>

                {/* 4. GitHub Profile Button */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="gsap-hero-cta h-9.5 rounded-xl border-border bg-card hover:border-pink-500/40 hover:text-pink-500 px-3 text-xs gap-1.5 text-foreground transition-colors shrink-0 cursor-pointer"
                    >
                      <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                      >
                        <GithubIcon className="size-3.5 text-pink-500" />
                        <span>GitHub</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>View GitHub Profile</TooltipContent>
                </Tooltip>
              </div>
            </div>

            {/* Right Large Cartoon Sticker Avatar Showcase with Angled Badges */}
            <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
              <div
                ref={avatarWrapperRef}
                className="relative flex items-center justify-center p-2 transition-transform duration-200"
              >
                {/* Radial Soft Pink Glow behind avatar */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500/25 via-rose-500/18 to-violet-500/18 blur-3xl pointer-events-none" />

                {/* Die-Cut Sticker Avatar - Spacious and prominent */}
                <div
                  ref={avatarImageRef}
                  className="relative z-20 sticker-pop select-none"
                >
                  <div className="relative h-60 w-60 sm:h-72 sm:w-72 lg:h-[350px] lg:w-[350px]">
                    <Image
                      src="/images/sticker_avatar.png"
                      alt="Mandira K Shetty portfolio avatar"
                      fill
                      priority
                      className="object-contain drop-shadow-xl"
                      sizes="(max-width: 768px) 240px, (max-width: 1024px) 288px, 350px"
                    />
                  </div>
                </div>

                {/* Badge 1 - Top Right: Sub-100ms Inference (ANGLED -5deg) */}
                <div className="gsap-float-badge absolute top-3 -right-2 sm:right-1 z-30 pointer-events-auto">
                  <div
                    style={{ transform: "rotate(-5deg)" }}
                    className="rounded-2xl border border-pink-500/45 bg-card/95 dark:bg-[#16161e]/95 px-3 py-1.5 shadow-[0_8px_25px_rgba(255,42,133,0.22)] backdrop-blur-xl flex items-center gap-2 hover:rotate-0 transition-transform duration-200 cursor-default"
                  >
                    <div className="rounded-lg bg-pink-500/15 p-1 text-pink-500">
                      <Zap className="size-3 fill-pink-500" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-mono text-[10px] font-bold text-foreground">
                        Sub-100ms Inference
                      </span>
                      <span className="font-mono text-[8.5px] text-pink-500 dark:text-pink-400">
                        XGBoost • Isolation Forest
                      </span>
                    </div>
                  </div>
                </div>

                {/* Badge 2 - Middle Right: 9.29 CGPA Star Badge (ANGLED +10deg) */}
                <div className="gsap-float-badge absolute top-[44%] -right-4 sm:-right-2 z-30 pointer-events-auto">
                  <div
                    style={{ transform: "rotate(10deg)" }}
                    className="rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-3.5 py-1 text-[9.5px] font-mono font-bold uppercase tracking-wider text-white shadow-[0_4px_18px_rgba(255,42,133,0.4)] hover:rotate-0 transition-transform duration-200 cursor-default"
                  >
                    ⭐ 9.29 CGPA
                  </div>
                </div>

                {/* Badge 3 - Middle Left: 87% Query Latency Cut (ANGLED -7deg) */}
                <div className="gsap-float-badge absolute top-[58%] -left-4 sm:-left-6 z-30 pointer-events-auto">
                  <div
                    style={{ transform: "rotate(-7deg)" }}
                    className="rounded-2xl border border-pink-500/40 bg-card/95 dark:bg-[#16161e]/95 px-3 py-1.5 shadow-[0_8px_25px_rgba(255,42,133,0.2)] backdrop-blur-xl flex items-center gap-2 hover:rotate-0 transition-transform duration-200 cursor-default"
                  >
                    <div className="rounded-lg bg-pink-500/15 p-1 text-pink-500">
                      <Database className="size-3 text-pink-500" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-mono text-[10px] font-bold text-foreground">
                        87% Query Latency Cut
                      </span>
                      <span className="font-mono text-[8.5px] text-pink-500 dark:text-pink-400">
                        15s down to 2s
                      </span>
                    </div>
                  </div>
                </div>

                {/* Badge 4 - Bottom: RAG Architecture (ANGLED +5deg) */}
                <div className="gsap-float-badge absolute bottom-2 right-2 sm:right-6 z-30 pointer-events-auto">
                  <div
                    style={{ transform: "rotate(5deg)" }}
                    className="rounded-2xl border border-border dark:border-violet-500/40 bg-card/95 dark:bg-[#16161e]/95 px-3 py-1.5 shadow-[0_8px_25px_rgba(0,0,0,0.14)] backdrop-blur-xl flex items-center gap-2 hover:rotate-0 transition-transform duration-200 cursor-default"
                  >
                    <div className="rounded-lg bg-violet-500/15 p-1 text-violet-500">
                      <Terminal className="size-3" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-mono text-[10px] font-bold text-foreground">
                        RAG Log Analysis
                      </span>
                      <span className="font-mono text-[8.5px] text-violet-500 dark:text-violet-400">
                        FAISS • Sentence Transformers
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Statistics Cards Row (Sleek, compact & completely visible) */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4 w-full">
            {RESUME_DATA.stats.map((stat, index) => (
              <div
                key={stat.label}
                className="gsap-stat-card rounded-xl border border-border/80 bg-card/80 dark:bg-card/70 p-2.5 sm:p-3 shadow-xs backdrop-blur-md flex flex-col justify-between hover:border-pink-500/40 hover:shadow-[0_4px_20px_rgba(255,42,133,0.12)] transition-all duration-200 group"
              >
                <div>
                  <div className="flex items-baseline gap-1">
                    <span
                      ref={
                        index === 0
                          ? statVal0
                          : index === 1
                          ? statVal1
                          : index === 2
                          ? statVal2
                          : statVal3
                      }
                      className="font-mono text-lg sm:text-xl font-black text-foreground group-hover:text-pink-500 transition-colors"
                    >
                      {stat.value}
                    </span>
                    {stat.suffix && (
                      <span className="font-mono text-[11px] font-bold text-pink-500">
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                  <span className="mt-0.5 block text-[11px] sm:text-xs font-semibold text-foreground/85">
                    {stat.label}
                  </span>
                </div>
                <span className="mt-1 block font-mono text-[9.5px] sm:text-[10px] font-semibold text-pink-500">
                  {stat.highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </TooltipProvider>
  )
}
