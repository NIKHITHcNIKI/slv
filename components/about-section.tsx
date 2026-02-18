"use client"

import { useInView } from "@/hooks/use-in-view"
import { Award, Users, Target, TrendingUp, CheckCircle } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Authorized Dealer",
    description: "Officially certified Mahindra Powerol dealer with genuine products and warranty.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Trained technicians with expertise in generator installation and service.",
  },
  {
    icon: Target,
    title: "Customer Focus",
    description: "Tailored solutions that meet your specific industrial power requirements.",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description: "Over a decade serving industries, businesses, and institutions reliably.",
  },
]

const certifications = [
  "ISO 9001:2015 Certified",
  "Mahindra Authorized Partner",
  "CPCB Compliant Products",
  "BIS Certified Generators",
]

export function AboutSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-card/30" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`relative ${isInView ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="relative">
              {/* Main image */}
              <div className="rounded-2xl overflow-hidden border border-border shadow-xl">
                <img
                  src="/industrial-generator-engine-room-technicians-worki.jpg"
                  alt="SLV Diesel Power System - Professional Generator Services"
                  className="w-full h-auto"
                />
              </div>

              {/* Secondary image overlay */}
              <div className="absolute -bottom-6 -right-6 w-48 rounded-xl overflow-hidden border border-border shadow-xl">
                <img src="/diesel-generator-control-panel-gauges-meters-indus.jpg" alt="Generator Control Panel" className="w-full h-auto" />
              </div>

              {/* Experience badge */}
              <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground rounded-xl p-4 shadow-lg">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-xs uppercase tracking-wider">Years</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className={`${isInView ? "animate-slide-in-right" : "opacity-0"}`}>
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">About Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-foreground text-balance leading-tight">
                Reliable Power Solutions for <span className="text-primary">Industrial Growth</span>
              </h2>
            </div>

            <p
              className={`text-muted-foreground leading-relaxed ${isInView ? "animate-slide-up animation-delay-200" : "opacity-0"}`}
            >
              SLV Diesel Power System is Bengaluru's leading authorized dealer of Mahindra Powerol Diesel Generators.
              With over 15 years of industry experience, we have built a reputation for delivering reliable power backup
              solutions to businesses across Karnataka.
            </p>

            <p
              className={`text-muted-foreground leading-relaxed ${isInView ? "animate-slide-up animation-delay-300" : "opacity-0"}`}
            >
              Our commitment to quality service and genuine products ensures that our customers receive world-class
              solutions that keep their operations running smoothly, every single day.
            </p>

            {/* Certifications */}
            <div
              className={`flex flex-wrap gap-3 pt-2 ${isInView ? "animate-slide-up animation-delay-400" : "opacity-0"}`}
            >
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-primary" />
                  {cert}
                </div>
              ))}
            </div>

            {/* Feature grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`group p-5 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-all duration-300 ${
                    isInView ? "animate-slide-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                >
                  <feature.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
