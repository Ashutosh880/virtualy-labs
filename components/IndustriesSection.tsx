'use client';

import { motion } from 'framer-motion';
import {
  Heart, Landmark, Layers, ShoppingCart, Store, Truck, GraduationCap,
  Factory, Building2, Megaphone, Users, Globe,
} from 'lucide-react';

const industries = [
  { icon: Heart, label: 'Healthcare', desc: 'Patient portals, EHRs, telehealth, care management' },
  { icon: Landmark, label: 'Banking & Finance', desc: 'Fintech platforms, payment systems, compliance tools' },
  { icon: Layers, label: 'SaaS', desc: 'Multi-tenant platforms, subscription billing, analytics' },
  { icon: ShoppingCart, label: 'E-Commerce', desc: 'Online stores, Shopify, headless commerce, PIM' },
  { icon: Store, label: 'Retail', desc: 'Inventory systems, POS, customer loyalty platforms' },
  { icon: Truck, label: 'Logistics', desc: 'Fleet management, route optimization, delivery tracking' },
  { icon: GraduationCap, label: 'Education', desc: 'LMS, virtual classrooms, e-learning platforms' },
  { icon: Factory, label: 'Manufacturing', desc: 'MES, supply chain, quality management systems' },
  { icon: Building2, label: 'Real Estate', desc: 'Property portals, CRM, lease management' },
  { icon: Megaphone, label: 'Marketing Technology', desc: 'Campaign tools, lead gen, analytics dashboards' },
  { icon: Users, label: 'CRM Platforms', desc: 'Customer data, engagement automation, pipelines' },
  { icon: Globe, label: 'Enterprise Solutions', desc: 'ERP, HRMS, enterprise integrations at scale' },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="section-padding bg-[#040d1a]">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#2563b0]/20 text-[#0ea5c8] text-sm font-semibold mb-5 border border-[#2563b0]/30">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Deep Expertise Across{' '}
            <span className="text-gradient">Every Industry</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We bring domain knowledge and technical depth to every sector we work in, enabling solutions that truly fit the business context.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {industries.map(({ icon: Icon, label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="group p-5 rounded-2xl bg-white/4 border border-white/8 hover:bg-white/8 hover:border-[#2563b0]/40 transition-all duration-300 card-hover"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563b0]/20 to-[#0ea5c8]/20 flex items-center justify-center mb-4 group-hover:from-[#2563b0]/30 group-hover:to-[#0ea5c8]/30 transition-all duration-300">
                <Icon className="w-5 h-5 text-[#0ea5c8]" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">{label}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
