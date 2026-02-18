"use client"

import { useState, useEffect } from "react"
import { Menu, X, Zap } from "lucide-react"
import { Logo } from "./logo"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Why Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navLinks.map((link) => link.href.substring(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section)
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMounted])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? "glass shadow-2xl border-b border-primary/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                  activeSection === link.href.substring(1) ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full animate-scale-in" />
                )}
              </a>
            ))}
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(234,88,12,0.5)] relative overflow-hidden group">
              <span className="relative z-10 flex items-center">
                <Zap className="w-4 h-4 mr-2" />
                Get Quote
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2 hover:bg-primary/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden glass rounded-2xl mt-2 p-6 animate-scale-in border border-primary/20">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`block py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 animate-slide-up ${
                  activeSection === link.href.substring(1) ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
                style={{ animationDelay: isMounted ? `${index * 0.1}s` : "0s" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full mt-4 bg-primary text-primary-foreground hover:shadow-[0_0_30px_rgba(234,88,12,0.5)] transition-all">
              <Zap className="w-4 h-4 mr-2" />
              Get Quote
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
