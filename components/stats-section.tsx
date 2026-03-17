"use client"
import { useEffect, useState, useRef } from "react"

function useCountUp(end: number, duration = 2000, suffix = "") {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!started) return
    let startTime: number
    let frame: number
    const animate = (ts: number) => {
      if (!startTime) startTime = ts
      const p = Math.min((ts - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - p, 4)
      setCount(Math.floor(ease * end))
      if (p < 1) frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [end, duration, started])

  return { value: count + suffix, start: () => setStarted(true) }
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [triggered, setTriggered] = useState(false)

  const s1 = useCountUp(22, 1800, "+")
  const s2 = useCountUp(250000, 2200, "+")
  const s3 = useCountUp(6000, 2000, "+")
  const s4 = useCountUp(98, 1600, "%")

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !triggered) {
        setTriggered(true)
        s1.start(); s2.start(); s3.start(); s4.start()
      }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [triggered])

  const stats = [
    { value: s1.value, label: "Đối tác chiến lược", sub: "Ngân hàng, bảo hiểm, fintech", color: "#3AA4F4" },
    { value: s2.value, label: "Khách hàng đăng ký", sub: "Trên toàn nền tảng", color: "#FDBF45" },
    { value: s3.value, label: "Nhân sự bán hàng", sub: "Đội ngũ publisher chuyên nghiệp", color: "#F24B21" },
    { value: s4.value, label: "Tỉ lệ tracking", sub: "Chính xác theo realtime", color: "#001980" },
  ]

  return (
    <section id="stats-section" className="py-20 px-6 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className={`text-center transition-all duration-700`} style={{ transitionDelay: `${i * 100}ms` }}>
              <p className="font-black leading-none mb-2" style={{ fontSize: "clamp(40px,6vw,64px)", color: s.color }}>
                {s.value}
              </p>
              <p className="font-bold text-sm mb-1" style={{ color: "#001980" }}>{s.label}</p>
              <p className="text-xs" style={{ color: "#8D8D8D" }}>{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
