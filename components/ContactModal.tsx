// 'use client';

// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   Send, CalendarCheck, Mail, Phone, Building2,
//   MessageSquare, User, ChevronDown, X,
// } from 'lucide-react';

// const projectTypes = [
//   'SaaS Application',
//   'Enterprise Platform',
//   'AI / Automation Solution',
//   'Shopify Development',
//   'E-Commerce Platform',
//   'Healthcare System',
//   'Banking / Fintech Platform',
//   'Mobile Application',
//   'DevOps / Cloud Engineering',
//   'Data & Analytics',
//   'Team Augmentation',
//   'Technology Consulting',
//   'Other',
// ];

// interface ContactModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
//   const [form, setForm] = useState({
//     name: '', company: '', email: '', phone: '', projectType: '', otherProjectType: '', message: '',
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = '';
//     }
//     return () => { document.body.style.overflow = ''; };
//   }, [isOpen]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     await new Promise((r) => setTimeout(r, 1000));
//     setLoading(false);
//     setSubmitted(true);
//   };

//   const handleClose = () => {
//     onClose();
//     setTimeout(() => {
//       setSubmitted(false);
//       setForm({ name: '', company: '', email: '', phone: '', projectType: '', otherProjectType: '', message: '' });
//     }, 300);
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           {/* Backdrop */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
//             onClick={handleClose}
//           />

//           {/* Modal */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.96, y: 16 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.96, y: 16 }}
//             transition={{ duration: 0.25, ease: 'easeOut' }}
//             className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
//           >
//             <div
//               className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl pointer-events-auto"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Close button */}
//               <button
//                 onClick={handleClose}
//                 className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors duration-200"
//               >
//                 <X className="w-4 h-4 text-slate-600" />
//               </button>

//               <div className="grid lg:grid-cols-2">
//                 {/* Left panel */}
//                 <div
//                   className="p-8 lg:p-10 rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none"
//                   style={{ background: 'linear-gradient(150deg, #f0f7ff 0%, #e8f4fd 100%)' }}
//                 >
//                   <span className="inline-block px-4 py-1.5 rounded-full bg-[#2563b0]/10 text-[#2563b0] text-xs font-semibold mb-5 border border-[#2563b0]/20">
//                     Get In Touch
//                   </span>
//                   <h2 className="text-2xl md:text-3xl font-bold text-[#040d1a] mb-4 leading-tight">
//                     Let's Turn Your Vision {' '}
//                     <span
//                       style={{
//                         background: 'linear-gradient(135deg, #2563eb, #0ea5e9)',
//                         WebkitBackgroundClip: 'text',
//                         WebkitTextFillColor: 'transparent',
//                         backgroundClip: 'text',
//                       }}
//                     >
//                       Into Software
//                     </span>
//                   </h2>
//                   <p className="text-slate-600 text-sm leading-relaxed mb-8">
//                     Tell us about your project and we&apos;ll schedule a free consultation to explore how we can help you build, scale, or transform your digital product.
//                   </p>

//                   <div className="space-y-5">
//                     {[
//                       { icon: CalendarCheck, title: 'Discovery Call', desc: 'Understand your goals, technical requirements, challenges, and possible implementation approach.' },
//                       { icon: Mail, title: 'Fast Response', desc: 'Most inquiries receive an initial response within one business day.' },
//                       { icon: Phone, title: 'Flexible Engagement Models', desc: 'Project-based delivery, dedicated teams, consulting, or architecture guidance tailored to your needs.' },
//                     ].map(({ icon: Icon, title, desc }) => (
//                       <div key={title} className="flex items-start gap-3">
//                         <div className="w-9 h-9 rounded-xl bg-white border border-[#2563b0]/15 flex items-center justify-center flex-shrink-0 shadow-sm">
//                           <Icon className="w-4 h-4 text-[#2563b0]" />
//                         </div>
//                         <div>
//                           <div className="text-sm font-semibold text-[#040d1a] mb-0.5">{title}</div>
//                           <div className="text-xs text-slate-500 leading-relaxed">{desc}</div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Right panel — form */}
//                 <div className="p-8 lg:p-10 mt-10">
//                   {submitted ? (
//                     <div className="flex flex-col items-center justify-center text-center h-full py-12">
//                       <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2563b0] to-[#0ea5c8] flex items-center justify-center mb-5 shadow-lg shadow-[#2563b0]/20">
//                         <Send className="w-7 h-7 text-white" />
//                       </div>
//                       <h3 className="text-xl font-bold text-[#040d1a] mb-3">Message Received</h3>
//                       <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
//                         Thank you for reaching out. Our team will review your inquiry and get back to you within 24 business hours.
//                       </p>
//                       <button
//                         onClick={handleClose}
//                         className="mt-6 px-6 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:border-slate-300 transition-colors"
//                       >
//                         Close
//                       </button>
//                     </div>
//                   ) : (
//                     <form onSubmit={handleSubmit} className="space-y-4">
//                       <div className="grid sm:grid-cols-2 gap-4">
//                         <div className="relative">
//                           <User className="absolute left-3 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
//                           <input
//                             required
//                             type="text"
//                             name="name"
//                             placeholder="Your Name"
//                             value={form.name}
//                             onChange={handleChange}
//                             className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-[#040d1a] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563b0]/25 focus:border-[#2563b0]/40 focus:bg-white transition-all"
//                           />
//                         </div>
//                         <div className="relative">
//                           <Building2 className="absolute left-3 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
//                           <input
//                             type="text"
//                             name="company"
//                             placeholder="Company Name"
//                             value={form.company}
//                             onChange={handleChange}
//                             className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-[#040d1a] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563b0]/25 focus:border-[#2563b0]/40 focus:bg-white transition-all"
//                           />
//                         </div>
//                       </div>

//                       <div className="grid sm:grid-cols-2 gap-4">
//                         <div className="relative">
//                           <Mail className="absolute left-3 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
//                           <input
//                             required
//                             type="email"
//                             name="email"
//                             placeholder="Email Address"
//                             value={form.email}
//                             onChange={handleChange}
//                             className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-[#040d1a] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563b0]/25 focus:border-[#2563b0]/40 focus:bg-white transition-all"
//                           />
//                         </div>
//                         <div className="relative">
//                           <Phone className="absolute left-3 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
//                           <input
//                             type="tel"
//                             name="phone"
//                             placeholder="Phone Number"
//                             value={form.phone}
//                             onChange={handleChange}
//                             className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-[#040d1a] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563b0]/25 focus:border-[#2563b0]/40 focus:bg-white transition-all"
//                           />
//                         </div>
//                       </div>

//                       <div className="relative">
//                         <select
//                           name="projectType"
//                           value={form.projectType}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-[#040d1a] focus:outline-none focus:ring-2 focus:ring-[#2563b0]/25 focus:border-[#2563b0]/40 focus:bg-white transition-all appearance-none"
//                         >
//                           <option value="">Select Project Type</option>
//                           {projectTypes.map((t) => (
//                             <option key={t} value={t}>{t}</option>
//                           ))}
//                         </select>
//                         <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
//                       </div>

//                       <AnimatePresence>
//                         {form.projectType === 'Other' && (
//                           <motion.div
//                             initial={{ opacity: 0, height: 0 }}
//                             animate={{ opacity: 1, height: 'auto' }}
//                             exit={{ opacity: 0, height: 0 }}
//                             transition={{ duration: 0.25 }}
//                             className="overflow-hidden"
//                           >
//                             <div className="relative pt-0">
//                               <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
//                               <input
//                                 type="text"
//                                 name="otherProjectType"
//                                 placeholder="Please describe your project type"
//                                 value={form.otherProjectType}
//                                 onChange={handleChange}
//                                 className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#2563b0]/25 bg-blue-50/50 text-sm text-[#040d1a] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563b0]/25 focus:border-[#2563b0]/40 focus:bg-white transition-all"
//                               />
//                             </div>
//                           </motion.div>
//                         )}
//                       </AnimatePresence>

//                       <div className="relative">
//                         <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
//                         <textarea
//                           name="message"
//                           placeholder="Tell us about your project, goals, and timeline..."
//                           value={form.message}
//                           onChange={handleChange}
//                           rows={4}
//                           className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-[#040d1a] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563b0]/25 focus:border-[#2563b0]/40 focus:bg-white transition-all resize-none"
//                         />
//                       </div>

//                       <button
//                         type="submit"
//                         disabled={loading}
//                         className="w-full flex items-center justify-center gap-2.5 py-3.5 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-400/25 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none text-[15px]"
//                         style={{ background: 'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)' }}
//                       >
//                         {loading ? (
//                           <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                         ) : (
//                           <>
//                             <CalendarCheck className="w-4 h-4" />
//                             Book a Free Consultation
//                           </>
//                         )}
//                       </button>
//                     </form>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// }


'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CalendarCheck, Mail, Phone, Building2,
  MessageSquare, User, ChevronDown, X, CheckCircle2, RefreshCw,
} from 'lucide-react';
import type { ContactFormData, ContactApiResponse } from '@/lib/types';

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

const EMPTY_FORM: ContactFormData = {
  name: '', company: '', email: '', phone: '',
  projectType: '', otherProjectType: '', message: '',
};

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [form, setForm] = useState<ContactFormData>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setError(null);
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const resolvedProjectType =
      form.projectType === 'Other' && form.otherProjectType.trim()
        ? form.otherProjectType.trim()
        : form.projectType;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          projectType: resolvedProjectType,
          message: form.message,
        }),
      });

      const data: ContactApiResponse = await res.json();

      if (!res.ok || !data.success) {
        setError(data.message || 'Something went wrong. Please try again.');
      } else {
        setSubmitted(true);
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setForm(EMPTY_FORM);
      setError(null);
    }, 300);
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm(EMPTY_FORM);
    setError(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors duration-200"
              >
                <X className="w-4 h-4 text-slate-600" />
              </button>

              <div className="grid lg:grid-cols-2">
                {/* Left info panel */}
                <div
                  className="p-8 lg:p-10 rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none"
                  style={{ background: 'linear-gradient(150deg, #f0f7ff 0%, #e8f4fd 100%)' }}
                >
                  <span className="inline-block px-4 py-1.5 rounded-full bg-[#2563b0]/10 text-[#2563b0] text-xs font-semibold mb-5 border border-[#2563b0]/20">
                    Get In Touch
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#040d1a] mb-4 leading-tight">
                    Let's Turn Your Vision {' '}
                    <span className="text-gradient">Into Software</span>
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-8">
                    Tell us about your project and we&apos;ll schedule a free consultation to explore how we can help you build, scale, or transform your digital product.
                  </p>

                  <div className="space-y-5">
                    {[
                      { icon: CalendarCheck, title: 'Discovery Call', desc: 'Understand your goals, technical requirements, challenges, and possible implementation approach.' },
                      { icon: Mail, title: 'Fast Response', desc: 'Most inquiries receive an initial response within one business day.' },
                      { icon: Phone, title: 'Flexible Engagement Models', desc: 'Project-based delivery, dedicated teams, consulting, or architecture guidance tailored to your needs.' },
                    ].map(({ icon: Icon, title, desc }) => (
                      <div key={title} className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-xl bg-white border border-[#2563b0]/15 flex items-center justify-center flex-shrink-0 shadow-sm">
                          <Icon className="w-4 h-4 text-[#2563b0]" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#040d1a] mb-0.5">{title}</div>
                          <div className="text-xs text-slate-500 leading-relaxed">{desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right form panel */}
                <div className="p-8 lg:p-10 mt-10">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-center justify-center text-center h-full py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2563b0] to-[#0ea5c8] flex items-center justify-center mb-5 shadow-lg shadow-[#2563b0]/20">
                        <CheckCircle2 className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#040d1a] mb-2">Inquiry Received Successfully</h3>
                      <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-8">
                        Thank you for contacting Virtualy Labs. Our team has received your request and will get back to you within 24 business hours.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
                        <button
                          onClick={handleReset}
                          className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200"
                        >
                          <RefreshCw className="w-3.5 h-3.5" />
                          Submit Another
                        </button>
                        <button
                          onClick={handleClose}
                          className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                          style={{ background: 'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)' }}
                        >
                          Close
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="relative">
                          <User className="absolute left-3 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                          <input
                            required
                            type="text"
                            name="name"
                            placeholder="Your Name *"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-[#040d1a] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563b0]/25 focus:border-[#2563b0]/40 focus:bg-white transition-all"
                          />
                        </div>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                          <input
                            type="text"
                            name="company"
                            placeholder="Company Name"
                            value={form.company}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-[#040d1a] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563b0]/25 focus:border-[#2563b0]/40 focus:bg-white transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="relative">
                          <Mail className="absolute left-3 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                          <input
                            required
                            type="email"
                            name="email"
                            placeholder="Email Address *"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-[#040d1a] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563b0]/25 focus:border-[#2563b0]/40 focus:bg-white transition-all"
                          />
                        </div>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-[#040d1a] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563b0]/25 focus:border-[#2563b0]/40 focus:bg-white transition-all"
                          />
                        </div>
                      </div>

                      <div className="relative">
                        <select
                          required
                          name="projectType"
                          value={form.projectType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-[#040d1a] focus:outline-none focus:ring-2 focus:ring-[#2563b0]/25 focus:border-[#2563b0]/40 focus:bg-white transition-all appearance-none"
                        >
                          <option value="">Select Project Type *</option>
                          {projectTypes.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                      </div>

                      <AnimatePresence initial={false}>
                        {form.projectType === 'Other' && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="relative">
                              <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-[#2563b0] pointer-events-none" />
                              <input
                                type="text"
                                name="otherProjectType"
                                placeholder="Please describe your project type"
                                value={form.otherProjectType}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#2563b0]/25 bg-blue-50/50 text-sm text-[#040d1a] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563b0]/25 focus:border-[#2563b0]/40 focus:bg-white transition-all"
                              />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                        <textarea
                          name="message"
                          placeholder="Tell us about your project, goals, and timeline..."
                          value={form.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-[#040d1a] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563b0]/25 focus:border-[#2563b0]/40 focus:bg-white transition-all resize-none"
                        />
                      </div>

                      {/* Error */}
                      <AnimatePresence>
                        {error && (
                          <motion.div
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm"
                          >
                            {error}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2.5 py-3.5 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-400/25 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none text-[15px]"
                        style={{ background: 'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)' }}
                      >
                        {loading ? (
                          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <CalendarCheck className="w-4 h-4" />
                            Book a Free Consultation
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
