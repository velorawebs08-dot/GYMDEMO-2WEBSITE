import React from 'react';
import { motion } from 'motion/react';
import { Dumbbell, Target, Activity, UserCheck, ArrowRight } from 'lucide-react';
import { PROGRAMS_DATA, GYM_INFO } from '../data/gymData';

interface ProgramsProps {
  id?: string;
}

export const Programs: React.FC<ProgramsProps> = ({ id = 'programs' }) => {
  const iconMap: Record<string, React.ElementType> = {
    'strength-training': Dumbbell,
    'weight-training': Target,
    'cardio': Activity,
    'personal-training': UserCheck,
  };

  return (
    <section
      id={id}
      className="py-24 sm:py-32 bg-[#0c0c0f] text-neutral-100 relative overflow-hidden border-t border-neutral-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#F5C21B]" />
            <span className="text-xs uppercase tracking-widest font-bold text-[#F5C21B]">
              Training & Disciplines
            </span>
            <span className="w-5 h-[2px] bg-[#F5C21B]" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-tight font-display mb-4">
            TRAIN WITH <span className="text-[#F5C21B]">PURPOSE</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Structured fitness programs tailored for Kolhapur's youth and committed fitness enthusiasts.
          </p>
        </div>

        {/* 4 Clean Minimal Program Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS_DATA.map((prog, idx) => {
            const Icon = iconMap[prog.id] || Dumbbell;
            const encodedMsg = encodeURIComponent(
              `Hello Swapnil, I want to inquire about the ${prog.title} program at Fitness First Kolhapur.`
            );
            const whatsappInquiryUrl = `https://wa.me/${GYM_INFO.whatsappNumber}?text=${encodedMsg}`;

            return (
              <motion.div
                key={prog.id}
                id={`program-card-${prog.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-[#131317] rounded-xl p-6 sm:p-7 border border-neutral-800/80 hover:border-[#F5C21B]/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Icon & Category */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#F5C21B] group-hover:bg-[#F5C21B] group-hover:text-black transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-neutral-500">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display uppercase tracking-wide group-hover:text-[#F5C21B] transition-colors mb-2">
                    {prog.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-normal">
                    {prog.description}
                  </p>
                </div>

                {/* Features List */}
                <div>
                  <ul className="space-y-2 mb-6 pt-4 border-t border-neutral-800/80">
                    {prog.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="text-xs text-neutral-400 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F5C21B]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Subtle Inquire Link */}
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-300 group-hover:text-[#F5C21B] transition-colors"
                  >
                    <span>Inquire Plan</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
