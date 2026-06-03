'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Rocket, Globe, Cpu, TrendingUp } from 'lucide-react';

const stats = [
  {
    value: '5+',
    label: 'Projects Delivered',
    icon: Rocket,
    desc: 'Shipped across industries worldwide',
    color: 'from-blue-500/10 to-sky-400/10',
    border: 'border-blue-200/60',
    iconColor: 'text-blue-600',
    iconBg: 'from-blue-500 to-sky-400',
  },
  {
    value: '4+',
    label: 'Industries Served',
    icon: TrendingUp,
    desc: 'Healthcare, SaaS, e-commerce, martech',
    color: 'from-teal-500/10 to-emerald-400/10',
    border: 'border-teal-200/60',
    iconColor: 'text-teal-600',
    iconBg: 'from-teal-500 to-emerald-400',
  },
  {
    value: 'Global',
    label: 'Delivery Team',
    icon: Globe,
    desc: 'Collaborating across 4 continents',
    color: 'from-sky-500/10 to-cyan-400/10',
    border: 'border-sky-200/60',
    iconColor: 'text-sky-600',
    iconBg: 'from-sky-500 to-cyan-400',
  },
  {
    value: 'AI &',
    label: 'Cloud Expertise',
    icon: Cpu,
    desc: 'Modern stack, enterprise standards',
    color: 'from-slate-500/10 to-slate-400/10',
    border: 'border-slate-200/60',
    iconColor: 'text-slate-600',
    iconBg: 'from-slate-500 to-slate-400',
  },
];

const badges = [
  'Enterprise Applications',
  'SaaS Platforms',
  'AI Solutions',
  'Shopify Development',
  'Cloud & DevOps',
];

export default function TrustedBySection() {
  return (
    <section id="trusted" className="py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#2563b0]/8 text-[#2563b0] text-sm font-semibold mb-5 border border-[#2563b0]/15">
            Our Track Record
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#040d1a] mb-5 leading-tight">
            Trusted Technology Partner For{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #2563eb, #0ea5e9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Modern Businesses
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            We help organizations design, build, modernize, and scale software solutions that support growth, efficiency, and innovation.
          </p>
        </motion.div>

        {/* Stat Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {stats.map(({ value, label, icon: Icon, desc, color, border, iconColor, iconBg }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.55 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${color} border ${border} backdrop-blur-sm overflow-hidden group cursor-default`}
              style={{
                background: 'rgba(255,255,255,0.8)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            >
              {/* Subtle background tint */}
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-60 pointer-events-none rounded-2xl`} />
              <div className="relative z-10">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${iconBg} flex items-center justify-center mb-4 shadow-sm`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-3xl font-bold text-[#040d1a] leading-none mb-1">{value}</div>
                <div className="text-sm font-semibold text-[#040d1a] mb-2">{label}</div>
                <div className="text-xs text-slate-500 leading-relaxed">{desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {badges.map((badge, i) => (
            <motion.span
              key={badge}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 + i * 0.06, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-medium shadow-sm hover:border-[#2563b0]/30 hover:text-[#2563b0] transition-all duration-200"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#2563b0] flex-shrink-0" />
              {badge}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
