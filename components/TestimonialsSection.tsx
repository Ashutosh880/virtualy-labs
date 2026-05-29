'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'The team delivered a complex SaaS platform ahead of schedule with exceptional code quality. Their architecture decisions have allowed us to scale effortlessly as our user base grew.',
    author: 'Chief Technology Officer',
    company: 'Healthcare SaaS Company, UK',
    stars: 5,
  },
  {
    quote: "What stood out most was their ability to deeply understand our business before writing a single line of code. The result was a product that genuinely solved our operational challenges.",
    author: 'Head of Product',
    company: 'Fintech Startup, UAE',
    stars: 5,
  },
  {
    quote: "Our Shopify store went from slow and outdated to a high-performing, AI-powered sales engine. The ROI was evident within weeks of launch.",
    author: 'Director of E-Commerce',
    company: 'Retail Brand, USA',
    stars: 5,
  },
  {
    quote: "They augmented our in-house team seamlessly. The developers they provided were senior-level and integrated into our workflow from day one — no ramp-up time needed.",
    author: 'VP of Engineering',
    company: 'Enterprise Software Company, Germany',
    stars: 5,
  },
  {
    quote: "Exceptional DevOps work. Our CI/CD pipelines, cloud infrastructure, and monitoring were completely transformed. Deployment that once took hours now takes minutes.",
    author: 'Platform Engineering Lead',
    company: 'Logistics Platform, Singapore',
    stars: 5,
  },
  {
    quote: 'The AI integration they built into our CRM has changed how our sales team operates. Lead scoring, automated follow-ups, and predictive analytics — all delivered on time.',
    author: 'Chief Revenue Officer',
    company: 'B2B SaaS Company, Australia',
    stars: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-[#040d1a]">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#2563b0]/20 text-[#0ea5c8] text-sm font-semibold mb-5 border border-[#2563b0]/30">
            Client Feedback
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            What Clients Say About{' '}
            <span className="text-gradient">Working With Us</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Feedback from technology leaders, product heads, and engineering teams across industries and geographies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ quote, author, company, stars }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group p-6 rounded-2xl bg-white/4 border border-white/8 hover:bg-white/7 hover:border-[#2563b0]/30 transition-all duration-300 card-hover flex flex-col"
            >
              <Quote className="w-8 h-8 text-[#2563b0]/50 mb-4 flex-shrink-0" />
              <p className="text-slate-300 leading-relaxed text-sm flex-1 mb-6">"{quote}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white text-sm font-semibold">{author}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{company}</div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
