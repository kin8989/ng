"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

const allPartners = [
  { filename: '/partner/VPBank_logo.png', name: 'VPBank' },
  { filename: '/partner/ocb.png', name: 'OCB' },
  { filename: '/partner/FE-credit.png', name: 'FE Credit' },
  { filename: '/partner/leobank.png', name: 'Leobank' },
  { filename: '/partner/shopee-food.png', name: 'Shopee Food' },
  { filename: '/partner/abbdca6e-a7ac-430f-a224-1e455b38c563.png', name: 'Đối tác 1' },
  { filename: '/partner/d9e386b3-73c3-4668-a66d-986a68ea79ea.png', name: 'Đối tác 2' },
  { filename: '/partner/f6253196-85a7-403b-ae19-bc7de19239f0.png', name: 'Đối tác 3' },
  { filename: '/partner/74bb623a-c88b-4804-afc6-760b8076f936.png', name: 'Đối tác 4' },
  { filename: '/partner/46c79f4e-6f74-4744-814a-c731355528a3.png', name: 'Đối tác 5' },
  { filename: '/partner/a354a42b-6c10-4d4f-9fc4-7eea0fdce3b3.png', name: 'Đối tác 6' },
  { filename: '/partner/9b1a0d0c-f1ca-4183-a1df-0ce71f781f4c.png', name: 'Đối tác 7' },
]

const ARC_COUNT = 10

function PartnerOrb({ src, name, x, y, size, opacity }: {
  src: string; name: string; x: string; y: number; size: number; opacity: number
}) {
  return (
    <div
      className="absolute flex items-center justify-center rounded-full transition-all duration-1000 ease-in-out hover:scale-125 hover:z-30 hover:opacity-100 group"
      style={{
        left: x, top: y,
        width: size, height: size,
        transform: 'translate(-50%, -50%)',
        background: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.2)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 0 10px rgba(255,255,255,0.1)',
        opacity,
      }}
    >
      <div className="relative w-[75%] h-[75%]">
        <Image 
          src={src} 
          alt={name} 
          fill 
          sizes={`${size}px`} 
          className="object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity" 
        />
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  const [step, setStep] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  
  // Điều khiển vòng lặp chạy mượt
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      
      // Delay một chút để tạo cảm giác logo cũ mờ đi rồi logo mới mới hiện lên
      setTimeout(() => {
        setStep(prev => prev + 1)
        setIsTransitioning(false)
      }, 500)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  // Logic index: Logo trung tâm sẽ là logo sắp tiến vào vị trí số 5 trên arc
  const centerPartnerIndex = (step + 5) % allPartners.length
  const currentPartner = allPartners[centerPartnerIndex]

  const W = 1000  
  const H = 350   
  const arcY = 120 
  const arcDepth = 110 

  const arcLogos = Array.from({ length: ARC_COUNT }, (_, i) => {
    const t = i / (ARC_COUNT - 1)
    const x = t * W
    const y = arcY + arcDepth * (4 * t * (1 - t))
    
    // Logic trượt: i là vị trí trên cung, step là độ lệch thời gian
    // Dùng (step + i) để các logo "trượt" từ phải sang trái, 
    // hoặc (step - i) để trượt từ trái sang phải. Ở đây ta dùng trượt trái.
    const partnerIdx = (step + i) % allPartners.length
    
    const distFromCenter = Math.abs(t - 0.5)
    const size = 55 + (1 - distFromCenter * 2) * 25 
    const opacity = 0.2 + (1 - distFromCenter * 2) * 0.7
    
    return { x, y, size, opacity, partnerIdx }
  })

  const arcPath = arcLogos.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')

  return (
    <section id="testimonials" className="py-24 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #001980 60%, #001980 50%, #001980 100%)' }}>

      {/* Trang trí background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20 blur-[100px]"
        style={{ background: 'radial-gradient(circle, #3AA4F4 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-10 blur-[80px]"
        style={{ background: 'radial-gradient(circle, #F24B21 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.2em] mb-4 px-4 py-2 rounded-full bg-blue-500/10 text-[#3AA4F4] border border-blue-500/30">
            ĐỐI TÁC CHIẾN LƯỢC
          </span>
          <h2 className="font-black text-4xl md:text-6xl mb-4 text-white leading-tight">
            Tin dùng bởi <br />
            <span className="bg-gradient-to-r from-[#3AA4F4] via-[#FDBF45] to-[#F24B21] bg-clip-text text-transparent">
              22+ đối tác hàng đầu
            </span>
          </h2>
        </div>

        <div className="relative mx-auto select-none" style={{ width: '100%', maxWidth: 1000, height: 420 }}>
          {/* SVG Arc Line */}
          <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
            <path d={arcPath} fill="none" stroke="url(#arcGrad)" strokeWidth="2" strokeDasharray="12 8" className="transition-all duration-1000" />
            <defs>
              <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3AA4F4" stopOpacity="0" />
                <stop offset="50%" stopColor="#FDBF45" stopOpacity="1" />
                <stop offset="100%" stopColor="#F24B21" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Các Logo trên vòng cung */}
          {arcLogos.map((p, i) => {
            // Ẩn logo ở vị trí trung tâm (index 4 và 5) để nhường chỗ cho Box chính
            if (i === 4 || i === 5) return null
            return (
              <PartnerOrb
                key={`${p.partnerIdx}-${i}`} // Key kết hợp để React render mượt khi index thay đổi
                src={allPartners[p.partnerIdx].filename}
                name={allPartners[p.partnerIdx].name}
                x={`${(p.x / W) * 100}%`}
                y={p.y}
                size={p.size}
                opacity={p.opacity}
              />
            )
          })}

          {/* LOGO TRUNG TÂM PHÓNG TO */}
          <div
            className="absolute flex items-center justify-center rounded-[2.5rem] transition-all duration-700 ease-in-out"
            style={{
              left: '50%',
              top: '65%',
              transform: 'translate(-50%, -50%)',
              background: '#fff',
              boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.6), 0 0 40px rgba(58,164,244,0.4)',
              width: 200, // To hơn bản cũ
              height: 140,
              zIndex: 60,
            }}
          >
            <div className={`relative w-[85%] h-[75%] transition-all duration-500 ${isTransitioning ? 'scale-75 opacity-0 blur-md' : 'scale-100 opacity-100 blur-0'}`}>
              <Image
                src={currentPartner.filename}
                alt={currentPartner.name}
                fill
                className="object-contain"
                priority
              />
            </div>
            
            {/* Hiệu ứng Glow chạy xung quanh */}
            <div className="absolute -inset-2 bg-linear-to-r from-[#3AA4F4] to-[#FDBF45] rounded-[2.7rem] opacity-30 blur-2xl animate-pulse -z-10" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { label: 'Ngân hàng', count: '8+', color: '#3AA4F4' },
            { label: 'Bảo hiểm', count: '5+', color: '#FDBF45' },
            { label: 'Tài chính', count: '4+', color: '#F24B21' },
            { label: 'Dịch vụ số', count: '5+', color: '#3AA4F4' },
          ].map((cat, i) => (
            <div key={i} className="text-center p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <p className="text-3xl font-black mb-1" style={{ color: cat.color }}>{cat.count}</p>
              <p className="text-xs uppercase tracking-widest opacity-60 text-white">{cat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}