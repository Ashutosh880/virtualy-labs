'use client';

import { motion } from 'framer-motion';
import { Search, Layers, Palette, Code2, TestTube2, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discovery & Consultation',
    desc: 'Understanding goals, challenges, and requirements.',
    color: 'from-blue-500 to-sky-400',
  },
  {
    icon: Layers,
    number: '02',
    title: 'Architecture & Planning',
    desc: 'Designing scalable technical solutions and delivery strategy.',
    color: 'from-sky-500 to-cyan-400',
  },
  {
    icon: Palette,
    number: '03',
    title: 'Design & Validation',
    desc: 'Creating user experiences and validating workflows.',
    color: 'from-teal-500 to-emerald-400',
  },
  {
    icon: Code2,
    number: '04',
    title: 'Development',
    desc: 'Building secure, scalable, and maintainable systems.',
    color: 'from-slate-600 to-slate-400',
  },
  {
    icon: TestTube2,
    number: '05',
    title: 'Quality Assurance',
    desc: 'Testing functionality, performance, and reliability.',
    color: 'from-orange-500 to-amber-400',
  },
  {
    icon: Rocket,
    number: '06',
    title: 'Deployment & Support',
    desc: 'Launching solutions and providing ongoing support.',
    color: 'from-rose-500 to-pink-400',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#2563b0]/8 text-[#2563b0] text-sm font-semibold mb-5 border border-[#2563b0]/15">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#040d1a] mb-5 leading-tight">
            How We Deliver{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #2563eb, #0ea5e9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Successful Projects
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Six structured phases that take your idea from concept to production with clarity and confidence.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map(({ icon: Icon, number, title, desc, color }, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className={`relative lg:flex lg:items-center lg:gap-12 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} mb-0 lg:mb-10`}
                >
                  {/* Card */}
                  <div className={`lg:w-[calc(50%-3rem)] w-full ${isLeft ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div
                      className={`group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${isLeft ? 'lg:ml-auto' : ''}`}
                      style={{ maxWidth: '100%' }}
                    >
                      <div className={`flex items-center gap-4 mb-4 ${isLeft ? 'lg:flex-row-reverse' : 'flex-row'}`}>
                        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-sm flex-shrink-0`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-4xl font-black text-slate-100 leading-none select-none">{number}</span>
                      </div>
                      <h3 className="text-base font-bold text-[#040d1a] mb-2">{title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                    </div>
                  </div>

                  {/* Center dot — desktop only */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-white border-2 border-[#2563eb] shadow-md items-center justify-center flex-shrink-0 z-10">
                    <div className="w-2 h-2 rounded-full bg-[#2563eb]" />
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden lg:block lg:w-[calc(50%-3rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
