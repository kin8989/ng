"use client"
import { useEffect, useState } from "react"

function useCountUp(end: number, duration = 2000, suffix = "") {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!hasStarted) return
    let startTime: number
    let animationFrame: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))
      if (progress < 1) animationFrame = requestAnimationFrame(animate)
    }
    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, hasStarted])

  return { value: count + suffix, start: () => setHasStarted(true), hasStarted }
}

const stats = [
  { end: 22, suffix: "+", label: "Đối tác chiến lược", sub: "Ngân hàng, bảo hiểm, fintech", color: "#3AA4F4", glow: "rgba(58,164,244,0.3)" },
  { end: 250, suffix: "K+", label: "Khách hàng", sub: "Đã đăng ký trên nền tảng", color: "#FDBF45", glow: "rgba(253,191,69,0.3)" },
  { end: 6, suffix: "K+", label: "Nhân sự bán hàng", sub: "Publisher chuyên nghiệp", color: "#F24B21", glow: "rgba(242,75,33,0.3)" },
  { end: 98, suffix: "%", label: "Tỉ lệ tracking", sub: "Chính xác realtime", color: "#3AA4F4", glow: "rgba(58,164,244,0.3)" },
]

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const counters = stats.map(s => useCountUp(s.end, 2000, s.suffix))

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true)
        counters.forEach(c => c.start())
      }
    }, { threshold: 0.3 })
    const section = document.getElementById("stats-section")
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [isVisible])

  return (
    <section id="stats-section" className="py-20 px-6 relative overflow-hidden bg-white">
      {/* Subtle gradient band */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(0,25,128,0.03) 0%, transparent 100%)" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 rounded-3xl overflow-hidden"
          style={{ boxShadow: "0 4px 48px rgba(0,25,128,0.08)", border: "1px solid rgba(0,25,128,0.08)" }}>
          {stats.map((s, i) => (
            <div key={i}
              className={`relative group p-8 text-center transition-all duration-500 hover:z-10 ${i < stats.length - 1 ? "border-r border-b md:border-b-0" : ""}`}
              style={{ borderColor: "rgba(0,25,128,0.07)", background: "#fff" }}>
              {/* Hover gradient fill */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-none"
                style={{ background: `radial-gradient(ellipse 80% 80% at 50% 120%, ${s.glow} 0%, transparent 70%)` }} />

              <p className={`font-black leading-none mb-2 relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{
                  fontSize: "clamp(40px,5vw,60px)",
                  color: s.color,
                  textShadow: `0 0 32px ${s.glow}`,
                  transitionDelay: `${i * 100}ms`
                }}>
                {counters[i].value}
              </p>
              <p className="font-bold text-sm mb-1 relative z-10" style={{ color: "#001980" }}>{s.label}</p>
              <p className="text-xs relative z-10" style={{ color: "#8D8D8D" }}>{s.sub}</p>

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-3/4 transition-all duration-500 rounded-full"
                style={{ background: `linear-gradient(90deg, transparent, ${s.color}, transparent)` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}