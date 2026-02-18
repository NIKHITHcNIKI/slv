"use client"

import Image from "next/image"
import { Zap, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

const footerLinks = {
  products: [
    { name: "Diesel Generators", href: "#products" },
    { name: "Silent Generators", href: "#products" },
    { name: "Mobile Generators", href: "#products" },
    { name: "Spare Parts", href: "#products" },
  ],
  services: [
    { name: "Installation", href: "#products" },
    { name: "AMC Plans", href: "#products" },
    { name: "Emergency Service", href: "#products" },
    { name: "Consultancy", href: "#products" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
    { name: "Careers", href: "#" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="relative bg-card/50 border-t border-border/50 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4">
              <Image
                src="/images/whatsapp-20image-202026-01-16-20at-2010.jpeg"
                alt="SLV Diesel Power System Logo"
                width={80}
                height={80}
                className="object-contain drop-shadow-[0_0_20px_rgba(234,88,12,0.4)]"
              />
            </div>
            <p className="text-muted-foreground mt-6 max-w-sm leading-relaxed">
              Your trusted partner for industrial diesel generators in Bengaluru. Authorized Mahindra Powerol dealer
              with over 15 years of excellence.
            </p>

            <div className="flex gap-4 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-foreground mb-6 text-lg">Products</h4>
            <ul className="space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-6 text-lg">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-6 text-lg">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} SLV Diesel Power System. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-muted-foreground text-sm group">
            Powered by
            <Zap className="w-5 h-5 text-primary mx-1 group-hover:animate-pulse group-hover:drop-shadow-[0_0_10px_rgba(234,88,12,0.6)]" />
            <span className="font-semibold text-foreground">Mahindra Powerol</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
