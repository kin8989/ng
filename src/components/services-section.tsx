"use client"

import { Home, Key, Shield, Target, TrendingUp, Users, BarChart3, Zap } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const values = [
  { icon: Shield, title: "Minh bạch", en: "Transparency", desc: "Dữ liệu tracking, hoa hồng và hiệu quả chiến dịch công khai realtime. Không trì hoãn, không mờ ám.", grad: "linear-gradient(135deg, #001980 0%, #3AA4F4 100%)", glow: "rgba(58,164,244,0.25)" },
  { icon: Target, title: "Tuân thủ & Trách nhiệm", en: "Compliance", desc: "Thiết kế luồng chuyển đổi phù hợp compliance tài chính, kiểm soát nội dung chặt chẽ.", grad: "linear-gradient(135deg, #F24B21 0%, #FDBF45 100%)", glow: "rgba(242,75,33,0.25)" },
  { icon: Users, title: "Đồng hành tăng trưởng", en: "Shared Growth", desc: "Doanh nghiệp tăng trưởng bền vững. Publisher thu nhập ổn định. NextGrowth phát triển cùng hệ sinh thái.", grad: "linear-gradient(135deg, #3AA4F4 0%, #001980 100%)", glow: "rgba(58,164,244,0.25)" },
  { icon: BarChart3, title: "Hiệu quả thực chất", en: "Real Impact", desc: "Đo lường end-to-end, tối ưu chuyển đổi thực chất — không chạy theo traffic rác.", grad: "linear-gradient(135deg, #FDBF45 0%, #F24B21 100%)", glow: "rgba(253,191,69,0.25)" },
  { icon: Zap, title: "Công nghệ làm nền tảng", en: "Tech-Driven", desc: "Tracking chính xác, dashboard realtime, tích hợp & mở rộng linh hoạt cao.", grad: "linear-gradient(135deg, #001980 0%, #3AA4F4 100%)", glow: "rgba(58,164,244,0.25)" },
  { icon: TrendingUp, title: "Chuẩn mực & Chuyên nghiệp", en: "Professionalism", desc: "Quy trình rõ ràng, phân cấp minh bạch, đào tạo chuẩn hóa — affiliate là nghề nghiêm túc.", grad: "linear-gradient(135deg, #F24B21 0%, #FDBF45 100%)", glow: "rgba(242,75,33,0.25)" },
]

function ValueCard({ item, index }: { item: typeof values[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.15 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  const Icon = item.icon
  return (
    <div ref={ref} className="group relative p-6 rounded-2xl cursor-default overflow-hidden transition-all duration-500 hover:-translate-y-1"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "all 0.6s ease",
        transitionDelay: `${index * 80}ms`,
        background: "#fff",
        border: "1.5px solid rgba(0,25,128,0.08)",
        boxShadow: "0 2px 16px rgba(0,25,128,0.04)",
      }}>
      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 70% 60% at 30% 100%, ${item.glow} 0%, transparent 70%)` }} />
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 relative z-10 transition-transform group-hover:scale-110 duration-300"
        style={{ background: item.grad, boxShadow: `0 6px 20px ${item.glow}` }}>
        <Icon size={22} color="#fff" />
      </div>
      <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.18em", color: "#8D8D8D", textTransform: "uppercase" }} className="mb-1 relative z-10">{item.en}</p>
      <h3 className="font-bold text-sm mb-2 relative z-10" style={{ color: "#001980" }}>{item.title}</h3>
      <p className="text-xs leading-relaxed relative z-10" style={{ color: "#6b7280" }}>{item.desc}</p>

      {/* Bottom gradient border on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
        style={{ background: item.grad }} />
    </div>
  )
}

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true) }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="how-it-works" className="py-24 px-6 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">

        {/* ── Mission Banner ── */}
        <div ref={ref} className="relative overflow-hidden rounded-3xl mb-20 p-10 md:p-16"
          style={{ background: "linear-gradient(140deg, #00071f 0%, #001980 40%, #003acc 100%)", boxShadow: "0 32px 80px rgba(0,25,128,0.35)" }}>
          {/* mesh blobs */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none opacity-20"
            style={{ background: "radial-gradient(circle, #3AA4F4 0%, transparent 70%)", transform: "translate(25%, -25%)" }} />
          <div className="absolute bottom-0 left-16 w-56 h-56 rounded-full pointer-events-none opacity-15"
            style={{ background: "radial-gradient(circle, #FDBF45 0%, transparent 70%)", transform: "translateY(40%)" }} />
          <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full pointer-events-none opacity-10"
            style={{ background: "radial-gradient(circle, #F24B21 0%, transparent 70%)", transform: "translateY(-50%)" }} />
          {/* grid */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
              <span className="inline-block text-xs font-bold tracking-[0.2em] mb-4 px-3 py-1.5 rounded-full" style={{ background: "rgba(58,164,244,0.2)", color: "#3AA4F4", border: "1px solid rgba(58,164,244,0.3)" }}>
                SỨ MỆNH CỦA CHÚNG TÔI
              </span>
              <h2 className="font-black text-4xl md:text-5xl leading-tight mb-5">
                <span style={{ color: "#fff" }}>Next Step –</span><br />
                <span style={{ background: "linear-gradient(135deg, #3AA4F4 0%, #FDBF45 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Next Growth
                </span>
              </h2>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.7)" }}>
                NextGrowth là nền tảng <strong style={{ color: "#3AA4F4" }}>Affiliate Performance Marketing</strong> thuần, tập trung vào hiệu quả chuyển đổi và hoa hồng.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                Không đa cấp, không phân tầng. Chỉ một mục tiêu: <strong style={{ background: "linear-gradient(135deg,#FDBF45,#F24B21)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>làm → ghi nhận → trả hoa hồng trực tiếp</strong>.
              </p>
            </div>

            <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
              <div className="space-y-3">
                {[
                  { label: "Doanh nghiệp", desc: "Kênh affiliate hiệu quả, kiểm soát được, chi phí minh bạch", grad: "linear-gradient(135deg,#3AA4F4,#001980)" },
                  { label: "Publisher", desc: "Affiliate đúng nghĩa, tạo chuyển đổi, hoa hồng cao & minh bạch", grad: "linear-gradient(135deg,#FDBF45,#F24B21)" },
                  { label: "Thị trường", desc: "Chuẩn hoá affiliate tài chính, hệ sinh thái lành mạnh", grad: "linear-gradient(135deg,#F24B21,#FDBF45)" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl"
                    style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}>
                    <div className="w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center"
                      style={{ background: item.grad }}>
                      <span className="text-white font-black text-xs">{item.label[0]}</span>
                    </div>
                    <div>
                      <p className="font-bold text-sm mb-0.5" style={{ background: item.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{item.label}</p>
                      <p className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Core Values ── */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-[0.2em] mb-4 px-3 py-1.5 rounded-full" style={{ background: "rgba(242,75,33,0.08)", color: "#F24B21", border: "1px solid rgba(242,75,33,0.2)" }}>
            GIÁ TRỊ CỐT LÕI
          </span>
          <h2 className="font-black text-4xl md:text-5xl" style={{ color: "#001980" }}>
            6 nguyên tắc vận hành
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((item, i) => <ValueCard key={i} item={item} index={i} />)}
        </div>
      </div>
    </section>
  )
}