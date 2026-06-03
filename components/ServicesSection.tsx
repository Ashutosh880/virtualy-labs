'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers, Code2, Brain, ShoppingBag, ServerCog, BarChart3, Users, ChevronDown,
} from 'lucide-react';

const services = [
  {
    icon: Layers,
    title: 'Technology Consulting',
    tagline: 'Architecture-first thinking for scalable solutions.',
    items: ['Requirement Discovery', 'Technical Planning', 'Architecture Design', 'System Scalability Planning', 'Technology Selection'],
  },
  {
    icon: Brain,
    title: 'Product Architecture',
    tagline: 'Design systems built for the long term.',
    items: ['System Design', 'Microservices Architecture', 'API Design', 'Database Architecture', 'Performance Planning'],
  },
  {
    icon: Code2,
    title: 'Custom Development',
    tagline: 'Bespoke platforms engineered to your exact needs.',
    items: ['Web Applications', 'Enterprise Platforms', 'Internal Business Systems', 'SaaS Products', 'API Development'],
  },
  {
    icon: Brain,
    title: 'AI Solutions',
    tagline: 'Intelligent systems built for modern businesses.',
    items: ['AI Integrations', 'Intelligent Automation', 'AI Agents', 'Workflow Automation', 'Generative AI Solutions'],
  },
  {
    icon: ShoppingBag,
    title: 'Shopify Development',
    tagline: 'Next-generation e-commerce on Shopify.',
    items: [
      'Shopify Store Development',
      'Shopify Custom Apps',
      'Shopify Integrations',
      'Shopify Automation',
      'AI-Powered Shopify Enhancements',
    ],
  },
  {
    icon: ServerCog,
    title: 'DevOps & Cloud',
    tagline: 'Infrastructure built for reliability and velocity.',
    items: ['CI/CD Pipelines', 'Kubernetes & Docker', 'Infrastructure Automation', 'Cloud Monitoring', 'AWS / Azure / GCP'],
  },
  {
    icon: Users,
    title: 'Dedicated Development Teams',
    tagline: 'Extend your engineering capacity on demand.',
    items: ['Dedicated Developers', 'Project-Based Teams', 'Technical Consultants', 'Architecture Review', 'Long-Term Partnerships'],
  },
];

export default function ServicesSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#2563b0]/8 text-[#2563b0] text-sm font-semibold mb-5 border border-[#2563b0]/15">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#040d1a] mb-5 leading-tight">
            End-to-End{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #2563eb, #0ea5e9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Technology Services
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            From architecture to deployment, we cover every dimension of modern software delivery.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {services.map(({ icon: Icon, title, tagline, items }, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-[#2563b0]/25 shadow-lg shadow-blue-100/40'
                    : 'border-slate-100 hover:border-[#2563b0]/20 shadow-sm hover:shadow-md'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left p-6 bg-white"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-4">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'bg-gradient-to-br from-[#2563b0] to-[#0ea5c8]'
                          : 'bg-gradient-to-br from-[#2563b0]/10 to-[#0ea5c8]/10'
                      }`}>
                        <Icon className={`w-5 h-5 ${isOpen ? 'text-white' : 'text-[#2563b0]'}`} />
                      </div>
                      <div>
                        <h3 className="text-[15px] font-bold text-[#040d1a] mb-1 leading-snug">{title}</h3>
                        <p className="text-sm text-slate-500">{tagline}</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-slate-400 mt-1 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-white"
                    >
                      <div className="px-6 pb-6">
                        <div className="h-px bg-slate-100 mb-4" />
                        <ul className="space-y-2">
                          {items.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5c8] flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Ownership note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="p-6 rounded-2xl bg-gradient-to-br from-[#2563b0]/5 to-[#0ea5c8]/5 border border-[#2563b0]/15 text-center max-w-3xl mx-auto"
        >
          <p className="text-slate-700 text-sm leading-relaxed">
            <span className="font-semibold text-[#040d1a]">We provide complete product ownership</span> — from idea validation and architecture planning to deployment, scaling, and long-term support.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
