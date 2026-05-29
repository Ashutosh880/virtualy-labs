'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers, Code2, Brain, ShoppingBag, ServerCog, BarChart3, Users, ChevronDown,
} from 'lucide-react';

const services = [
  {
    icon: Layers,
    title: 'Product Architecture & Consulting',
    tagline: 'Design systems that scale from day one.',
    items: ['Requirement Discovery', 'Technical Planning', 'Architecture Design', 'System Scalability Planning', 'Technology Selection'],
    note: null,
  },
  {
    icon: Code2,
    title: 'Custom Software Development',
    tagline: 'Bespoke platforms engineered to your exact needs.',
    items: ['Web Applications', 'Enterprise Platforms', 'Internal Business Systems', 'SaaS Products', 'API Development'],
    note: null,
  },
  {
    icon: Brain,
    title: 'AI & Automation Solutions',
    tagline: 'Embed intelligence directly into your workflows.',
    items: ['AI Integrations', 'Intelligent Automation', 'AI Agents', 'Workflow Automation', 'Generative AI Solutions'],
    note: null,
  },
  {
    icon: ShoppingBag,
    title: 'Shopify Development',
    tagline: 'Next-generation e-commerce experiences on Shopify.',
    items: [
      'Shopify Store Development',
      'Shopify Custom Apps',
      'Shopify Integrations',
      'Shopify Automation',
      'Shopify Performance Optimization',
      'AI-Powered Shopify Enhancements',
    ],
    note: 'Our team is actively building next-generation AI-powered solutions for Shopify ecosystems, enabling businesses to automate operations, improve customer engagement, and increase sales efficiency.',
  },
  {
    icon: ServerCog,
    title: 'DevOps & Cloud Engineering',
    tagline: 'Infrastructure built for reliability and velocity.',
    items: ['CI/CD Pipelines', 'Kubernetes & Docker', 'Infrastructure Automation', 'Cloud Monitoring', 'AWS / Azure / GCP'],
    note: null,
  },
  {
    icon: BarChart3,
    title: 'Data & Analytics',
    tagline: 'Turn raw data into strategic business intelligence.',
    items: ['Data Warehousing', 'Snowflake', 'ETL Pipelines', 'Reporting Dashboards', 'Business Intelligence'],
    note: null,
  },
  {
    icon: Users,
    title: 'Team Augmentation',
    tagline: 'Scale your engineering capacity on demand.',
    items: ['Dedicated Developers', 'Project-Based Teams', 'Technical Consultants', 'Architecture Review'],
    note: null,
  },
];

export default function ServicesSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#2563b0]/8 text-[#2563b0] text-sm font-semibold mb-5 border border-[#2563b0]/15">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#040d1a] mb-5 leading-tight">
            End-to-End{' '}
            <span className="text-gradient">Technology Services</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            From architecture to deployment, we cover every dimension of modern software delivery.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, tagline, items, note }, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-[#2563b0]/30 shadow-lg shadow-[#2563b0]/8'
                    : 'border-slate-100 hover:border-[#2563b0]/20 shadow-sm hover:shadow-md'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'bg-gradient-to-br from-[#2563b0] to-[#0ea5c8]'
                          : 'bg-gradient-to-br from-[#2563b0]/10 to-[#0ea5c8]/10 group-hover:from-[#2563b0]/20 group-hover:to-[#0ea5c8]/20'
                      }`}>
                        <Icon className={`w-6 h-6 ${isOpen ? 'text-white' : 'text-[#2563b0]'}`} />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-[#040d1a] mb-1">{title}</h3>
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
                      className="overflow-hidden"
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
                        {note && (
                          <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-[#2563b0]/5 to-[#0ea5c8]/5 border border-[#2563b0]/10">
                            <p className="text-xs text-slate-600 leading-relaxed italic">{note}</p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
