'use client';

import { motion } from 'framer-motion';
import { Globe, Clock, MessageSquare, Zap, Users } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Global Availability',
    desc: 'Serving clients across Americas, Europe, Middle East, and Asia Pacific.',
  },
  {
    icon: Users,
    title: 'Remote Collaboration',
    desc: 'Seamless async and sync workflows regardless of location.',
  },
  {
    icon: Clock,
    title: 'Cross-Time-Zone Delivery',
    desc: 'Standups and deliveries scheduled around your business hours.',
  },
  {
    icon: MessageSquare,
    title: '24/7 Communication Support',
    desc: 'Critical issues addressed rapidly across all time zones.',
  },
];

const regions = [
  { label: 'Americas', time: 'EST / PST', flag: '🌎' },
  { label: 'Europe', time: 'GMT / CET', flag: '🌍' },
  { label: 'Middle East', time: 'GST / AST', flag: '🌏' },
  { label: 'Asia Pacific', time: 'IST / SGT', flag: '🌏' },
];

export default function GlobalSection() {
  return (
    <section id="global" className="py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#2563b0]/8 text-[#2563b0] text-sm font-semibold mb-5 border border-[#2563b0]/15">
            Global Delivery
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#040d1a] mb-5 leading-tight">
            Supporting Clients Across{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #2563eb, #0ea5e9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Time Zones
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Our team collaborates with clients worldwide, ensuring smooth communication, rapid responsiveness, and flexible engagement regardless of geography.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Globe visual + regions */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Globe card */}
            <div
              className="relative p-10 rounded-3xl mb-6 overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #040d1a 0%, #0c1f3f 100%)' }}
            >
              {/* Dot grid */}
              <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle, #2563b0 1px, transparent 1px)`,
                  backgroundSize: '28px 28px',
                }}
              />
              <div className="absolute top-6 right-6 w-40 h-40 bg-[#0ea5c8]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 text-center">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="inline-block mb-4"
                >
                  <Globe className="w-20 h-20 text-[#0ea5c8]/50" />
                </motion.div>
                <div className="text-white text-2xl font-bold mb-1">4 Continents</div>
                <div className="text-slate-400 text-sm mb-6">Active client engagements worldwide</div>
                <div className="flex justify-center gap-3 flex-wrap">
                  {['🇺🇸', '🇬🇧', '🇩🇪', '🇦🇪', '🇸🇬', '🇦🇺', '🇮🇳', '🇨🇦'].map((flag) => (
                    <span key={flag} className="text-2xl leading-none">{flag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Regions grid */}
            <div className="grid grid-cols-2 gap-3">
              {regions.map(({ label, time, flag }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:border-[#2563b0]/20 hover:shadow-md transition-all duration-200"
                >
                  <span className="text-2xl leading-none">{flag}</span>
                  <div>
                    <div className="text-sm font-semibold text-[#040d1a]">{label}</div>
                    <div className="text-xs text-slate-500">{time}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Feature list */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {features.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-[#2563b0]/20 transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#2563b0]/10 to-[#0ea5c8]/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#2563b0]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#040d1a] mb-1">{title}</div>
                  <div className="text-sm text-slate-500 leading-relaxed">{desc}</div>
                </div>
              </motion.div>
            ))}

            {/* Zap card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#2563b0]/5 to-[#0ea5c8]/5 border border-[#2563b0]/15">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-4 h-4 text-[#2563b0]" />
                <span className="text-sm font-bold text-[#040d1a]">Rapid Response Guarantee</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                Critical issues addressed within hours, not days, across all time zones.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
