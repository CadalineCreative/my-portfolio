'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface PortfolioCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    tags: string[];
    icon: LucideIcon;
  };
  index: number;
  type: 'website' | 'autocad';
}

export function PortfolioCard({ project, index, type }: PortfolioCardProps) {
  const Icon = project.icon;
  const accentColor = type === 'website' ? 'from-blue-500 to-blue-600' : 'from-amber-500 to-amber-600';
  const accentBg = type === 'website' ? 'bg-blue-50' : 'bg-amber-50';
  const accentText = type === 'website' ? 'text-blue-600' : 'text-amber-600';
  const accentBorder = type === 'website' ? 'border-blue-200' : 'border-amber-200';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden cursor-pointer"
    >
      {/* Image Placeholder */}
      <div className={`relative aspect-video bg-gradient-to-br ${accentColor} overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="w-16 h-16 text-white/40" />
        </div>
        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-all" />
        
        {/* Coming Soon Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className={`text-xs font-semibold ${accentText}`}>Coming Soon</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-playfair text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-600 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className={`${accentBg} ${accentText} ${accentBorder} border text-xs font-medium px-3 py-1 rounded-full`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Effect Line */}
      <motion.div
        className={`h-1 bg-gradient-to-r ${accentColor}`}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
        style={{ transformOrigin: 'left' }}
      />
    </motion.div>
  );
}
