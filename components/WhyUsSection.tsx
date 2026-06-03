'use client';

import { motion } from 'framer-motion';
import { Layers, Target, Cpu, Globe, PackageCheck, Handshake } from 'lucide-react';

const reasons = [
  {
    icon: Layers,
    title: 'Architecture First',
    desc: 'We invest time in understanding business requirements and designing scalable solutions before development begins.',
    number: '01',
    color: 'from-blue-500 to-sky-400',
  },
  {
    icon: Target,
    title: 'Business-Focused Delivery',
    desc: 'Every decision is aligned with business goals, user experience, scalability, and long-term value.',
    number: '02',
    color: 'from-teal-500 to-emerald-400',
  },
  {
    icon: Cpu,
    title: 'AI-Ready Engineering',
    desc: 'We build modern systems prepared for AI integration, automation, and future innovation.',
    number: '03',
    color: 'from-sky-500 to-cyan-400',
  },
  {
    icon: Globe,
    title: 'Global Collaboration',
    desc: 'Our distributed team works effectively across multiple time zones and international markets.',
    number: '04',
    color: 'from-slate-600 to-slate-400',
  },
  {
    icon: PackageCheck,
    title: 'Full Lifecycle Ownership',
    desc: 'From discovery to deployment and support, we remain involved throughout the product journey.',
    number: '05',
    color: 'from-orange-500 to-amber-400',
  },
  {
    icon: Handshake,
    title: 'Flexible Engagement Models',
    desc: 'Dedicated teams, consulting, project-based delivery, or long-term technology partnerships.',
    number: '06',
    color: 'from-rose-500 to-pink-400',
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#f8fafc] overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#2563b0]/8 text-[#2563b0] text-sm font-semibold mb-5 border border-[#2563b0]/15">
            Why Virtualy Labs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#040d1a] mb-5 leading-tight">
            Why Businesses Choose{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #2563eb, #0ea5e9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Virtualy Labs
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            We combine technical expertise, business understanding, and architecture-first thinking to deliver software that lasts.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc, number, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.55 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative p-7 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-slate-200 transition-all duration-300 overflow-hidden cursor-default"
            >
              {/* Step number watermark */}
              <div
                className="absolute top-4 right-5 text-6xl font-black leading-none select-none pointer-events-none"
                style={{ color: 'rgba(37,99,176,0.04)' }}
              >
                {number}
              </div>
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-[16px] font-bold text-[#040d1a] mb-3 leading-snug">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
