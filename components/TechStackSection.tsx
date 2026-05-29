'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type Category = 'Backend' | 'Frontend' | 'AI & ML' | 'Databases' | 'Cloud & DevOps' | 'Messaging';

const categories: Record<Category, string[]> = {
  Backend: ['Java', 'Spring Boot', 'Spring Cloud', 'Microservices', 'Node.js', 'Express.js', '.NET', 'Python', 'PHP'],
  Frontend: ['React.js', 'Next.js', 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  'AI & ML': ['OpenAI', 'LLM Integrations', 'AI Agents', 'LangChain', 'RAG Solutions', 'Generative AI', 'NLP'],
  Databases: ['MongoDB', 'MySQL', 'PostgreSQL', 'Oracle', 'SQL Server', 'Snowflake'],
  'Cloud & DevOps': ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Terraform'],
  Messaging: ['Kafka', 'RabbitMQ', 'REST APIs', 'GraphQL'],
};

const categoryColors: Record<Category, { bg: string; border: string; text: string; badge: string }> = {
  Backend: { bg: 'from-blue-600/10 to-blue-400/5', border: 'border-blue-200', text: 'text-blue-700', badge: 'bg-blue-50 text-blue-700 border-blue-200' },
  Frontend: { bg: 'from-sky-600/10 to-sky-400/5', border: 'border-sky-200', text: 'text-sky-700', badge: 'bg-sky-50 text-sky-700 border-sky-200' },
  'AI & ML': { bg: 'from-teal-600/10 to-teal-400/5', border: 'border-teal-200', text: 'text-teal-700', badge: 'bg-teal-50 text-teal-700 border-teal-200' },
  Databases: { bg: 'from-slate-600/10 to-slate-400/5', border: 'border-slate-200', text: 'text-slate-700', badge: 'bg-slate-50 text-slate-700 border-slate-200' },
  'Cloud & DevOps': { bg: 'from-orange-600/10 to-orange-400/5', border: 'border-orange-200', text: 'text-orange-700', badge: 'bg-orange-50 text-orange-700 border-orange-200' },
  Messaging: { bg: 'from-green-600/10 to-green-400/5', border: 'border-green-200', text: 'text-green-700', badge: 'bg-green-50 text-green-700 border-green-200' },
};

export default function TechStackSection() {
  const [active, setActive] = useState<Category>('Backend');

  return (
    <section id="technologies" className="section-padding bg-[#f8fafc]">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#2563b0]/8 text-[#2563b0] text-sm font-semibold mb-5 border border-[#2563b0]/15">
            Technology Stack
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#040d1a] mb-5 leading-tight">
            Built With the{' '}
            <span className="text-gradient">Right Tools</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            We work with the most modern, enterprise-grade technology stack across every layer of the software stack.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {(Object.keys(categories) as Category[]).map((cat) => {
            const colors = categoryColors[cat];
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                  active === cat
                    ? `bg-[#2563b0] text-white border-[#2563b0] shadow-lg shadow-[#2563b0]/20`
                    : `bg-white text-slate-600 border-slate-200 hover:border-[#2563b0]/30 hover:text-[#2563b0]`
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Tech Badges */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {categories[active].map((tech) => {
            const colors = categoryColors[active];
            return (
              <span
                key={tech}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium border ${colors.badge} transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm cursor-default`}
              >
                {tech}
              </span>
            );
          })}
        </motion.div>

        {/* All categories small grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {(Object.entries(categories) as [Category, string[]][]).map(([cat, techs], i) => {
            const colors = categoryColors[cat];
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={`p-5 rounded-2xl bg-gradient-to-br ${colors.bg} border ${colors.border}`}
              >
                <h3 className={`text-sm font-semibold ${colors.text} mb-3`}>{cat}</h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-lg bg-white/70 text-slate-700 border border-white/50 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
