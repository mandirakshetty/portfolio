"use client"

import * as React from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { RESUME_DATA } from "@/data/resume"
import { Calendar, MapPin, Sparkles, Zap } from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header as requested: Heading as 'Experience' itself + subheadings */}
        <div className="flex flex-col items-start mb-14">
          <Badge
            variant="outline"
            className="font-mono text-xs mb-3 border-pink-500/30 bg-pink-500/10 text-pink-600 dark:text-pink-400 px-3 py-1"
          >
            01 / Professional Track Record
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Experience
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mt-2 font-medium">
            Industry Engineering Internships & Production Systems
          </p>
        </div>

        {/* Continuous Flow Timeline with Connected Spine */}
        <div className="relative pl-0 md:pl-6 space-y-8">
          {/* Subtle connected vertical track line */}
          <div className="hidden md:block absolute left-[2.25rem] top-8 bottom-8 w-[2px] bg-gradient-to-b from-pink-500/40 via-violet-500/20 to-transparent -z-10" />

          {RESUME_DATA.experiences.map((exp, idx) => (
            <div
              key={idx}
              className="neon-card rounded-2xl p-6 sm:p-8 relative group transition-all duration-300 hover:shadow-lg"
            >
              {/* Card top gradient indicator */}
              <div
                className={`absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r ${exp.badgeColor} rounded-t-2xl opacity-75 group-hover:opacity-100 transition-opacity`}
              />

              {/* Header with Company Logo, Titles, Location & Metrics */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-border">
                <div className="flex items-start sm:items-center gap-4">
                  {/* Company Logo Display */}
                  <div className="size-14 sm:size-16 rounded-xl border border-border bg-white p-2.5 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    <Image
                      src={exp.companyLogo}
                      alt={`${exp.company} Logo`}
                      width={56}
                      height={56}
                      className="object-contain max-h-full max-w-full"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                        {exp.role}
                      </h3>
                      <span className="text-muted-foreground text-sm font-mono">@</span>
                      <span className="text-lg sm:text-xl font-semibold text-foreground">
                        {exp.company}
                      </span>
                      <Badge
                        variant="outline"
                        className="text-[11px] font-mono border-border bg-muted/30 text-muted-foreground"
                      >
                        {exp.type}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="size-3.5 text-pink-500" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="size-3.5 text-pink-500" />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Impact Metrics Badges */}
                {exp.metrics && (
                  <div className="flex items-center gap-2 flex-wrap">
                    {exp.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className="flex flex-col p-2 px-3 rounded-xl border border-pink-500/25 bg-pink-500/5 group-hover:border-pink-500/40 transition-colors"
                      >
                        <div className="flex items-center gap-1.5 text-pink-600 dark:text-pink-400 font-mono text-xs font-bold">
                          <Zap className="size-3 fill-pink-500" />
                          <span>{metric.value}</span>
                        </div>
                        <span className="text-[10px] text-muted-foreground font-mono mt-0.5">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Narrative Impact */}
              <div className="pt-4 pb-1">
                <p className="text-sm sm:text-base text-foreground/90 font-medium leading-relaxed">
                  {exp.impactNarrative}
                </p>
              </div>

              {/* Highlights List */}
              <ul className="space-y-2.5 my-4 text-xs sm:text-sm text-muted-foreground">
                {exp.highlights.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5 leading-relaxed">
                    <div className="size-2 rounded-full bg-pink-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(255,42,133,0.6)]" />
                    <span className="text-foreground/80">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Pills */}
              <div className="pt-4 border-t border-border flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-mono text-pink-600 dark:text-pink-400 font-semibold mr-1 flex items-center gap-1">
                  <Sparkles className="size-3" /> Tech Stack:
                </span>
                {exp.technologies.map((tech, tIdx) => (
                  <Badge
                    key={tIdx}
                    variant="outline"
                    className="text-[11px] font-mono px-2.5 py-0.5 border-border bg-muted/30 text-muted-foreground hover:text-foreground hover:border-pink-500/40 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
