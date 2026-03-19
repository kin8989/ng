import Link from "next/link"
import { Twitter, Linkedin, Instagram, Facebook, ArrowRight } from "lucide-react"

const footerLinks = {
  platform: [
    { label: "Tính năng", href: "#features" },
    { label: "Hệ sinh thái", href: "#principles" },
    { label: "Đối tác", href: "#testimonials" },
    { label: "Dashboard", href: "#" },
  ],
  company: [
    { label: "Về chúng tôi", href: "#about" },
    { label: "Tuyển dụng", href: "#" },
    { label: "Báo chí", href: "#" },
    { label: "Blog", href: "#" },
  ],
  legal: [
    { label: "Điều khoản", href: "#" },
    { label: "Bảo mật", href: "#" },
    { label: "Cookie", href: "#" },
    { label: "Pháp lý", href: "#" },
  ],
  support: [
    { label: "Trung tâm hỗ trợ", href: "#" },
    { label: "Liên hệ", href: "#" },
    { label: "FAQ", href: "#faq" },
    { label: "Onboarding", href: "#" },
  ],
}

export function Footer() {
  return (
    <div className="relative" style={{ background: "#000d40" }}>
      {/* Big wordmark */}
      <div className="overflow-hidden  py-8">
        <h2 className="font-black text-center leading-none tracking-tighter select-none"
          style={{ fontSize: "clamp(60px, 14vw, 160px)", color: "rgba(255,255,255,0.06)", lineHeight: 0.85 }}>
          nextgrowth
        </h2>
      </div>

      <footer id="contact" className="relative z-10 border-t px-6 py-16" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <img src="/images/logo.png" alt="NextGrowth" className="h-9" />
              </Link>
              <p className="text-sm mb-2 font-bold" style={{ color: "rgba(255,255,255,0.9)" }}>nextgrowth</p>
              <p className="text-xs mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>Next Step — Next Growth.<br />Affiliate Performance Marketing Platform.</p>

              {/* Newsletter mini */}
              <div className="flex gap-2 mb-6">
                <input placeholder="Email của bạn" className="flex-1 px-3 py-2 rounded-xl text-xs outline-none"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff" }} />
                <button className="p-2 rounded-xl" style={{ background: "#F24B21" }}>
                  <ArrowRight size={14} color="#fff" />
                </button>
              </div>

              <div className="flex gap-3">
                {[Twitter, Linkedin, Instagram, Facebook].map((Icon, i) => (
                  <Link key={i} href="#"
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
                    <Icon className="w-4 h-4" style={{ color: "rgba(255,255,255,0.6)" }} />
                  </Link>
                ))}
              </div>
            </div>

            {[
              { title: "Nền tảng", links: footerLinks.platform },
              { title: "Công ty", links: footerLinks.company },
              { title: "Pháp lý", links: footerLinks.legal },
              { title: "Hỗ trợ", links: footerLinks.support },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="text-xs font-bold mb-4 uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <Link href={link.href} className="text-sm transition-colors hover:opacity-100"
                        style={{ color: "rgba(255,255,255,0.5)" }}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
              © 2026 FIMI Tech Co., Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#F24B21" }} />
              <p className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>
                nextgrowth powered by FIMI
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}