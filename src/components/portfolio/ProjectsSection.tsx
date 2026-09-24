"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Project, RESUME_DATA } from "@/data/resume"
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react"
import { GithubIcon } from "@/components/icons"

const hasRealProfileLink = (url?: string) => Boolean(url && /^https?:\/\//.test(url))

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null)

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <Badge
            variant="outline"
            className="font-mono text-xs mb-3 border-pink-500/30 bg-pink-500/10 text-pink-600 dark:text-pink-400 px-3 py-1"
          >
            03 / Signature Engineering Projects
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Featured Systems & <span className="text-gradient-pink">Architectures</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mt-2 max-w-2xl">
            Production-grade banking authentication with sub-100ms inference, explainable AI attribution,
            and high-dimensional clinical biomarker progression modeling.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {RESUME_DATA.projects.map((project) => (
            <div
              key={project.id}
              className="neon-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between group overflow-hidden"
            >
              {/* Top Accent */}
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-pink-500 via-rose-500 to-violet-500 opacity-70 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge
                    variant="outline"
                    className="text-[11px] font-mono border-pink-500/30 bg-pink-500/10 text-pink-600 dark:text-pink-400"
                  >
                    {project.category}
                  </Badge>
                  <span className="text-xs font-mono text-muted-foreground">
                    {project.period}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-pink-600 dark:text-pink-400 mt-1 font-semibold">
                  {project.subtitle}
                </p>

                {/* Key Performance Metric Highlight */}
                <div className="my-4 p-3 rounded-xl border border-pink-500/25 bg-pink-500/5 flex items-center gap-2 text-xs font-mono text-foreground font-semibold">
                  <Zap className="size-4 text-pink-500 shrink-0 fill-pink-500" />
                  <span>{project.metrics}</span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.summary}
                </p>

                {/* Pipeline Stages Mini Flow */}
                <div className="mb-4">
                  <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider block mb-2 font-semibold">
                    Inference & Data Pipeline Architecture:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {project.pipelineStages.map((ps, psIdx) => (
                      <div
                        key={psIdx}
                        className="p-2 rounded-lg bg-muted/40 border border-border flex flex-col"
                      >
                        <span className="text-[10px] font-mono font-bold text-pink-600 dark:text-pink-400">
                          0{psIdx + 1}. {ps.stage}
                        </span>
                        <span className="text-[9px] text-muted-foreground font-mono mt-0.5 truncate">
                          {ps.tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Achievements */}
                <ul className="space-y-2.5 my-4 text-xs sm:text-sm text-muted-foreground">
                  {project.keyAchievements.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 leading-relaxed">
                      <div className="size-1.5 rounded-full bg-pink-500 mt-2 shrink-0 shadow-[0_0_6px_rgba(255,42,133,0.8)]" />
                      <span className="text-foreground/90">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Technology Pills */}
                <div className="pt-4 border-t border-border flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech, tIdx) => (
                    <Badge
                      key={tIdx}
                      variant="outline"
                      className="text-[11px] font-mono px-2.5 py-0.5 border-border bg-muted/30 text-muted-foreground hover:text-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-border flex items-center justify-between">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs font-semibold gap-1.5 rounded-xl border-pink-500/30 bg-pink-500/10 text-pink-600 dark:text-pink-300 hover:bg-pink-500/20 hover:border-pink-500/50 cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      <Layers className="size-3.5" />
                      Deep Dive Architecture
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl bg-card border-border backdrop-blur-2xl">
                    <DialogHeader>
                      <div className="flex items-center gap-2 mb-1.5">
                        <Badge variant="outline" className="font-mono text-xs border-pink-500/30 text-pink-600 dark:text-pink-400">
                          {project.category}
                        </Badge>
                        <span className="text-xs font-mono text-muted-foreground">
                          {project.period}
                        </span>
                      </div>
                      <DialogTitle className="text-xl sm:text-2xl font-bold text-foreground">
                        {project.title}
                      </DialogTitle>
                      <DialogDescription className="text-xs sm:text-sm text-pink-600 dark:text-pink-400 font-mono">
                        {project.subtitle}
                      </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-4 my-3">
                      {/* Metric Callout */}
                      <div className="p-3.5 rounded-xl border border-pink-500/30 bg-pink-500/10">
                        <span className="text-[10px] font-mono uppercase text-pink-600 dark:text-pink-400 block mb-1 font-bold">
                          System Performance Metrics
                        </span>
                        <span className="text-sm sm:text-base font-bold text-foreground font-mono">
                          {project.metrics}
                        </span>
                      </div>

                      {/* In-Depth Architecture Points */}
                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-wider text-pink-600 dark:text-pink-400 font-bold mb-2.5">
                          Engineering Architecture & Pipeline
                        </h4>
                        <div className="space-y-2.5">
                          {project.architecturePoints.map((point, aIdx) => (
                            <div
                              key={aIdx}
                              className="p-3.5 rounded-xl border border-border bg-muted/30 text-xs sm:text-sm text-foreground flex items-start gap-3"
                            >
                              <CheckCircle2 className="size-4 text-pink-500 shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Detailed Pipeline Breakdown */}
                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-wider text-pink-600 dark:text-pink-400 font-bold mb-2">
                          Pipeline Stage Details
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {project.pipelineStages.map((stg, sIdx) => (
                            <div key={sIdx} className="p-3 rounded-lg border border-border bg-muted/20">
                              <div className="flex items-center justify-between text-xs font-bold text-foreground mb-1">
                                <span>{stg.stage}</span>
                                <Badge variant="outline" className="text-[10px] font-mono border-pink-500/30 text-pink-600 dark:text-pink-400">
                                  {stg.tech}
                                </Badge>
                              </div>
                              <p className="text-[11px] text-muted-foreground leading-relaxed">
                                {stg.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                {hasRealProfileLink(project.githubUrl) ? (
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="text-xs font-mono text-muted-foreground hover:text-pink-600 dark:hover:text-pink-400 gap-1.5"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon className="size-3.5" />
                      Source
                      <ArrowUpRight className="size-3" />
                    </a>
                  </Button>
                ) : (
                  <span className="text-xs font-mono text-muted-foreground">Source available on request</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
