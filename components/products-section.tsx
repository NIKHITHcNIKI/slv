"use client"

import { useInView } from "@/hooks/use-in-view"
import { Button } from "@/components/ui/button"
import { ArrowRight, Wrench, FileCheck, Headphones, Cog } from "lucide-react"

const products = [
  {
    title: "Industrial Generators",
    range: "125 kVA - 3000 kVA",
    description:
      "Heavy-duty Mahindra Powerol generators engineered for continuous industrial operations and maximum reliability.",
    image: "/large-industrial-diesel-generator-power-plant-equi.jpg",
    features: ["Continuous Duty", "Low Fuel Consumption", "Heavy Duty Engine"],
  },
  {
    title: "Commercial Generators",
    range: "15 kVA - 125 kVA",
    description: "Reliable power backup solutions for commercial establishments, offices, and retail spaces.",
    image: "/commercial-diesel-generator-set-canopy-enclosed-pr.jpg",
    features: ["Compact Design", "Low Noise", "Auto Start"],
  },
  {
    title: "Silent Generators",
    range: "25 kVA - 500 kVA",
    description: "Acoustic enclosure generators ideal for hospitals, hotels, and noise-sensitive environments.",
    image: "/silent-acoustic-enclosure-diesel-generator-soundpr.jpg",
    features: ["Sound Proof", "Weather Resistant", "Easy Access"],
  },
]

const services = [
  {
    icon: Wrench,
    title: "Installation",
    description: "Professional installation with proper foundation and electrical integration.",
  },
  {
    icon: FileCheck,
    title: "AMC Services",
    description: "Comprehensive annual maintenance contracts for worry-free operation.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock technical support and emergency breakdown services.",
  },
  {
    icon: Cog,
    title: "Spare Parts",
    description: "Genuine Mahindra spare parts for optimal generator performance.",
  },
]

export function ProductsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="products" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isInView ? "animate-slide-up" : "opacity-0"}`}>
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Products & Services</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-foreground text-balance">
            Complete <span className="text-primary">Power Solutions</span> for Every Need
          </h2>
          <p className="text-muted-foreground mt-4">
            From compact generators for small businesses to high-capacity units for industrial plants, we offer the full
            range of Mahindra Powerol diesel generators.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {products.map((product, index) => (
            <div
              key={product.title}
              className={`group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 ${
                isInView ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="text-xs font-bold px-3 py-1.5 bg-primary text-primary-foreground rounded-full">
                    {product.range}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {product.features.map((feature) => (
                    <span key={feature} className="text-xs px-2.5 py-1 bg-muted text-muted-foreground rounded-md">
                      {feature}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full group/btn border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 bg-transparent"
                >
                  Get Quote
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className={`${isInView ? "animate-fade-in animation-delay-400" : "opacity-0"}`}>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground">
              Our <span className="text-primary">Services</span>
            </h3>
            <p className="text-muted-foreground mt-2">Complete after-sales support for all your power needs</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group p-6 bg-muted/30 rounded-xl text-center border border-border/50 hover:border-primary/30 transition-all duration-300 ${
                  isInView ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{service.title}</h4>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
