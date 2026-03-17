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
  { filename: '/partner/876ccfe5-18dc-4282-9302-1ec9fa1c1fa7.png' },
]

const dup1 = [...testimonials, ...testimonials, ...testimonials]
const dup2 = [...testimonials2, ...testimonials2, ...testimonials2]

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
    const el = scrollRef.current
    let id: number, active = true
    const scroll = () => {
      if (!active || !el) return
      el.scrollLeft += 1
      if (el.scrollLeft >= el.scrollWidth / 3) el.scrollLeft = 0
      id = requestAnimationFrame(scroll)
    }
    id = requestAnimationFrame(scroll)
    return () => { active = false; cancelAnimationFrame(id) }
  }, [isPaused, isInitialized])

  useEffect(() => {
    if (isPaused || !isInitialized || !scrollRef2.current) return
    const el = scrollRef2.current
    let id: number, active = true
    const scroll = () => {
      if (!active || !el) return
      el.scrollLeft -= 1
      if (el.scrollLeft <= 0) el.scrollLeft = el.scrollWidth / 3
      id = requestAnimationFrame(scroll)
    }
    id = requestAnimationFrame(scroll)
    return () => { active = false; cancelAnimationFrame(id) }
  }, [isPaused, isInitialized])

  return (
    <section id="testimonials" className="py-24 px-6" style={{ background: "#f8faff" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p style={{ fontSize: 11, color: "#001980", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }} className="mb-3">
            ĐỐI TÁC CỦA CHÚNG TÔI
          </p>
          <h2 className="font-black text-4xl md:text-5xl mb-4" style={{ color: "#001980" }}>
            22+ đối tác chiến lược
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#6b7280" }}>
            Kết nối với các tập đoàn tài chính, ngân hàng, bảo hiểm và dịch vụ số hàng đầu Việt Nam.
          </p>
        </div>

        <div className="space-y-6">
          {[{ ref: scrollRef, list: dup1 }, { ref: scrollRef2, list: dup2 }].map((row, ri) => (
            <div key={ri} className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to right, #f8faff, transparent)" }} />
              <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to left, #f8faff, transparent)" }} />
              <div ref={row.ref}
                className="flex gap-4 overflow-x-hidden"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                style={{ scrollBehavior: "auto" }}>
                {row.list.map((t, i) => (
                  <div key={i} className="shrink-0 flex items-center justify-center min-w-[160px] h-20 rounded-2xl px-6 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                    style={{ background: "#fff", border: "1.5px solid #e5e9f5" }}>
                    <div className="relative w-full h-full">
                      <Image src={t.filename} alt="partner" fill sizes="160px" className="object-contain" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Partner categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { label: "Ngân hàng TMCP", count: "8+", color: "#001980" },
            { label: "Bảo hiểm", count: "5+", color: "#3AA4F4" },
            { label: "Công ty tài chính", count: "4+", color: "#F24B21" },
            { label: "Dịch vụ số / Ecom", count: "5+", color: "#FDBF45" },
          ].map((cat, i) => (
            <div key={i} className="text-center p-5 rounded-2xl"
              style={{ background: "#fff", border: `1.5px solid ${cat.color}25` }}>
              <p className="font-black text-3xl mb-1" style={{ color: cat.color }}>{cat.count}</p>
              <p className="text-xs font-medium" style={{ color: "#374151" }}>{cat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}