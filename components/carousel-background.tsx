'use client'

import { useState, useEffect } from 'react'

const images = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-16%20at%204.30.34%20PM%20%281%29-HT7gkF5aHYhzHfl3ZhPqe0PuAkR7MI.jpeg',
    alt: 'Team photo',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-16%20at%204.30.37%20PM-dFtS7zZft3EBo1FAT9DDVcSCYZkWv5.jpeg',
    alt: 'Generator installation in warehouse',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-16%20at%204.30.36%20PM%20%281%29-RbTsgTVZn0wbW1h2JBiSGjlvwOgrE3.jpeg',
    alt: 'Generator installation',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-16%20at%204.30.34%20PM%20%282%29-rxBBLk8IB5sLFOIvRs7A6ezTuO2Zlp.jpeg',
    alt: 'Generator model in store',
  },
]

export function CarouselBackground() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 6000) // Change image every 6 seconds

    return () => clearInterval(interval)
  }, [isMounted])

  if (!isMounted) {
    return (
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center transition-all duration-[2000ms] ease-in-out"
        style={{
          backgroundImage: `url('${images[0].src}')`,
        }}
      />
    )
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Background images with smooth transitions */}
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out"
          style={{
            backgroundImage: `url('${image.src}')`,
            opacity: index === currentIndex ? 1 : 0,
            zIndex: index === currentIndex ? 10 : 0,
          }}
        />
      ))}

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-20" />

      {/* Carousel indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
