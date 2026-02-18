"use client"

import Image from "next/image"

export function Logo({ className = "", showText = true }: { className?: string; showText?: boolean }) {
  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      <div className="relative">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-01-16%20at%2010.42.10%20PM-Iz528ldPPxORjSn1AKYHB8RbYmum51.jpeg"
          alt="SLV Diesel Power System Logo"
          width={showText ? 50 : 60}
          height={showText ? 50 : 60}
          className="object-contain drop-shadow-[0_0_15px_rgba(234,88,12,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(234,88,12,0.5)] transition-all duration-500 rounded-3xl opacity-90 border-0 text-card bg-popover border-transparent border-solid px-0 mx-px my-0 py-0 leading-4 tracking-normal text-base"
        />
      </div>
      {showText && (
        <div className="flex flex-col leading-tight">
          <span className="text-lg font-bold tracking-tight">
            <span className="text-foreground">SLV </span>
            <span className="text-primary">DIESEL</span>
          </span>
          <span className="text-[10px] text-muted-foreground tracking-[0.15em] uppercase font-medium">
            Power System
          </span>
        </div>
      )}
    </div>
  )
}
