import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "NextGrowth là gì? Khác gì với affiliate truyền thống?",
    answer: "NextGrowth là nền tảng Affiliate Performance Marketing thuần — tập trung 100% vào hiệu quả chuyển đổi và minh bạch hoa hồng. Không vận hành theo mô hình đa cấp, không phân tầng cấp bậc. Mọi hoa hồng đều được ghi nhận tự động và thanh toán trực tiếp, không qua trung gian.",
  },
  {
    question: "Doanh nghiệp cần làm gì để bắt đầu với NextGrowth?",
    answer: "Doanh nghiệp đăng ký tài khoản Advertiser, kết nối chiến dịch lên nền tảng, thiết lập KPI và mức hoa hồng mong muốn. Đội ngũ NextGrowth sẽ hỗ trợ thiết kế luồng chuyển đổi phù hợp compliance và triển khai đến network publisher chuyên nghiệp. Toàn bộ quá trình được theo dõi realtime.",
  },
  {
    question: "Publisher nhận hoa hồng như thế nào? Thanh toán có nhanh không?",
    answer: "Hoa hồng được tính và ghi nhận tự động theo tracking ID cá nhân của từng publisher. Đối soát hoa hồng được thực hiện hàng ngày, thanh toán theo lịch định kỳ (ngày hoặc tuần tùy cấp publisher). Toàn bộ lịch sử giao dịch có thể tra cứu trực tiếp trên dashboard.",
  },
  {
    question: "Nền tảng có hỗ trợ đào tạo publisher không?",
    answer: "Có. NextGrowth có chương trình onboarding 7 ngày chuyển đổi số dành cho đại lý/publisher mới: mentor 1-1, landing page cá nhân hóa, tài liệu sản phẩm chuẩn hóa, CRM quản lý khách hàng và ID Tracking riêng. Publisher được trang bị đầy đủ công cụ để bắt đầu và phát triển.",
  },
  {
    question: "Làm thế nào đảm bảo tuân thủ pháp lý trong chiến dịch tài chính?",
    answer: "NextGrowth có quy trình kiểm soát nội dung chặt chẽ: tất cả nội dung truyền thông phải tuân theo hướng dẫn compliance do doanh nghiệp và NextGrowth cùng xây dựng. Hệ thống tự động gắn cờ nội dung vi phạm. Publisher vi phạm quy định sẽ bị xử lý theo chính sách và có thể bị đình chỉ hoa hồng.",
  },
  {
    question: "Độ chính xác của tracking có cao không?",
    answer: "Hệ thống tracking của NextGrowth đạt độ chính xác 98.5%, sử dụng công nghệ server-to-server tracking kết hợp pixel, giảm thiểu thất thoát do adblocker hoặc vấn đề cookie. Mọi chuyển đổi đều có log chi tiết, publisher và doanh nghiệp đều có thể xem lại lịch sử.",
  },
  {
    question: "NextGrowth hỗ trợ những lĩnh vực nào?",
    answer: "Hiện tại NextGrowth tập trung chính vào: Tài chính tiêu dùng (vay cá nhân, vay mua xe/nhà), Bảo hiểm nhân thọ & phi nhân thọ, Thẻ tín dụng, Tài khoản ngân hàng số, Dịch vụ đầu tư và một số dịch vụ số khác từ các đối tác chiến lược.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-24 px-6 pb-40 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p style={{ fontSize: 11, color: "#3AA4F4", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }} className="mb-3">
            HỎI & ĐÁP
          </p>
          <h2 className="font-black text-4xl md:text-5xl mb-4" style={{ color: "#001980" }}>
            Câu hỏi thường gặp
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            Tất cả những gì bạn cần biết về NextGrowth. Vẫn còn thắc mắc? Liên hệ đội ngũ hỗ trợ của chúng tôi.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}
              className="rounded-2xl px-6 overflow-hidden border-b last:border-b"
              style={{ background: "#f8faff", border: "1.5px solid #e5e9f5" }}>
              <AccordionTrigger className="text-left font-bold text-base hover:no-underline py-5"
                style={{ color: "#001980" }}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 leading-relaxed text-sm" style={{ color: "#6b7280" }}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 p-8 rounded-3xl text-center" style={{ background: "linear-gradient(135deg, #f0f4ff, #e8eeff)", border: "1.5px solid #001980" }}>
          <p className="font-bold text-lg mb-2" style={{ color: "#001980" }}>Vẫn còn câu hỏi khác?</p>
          <p className="text-sm mb-5" style={{ color: "#6b7280" }}>Đội ngũ hỗ trợ của NextGrowth luôn sẵn sàng 24/7</p>
          <button className="px-6 py-3 rounded-xl font-bold text-sm text-white transition-all duration-300 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #001980, #0028cc)", boxShadow: "0 4px 16px rgba(0,25,128,0.3)" }}>
            Liên hệ ngay
          </button>
        </div>
      </div>
    </section>
  )
}