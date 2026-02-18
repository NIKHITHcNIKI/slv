"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowRight, Phone, Shield, Clock, Award, Cog } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 0)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePos({
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50,
        })
      }
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

        {/* Industrial grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ea580c' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Animated orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] animate-morph"
          style={{ transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)` }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] animate-morph animation-delay-400"
          style={{ transform: `translate(${-mousePos.x * 1.5}px, ${-mousePos.y * 1.5}px)` }}
        />

        {/* Rotating gear decorations */}
        <Cog className="absolute top-20 right-20 w-24 h-24 text-primary/5 animate-spin-slow" />
        <Cog className="absolute bottom-32 left-16 w-16 h-16 text-primary/5 animate-spin-reverse" />
        <Cog className="absolute top-1/2 right-10 w-12 h-12 text-primary/5 animate-spin-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium">
              <Award className="w-4 h-4" />
              Authorized Mahindra Powerol Dealer
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              <span className="text-foreground">Industrial</span> <span className="text-primary">Power Solutions</span>{" "}
              <span className="text-foreground">You Can Trust</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Bengaluru's premier diesel generator supplier. Expert sales, installation, and AMC services for industrial
              and commercial power backup systems since 2009.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 group transition-all duration-300 hover:shadow-[0_0_30px_rgba(234,88,12,0.4)]"
              >
                <span className="flex items-center">
                  Request Quote
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 bg-transparent"
              >
                <Phone className="mr-2 w-5 h-5" />
                +91 98765 43210
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "500+", label: "Installations" },
                { value: "24/7", label: "Support" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className={`${isVisible ? "animate-slide-up" : "opacity-0"}`}
                  style={{ animationDelay: isVisible ? `${(index + 3) * 0.2}s` : "0s" }}
                >
                  <div className="text-3xl sm:text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative ${isVisible ? "animate-scale-in animation-delay-400" : "opacity-0"}`}>
            <div className="relative">
              {/* Main Generator Image */}
              <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
                <img
                  src="/industrial-diesel-generator-engine-mechanical-part.jpg"
                  alt="Mahindra Powerol Industrial Diesel Generator"
                  className="w-full h-auto"
                  loading="eager"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              {/* Floating Info Cards */}
              <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-foreground">Certified</span>
                    <p className="text-xs text-muted-foreground">ISO 9001:2015</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-xl animate-float animation-delay-600">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-foreground">Fast Delivery</span>
                    <p className="text-xs text-muted-foreground">Within 48 Hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce-subtle">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 border-2 border-primary/50 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
