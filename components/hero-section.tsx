"use client"
import { useEffect, useState } from "react"
import { AnimatedText } from "./animated-text"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingDown, TrendingUp } from "lucide-react"

function DonutChart({ percentage, color, label, size = 80 , icon }: any) {
  const [animated, setAnimated] = useState(0)
  const radius = (size - 16) / 2
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (animated / 100) * circumference

  useEffect(() => {
    const timeout = setTimeout(() => {
      let start = null as any
      const duration = 1400
      const ease = (t: any) => 1 - Math.pow(1 - t, 3)
      const animate = (timestamp: any) => {
        if (!start) start = timestamp
        const progress = Math.min((timestamp - start) / duration, 1)
        setAnimated(ease(progress) * percentage)
        if (progress < 1) requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)
    }, 600)
    return () => clearTimeout(timeout)
  }, [percentage])

  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#E8EAFF"
            strokeWidth="7"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span 
            className="items-center justify-center"
          style={{
            fontSize: 12,
            fontWeight: 800,
            color: "#1a1a2e",
            fontFamily: "inherit",
            lineHeight: 1,
          }}>
                <span>{icon ? (<TrendingUp color="green"/>) :( <TrendingDown color="#df1f2d"/>)}</span> 
                <span>{Math.round(animated)}%</span>
     
          </span>
        </div>
      </div>
      <span style={{
        fontSize: 11,
        fontWeight: 600,
        color: color,
        letterSpacing: "0.02em",
        fontFamily: "inherit",
      }}>
        {label}
      </span>
    </div>
  )
}

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    let rafId: number
    let currentProgress = 0
    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = 400
      const targetProgress = Math.min(scrollY / maxScroll, 1)
      const smoothUpdate = () => {
        currentProgress += (targetProgress - currentProgress) * 0.1
        if (Math.abs(targetProgress - currentProgress) > 0.001) {
          setScrollProgress(currentProgress)
          rafId = requestAnimationFrame(smoothUpdate)
        } else {
          setScrollProgress(targetProgress)
        }
      }
      cancelAnimationFrame(rafId)
      smoothUpdate()
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  const easeOutQuad = (t: number) => t * (2 - t)
  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)
  const scale = 1 - easeOutQuad(scrollProgress) * 0.15
  const borderRadius = easeOutCubic(scrollProgress) * 48
  const heightVh = 100 - easeOutQuad(scrollProgress) * 37.5

  return (
    <section className="pt-32 pb-12 px-6 min-h-screen flex items-center relative overflow-hidden bg-white">
      <div className="absolute inset-0 top-0">
        <div
          className="w-full will-change-transform overflow-hidden"
          style={{
            transform: `scale(${scale})`,
            borderRadius: `${borderRadius}px`,
            height: `${heightVh}vh`,
          }}
        />
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none z-10 flex items-end justify-center"
        style={{
          transform: `translateY(${scrollProgress - 10}px)`,
          opacity: 1 - scrollProgress * 0.8,
          height: "100%",
        }}
      >
        <span className="block text-primary font-bold text-[28vw] sm:text-[25vw] md:text-[22vw] lg:text-[20vw] tracking-tighter select-none text-center leading-none" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex items-center justify-center gap-50">
        {/* Left: Text content */}
        <div>
          <div className={`transition-all duration-1000 delay-[800ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
            <h1 className="font-sans font-normal leading-tight mb-6 w-full max-w-4xl mx-auto">
              <AnimatedText text="nextgrowth" delay={0.3} />
            </h1>
            <p className="font-medium font-sans text-3xl ml-2 tracking-tighter text-primary">
              Nền tảng giúp doanh nghiệp <br />
              tăng trưởng doanh thu
            </p>
            <div className="flex gap-6 mt-8 ml-2">
              <Button variant={"gradient"} className="text-lg p-4 h-14 w-60">Tìm hiểu thêm</Button>
              <Button variant={"ghost"} className="text-lg p-4 h-14 w-60 border">Đăng kí ngay <ArrowRight /></Button>
            </div>
          </div>
        </div>

        {/* Right: iPhone + floating stats card */}
        <div className="flex flex-col gap-8">
          <div className="relative">
            <div
              className={`relative w-[234px] md:w-[281px] lg:w-[351px] will-change-transform transition-all duration-1500 ease-out delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-100"
              }`}
            >
              {/* iPhone image */}
              <img
                src="/images/iphone-frame.png"
                alt="Application Homie"
                className="w-full h-auto relative z-10"
              />

              <div
                className={`absolute z-20 transition-all duration-[1800ms] ease-out delay-[900ms] ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  left: "-38%",
                  top: "30%",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "#ffffff",
                    borderRadius: "16px",
                    padding: "14px 18px",
                    boxShadow: "0 8px 32px rgba(80, 60, 255, 0.18), 0 2px 8px rgba(0,0,0,0.08)",
                    border: "1px solid rgba(230,230,255,0.8)",
                  }}
                >
                  <DonutChart percentage={80} color="#001980" label="Doanh thu" size={76} icon/>
                  <div style={{ width: 1, height: 52, background: "#EBEBF5", borderRadius: 1 }} />
                  <DonutChart percentage={70} color="#001980" label="Chi phí" size={76} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}