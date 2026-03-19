import { ArrowRight, CheckCircle } from "lucide-react"

const forBusiness = [
  "Kênh tăng trưởng hiệu quả, kiểm soát rủi ro",
  "Chi phí minh bạch, đo lường chính xác",
  "Tăng trưởng dài hạn, không phụ thuộc traffic rác",
  "Tuân thủ pháp lý ngành tài chính",
]
const forPublisher = [
  "Thu nhập rõ ràng, minh bạch theo thời gian thực",
  "Lộ trình phát triển và đào tạo bài bản",
  "Môi trường chuyên nghiệp, được hỗ trợ 24/7",
  "Hoa hồng thanh toán hàng ngày",
]

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA Banner */}
        <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 mb-16 text-center"
          style={{ background: "linear-gradient(135deg, #000d40 0%, #001980 50%, #0028cc 100%)" }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-15"
              style={{ background: "radial-gradient(circle, #F24B21 0%, transparent 70%)", transform: "translate(20%, -20%)" }} />
            <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full opacity-10"
              style={{ background: "radial-gradient(circle, #3AA4F4 0%, transparent 70%)", transform: "translate(-20%, 20%)" }} />
          </div>
          <div className="relative z-10">
            <p style={{ fontSize: 11, color: "#FDBF45", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }} className="mb-4">
              SẴN SÀNG TĂNG TRƯỞNG?
            </p>
            <h2 className="font-black text-4xl md:text-6xl mb-6 leading-tight" style={{ color: "#fff" }}>
              Bắt đầu hành trình<br />
              <span style={{ background: "linear-gradient(135deg, #3AA4F4 0%, #FDBF45 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                tăng trưởng thực chất
              </span>
            </h2>
            <p className="text-base max-w-2xl mx-auto mb-10" style={{ color: "rgba(255,255,255,0.7)" }}>
              NextGrowth tin rằng tăng trưởng không đến từ may mắn, mà từ hệ thống đúng, dữ liệu đúng và con người đúng.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-base text-white transition-all duration-300 hover:scale-105"
                style={{ background: "linear-gradient(135deg, #F24B21 0%, #ff6540 100%)", boxShadow: "0 8px 32px rgba(242,75,33,0.4)" }}>
                Đăng ký doanh nghiệp
                <ArrowRight size={18} />
              </button>
              <button className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-base transition-all duration-300 hover:scale-105"
                style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)", backdropFilter: "blur(10px)" }}>
                Trở thành Publisher
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Value Props Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl" style={{ background: "#f0f4ff", border: "2px solid #001980" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: "#001980" }}>
                <span className="text-white font-black text-lg">B</span>
              </div>
              <div>
                <p style={{ fontSize: 10, color: "#001980", fontWeight: 700, letterSpacing: "0.15em" }}>DÀNH CHO</p>
                <h3 className="font-black text-xl" style={{ color: "#001980" }}>Doanh nghiệp</h3>
              </div>
            </div>
            <div className="space-y-3">
              {forBusiness.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={16} color="#001980" className="flex-shrink-0 mt-0.5" />
                  <span className="text-sm" style={{ color: "#374151" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-3xl" style={{ background: "#fff8f0", border: "2px solid #F24B21" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: "#F24B21" }}>
                <span className="text-white font-black text-lg">P</span>
              </div>
              <div>
                <p style={{ fontSize: 10, color: "#F24B21", fontWeight: 700, letterSpacing: "0.15em" }}>DÀNH CHO</p>
                <h3 className="font-black text-xl" style={{ color: "#F24B21" }}>Publisher</h3>
              </div>
            </div>
            <div className="space-y-3">
              {forPublisher.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={16} color="#F24B21" className="shrink-0 mt-0.5" />
                  <span className="text-sm" style={{ color: "#374151" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}