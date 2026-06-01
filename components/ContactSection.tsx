'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CalendarCheck, Mail, Phone, Building2, MessageSquare, User, ChevronDown } from 'lucide-react';

const projectTypes = [
  'SaaS Application',
  'Enterprise Platform',
  'AI / Automation Solution',
  'Shopify Development',
  'E-Commerce Platform',
  'Healthcare System',
  'Banking / Fintech Platform',
  'Mobile Application',
  'DevOps / Cloud Engineering',
  'Data & Analytics',
  'Team Augmentation',
  'Technology Consulting',
  'Other',
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', projectType: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#2563b0]/8 text-[#2563b0] text-sm font-semibold mb-5 border border-[#2563b0]/15">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#040d1a] mb-6 leading-tight">
              Let's Turn Your Vision {' '}
              <span className="text-gradient">Into Software</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Tell us about your project and we'll schedule a free consultation to explore how we can help you build, scale, or transform your digital product.
            </p>

            <div className="space-y-5">
              {[
                { icon: CalendarCheck, title: 'Discovery Call', desc: 'Understand your goals, technical requirements, challenges, and possible implementation approach.' },
                { icon: Mail, title: 'Fast Response', desc: 'Most inquiries receive an initial response within one business day.' },
                { icon: Phone, title: 'Flexible Engagement Models', desc: 'Project-based delivery, dedicated teams, consulting, or architecture guidance tailored to your needs.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563b0]/10 to-[#0ea5c8]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#2563b0]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#040d1a] mb-1">{title}</div>
                    <div className="text-sm text-slate-500 leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center p-12 rounded-3xl bg-gradient-to-br from-[#2563b0]/5 to-[#0ea5c8]/5 border border-[#2563b0]/10 min-h-[480px]">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#2563b0] to-[#0ea5c8] flex items-center justify-center mb-6 shadow-xl shadow-[#2563b0]/20">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#040d1a] mb-4">Message Received</h3>
                <p className="text-slate-600 leading-relaxed max-w-sm">
                  Thank you for reaching out. Our team will review your inquiry and get back to you within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-[#f8fafc] border border-slate-100 shadow-sm space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-[#040d1a] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563b0]/30 focus:border-[#2563b0]/50 transition-all"
                    />
                  </div>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-[#040d1a] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563b0]/30 focus:border-[#2563b0]/50 transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-[#040d1a] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563b0]/30 focus:border-[#2563b0]/50 transition-all"
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-[#040d1a] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563b0]/30 focus:border-[#2563b0]/50 transition-all"
                    />
                  </div>
                </div>

                <div className="relative">
                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-[#040d1a] focus:outline-none focus:ring-2 focus:ring-[#2563b0]/30 focus:border-[#2563b0]/50 transition-all appearance-none"
                  >
                    <option value="">Select Project Type</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                  <textarea
                    name="message"
                    placeholder="Tell us about your project, goals, and timeline..."
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-[#040d1a] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563b0]/30 focus:border-[#2563b0]/50 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-[#2563b0] to-[#0ea5c8] text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-[#2563b0]/25 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <CalendarCheck className="w-5 h-5" />
                      Book a Free Consultation
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
