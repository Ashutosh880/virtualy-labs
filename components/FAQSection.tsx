'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'How much does a software project typically cost?',
    a: 'Project costs vary based on scope, complexity, and timeline. We provide detailed, transparent proposals after a discovery consultation. Most projects range from focused MVP builds to full enterprise platforms — we tailor our approach to match your budget and goals.',
  },
  {
    q: 'How long does development take?',
    a: 'Timelines depend on the scope of work. Simple MVPs can be delivered in 6–10 weeks. More complex enterprise platforms typically take 3–6 months. We establish clear milestones and keep you updated throughout every phase.',
  },
  {
    q: 'Do you provide dedicated developers?',
    a: 'Yes. We offer dedicated development teams that work exclusively on your product. This model gives you full-time engineers aligned with your roadmap, working within your tools and communication processes.',
  },
  {
    q: 'Can you modernize existing applications?',
    a: 'Absolutely. We specialize in legacy modernization — migrating monolithic systems to microservices, upgrading technology stacks, improving performance, and re-architecting applications for cloud environments.',
  },
  {
    q: 'Do you support cloud deployment?',
    a: 'Yes. We handle cloud deployments on AWS, Azure, and GCP. This includes infrastructure setup, CI/CD pipelines, containerization with Docker and Kubernetes, monitoring, and ongoing cloud operations support.',
  },
  {
    q: 'Do you provide post-launch support?',
    a: 'Yes. We offer ongoing maintenance, monitoring, bug fixes, feature development, and scaling support after launch. We treat post-launch as the beginning of a long-term partnership, not the end of a project.',
  },
  {
    q: 'Can you help with AI integration?',
    a: 'Yes. We build AI-powered features including LLM integrations, AI agents, intelligent automation, computer vision, recommendation engines, and generative AI solutions tailored to your product and use case.',
  },
  {
    q: 'Do you build Shopify solutions?',
    a: 'Yes. We develop custom Shopify stores, apps, integrations, and automations. Our team is actively building next-generation AI-powered Shopify solutions to help businesses improve operations and increase sales efficiency.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes. We collaborate with clients across the Americas, Europe, the Middle East, and Asia Pacific. Our distributed team is set up for effective cross-time-zone communication and flexible engagement.',
  },
  {
    q: 'Can you assist with architecture and consulting before development begins?',
    a: 'Yes. Architecture consulting is a core offering. We help you define technical requirements, choose the right technology stack, design system architecture, plan for scalability, and create a clear development roadmap before any code is written.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 md:px-12 lg:px-20 overflow-x-hidden" style={{ background: 'linear-gradient(160deg, #f8fafc 0%, #ffffff 100%)' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#2563b0]/8 text-[#2563b0] text-sm font-semibold mb-5 border border-[#2563b0]/15">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#040d1a] mb-5 leading-tight">
            Frequently Asked{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #2563eb, #0ea5e9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Questions
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            Answers to the most common questions about working with Virtualy Labs.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.45 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-[#2563b0]/25 shadow-md shadow-blue-100/50'
                    : 'border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 bg-white"
                >
                  <span className="text-[15px] font-semibold text-[#040d1a] leading-snug">{q}</span>
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#2563b0] text-white'
                        : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                    }`}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden bg-white"
                    >
                      <div className="px-6 pb-5">
                        <div className="h-px bg-slate-100 mb-4" />
                        <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
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
