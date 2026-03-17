"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { BarChart3, Link2, FileCheck, Wallet, Users, ShieldCheck, Zap, Globe } from "lucide-react"

const features = [
  { icon: BarChart3, title: "Dashboard Realtime", desc: "Theo dõi lead, doanh thu, hoa hồng mọi lúc mọi nơi — cập nhật từng giây.", color: "#001980" },
  { icon: Link2, title: "Tracking ID bảo mật", desc: "Mỗi publisher có ID riêng biệt, tracking chính xác mọi chuyển đổi.", color: "#3AA4F4" },
  { icon: FileCheck, title: "Quản lý chiến dịch", desc: "Thiết lập, kiểm soát và tối ưu chiến dịch affiliate đa nhãn hàng.", color: "#F24B21" },
  { icon: Wallet, title: "Hoa hồng tự động", desc: "Đối soát và thanh toán hoa hồng hàng ngày — không trì hoãn.", color: "#FDBF45" },
  { icon: Users, title: "Quản lý Publisher", desc: "Phân cấp, đào tạo và hỗ trợ publisher chuyên nghiệp theo lộ trình.", color: "#001980" },
  { icon: ShieldCheck, title: "Compliance tài chính", desc: "Kiểm soát nội dung và tuân thủ quy định pháp lý ngành tài chính.", color: "#3AA4F4" },
  { icon: Zap, title: "Tối ưu chuyển đổi", desc: "A/B testing, phân tích funnel và đề xuất cải tiến dựa trên dữ liệu.", color: "#F24B21" },
  { icon: Globe, title: "Đa kênh phân phối", desc: "Affiliate, Merchant, Telesales, Direct Sale, Publisher Network.", color: "#FDBF45" },
]

const channels = [
  { name: "Affiliate Marketing", desc: "ID tracking bảo mật, publisher tự triển khai nội dung theo hướng dẫn chuẩn.", value: "40%", color: "#001980" },
  { name: "Merchant", desc: "Điểm bán lẻ tích hợp giải pháp tài chính tại điểm mua hàng.", value: "25%", color: "#3AA4F4" },
  { name: "Telesales", desc: "Đội ngũ tư vấn chuyên nghiệp, chuyển đổi trực tiếp qua điện thoại.", value: "20%", color: "#F24B21" },
  { name: "Direct Sales", desc: "Tư vấn trực tiếp tại thực địa, phù hợp sản phẩm phức tạp.", value: "10%", color: "#FDBF45" },
  { name: "Publisher Network", desc: "Mạng lưới website/blog/community chuyên ngành tài chính.", value: "5%", color: "#8D8D8D" },
]

function FeatureCard({ item, index }: { item: typeof features[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.2 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  const Icon = item.icon
  return (
    <div ref={ref} className="p-6 rounded-2xl group hover:shadow-lg transition-all duration-300 cursor-default"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.6s ease", transitionDelay: `${index * 60}ms`, background: "#fff", border: "1px solid #e5e9f5" }}>
      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
        style={{ background: `${item.color}15`, border: `1.5px solid ${item.color}30` }}>
        <Icon size={20} style={{ color: item.color }} />
      </div>
      <h3 className="font-bold text-sm mb-2" style={{ color: "#001980" }}>{item.title}</h3>
      <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{item.desc}</p>
    </div>
  )
}

export function FeaturesSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p style={{ fontSize: 11, color: "#3AA4F4", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }} className="mb-3">TÍNH NĂNG NỀN TẢNG</p>
          <h2 className="font-black text-4xl md:text-5xl mb-4" style={{ color: "#001980" }}>
            Công cụ tăng trưởng<br />
            <span style={{ background: "linear-gradient(135deg, #001980, #3AA4F4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              đầy đủ trong một nền tảng
            </span>
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            Từ thiết lập chiến dịch, tracking, quản lý publisher đến thanh toán hoa hồng — tất cả trên một hệ thống duy nhất.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {features.map((item, i) => <FeatureCard key={i} item={item} index={i} />)}
        </div>

        {/* Channels Section */}
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <p style={{ fontSize: 11, color: "#F24B21", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }} className="mb-3">KÊNH PHÂN PHỐI</p>
            <h3 className="font-black text-3xl md:text-4xl mb-4" style={{ color: "#001980" }}>
              5 kênh bán hàng<br />linh hoạt & chuyên nghiệp
            </h3>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#6b7280" }}>
              Đa kênh phân phối giúp NextGrowth tối ưu chuyển đổi từng phân khúc khách hàng, từ digital đến trực tiếp.
            </p>
            <div className="space-y-4">
              {channels.map((c, i) => (
                <div key={i} className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-bold" style={{ color: "#001980" }}>{c.name}</span>
                    <span className="text-sm font-black" style={{ color: c.color }}>{c.value}</span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden" style={{ background: "#f0f4ff" }}>
                    <div className="h-full rounded-full transition-all duration-1000"
                      style={{ width: visible ? c.value : "0%", background: c.color, transitionDelay: `${i * 100 + 400}ms` }} />
                  </div>
                  <p className="text-xs mt-1" style={{ color: "#8D8D8D" }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl"
              style={{ background: "linear-gradient(135deg, #000d40 0%, #001980 100%)", boxShadow: "0 24px 64px rgba(0,25,128,0.3)" }}>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em" }}>LIVE ANALYTICS</p>
                  <p className="font-bold text-lg" style={{ color: "#fff" }}>Hiệu suất hôm nay</p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full" style={{ background: "rgba(58,164,244,0.2)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span style={{ fontSize: 10, color: "#3AA4F4", fontWeight: 700 }}>LIVE</span>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Tổng lead hôm nay", value: "1,284", change: "+12%", color: "#3AA4F4" },
                  { label: "Chuyển đổi thành công", value: "856", change: "+8.5%", color: "#FDBF45" },
                  { label: "Hoa hồng phát sinh", value: "₫48.2M", change: "+15%", color: "#F24B21" },
                  { label: "Publisher hoạt động", value: "234", change: "+3", color: "#fff" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.65)" }}>{row.label}</span>
                    <div className="text-right">
                      <span className="font-black text-base block" style={{ color: row.color }}>{row.value}</span>
                      <span style={{ fontSize: 10, color: "#4ade80" }}>{row.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}