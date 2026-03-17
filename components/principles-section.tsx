"use client"

import { useRef, useEffect } from "react"
import { HighlightText } from "@/components/highlight-text"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function PrinciplesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const principlesRef = useRef<HTMLDivElement>(null)

  const principles = [
    {
      number: "01",
      titleParts: [
        { text: "ĐỐI TÁC", highlight: true },
        { text: " CUNG ỨNG", highlight: false },
      ],
      description:
        "Kết nối trực tiếp với các tập đoàn tài chính hàng đầu: Ngân hàng TMCP, Công ty Bảo hiểm nhân thọ & phi nhân thọ, Tổ chức tín dụng, Sàn Thương mại điện tử — tổng cộng 22+ đối tác chiến lược.",
      align: "left",
      badge: "22+ Đối tác",
    },
    {
      number: "02",
      titleParts: [
        { text: "KÊNH", highlight: true },
        { text: " PHÂN PHỐI", highlight: false },
      ],
      description:
        "Đa kênh phân phối linh hoạt: Affiliate Marketing (ID tracking bảo mật), Merchant (điểm bán lẻ tích hợp), Direct Sales, Telesales chuyên nghiệp, Publisher network — tối ưu chuyển đổi từng phân khúc.",
      align: "right",
      badge: "5 Kênh bán",
    },
    {
      number: "03",
      titleParts: [
        { text: "HỖ TRỢ", highlight: true },
        { text: " CHUYỂN ĐỔI SỐ", highlight: false },
      ],
      description:
        "Chương trình Đại lý 7 ngày chuyển đổi số: Mentor 1-1, Landing page cá nhân hóa, CRM quản lý khách hàng, ID Tracking bảo mật — đầy đủ công cụ để đại lý truyền thống thành công trong kỷ nguyên số.",
      align: "left",
      badge: "7 Ngày onboard",
    },
    {
      number: "04",
      titleParts: [
        { text: "VẬN HÀNH", highlight: true },
        { text: " MINH BẠCH", highlight: false },
      ],
      description:
        "Hệ thống Dashboard real-time theo dõi lead, doanh thu và hoa hồng mỗi giây. Đối soát tự động, thanh toán hoa hồng hàng ngày — không trì hoãn, không mờ ám.",
      align: "right",
      badge: "Real-time CRM",
    },
  ]

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !principlesRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })

      const articles = principlesRef.current?.querySelectorAll("article")
      articles?.forEach((article, index) => {
        const isRight = principles[index].align === "right"
        gsap.from(article, {
          x: isRight ? 80 : -80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: article,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="principles" className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12 bg-blue-100">
      {/* Section header */}
      <div ref={headerRef} className="mb-24">
        <span className=" text-[10px] uppercase tracking-[0.3em] text-accent">03 / Hệ sinh thái</span>
        <h2 className="mt-4 font-sans text-5xl md:text-7xl tracking-tight text-primary">MÔ HÌNH HOẠT ĐỘNG</h2>
        <p className="mt-3  text-xs text-muted-foreground max-w-lg">
          Mô hình kết nối đa chiều: Đối tác – Kênh bán – Khách hàng, tối ưu chuyển đổi và mang lại giá trị bền vững cho toàn hệ sinh thái.
        </p>
      </div>

      {/* Staggered principles */}
      <div ref={principlesRef} className="space-y-24 md:space-y-32">
        {principles.map((principle, index) => (
          <article
            key={index}
            className={`flex flex-col ${principle.align === "right" ? "items-end text-right" : "items-start text-left"
              }`}
          >
            {/* Annotation label */}
            <div className={`flex items-center gap-3 mb-4 ${principle.align === "right" ? "flex-row-reverse" : ""}`}>
              <span className=" text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {principle.number} / {principle.titleParts[0].text.split(" ")[0]}
              </span>
              <span className=" text-[9px] uppercase tracking-widest px-2 py-0.5 border border-accent/30 text-accent bg-accent/5">
                {principle.badge}
              </span>
            </div>

            <h3 className="font-sans text-4xl md:text-6xl lg:text-8xl tracking-tight leading-none">
              {principle.titleParts.map((part, i) =>
                part.highlight ? (
                  <HighlightText key={i} parallaxSpeed={0.6}>
                    {part.text}
                  </HighlightText>
                ) : (
                  <span key={i}>{part.text}</span>
                ),
              )}
            </h3>

            {/* Description */}
            <p className="mt-6 max-w-lg  text-sm text-muted-foreground leading-relaxed">
              {principle.description}
            </p>

            {/* Decorative line */}
            <div className={`mt-8 h-[1px] bg-border w-24 md:w-48 ${principle.align === "right" ? "mr-0" : "ml-0"}`} />
          </article>
        ))}
      </div>
    </section>
  )
}
