"use client"

import { useState, useRef, useEffect } from "react"
import { Target, TrendingUp, Shield, Users, BarChart3, Zap } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Minh bạch",
    en: "Transparency",
    desc: "Dữ liệu tracking, hoa hồng và hiệu quả chiến dịch được công khai minh bạch theo thời gian thực. Không trì hoãn, không mờ ám.",
    color: "#001980",
    bg: "#f0f4ff",
  },
  {
    icon: Target,
    title: "Tuân thủ & Trách nhiệm",
    en: "Compliance",
    desc: "Thiết kế luồng chuyển đổi phù hợp compliance tài chính. Kiểm soát nội dung publisher và quản trị rủi ro pháp lý chặt chẽ.",
    color: "#F24B21",
    bg: "#fff5f2",
  },
  {
    icon: Users,
    title: "Đồng hành tăng trưởng",
    en: "Shared Growth",
    desc: "Doanh nghiệp tăng trưởng bền vững. Publisher có thu nhập ổn định lâu dài. NextGrowth phát triển cùng toàn bộ hệ sinh thái.",
    color: "#3AA4F4",
    bg: "#f0f9ff",
  },
  {
    icon: BarChart3,
    title: "Hiệu quả thực chất",
    en: "Real Impact",
    desc: "Đo lường end-to-end, tối ưu chuyển đổi thực chất — không chạy theo traffic rác, ưu tiên chất lượng hơn số lượng.",
    color: "#FDBF45",
    bg: "#fffdf0",
  },
  {
    icon: Zap,
    title: "Công nghệ làm nền tảng",
    en: "Technology-Driven",
    desc: "Tracking chính xác, dashboard realtime, khả năng tích hợp và mở rộng cao — công nghệ tạo lợi thế cạnh tranh bền vững.",
    color: "#001980",
    bg: "#f0f4ff",
  },
  {
    icon: TrendingUp,
    title: "Chuẩn mực & Chuyên nghiệp",
    en: "Professionalism",
    desc: "Quy trình rõ ràng, phân cấp publisher minh bạch, đào tạo & chuẩn hóa nội dung — affiliate là một nghề nghiêm túc.",
    color: "#F24B21",
    bg: "#fff5f2",
  },
]

function ValueCard({ item, index }: { item: typeof values[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.2 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const Icon = item.icon
  return (
    <div ref={ref}
      className="p-6 rounded-2xl transition-all duration-700 hover:shadow-lg group cursor-default"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${index * 80}ms`,
        background: item.bg,
        border: `1px solid ${item.color}20`,
      }}>
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
        style={{ background: item.color, boxShadow: `0 4px 16px ${item.color}40` }}>
        <Icon size={22} color="#fff" />
      </div>
      <p style={{ fontSize: 10, color: item.color, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }} className="mb-1">{item.en}</p>
      <h3 className="font-bold text-base mb-2" style={{ color: "#001980" }}>{item.title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.desc}</p>
    </div>
  )
}

export function ServicesSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Mission Banner */}
        <div ref={ref} className="relative overflow-hidden rounded-3xl mb-20 p-10 md:p-16"
          style={{ background: "linear-gradient(135deg, #000d40 0%, #001980 60%, #0028cc 100%)" }}>
          {/* Decoration */}
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #3AA4F4 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
          <div className="absolute bottom-0 left-20 w-48 h-48 rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #FDBF45 0%, transparent 70%)", transform: "translateY(40%)" }} />

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
              <p style={{ fontSize: 11, color: "#3AA4F4", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }} className="mb-4">
                SỨ MỆNH CỦA CHÚNG TÔI
              </p>
              <h2 className="font-black text-4xl md:text-4xl leading-tight mb-6" style={{ color: "#fff" }}>
                Next Step -
                <span style={{ background: "linear-gradient(135deg, #3AA4F4, #FDBF45)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {''} Next Growth
                </span>
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.75)" }}>
                NextGrowth là nền tảng <strong style={{ color: "#3AA4F4" }}>Affiliate Performance Marketing</strong> thuần, tập trung vào hiệu quả chuyển đổi và hoa hồng.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                Không vận hành theo mô hình đa cấp, không phân tầng. Chỉ một mục tiêu: <strong style={{ color: "#FDBF45" }}>làm — ghi nhận — trả hoa hồng trực tiếp</strong>.
              </p>
            </div>
            <div className={`transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
              <div className="space-y-4">
                {[
                  { label: "Doanh nghiệp", desc: "Cần kênh affiliate hiệu quả, kiểm soát được, chi phí minh bạch", color: "#3AA4F4" },
                  { label: "Publisher", desc: "Muốn làm affiliate đúng nghĩa, tạo chuyển đổi và nhận hoa hồng cao – minh bạch", color: "#FDBF45" },
                  { label: "Thị trường", desc: "Chuẩn hoá affiliate tài chính, giảm rủi ro, tạo hệ sinh thái lành mạnh", color: "#F24B21" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: item.color }} />
                    <div>
                      <p className="font-bold text-sm mb-1" style={{ color: item.color }}>{item.label}</p>
                      <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="text-center mb-12">
          <p style={{ fontSize: 11, color: "#F24B21", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }} className="mb-3">
            GIÁ TRỊ CỐT LÕI
          </p>
          <h2 className="font-black text-4xl md:text-5xl" style={{ color: "#001980" }}>
            6 nguyên tắc vận hành
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((item, i) => <ValueCard key={i} item={item} index={i} />)}
        </div>
      </div>
    </section>
  )
}