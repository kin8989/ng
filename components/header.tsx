"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Menu, X, ArrowRight } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const el = document.getElementById(targetId)
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top: offset, behavior: "smooth" })
      setIsOpen(false)
    }
  }

  const navLinks = [
    { label: "Giới thiệu", id: "about" },
    { label: "Tính năng", id: "features" },
    { label: "Hệ sinh thái", id: "principles" },
    { label: "Đối tác", id: "testimonials" },
    { label: "FAQ", id: "faq" },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled ? "px-4 pt-3" : ""}`}>
      <div className={`max-w-7xl mx-auto transition-all duration-400 ${
        scrolled
          ? "rounded-2xl px-6 py-3 border border-[#001980]/20"
          : "px-6 py-5"
        }`}
        style={scrolled ? { background: "rgba(255,255,255,0.95)", backdropFilter: "blur(20px)", boxShadow: "0 4px 24px rgba(0,25,128,0.12)" } : {}}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }) }}
            className="flex items-center gap-2 cursor-pointer">
            <img src="/images/logo.png" alt="NextGrowth" className="h-9" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`}
                onClick={(e) => handleSmoothScroll(e, link.id)}
                className="text-sm font-medium transition-colors cursor-pointer hover:opacity-70"
                style={{ color: scrolled ? "#001980" : "rgba(255,255,255,0.85)" }}>
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm font-medium px-4 py-2 rounded-xl transition-colors"
              style={{ color: scrolled ? "#001980" : "rgba(255,255,255,0.8)" }}>
              Đăng nhập
            </a>
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all duration-300 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #F24B21 0%, #ff6540 100%)", boxShadow: "0 4px 16px rgba(242,75,33,0.35)" }}>
              Đăng ký ngay
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden p-2 rounded-xl transition-colors"
            style={{ color: scrolled ? "#001980" : "#fff" }}
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="md:hidden mt-4 pt-4 pb-4 border-t border-[#001980]/10 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`}
                onClick={(e) => handleSmoothScroll(e, link.id)}
                className="py-2 text-sm font-medium text-[#001980]">
                {link.label}
              </a>
            ))}
            <button className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-white"
              style={{ background: "linear-gradient(135deg, #F24B21 0%, #ff6540 100%)" }}>
              Đăng ký ngay <ArrowRight size={15} />
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}