"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { RESUME_DATA } from "@/data/resume"
import {
  Brain,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  Layers,
  Sparkles,
  Terminal,
  Wrench,
  Zap,
} from "lucide-react"

export function SkillsSection() {
  const { languagesHorizontal, verticalBoxes } = RESUME_DATA.skills

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <Badge
            variant="outline"
            className="font-mono text-xs mb-3 border-pink-500/30 bg-pink-500/10 text-pink-600 dark:text-pink-400 px-3 py-1"
          >
            02 / Technical Proficiencies
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Skills & <span className="text-gradient-pink">Engineering Stack</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mt-2 max-w-xl">
            Core Computer Science foundations paired with modern full-stack development,
            database performance tuning, and applied AI systems.
          </p>
        </div>

        {/* 1. HORIZONTAL RAIL: Programming Languages */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-pink-600 dark:text-pink-400 font-bold flex items-center gap-2">
              <Code2 className="size-4" /> Core Programming Languages
            </span>
            <span className="text-xs text-muted-foreground font-mono">Horizontal Stack</span>
          </div>

          {/* Horizontal Grid / Rail */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {languagesHorizontal.map((lang, idx) => (
              <div
                key={idx}
                className="neon-card p-3.5 sm:p-4 rounded-xl flex flex-col items-center text-center justify-between group hover:border-pink-500/50 hover:scale-[1.02] transition-all duration-200"
              >
                <div className="size-11 rounded-xl bg-muted/30 border border-border flex items-center justify-center p-2 mb-2 group-hover:scale-110 group-hover:border-pink-500/40 transition-all">
                  {lang.icon.startsWith("http") ? (
                    <img
                      src={lang.icon}
                      alt={`${lang.name} icon`}
                      className="size-6 object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-xl">{lang.icon}</span>
                  )}
                </div>
                <span className="font-bold text-xs sm:text-sm text-foreground group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                  {lang.name}
                </span>
                <span className="text-[10px] text-muted-foreground font-mono mt-0.5">
                  {lang.level}
                </span>
                <Badge
                  variant="outline"
                  className="text-[9px] font-mono mt-2 border-pink-500/30 text-pink-600 dark:text-pink-400 px-2 py-0"
                >
                  {lang.tag}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* 2. VERTICAL STRUCTURED BOXES: Full-Stack, AI/ML, Cloud/DB, DevOps/CSE */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-pink-600 dark:text-pink-400 font-bold flex items-center gap-2">
              <Layers className="size-4" /> Specialized Engineering Domains
            </span>
            <span className="text-xs text-muted-foreground font-mono">Vertical Architecture</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {verticalBoxes.map((box, bIdx) => (
              <div
                key={bIdx}
                className="neon-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top border accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r ${box.badgeColor} opacity-75 group-hover:opacity-100 transition-opacity`}
                />

                <div>
                  {/* Box Header */}
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="size-8 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-500">
                      {box.icon === "terminal" ? (
                        <Terminal className="size-4" />
                      ) : box.icon === "brain" ? (
                        <Brain className="size-4" />
                      ) : box.icon === "database" ? (
                        <Database className="size-4" />
                      ) : (
                        <Wrench className="size-4" />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-bold text-sm sm:text-base text-foreground group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors leading-tight">
                        {box.title}
                      </h3>
                    </div>
                  </div>
                  <span className="text-[11px] text-muted-foreground font-mono block mb-4">
                    {box.subtitle}
                  </span>

                  {/* Vertical Items List */}
                  <div className="space-y-2.5">
                    {box.items.map((item, iIdx) => (
                      <div
                        key={iIdx}
                        className="p-2.5 rounded-xl border border-border bg-card/40 hover:border-pink-500/40 hover:bg-pink-500/5 transition-all flex flex-col"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-foreground">
                            {item.name}
                          </span>
                        </div>
                        <span className="text-[11px] text-muted-foreground font-mono mt-0.5 leading-tight">
                          {item.detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Box Footer Pill */}
                <div className="pt-4 mt-4 border-t border-border flex items-center justify-between">
                  <span className="text-[10px] font-mono text-muted-foreground">
                    {box.items.length} Production Skills
                  </span>
                  <Sparkles className="size-3 text-pink-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
