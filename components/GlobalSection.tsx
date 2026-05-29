'use client';

import { motion } from 'framer-motion';
import { Globe, Clock, MessageSquare, Zap } from 'lucide-react';

const zones = [
  { region: 'Americas', time: 'EST / PST', flag: '🌎' },
  { region: 'Europe', time: 'GMT / CET', flag: '🌍' },
  { region: 'Middle East', time: 'GST / AST', flag: '🌏' },
  { region: 'Asia Pacific', time: 'IST / SGT', flag: '🌏' },
];

const advantages = [
  { icon: Clock, title: 'Flexible Engagement Hours', desc: 'Daily standups and sync calls scheduled across your business hours.' },
  { icon: MessageSquare, title: 'Async-First Communication', desc: 'Slack, Jira, Confluence — we work in your tools and communication style.' },
  { icon: Globe, title: 'Global Talent Pool', desc: 'Specialists from multiple geographies bring diverse expertise to your product.' },
  { icon: Zap, title: 'Rapid Response Guarantee', desc: 'Critical issues are addressed within hours, not days, across all time zones.' },
];

export default function GlobalSection() {
  return (
    <section id="global" className="section-padding bg-[#f8fafc]">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#2563b0]/8 text-[#2563b0] text-sm font-semibold mb-5 border border-[#2563b0]/15">
              Global Availability
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#040d1a] mb-6 leading-tight">
              Supporting Clients Across{' '}
              <span className="text-gradient">Time Zones</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Our distributed team collaborates with clients globally, ensuring seamless communication, rapid response times, and flexible engagement models regardless of geography.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {zones.map(({ region, time, flag }) => (
                <div key={region} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <span className="text-2xl">{flag}</span>
                  <div>
                    <div className="text-sm font-semibold text-[#040d1a]">{region}</div>
                    <div className="text-xs text-slate-500">{time}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — world map visual + advantages */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Stylized world visual */}
            <div className="relative mb-8 p-8 rounded-3xl bg-gradient-to-br from-[#040d1a] to-[#0c1f3f] overflow-hidden">
              <div className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: `radial-gradient(circle, #2563b0 1px, transparent 1px)`,
                  backgroundSize: '28px 28px',
                }}
              />
              <div className="absolute top-4 right-4 w-32 h-32 bg-[#0ea5c8]/10 rounded-full blur-2xl" />
              <div className="relative z-10 text-center py-6">
                <Globe className="w-16 h-16 text-[#0ea5c8]/60 mx-auto mb-4" />
                <div className="text-white text-xl font-bold mb-2">4 Continents</div>
                <div className="text-slate-400 text-sm">Active client engagements worldwide</div>
                <div className="mt-6 flex justify-center gap-2 flex-wrap">
                  {['🇺🇸', '🇬🇧', '🇩🇪', '🇦🇪', '🇸🇬', '🇦🇺', '🇮🇳', '🇨🇦'].map((flag) => (
                    <span key={flag} className="text-2xl">{flag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {advantages.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:border-[#2563b0]/20 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2563b0]/10 to-[#0ea5c8]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#2563b0]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#040d1a] mb-1">{title}</div>
                    <div className="text-xs text-slate-500 leading-relaxed">{desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
