"use client"

import { useInView } from "@/hooks/use-in-view"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    details: ["123, Industrial Area", "Peenya, Bengaluru - 560058", "Karnataka, India"],
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+91 98765 43210", "+91 80 2839 4567"],
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["info@slvdieselpower.com", "sales@slvdieselpower.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: Closed", "Emergency: 24/7"],
  },
]

export function ContactSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="contact" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isInView ? "animate-slide-up" : "opacity-0"}`}>
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Contact Us</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-foreground text-balance">
            Get in <span className="text-primary">Touch</span> with Our Team
          </h2>
          <p className="text-muted-foreground mt-4">
            Have questions about our products or services? Reach out to us and our team will respond promptly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div
            className={`bg-card rounded-2xl p-8 border border-border ${isInView ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">Send us a Message</h3>

            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">Your Name</label>
                  <Input
                    placeholder="John Doe"
                    className="bg-muted/50 border-border focus:border-primary transition-colors h-11"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">Phone Number</label>
                  <Input
                    placeholder="+91 98765 43210"
                    className="bg-muted/50 border-border focus:border-primary transition-colors h-11"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">Email Address</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="bg-muted/50 border-border focus:border-primary transition-colors h-11"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">Generator Capacity Needed</label>
                <Input
                  placeholder="e.g., 100 kVA"
                  className="bg-muted/50 border-border focus:border-primary transition-colors h-11"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">Your Message</label>
                <Textarea
                  placeholder="Tell us about your power requirements..."
                  rows={4}
                  className="bg-muted/50 border-border focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 h-12 group"
              >
                <span className="flex items-center justify-center">
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className={`flex gap-4 p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 ${
                  isInView ? "animate-slide-in-right" : "opacity-0"
                }`}
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <div className="w-11 h-11 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                  {info.details.map((detail) => (
                    <p key={detail} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div
              className={`relative h-48 rounded-xl overflow-hidden border border-border ${
                isInView ? "animate-scale-in animation-delay-400" : "opacity-0"
              }`}
            >
              <img src="/map-location-bengaluru-industrial-area-satellite-v.jpg" alt="Our Location on Map" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-background/40" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <MapPin className="w-8 h-8 text-primary drop-shadow-lg" />
              </div>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-card/80 backdrop-blur-sm border-border hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <MapPin className="mr-1.5 w-3.5 h-3.5" />
                  View on Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
