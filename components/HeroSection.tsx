'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CalendarCheck, Brain, Server, Cloud, ShoppingBag, Globe, CheckCircle2, Layers } from 'lucide-react';

const glassCards = [
  {
    icon: Brain,
    label: 'AI Solutions',
    desc: 'LLMs, Agents & Automation',
    color: 'from-sky-500/10 to-blue-400/10',
    iconColor: 'text-sky-500',
    border: 'border-sky-200/60',
  },
  {
    icon: Server,
    label: 'Enterprise Software',
    desc: 'SaaS, ERP & Platforms',
    color: 'from-blue-500/10 to-slate-400/10',
    iconColor: 'text-blue-600',
    border: 'border-blue-200/60',
  },
  {
    icon: Cloud,
    label: 'Cloud Engineering',
    desc: 'AWS, Azure & DevOps',
    color: 'from-cyan-500/10 to-teal-400/10',
    iconColor: 'text-cyan-600',
    border: 'border-cyan-200/60',
  },
  {
    icon: ShoppingBag,
    label: 'Shopify Development',
    desc: 'Custom Apps & AI Commerce',
    color: 'from-emerald-500/10 to-green-400/10',
    iconColor: 'text-emerald-600',
    border: 'border-emerald-200/60',
  },
];

const trustPoints = [
  'Global delivery across 4 continents',
  'Enterprise-grade architecture standards',
  'End-to-end product ownership',
];

// Floating decoration shapes
const floatingElements = [
  { size: 320, x: '60%', y: '-8%', opacity: 0.45, blur: 80, color: '#bfdbfe' },
  { size: 260, x: '-6%', y: '60%', opacity: 0.35, blur: 70, color: '#e0f2fe' },
  { size: 180, x: '80%', y: '55%', opacity: 0.3, blur: 60, color: '#cffafe' },
  { size: 140, x: '40%', y: '80%', opacity: 0.25, blur: 50, color: '#dbeafe' },
];

export default function HeroSection() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden w-full max-w-full"
      style={{
        background: 'linear-gradient(150deg, #ffffff 0%, #f0f7ff 35%, #e8f4fd 65%, #f5f9ff 100%)',
      }}
    >
      {/* Soft ambient glow blobs — clipped to viewport */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingElements.map((el, i) => (
        <div
          key={i}
            className="absolute rounded-full"
          style={{
            width: el.size,
            height: el.size,
            left: el.x,
            top: el.y,
            background: el.color,
            opacity: el.opacity,
            filter: `blur(${el.blur}px)`,
          }}
        />
      ))}
      </div>

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          backgroundImage: `radial-gradient(circle, #94a3b8 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
          opacity: 0.08,
        }}
      />

      {/* World map + floating icons wrapper — clipped */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 1400 700"
          className="absolute w-full h-full opacity-[0.035]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Simplified continent silhouettes as filled paths */}
          {/* North America */}
          <path d="M160,120 C150,130 130,160 140,200 C150,240 170,260 200,280 C220,295 230,310 220,330 C210,350 190,360 200,380 C210,400 240,390 260,370 C280,350 290,320 310,300 C330,280 350,270 340,240 C330,210 310,190 320,160 C330,130 310,100 280,90 C250,80 220,90 200,100 C180,110 170,110 160,120Z" fill="#2563b0" />
          {/* South America */}
          <path d="M240,400 C220,420 210,450 220,490 C230,530 250,560 260,590 C270,620 260,640 270,650 C280,660 300,650 310,630 C320,610 310,580 320,550 C330,520 350,500 340,470 C330,440 310,420 290,410 C270,400 255,395 240,400Z" fill="#2563b0" />
          {/* Europe */}
          <path d="M590,90 C570,100 560,120 570,140 C580,160 600,165 610,150 C620,135 615,115 630,105 C645,95 650,110 660,120 C670,130 665,150 670,160 C675,170 690,165 695,150 C700,135 690,115 680,100 C670,85 650,80 630,80 C610,80 600,85 590,90Z" fill="#2563b0" />
          {/* Africa */}
          <path d="M590,180 C570,200 560,230 565,270 C570,310 585,340 590,380 C595,420 585,450 595,470 C605,490 625,485 635,465 C645,445 635,415 640,385 C645,355 660,330 655,295 C650,260 635,235 625,210 C615,185 600,175 590,180Z" fill="#2563b0" />
          {/* Asia */}
          <path d="M730,80 C700,90 680,110 690,140 C700,170 730,175 750,160 C770,145 770,120 790,110 C810,100 830,110 850,100 C870,90 875,70 860,60 C845,50 820,55 800,60 C780,65 755,70 730,80Z M780,130 C760,145 750,170 760,200 C770,230 800,240 820,225 C840,210 840,185 860,175 C880,165 900,175 910,165 C920,155 915,135 900,125 C885,115 865,120 850,130 C835,140 800,115 780,130Z" fill="#2563b0" />
          {/* Australia */}
          <path d="M940,380 C920,395 910,420 920,450 C930,480 955,495 975,485 C995,475 1000,450 990,425 C980,400 960,375 940,380Z" fill="#2563b0" />
        </svg>
      </div>

      {/* Floating micro icons */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[18%] right-[8%] hidden xl:flex w-12 h-12 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg shadow-blue-100 border border-blue-100/80 items-center justify-center"
      >
        <Brain className="w-5 h-5 text-sky-500" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -4, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-[38%] right-[4%] hidden xl:flex w-10 h-10 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg shadow-blue-100 border border-blue-100/80 items-center justify-center"
      >
        <Cloud className="w-4 h-4 text-cyan-500" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-[24%] left-[4%] hidden xl:flex w-10 h-10 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg shadow-blue-100 border border-blue-100/80 items-center justify-center"
      >
        <Layers className="w-4 h-4 text-blue-500" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 9, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute bottom-[28%] right-[12%] hidden xl:flex w-10 h-10 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg shadow-emerald-100 border border-emerald-100/80 items-center justify-center"
      >
        <Globe className="w-4 h-4 text-emerald-500" />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 pt-28 pb-16 md:pt-44 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left column */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 border border-blue-200/80 text-slate-600 text-sm font-medium mb-8 shadow-sm backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              Premium Technology Partner &mdash; Available Globally
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-bold text-[#0f172a] leading-[1.1] tracking-tight mb-6"
            >
              Engineering Ideas Into{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Reliable Digital Products
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-500 leading-[1.75] mb-10 max-w-xl font-normal"
            >
              From product strategy and architecture to AI solutions and enterprise platforms, we help businesses turn ambitious ideas into scalable software.
            </motion.p>

            {/* Trust checkmarks */}
            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="flex flex-col gap-2.5 mb-10"
            >
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-slate-600 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-500 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <button
                onClick={() => handleNav('#contact')}
                className="group flex items-center justify-center gap-2.5 px-7 py-3.5 text-white font-semibold rounded-xl text-[15px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-400/25"
                style={{ background: 'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)' }}
              >
                <CalendarCheck className="w-4 h-4" />
                Schedule Consultation
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => handleNav('#projects')}
                className="flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white border border-slate-200 text-slate-700 font-semibold rounded-xl text-[15px] hover:border-blue-300 hover:text-blue-600 hover:shadow-md transition-all duration-200"
              >
                View Our Work
              </button>
            </motion.div>
          </div>

          {/* Right column — glassmorphism service cards (hidden on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {glassCards.map(({ icon: Icon, label, desc, color, iconColor, border }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.1, duration: 0.55 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`relative p-5 rounded-2xl bg-gradient-to-br ${color} border ${border} backdrop-blur-md shadow-sm hover:shadow-lg hover:shadow-blue-100/60 transition-shadow duration-300 cursor-default`}
                style={{ background: 'rgba(255,255,255,0.65)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
              >
                {/* gradient tint overlay */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} opacity-60 pointer-events-none`} />
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-white/80 shadow-sm flex items-center justify-center mb-4 border border-white/60">
                    <Icon className={`w-5 h-5 ${iconColor}`} />
                  </div>
                  <h3 className="text-[13px] font-bold text-slate-800 mb-1 leading-snug">{label}</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Bottom wide card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.55 }}
              className="col-span-2 p-5 rounded-2xl border border-slate-200/80 flex items-center gap-4"
              style={{ background: 'rgba(255,255,255,0.75)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-blue-500 to-sky-400 shadow-md">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-800">Supporting Clients Across Time Zones</div>
                <div className="text-xs text-slate-500 mt-0.5">Americas · Europe · Middle East · Asia Pacific</div>
              </div>
              <div className="ml-auto flex gap-1.5">
                {['🇺🇸','🇬🇧','🇦🇪','🇮🇳'].map((f) => (
                  <span key={f} className="text-lg leading-none">{f}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
