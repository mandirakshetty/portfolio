"use client"

import * as React from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { RESUME_DATA } from "@/data/resume"
import {
  Award,
  Globe2,
  Leaf,
  Sparkles,
  Users2,
  Zap,
} from "lucide-react"

export function ResearchLeadership() {
  const { research, leadership } = RESUME_DATA

  return (
    <section id="research" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <Badge
            variant="outline"
            className="font-mono text-xs mb-3 border-pink-500/30 bg-pink-500/10 text-pink-600 dark:text-pink-400 px-3 py-1"
          >
            04 / Research & Entrepreneurial Impact
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            International Research & <span className="text-gradient-pink">Campus Leadership</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mt-2 max-w-2xl">
            Bridging machine learning route optimization on the world stage with leading
            the flagship 300+ member university entrepreneurship society.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Research Paper Feature (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="neon-card rounded-2xl p-6 sm:p-8 flex-1 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-pink-500">
                <Globe2 className="size-48" />
              </div>

              {/* Top Accent */}
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-emerald-500 via-pink-500 to-violet-500 opacity-70 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center gap-2 flex-wrap mb-3">
                  <Badge
                    variant="outline"
                    className="border-emerald-500/40 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 font-mono text-xs"
                  >
                    Peer-Reviewed International Conference
                  </Badge>
                  <Badge variant="outline" className="font-mono text-xs border-border text-muted-foreground">
                    {research.presentationVenue}
                  </Badge>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-snug group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                  {research.title}
                </h3>

                <div className="flex items-center gap-2 pt-2 text-xs font-mono text-pink-600 dark:text-pink-400 font-bold">
                  <Award className="size-4 text-amber-500 shrink-0" />
                  <span>{research.conference}</span>
                </div>

                {/* 40% CO2 Reduction Impact Callout */}
                <div className="my-5 p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 backdrop-blur-md flex items-center justify-between flex-wrap gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-300">
                  <div className="flex items-center gap-2">
                    <Leaf className="size-4 text-emerald-500 shrink-0" />
                    <span className="font-black text-sm text-emerald-600 dark:text-emerald-400">{research.impact}</span>
                  </div>
                  <span className="text-muted-foreground">Peer-reviewed validated benchmark</span>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                  {research.summary}
                </p>

                <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                  {research.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <div className="size-1.5 rounded-full bg-pink-500 mt-2 shrink-0 shadow-[0_0_6px_rgba(255,42,133,0.8)]" />
                      <span className="text-foreground/80">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 border-t border-border flex flex-wrap gap-1.5 mt-6">
                {research.technologies.map((t, idx) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className="text-[11px] font-mono px-2.5 py-0.5 border-border bg-muted/30 text-muted-foreground"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Leadership & Cartoon Character Spotlight (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="neon-card rounded-2xl p-6 sm:p-8 flex-1 flex flex-col justify-between relative overflow-hidden group">
              {/* Top Accent */}
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-pink-500 to-rose-500 opacity-70 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant="outline" className="font-mono text-xs border-pink-500/30 text-pink-600 dark:text-pink-400 bg-pink-500/10">
                    Flagship Club Leadership
                  </Badge>
                  <span className="text-xs font-mono text-muted-foreground">
                    {leadership.period}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  {leadership.role}, {leadership.organization}
                </h3>
                <p className="text-xs font-mono text-pink-600 dark:text-pink-400 font-semibold mt-1">
                  {leadership.scale}
                </p>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed my-4">
                  {leadership.summary}
                </p>

                <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                  {leadership.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <Users2 className="size-4 text-pink-500 mt-1 shrink-0" />
                      <span className="text-foreground/80">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Character Spotlight Card - Smooth rounded layout without harsh boxes */}
              <div className="mt-6 p-4 rounded-2xl border border-pink-500/30 bg-gradient-to-r from-pink-500/10 via-rose-500/5 to-transparent backdrop-blur-md flex items-center gap-4 relative overflow-visible">
                <div className="relative size-24 shrink-0 sticker-pop select-none">
                  <Image
                    src="/images/sticker_avatar.png"
                    alt="Mandira K Shetty Sticker"
                    fill
                    className="object-contain"
                    sizes="96px"
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-sm text-foreground">
                      Mandira K Shetty
                    </span>
                    <Sparkles className="size-3.5 text-pink-500 fill-pink-500" />
                  </div>
                  <span className="text-[11px] text-pink-600 dark:text-pink-400 font-mono mt-0.5">
                    President & Software Engineer
                  </span>
                  <p className="text-[11px] text-muted-foreground mt-1 leading-snug">
                    Fostering campus engineering excellence, hackathons & innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
