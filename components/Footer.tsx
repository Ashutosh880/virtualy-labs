// 'use client';

// import { Linkedin, Twitter, Github, ArrowUp } from 'lucide-react';
// import Image from 'next/image';

// const footerLinks = {
//   Services: [
//     'Technology Consulting',
//     'Product Architecture',
//     'Custom Development',
//     'AI Solutions',
//     'Shopify Development',
//     'DevOps & Cloud',
//     'Dedicated Teams',
//   ],
//   Technologies: [
//     'Java & Spring Boot',
//     'React & Next.js',
//     'Node.js',
//     'Python & AI',
//     'AWS / Azure / GCP',
//     'Kubernetes & Docker',
//     'MongoDB & PostgreSQL',
//   ],
//   Industries: [
//     'Healthcare',
//     'SaaS Platforms',
//     'E-Commerce',
//     'Banking & Finance',
//     'Logistics',
//     'Education',
//     'Manufacturing',
//   ],
//   Company: [
//     'What We Build',
//     'Projects',
//     'Process',
//     'Technologies',
//     'FAQ',
//   ],
// };

// export default function Footer() {
//   const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

//   return (
//     <footer className="bg-[#040d1a] border-t border-white/5">
//       {/* Top CTA strip */}
//       <div className="bg-gradient-to-r from-[#2563b0] to-[#0ea5c8]">
//         <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
//           <div>
//             <p className="text-white font-semibold text-lg">Ready to start your project?</p>
//             <p className="text-white/80 text-sm">Schedule a free 60-minute consultation with our team today.</p>
//           </div>
//           <a
//             href="#faq"
//             onClick={(e) => { e.preventDefault(); document.querySelector('#faq')?.scrollIntoView({ behavior: 'smooth' }); }}
//             className="flex-shrink-0 px-6 py-3 bg-white text-[#2563b0] font-semibold rounded-xl hover:shadow-lg hover:bg-white/95 transition-all duration-200 text-sm"
//           >
//             Get Started
//           </a>
//         </div>
//       </div>

//       {/* Main footer */}
//       <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
//         <div className="grid lg:grid-cols-5 gap-12">
//           {/* Brand */}
//           <div className="lg:col-span-2">
//             <div className="flex items-center mb-5">
//               <Image
//               src="/logo1.png"
//               alt="Virtualy Labs"
//               height={80}
//               width={80}
//               className="-mt-9 h-24 w-auto object-contain brightness-0 invert"
//             />
//             </div>
//             <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
//               Engineering Digital Products for the Future. A multidisciplinary technology team delivering enterprise-grade software solutions worldwide.
//             </p>
//             <p className="text-slate-600 text-xs italic mb-6">
//               "Engineering Digital Products for the Future."
//             </p>
//             <div className="flex gap-3">
//               {[Linkedin, Twitter, Github].map((Icon, i) => (
//                 <div
//                   key={i}
//                   className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#2563b0]/20 hover:border-[#2563b0]/30 transition-all duration-200 cursor-pointer"
//                 >
//                   <Icon className="w-4 h-4 text-slate-400 hover:text-white transition-colors" />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Links */}
//           {(Object.entries(footerLinks) as [string, string[]][]).map(([section, links]) => (
//             <div key={section}>
//               <h4 className="text-white text-sm font-semibold mb-5">{section}</h4>
//               <ul className="space-y-3">
//                 {links.map((link) => (
//                   <li key={link}>
//                     <span className="text-slate-500 text-sm hover:text-slate-300 transition-colors cursor-pointer">
//                       {link}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Bottom bar */}
//         <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
//           <p className="text-slate-600 text-sm">
//             {new Date().getFullYear()} Virtualy Labs. All rights reserved.
//           </p>
//           <div className="flex items-center gap-6">
//             <span className="text-slate-600 text-sm hover:text-slate-400 transition-colors cursor-pointer">Privacy Policy</span>
//             <span className="text-slate-600 text-sm hover:text-slate-400 transition-colors cursor-pointer">Terms of Service</span>
//             <button
//               onClick={scrollTop}
//               className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#2563b0]/20 hover:border-[#2563b0]/30 transition-all duration-200"
//               aria-label="Back to top"
//             >
//               <ArrowUp className="w-4 h-4 text-slate-400" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


'use client';

import { useState } from 'react';
import { Linkedin, Twitter, Github, ArrowUp, Clock } from 'lucide-react';
import ContactModal from './ContactModal';

const footerLinks = {
  Services: [
    'Technology Consulting',
    'Product Architecture',
    'Custom Development',
    'AI Solutions',
    'Shopify Development',
    'DevOps & Cloud',
    'Dedicated Teams',
  ],
  Technologies: [
    'Java & Spring Boot',
    'React & Next.js',
    'Node.js',
    'Python & AI',
    'AWS / Azure / GCP',
    'Kubernetes & Docker',
    'MongoDB & PostgreSQL',
  ],
  Industries: [
    'Healthcare',
    'SaaS Platforms',
    'E-Commerce',
    'Banking & Finance',
    'Logistics',
    'Education',
    'Manufacturing',
  ],
  Company: [
    'What We Build',
    'Projects',
    'Process',
    'Technologies',
    'FAQ',
  ],
};

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleDiscoveryCall = () => {
    setModalOpen(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 500);
  };

  return (
    <footer className="bg-[#040d1a] border-t border-white/5">
      {/* Top CTA strip */}
      <div className="bg-gradient-to-r from-[#2563b0] to-[#0ea5c8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-xl mb-1">Need Technical Expertise For Your Next Product?</p>
            <p className="text-white/75 text-sm">Tell us about your project and we&apos;ll get back to you within 24 hours.</p>
          </div>
          <div className="flex flex-col items-center gap-2 flex-shrink-0">
            <button
              onClick={handleDiscoveryCall}
              className="px-7 py-3 bg-white text-[#2563b0] font-semibold rounded-xl hover:shadow-xl hover:bg-white/95 hover:-translate-y-0.5 transition-all duration-200 text-sm whitespace-nowrap"
            >
              Book Discovery Call
            </button>
            <span className="flex items-center gap-1.5 text-white/60 text-xs">
              <Clock className="w-3 h-3" />
              Typically responds within 24 hours
            </span>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-5">
              <img
                src="/file_00000000f490720786ee7059356209a6_(1).png"
                alt="Virtualy Labs"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
              Engineering Digital Products for the Future. A multidisciplinary technology team delivering enterprise-grade software solutions worldwide.
            </p>
            <p className="text-slate-600 text-xs italic mb-6">
              "Engineering Digital Products for the Future."
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#2563b0]/20 hover:border-[#2563b0]/30 transition-all duration-200 cursor-pointer"
                >
                  <Icon className="w-4 h-4 text-slate-400 hover:text-white transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {(Object.entries(footerLinks) as [string, string[]][]).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white text-sm font-semibold mb-5">{section}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <span className="text-slate-500 text-sm hover:text-slate-300 transition-colors cursor-pointer">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            {new Date().getFullYear()} Virtualy Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-slate-600 text-sm hover:text-slate-400 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="text-slate-600 text-sm hover:text-slate-400 transition-colors cursor-pointer">Terms of Service</span>
            <button
              onClick={scrollTop}
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#2563b0]/20 hover:border-[#2563b0]/30 transition-all duration-200"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        </div>
      </div>
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </footer>
  );
}
