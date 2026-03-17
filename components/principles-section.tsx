"use client"

import { useRef, useEffect, useState } from "react"
import { Building2, Network, Smartphone, Eye } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Building2,
    title: "Doanh nghiệp kết nối",
    subtitle: "ADVERTISER",
    desc: "Doanh nghiệp (ngân hàng, bảo hiểm, fintech, dịch vụ số) kết nối chiến dịch lên nền tảng NextGrowth. Thiết lập KPI, mức hoa hồng, quy định nội dung và yêu cầu tuân thủ.",
    points: ["Thiết lập chiến dịch dễ dàng", "Kiểm soát nội dung & compliance", "Đo lường ROI chính xác"],
    color: "#001980",
    bg: "#f0f4ff",
    align: "left",
    badge: "22+ Đối tác",
  },
  {
    number: "02",
    icon: Network,
    title: "NextGrowth vận hành",
    subtitle: "PLATFORM",
    desc: "Nền tảng công nghệ vận hành toàn bộ: tracking realtime, kiểm soát chất lượng, phân phối chiến dịch đến publisher, đo lường và tối ưu hiệu suất liên tục.",
    points: ["Tracking chính xác 98.5%", "Dashboard realtime 24/7", "Tối ưu tự động theo data"],
    color: "#F24B21",
    bg: "#fff5f2",
    align: "right",
    badge: "5 Kênh bán",
  },
  {
    number: "03",
    icon: Smartphone,
    title: "Publisher triển khai",
    subtitle: "PUBLISHER",
    desc: "Publisher / đội ngũ bán hàng nhận chiến dịch theo hướng dẫn chuẩn hoá, tạo chuyển đổi hợp lệ qua đa kênh (Affiliate, Merchant, Telesales, Direct Sale).",
    points: ["Đào tạo & hỗ trợ liên tục", "ID Tracking bảo mật cá nhân", "Hoa hồng thanh toán hàng ngày"],
    color: "#3AA4F4",
    bg: "#f0f9ff",
    align: "left",
    badge: "6K+ Publisher",
  },
  {
    number: "04",
    icon: Eye,
    title: "Kết quả minh bạch",
    subtitle: "TRANSPARENCY",
    desc: "Toàn bộ kết quả được ghi nhận và hiển thị minh bạch: lead, doanh thu, hoa hồng, đối soát tự động. Mọi bên đều theo dõi được theo thời gian thực.",
    points: ["Đối soát hoa hồng tự động", "Báo cáo chi tiết end-to-end", "Thanh toán không trì hoãn"],
    color: "#FDBF45",
    bg: "#fffdf0",
    align: "right",
    badge: "Real-time CRM",
  },
]

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.2 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const Icon = step.icon
  const isRight = step.align === "right"

  return (
    <div ref={ref} className={`flex flex-col md:flex-row gap-8 items-center transition-all duration-800 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 100}ms` }}>
      {isRight && <div className="hidden md:block flex-1" />}
      <div className="w-full md:w-[55%] p-8 rounded-3xl group hover:shadow-xl transition-all duration-300"
        style={{ background: step.bg, border: `2px solid ${step.color}20` }}>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: step.color, boxShadow: `0 6px 20px ${step.color}40` }}>
            <Icon size={26} color="#fff" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span style={{ fontSize: 10, color: step.color, fontWeight: 700, letterSpacing: "0.15em" }}>{step.number} / {step.subtitle}</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold" style={{ background: step.color, color: "#fff" }}>{step.badge}</span>
            </div>
            <h3 className="font-black text-2xl" style={{ color: "#001980" }}>{step.title}</h3>
          </div>
        </div>
        <p className="text-sm leading-relaxed mb-5" style={{ color: "#6b7280" }}>{step.desc}</p>
        <div className="space-y-2">
          {step.points.map((p, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: step.color }} />
              <span className="text-sm font-medium" style={{ color: "#001980" }}>{p}</span>
            </div>
          ))}
        </div>
      </div>
      {!isRight && <div className="hidden md:block flex-1" />}
    </div>
  )
}

export function PrinciplesSection() {
  return (
    <section id="principles" className="py-24 px-6" style={{ background: "#f8faff" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p style={{ fontSize: 11, color: "#F24B21", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }} className="mb-3">
            MÔ HÌNH HOẠT ĐỘNG
          </p>
          <h2 className="font-black text-4xl md:text-6xl mb-4" style={{ color: "#001980" }}>
            Cách NextGrowth<br />
            <span style={{ background: "linear-gradient(135deg, #3AA4F4, #F24B21)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              tạo ra giá trị
            </span>
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            Mô hình kết nối đa chiều minh bạch: Doanh nghiệp → Nền tảng → Publisher → Kết quả.
            Mỗi bên đều nhìn thấy giá trị của mình.
          </p>
        </div>

        {/* Connection line */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 hidden md:block" style={{ background: "linear-gradient(to bottom, #001980, #3AA4F4, #F24B21, #FDBF45)", transform: "translateX(-50%)" }} />
          <div className="space-y-10">
            {steps.map((step, i) => <StepCard key={i} step={step} index={i} />)}
          </div>
        </div>
      </div>
    </section>
  )
}