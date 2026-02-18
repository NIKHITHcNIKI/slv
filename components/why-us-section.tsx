"use client"

import { useInView } from "@/hooks/use-in-view"
import { CheckCircle, Shield, Clock, Award, Headphones, Truck } from "lucide-react"
import { useEffect, useState } from "react"

const reasons = [
  {
    icon: Shield,
    title: "Authorized Dealer",
    description: "Official Mahindra Powerol dealer with genuine products and manufacturer warranty.",
  },
  {
    icon: Award,
    title: "15+ Years Experience",
    description: "Proven track record serving hundreds of satisfied customers across Karnataka.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock technical assistance and emergency breakdown services.",
  },
  {
    icon: Truck,
    title: "Quick Delivery",
    description: "Fast delivery and professional installation to get your power running swiftly.",
  },
  {
    icon: Clock,
    title: "Timely Maintenance",
    description: "Scheduled preventive maintenance for peak generator efficiency.",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "All products meet stringent quality standards with comprehensive testing.",
  },
]

const stats = [
  { value: 500, suffix: "+", label: "Installations" },
  { value: 98, suffix: "%", label: "Satisfaction" },
  { value: 24, suffix: "/7", label: "Support" },
  { value: 50, suffix: "+", label: "Technicians" },
]

function AnimatedCounter({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const stepValue = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += stepValue
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value, isVisible])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export function WhyUsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="why-us" className="relative py-24 overflow-hidden bg-card/30" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isInView ? "animate-slide-up" : "opacity-0"}`}>
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-foreground text-balance">
            Your Trusted <span className="text-primary">Power Partner</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            We combine technical expertise with exceptional service to deliver power solutions that keep your business
            running without interruption.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`group p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 ${
                isInView ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="w-11 h-11 mb-4 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div
          className={`bg-card rounded-2xl p-8 border border-border ${isInView ? "animate-scale-in animation-delay-400" : "opacity-0"}`}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center ${index < stats.length - 1 ? "lg:border-r lg:border-border" : ""}`}
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isInView} />
                </div>
                <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
