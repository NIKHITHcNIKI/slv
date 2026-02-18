import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { GallerySection } from "@/components/gallery-section"
import { WhyUsSection } from "@/components/why-us-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { CarouselBackground } from "@/components/carousel-background"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <CarouselBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <GallerySection />
      <WhyUsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
