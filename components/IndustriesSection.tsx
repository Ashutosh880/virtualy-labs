'use client';

import { motion } from 'framer-motion';
import {
  Heart, Landmark, Layers, ShoppingCart, Store, Truck,
  GraduationCap, Factory, Building2, Megaphone, Users, Globe,
} from 'lucide-react';

const industries = [
  { icon: Heart, label: 'Healthcare', desc: 'Patient portals, care management, assessments, compliance' },
  { icon: Layers, label: 'SaaS', desc: 'Multi-tenant platforms, subscription billing, analytics' },
  { icon: Landmark, label: 'Banking & Finance', desc: 'Fintech platforms, payment systems, compliance tools' },
  { icon: ShoppingCart, label: 'E-Commerce', desc: 'Online stores, Shopify, headless commerce, PIM' },
  { icon: Store, label: 'Retail', desc: 'Inventory systems, POS, customer loyalty platforms' },
  { icon: Factory, label: 'Manufacturing', desc: 'MES, supply chain, quality management systems' },
  { icon: Truck, label: 'Logistics', desc: 'Fleet management, route optimization, delivery tracking' },
  { icon: GraduationCap, label: 'Education', desc: 'LMS, virtual classrooms, e-learning platforms' },
  { icon: Building2, label: 'Real Estate', desc: 'Property portals, CRM, lease management' },
  { icon: Megaphone, label: 'Marketing Technology', desc: 'Campaign tools, lead gen, analytics dashboards' },
  { icon: Users, label: 'Professional Services', desc: 'Practice management, client portals, workflow automation' },
  { icon: Globe, label: 'Enterprise Solutions', desc: 'ERP, HRMS, enterprise integrations at scale' },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-24 px-4 sm:px-6 md:px-12 lg:px-20 overflow-x-hidden" style={{ background: 'linear-gradient(160deg, #f0f7ff 0%, #f8fafc 100%)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#2563b0]/8 text-[#2563b0] text-sm font-semibold mb-5 border border-[#2563b0]/15">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#040d1a] mb-5 leading-tight">
            Industries We{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #2563eb, #0ea5e9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Support
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Domain knowledge and technical depth across every sector we work in.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map(({ icon: Icon, label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:border-[#2563b0]/20 transition-all duration-300 cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563b0]/10 to-[#0ea5c8]/10 flex items-center justify-center mb-4 group-hover:from-[#2563b0]/20 group-hover:to-[#0ea5c8]/20 transition-all duration-300">
                <Icon className="w-5 h-5 text-[#2563b0]" />
              </div>
              <h3 className="text-sm font-bold text-[#040d1a] mb-1.5 leading-snug">{label}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
