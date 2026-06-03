'use client';

import { motion } from 'framer-motion';
import { Layers, Brain, Building2, ShoppingBag, Users, Settings, Heart, Cloud } from 'lucide-react';

const builds = [
  {
    icon: Layers,
    title: 'SaaS Platforms',
    desc: 'Subscription-based platforms built for scalability, automation, and recurring revenue growth.',
    color: 'from-blue-500/8 to-sky-400/8',
    border: 'border-blue-100',
    iconGrad: 'from-blue-500 to-sky-400',
    hoverBorder: 'hover:border-blue-300/50',
  },
  {
    icon: Brain,
    title: 'AI-Powered Solutions',
    desc: 'Intelligent systems, AI agents, automation workflows, and modern AI integrations.',
    color: 'from-teal-500/8 to-emerald-400/8',
    border: 'border-teal-100',
    iconGrad: 'from-teal-500 to-emerald-400',
    hoverBorder: 'hover:border-teal-300/50',
  },
  {
    icon: Building2,
    title: 'Enterprise Applications',
    desc: 'Secure business applications designed to support complex operations and organizational growth.',
    color: 'from-slate-500/8 to-slate-400/8',
    border: 'border-slate-100',
    iconGrad: 'from-slate-600 to-slate-400',
    hoverBorder: 'hover:border-slate-300/50',
  },
  {
    icon: ShoppingBag,
    title: 'E-Commerce Platforms',
    desc: 'Custom online stores, Shopify solutions, and commerce systems that drive sales.',
    color: 'from-orange-500/8 to-amber-400/8',
    border: 'border-orange-100',
    iconGrad: 'from-orange-500 to-amber-400',
    hoverBorder: 'hover:border-orange-300/50',
  },
  {
    icon: Users,
    title: 'Customer & Employee Portals',
    desc: 'Self-service portals that improve engagement, communication, and operational efficiency.',
    color: 'from-sky-500/8 to-cyan-400/8',
    border: 'border-sky-100',
    iconGrad: 'from-sky-500 to-cyan-400',
    hoverBorder: 'hover:border-sky-300/50',
  },
  {
    icon: Settings,
    title: 'Internal Business Systems',
    desc: 'Custom CRM, ERP, workflow management, and operational platforms.',
    color: 'from-violet-500/8 to-purple-400/8',
    border: 'border-violet-100',
    iconGrad: 'from-violet-500 to-purple-400',
    hoverBorder: 'hover:border-violet-300/50',
  },
  {
    icon: Heart,
    title: 'Healthcare Solutions',
    desc: 'Healthcare applications, assessment platforms, patient management, and compliance-driven systems.',
    color: 'from-rose-500/8 to-pink-400/8',
    border: 'border-rose-100',
    iconGrad: 'from-rose-500 to-pink-400',
    hoverBorder: 'hover:border-rose-300/50',
  },
  {
    icon: Cloud,
    title: 'Cloud-Native Applications',
    desc: 'Modern applications designed for performance, reliability, and scalability in cloud environments.',
    color: 'from-cyan-500/8 to-blue-400/8',
    border: 'border-cyan-100',
    iconGrad: 'from-cyan-500 to-blue-400',
    hoverBorder: 'hover:border-cyan-300/50',
  },
];

export default function WhatWeBuildSection() {
  return (
    <section
      id="what-we-build"
      className="py-24 px-4 sm:px-6 md:px-12 lg:px-20 overflow-x-hidden"
      style={{
        background: 'linear-gradient(160deg, #f0f7ff 0%, #ffffff 50%, #f5f9ff 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#2563b0]/8 text-[#2563b0] text-sm font-semibold mb-5 border border-[#2563b0]/15">
            Our Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#040d1a] mb-5 leading-tight">
            What We{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #2563eb, #0ea5e9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Build
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            We create software products and digital platforms that solve real business challenges.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {builds.map(({ icon: Icon, title, desc, color, border, iconGrad, hoverBorder }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.55 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`group relative p-6 rounded-2xl bg-white border ${border} ${hoverBorder} shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-default`}
            >
              {/* Background tint on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />
              <div className="relative z-10">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${iconGrad} flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-[15px] font-bold text-[#040d1a] mb-3 leading-snug">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
