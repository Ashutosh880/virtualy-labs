'use client';

import { motion } from 'framer-motion';
import { Layers, Users, Zap, ShieldCheck, Cloud, Brain, Handshake, PackageCheck } from 'lucide-react';

const reasons = [
  {
    icon: Layers,
    title: 'Strong Technical Architecture',
    description: 'We design systems built to last — scalable, maintainable, and aligned with industry best practices from day one.',
  },
  {
    icon: Users,
    title: 'Dedicated Development Teams',
    description: 'You get focused teams that are fully immersed in your product, not split across dozens of projects.',
  },
  {
    icon: Zap,
    title: 'Agile Delivery Process',
    description: 'Iterative sprints, frequent releases, and full transparency keep your project moving and stakeholders informed.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security Standards',
    description: 'We build with security-first thinking — encryption, compliance, and best-practice access controls are non-negotiable.',
  },
  {
    icon: Cloud,
    title: 'Cloud-Native Development',
    description: 'Our solutions are architected for the cloud from the ground up, ensuring elastic scale and high availability.',
  },
  {
    icon: Brain,
    title: 'AI-Driven Innovation',
    description: 'We integrate intelligent automation, LLMs, and AI agents to give your product a competitive edge.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Technology Partnership',
    description: "We're not a vendor — we're a partner invested in your product's long-term success and evolution.",
  },
  {
    icon: PackageCheck,
    title: 'End-to-End Product Ownership',
    description: 'From discovery through deployment and beyond, we own the entire product lifecycle with accountability.',
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="section-padding bg-[#f8fafc]">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#2563b0]/8 text-[#2563b0] text-sm font-semibold mb-5 border border-[#2563b0]/15">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#040d1a] mb-5 leading-tight">
            Why Clients Choose{' '}
            <span className="text-gradient">Our Team</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Eight reasons why leading businesses trust us to build and scale their digital products.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="card-hover group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-[#2563b0]/20"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563b0]/10 to-[#0ea5c8]/10 flex items-center justify-center mb-5 group-hover:from-[#2563b0]/20 group-hover:to-[#0ea5c8]/20 transition-all duration-300">
                <Icon className="w-6 h-6 text-[#2563b0]" />
              </div>
              <h3 className="text-base font-semibold text-[#040d1a] mb-3 leading-snug">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
