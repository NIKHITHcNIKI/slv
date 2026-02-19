"use client"

import { useInView } from "@/hooks/use-in-view"

const galleryItems = [
  {
    id: 1,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-16%20at%204.30.34%20PM%20%281%29-oZHAyU6LZJkuazrkVkOBRSNUkUZwJj.jpeg",
    title: "Team Excellence",
    description: "Dedicated team committed to power solutions",
  },
  {
    id: 2,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-16%20at%204.30.36%20PM%20%281%29-RbTsgTVZn0wbW1h2JBiSGjlvwOgrE3.jpeg",
    title: "Mahindra Powerol Products",
    description: "Industrial-grade diesel generators",
  },
  {
    id: 3,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-16%20at%204.30.32%20PM%20%281%29-6woeQqL7LmYTnrzolxc3Yke6e6KQzM.jpeg",
    title: "Emerging Partner Award",
    description: "Recognized for exceptional partnership",
  },
]

export function GallerySection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section id="gallery" className="relative py-24 overflow-hidden bg-card/30" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isInView ? "animate-slide-up" : "opacity-0"}`}>
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Gallery & Achievements</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-foreground text-balance leading-tight">
            Our <span className="text-primary">Team & Milestones</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Celebrating our achievements and the dedicated team behind SLV Diesel Power System's success
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-all duration-300 ${
                isInView ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  style={{ width: 'auto', height: 'auto' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/90 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
