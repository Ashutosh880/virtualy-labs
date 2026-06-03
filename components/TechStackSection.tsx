'use client';

import { motion } from 'framer-motion';
import { Server, Monitor, Brain, Database, Cloud, Zap } from 'lucide-react';

const categories = [
  {
    icon: Server,
    name: 'Backend',
    color: 'from-blue-500 to-sky-400',
    lightBg: 'bg-blue-50',
    textColor: 'text-blue-700',
    borderColor: 'border-blue-200',
    techs: ['Java', 'Spring Boot', 'Spring Cloud', 'Microservices', 'Node.js', 'Express.js', '.NET', 'Python', 'PHP'],
  },
  {
    icon: Monitor,
    name: 'Frontend',
    color: 'from-sky-500 to-cyan-400',
    lightBg: 'bg-sky-50',
    textColor: 'text-sky-700',
    borderColor: 'border-sky-200',
    techs: ['React.js', 'Next.js', 'Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5'],
  },
  {
    icon: Brain,
    name: 'AI & Automation',
    color: 'from-teal-500 to-emerald-400',
    lightBg: 'bg-teal-50',
    textColor: 'text-teal-700',
    borderColor: 'border-teal-200',
    techs: ['OpenAI', 'LLM Integrations', 'AI Agents', 'LangChain', 'RAG Solutions', 'Generative AI', 'NLP', 'Computer Vision'],
  },
  {
    icon: Database,
    name: 'Databases',
    color: 'from-slate-600 to-slate-400',
    lightBg: 'bg-slate-50',
    textColor: 'text-slate-700',
    borderColor: 'border-slate-200',
    techs: ['MongoDB', 'PostgreSQL', 'MySQL', 'Oracle', 'SQL Server', 'Snowflake'],
  },
  {
    icon: Cloud,
    name: 'Cloud & DevOps',
    color: 'from-orange-500 to-amber-400',
    lightBg: 'bg-orange-50',
    textColor: 'text-orange-700',
    borderColor: 'border-orange-200',
    techs: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Jenkins'],
  },
  {
    icon: Zap,
    name: 'Messaging & Integrations',
    color: 'from-rose-500 to-pink-400',
    lightBg: 'bg-rose-50',
    textColor: 'text-rose-700',
    borderColor: 'border-rose-200',
    techs: ['Kafka', 'RabbitMQ', 'REST APIs', 'GraphQL', 'WebSockets'],
  },
];

export default function TechStackSection() {
  return (
    <section id="technologies" className="py-24 px-4 sm:px-6 md:px-12 lg:px-20 overflow-x-hidden" style={{ background: 'linear-gradient(160deg, #f8fafc 0%, #ffffff 60%)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#2563b0]/8 text-[#2563b0] text-sm font-semibold mb-5 border border-[#2563b0]/15">
            Technology Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#040d1a] mb-5 leading-tight">
            Our{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #2563eb, #0ea5e9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Technology Stack
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Enterprise-grade technologies across every layer of the software stack.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(({ icon: Icon, name, color, lightBg, textColor, borderColor, techs }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.55 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-sm flex-shrink-0`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className={`text-sm font-bold ${textColor}`}>{name}</h3>
              </div>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2">
                {techs.map((t) => (
                  <span
                    key={t}
                    className={`text-xs px-3 py-1.5 rounded-lg border font-medium ${lightBg} ${textColor} ${borderColor} hover:-translate-y-0.5 transition-transform duration-150 cursor-default`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
