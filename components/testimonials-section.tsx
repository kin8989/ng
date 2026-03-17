"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

const testimonials = [
  { filename: '/partner/VPBank_logo.png' },
  { filename: '/partner/ocb.png' },
  { filename: '/partner/FE-credit.png' },
  { filename: '/partner/leobank.png' },
  { filename: '/partner/abbdca6e-a7ac-430f-a224-1e455b38c563.png' },
  { filename: '/partner/d9e386b3-73c3-4668-a66d-986a68ea79ea.png' },
  { filename: '/partner/f6253196-85a7-403b-ae19-bc7de19239f0.png' },
  { filename: '/partner/74bb623a-c88b-4804-afc6-760b8076f936.png' },
  { filename: '/partner/46c79f4e-6f74-4744-814a-c731355528a3.png' },
  { filename: '/partner/a354a42b-6c10-4d4f-9fc4-7eea0fdce3b3.png' },
]

const testimonials2 = [
  { filename: '/partner/9b1a0d0c-f1ca-4183-a1df-0ce71f781f4c.png' },
  { filename: '/partner/shopee-food.png' },
  { filename: '/partner/af885bfb-89e7-4754-a836-c1800b5bd5a7.png' },
  { filename: '/partner/8e9bde24-2652-4124-84c9-cc8ebe3656d7.png' },
  { filename: '/partner/6d5995e9-abb6-4d6d-be91-0cea176b2993.png' },
  { filename: '/partner/6d9ed9bc-e997-4ca1-8a1f-05f385694c01.png' },
  { filename: '/partner/876ccfe5-18dc-4282-9302-1ec9fa1c1fa7.png' }
]

const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]
const duplicatedTestimonials2 = [...testimonials2, ...testimonials2, ...testimonials2]

export function TestimonialsSection() {
  const [isPaused, setIsPaused] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const scrollRef2 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (scrollRef2.current) {
        scrollRef2.current.scrollLeft = scrollRef2.current.scrollWidth / 3
      }
      setIsInitialized(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isPaused || !isInitialized || !scrollRef.current) return

    const scrollContainer = scrollRef.current
    let animationFrameId: number
    let isActive = true

    const scroll = () => {
      if (!isActive || !scrollContainer) return

      scrollContainer.scrollLeft += 1
      const maxScroll = scrollContainer.scrollWidth / 3

      if (scrollContainer.scrollLeft >= maxScroll) {
        scrollContainer.scrollLeft = 0
      }

      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      isActive = false
      cancelAnimationFrame(animationFrameId)
    }
  }, [isPaused, isInitialized])

  useEffect(() => {
    if (isPaused || !isInitialized || !scrollRef2.current) return

    const scrollContainer = scrollRef2.current
    let animationFrameId: number
    let isActive = true

    const scroll = () => {
      if (!isActive || !scrollContainer) return

      scrollContainer.scrollLeft -= 1

      if (scrollContainer.scrollLeft <= 0) {
        scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3
      }

      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      isActive = false
      cancelAnimationFrame(animationFrameId)
    }
  }, [isPaused, isInitialized])

  return (
    <section id="testimonials" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal leading-tight font-serif">Đối tác của chúng tôi</h2>
        </div>

        <div className="space-y-6">
          {/* First row - scrolls left to right */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              style={{ scrollBehavior: "auto" }}
            >
     
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="shrink-0 flex items-center justify-center min-w-37.5 md:min-w-50 h-20 md:h-24 bg-card/50 rounded-2xl px-8"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={testimonial.filename || "/partner/6d9ed9bc-e997-4ca1-8a1f-05f385694c01.png"}
                      alt="partner"
                      fill
                      sizes="(max-width: 768px) 150px, 200px"
                      className="object-contain filter  transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second row - scrolls right to left */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

            <div
              ref={scrollRef2}
              className="flex gap-6 overflow-x-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              style={{ scrollBehavior: "auto" }}
            >
       
              {duplicatedTestimonials2.map((testimonial, index) => (
                <div
                  key={index}
                  className="shrink-0 flex items-center justify-center min-w-37.5  h-20 md:h-24 bg-card/50 rounded-2xl px-8"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={testimonial.filename || "/partner/6d9ed9bc-e997-4ca1-8a1f-05f385694c01.png"}
                      alt="partner"
                      fill
                      sizes="(max-width: 768px) 150px, 200px"
                      className="object-contain filter transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
