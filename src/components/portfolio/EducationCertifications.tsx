"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { RESUME_DATA } from "@/data/resume"
import { Award, BookOpen, CheckCircle, GraduationCap, MapPin, Shield, Sparkles } from "lucide-react"

export function EducationCertifications() {
  const { education, certifications } = RESUME_DATA

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <Badge
            variant="outline"
            className="font-mono text-xs mb-3 border-pink-500/30 bg-pink-500/10 text-pink-600 dark:text-pink-400 px-3 py-1"
          >
            05 / Academic Pedigree & Credentials
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Academic Excellence & <span className="text-gradient-pink">Industry Credentials</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mt-2 max-w-2xl">
            Rigorous computer science curriculum paired with verified security, cloud, and systems specializations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Education Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="neon-card rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Badge
                    variant="outline"
                    className="font-mono text-xs gap-1.5 border-pink-500/30 bg-pink-500/10 text-pink-600 dark:text-pink-400"
                  >
                    <GraduationCap className="size-3.5" />
                    B.Tech Degree
                  </Badge>
                  <span className="text-xs font-mono text-muted-foreground">
                    {education.period}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                  {education.institution}
                </h3>

                <div className="text-base font-semibold text-pink-600 dark:text-pink-400 mt-1">
                  {education.degree}
                </div>

                <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono mt-2">
                  <MapPin className="size-3.5 text-pink-500" />
                  {education.location}
                </div>

                {/* CGPA Banner */}
                <div className="my-6 p-4 rounded-xl border border-pink-500/30 bg-gradient-to-r from-pink-500/10 via-rose-500/5 to-transparent flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono text-muted-foreground uppercase block">
                      Cumulative GPA
                    </span>
                    <span className="text-[11px] font-mono text-pink-600 dark:text-pink-400 font-bold">
                      {education.distinction}
                    </span>
                  </div>
                  <span className="text-2xl sm:text-3xl font-mono font-black text-foreground text-gradient-pink">
                    {education.cgpa}
                  </span>
                </div>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block mb-2 font-semibold">
                  Core Computer Science Coursework:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {education.coursework.map((course, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="text-xs font-normal border-border bg-muted/30 text-foreground/80 hover:text-pink-600 dark:hover:text-pink-300 hover:border-pink-500/30 transition-colors"
                    >
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certifications (7 cols) */}
          <div className="lg:col-span-7">
            <div className="neon-card rounded-2xl p-6 sm:p-8 h-full">
              <div className="flex items-center justify-between gap-2 mb-2">
                <Badge variant="outline" className="font-mono text-xs border-pink-500/30 text-pink-600 dark:text-pink-400 bg-pink-500/10">
                  Continuous Learning
                </Badge>
                <span className="text-xs font-mono text-muted-foreground">6 Verified Certifications</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                Verified Technical Certifications
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 mb-6">
                Accredited proficiencies from industry leaders in Cybersecurity, Google Cloud AI, and Python.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-border bg-card/40 flex flex-col justify-between hover:border-pink-500/40 hover:bg-pink-500/5 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-2.5 mb-2">
                      {cert.category === "Cybersecurity" ? (
                        <Shield className="size-4 text-pink-500 shrink-0 mt-0.5" />
                      ) : cert.category === "Applied AI & Cloud" ? (
                        <Sparkles className="size-4 text-pink-500 shrink-0 mt-0.5 fill-pink-500" />
                      ) : (
                        <Award className="size-4 text-violet-500 shrink-0 mt-0.5" />
                      )}
                      <span className="text-xs sm:text-sm font-bold text-foreground group-hover:text-pink-600 dark:group-hover:text-pink-300 transition-colors leading-snug">
                        {cert.title}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-border text-[11px] font-mono text-muted-foreground">
                      <span className="truncate mr-2 font-medium">{cert.issuer}</span>
                      <Badge
                        variant="outline"
                        className="text-[10px] px-2 py-0 border-pink-500/30 text-pink-600 dark:text-pink-400 shrink-0"
                      >
                        {cert.category}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
