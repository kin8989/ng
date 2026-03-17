"use client"
import { useEffect, useState } from "react"
import { ArrowRight, TrendingUp, TrendingDown, Zap, Shield, BarChart3 } from "lucide-react"

function AnimatedCounter({ value, suffix = "", duration = 2000 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let start: number
    const animate = (ts: number) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setCount(Math.floor(ease * value))
      if (p < 1) requestAnimationFrame(animate)
    }
    const id = setTimeout(() => requestAnimationFrame(animate), 800)
    return () => clearTimeout(id)
  }, [value, duration])
  return <span>{count.toLocaleString()}{suffix}</span>
}

function DonutChart({ percentage, color, label, icon, delay = 0 }: any) {
  const [animated, setAnimated] = useState(0)
  const size = 80
  const radius = (size - 12) / 2
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (animated / 100) * circumference

  useEffect(() => {
    const t = setTimeout(() => {
      let start: any
      const animate = (ts: any) => {
        if (!start) start = ts
        const p = Math.min((ts - start) / 1400, 1)
        const ease = 1 - Math.pow(1 - p, 3)
        setAnimated(ease * percentage)
        if (p < 1) requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)
    }, 600 + delay)
    return () => clearTimeout(t)
  }, [percentage, delay])

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
          <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="6" />
          <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke={color} strokeWidth="6"
            strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset}
            style={{ transition: "stroke-dashoffset 0.1s" }} />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {icon === "up" ? <TrendingUp size={14} color={color} /> : <TrendingDown size={14} color="#F24B21" />}
          <span style={{ fontSize: 13, fontWeight: 800, color: "#fff", lineHeight: 1.2 }}>
            {Math.round(animated)}%
          </span>
        </div>
      </div>
      <span style={{ fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,0.7)", letterSpacing: "0.05em" }}>
        {label}
      </span>
    </div>
  )
}

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden" style={{ background: "linear-gradient(135deg, #000d40 0%, #001980 45%, #001060 100%)" }}>
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #3AA4F4 0%, transparent 70%)", animation: "float-slow 8s ease-in-out infinite" }} />
        <div className="absolute bottom-[-5%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #F24B21 0%, transparent 70%)", animation: "float-medium 10s ease-in-out infinite" }} />
        <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #FDBF45 0%, transparent 70%)" }} />
        {/* Grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#3AA4F4" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Top badge */}
        <div className={`flex justify-center mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
            <Zap size={14} color="#FDBF45" />
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)", letterSpacing: "0.1em", fontWeight: 600 }}>
              AFFILIATE PERFORMANCE MARKETING PLATFORM
            </span>
          </div>
        </div>

        {/* Main headline */}
        <div className={`text-center mb-8 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h1 className="font-black leading-none tracking-tighter mb-4" style={{ fontSize: "clamp(52px, 10vw, 120px)" }}>
            <span style={{ color: "#ffffff" }}>next</span>
            <span style={{ background: "linear-gradient(135deg, #3AA4F4 0%, #FDBF45 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>growth</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium" style={{ color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em" }}>
            NEXT STEP → NEXT GROWTH
          </p>
        </div>

        {/* Subtitle */}
        <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
            Nền tảng công nghệ kết nối <span style={{ color: "#3AA4F4", fontWeight: 700 }}>doanh nghiệp</span> và{" "}
            <span style={{ color: "#FDBF45", fontWeight: 700 }}>publisher</span> — tăng trưởng doanh thu minh bạch,
            đo lường chính xác, tối ưu theo dữ liệu thực.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-20 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <button
            className="group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-base transition-all duration-300 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #F24B21 0%, #ff6540 100%)", color: "#fff", boxShadow: "0 8px 32px rgba(242, 75, 33, 0.4)" }}
          >
            Bắt đầu ngay
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            className="group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-base transition-all duration-300 hover:scale-105"
            style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)", backdropFilter: "blur(10px)" }}
          >
            Tìm hiểu thêm
          </button>
        </div>

        {/* Stats Row */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {[
            { value: 22, suffix: "+", label: "Đối tác chiến lược", color: "#3AA4F4" },
            { value: 250, suffix: "K+", label: "Khách hàng đăng ký", color: "#FDBF45" },
            { value: 6, suffix: "K+", label: "Nhân sự bán hàng", color: "#F24B21" },
            { value: 5, suffix: " kênh", label: "Phân phối đa kênh", color: "#3AA4F4" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-5 rounded-2xl" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(10px)" }}>
              <p className="font-black text-4xl mb-1" style={{ color: stat.color }}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", letterSpacing: "0.05em", textTransform: "uppercase" }}>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Floating Dashboard Card */}
        <div className={`flex justify-center transition-all duration-1200 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="w-full max-w-2xl rounded-3xl p-6" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(20px)" }}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em" }}>DASHBOARD REALTIME</p>
                <p className="font-bold text-xl" style={{ color: "#fff" }}>Hiệu suất chiến dịch</p>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full" style={{ background: "rgba(58,164,244,0.2)", border: "1px solid rgba(58,164,244,0.4)" }}>
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span style={{ fontSize: 11, color: "#3AA4F4", fontWeight: 700 }}>LIVE</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-2xl" style={{ background: "rgba(0,25,128,0.5)", border: "1px solid rgba(58,164,244,0.3)" }}>
                <BarChart3 size={20} color="#3AA4F4" className="mb-2" />
                <p className="font-black text-2xl" style={{ color: "#fff" }}>98.5%</p>
                <p style={{ fontSize: 10, color: "rgba(255,255,255,0.5)" }}>Tỉ lệ tracking</p>
              </div>
              <div className="p-4 rounded-2xl" style={{ background: "rgba(242,75,33,0.2)", border: "1px solid rgba(242,75,33,0.3)" }}>
                <TrendingUp size={20} color="#F24B21" className="mb-2" />
                <p className="font-black text-2xl" style={{ color: "#fff" }}>+23.5%</p>
                <p style={{ fontSize: 10, color: "rgba(255,255,255,0.5)" }}>Tăng trưởng tháng</p>
              </div>
              <div className="p-4 rounded-2xl" style={{ background: "rgba(253,191,69,0.15)", border: "1px solid rgba(253,191,69,0.3)" }}>
                <Shield size={20} color="#FDBF45" className="mb-2" />
                <p className="font-black text-2xl" style={{ color: "#fff" }}>100%</p>
                <p style={{ fontSize: 10, color: "rgba(255,255,255,0.5)" }}>Minh bạch HH</p>
              </div>
            </div>
            <div className="flex justify-around">
              <DonutChart percentage={87} color="#3AA4F4" label="Chuyển đổi" icon="up" delay={0} />
              <div style={{ width: 1, background: "rgba(255,255,255,0.1)" }} />
              <DonutChart percentage={92} color="#FDBF45" label="Hoa hồng" icon="up" delay={200} />
              <div style={{ width: 1, background: "rgba(255,255,255,0.1)" }} />
              <DonutChart percentage={75} color="#F24B21" label="Chi phí TU" icon="down" delay={400} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 80 }}>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}