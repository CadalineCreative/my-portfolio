'use client';

import { motion } from 'framer-motion';
import { Building2, Home, Ruler, Layers, PenTool, Grid3x3 } from 'lucide-react';
import { PortfolioCard } from '@/components/portfolio-card';
import Link from 'next/link';

export default function AutoCADPortfolioPage() {
  const placeholderProjects = [
    {
      id: 1,
      title: 'Modern Residential Villa',
      description: 'Luxurious 4-bedroom villa with open-concept living spaces and sustainable design features.',
      tags: ['Residential', 'Modern', 'Sustainable'],
      icon: Home,
    },
    {
      id: 2,
      title: 'Commercial Office Space',
      description: 'Contemporary office layout optimized for collaboration and productivity.',
      tags: ['Commercial', 'Office', 'Interior'],
      icon: Building2,
    },
    {
      id: 3,
      title: 'Retail Store Design',
      description: 'Eye-catching retail space with strategic product placement and customer flow.',
      tags: ['Retail', 'Commercial', 'Layout'],
      icon: Layers,
    },
    {
      id: 4,
      title: 'Restaurant Interior',
      description: 'Warm and inviting dining space with efficient kitchen workflow design.',
      tags: ['Restaurant', 'Interior', 'Hospitality'],
      icon: PenTool,
    },
    {
      id: 5,
      title: 'Apartment Renovation',
      description: 'Complete transformation of compact urban apartment maximizing space and light.',
      tags: ['Residential', 'Renovation', 'Urban'],
      icon: Home,
    },
    {
      id: 6,
      title: 'Medical Clinic Layout',
      description: 'Functional healthcare facility design prioritizing patient comfort and efficiency.',
      tags: ['Healthcare', 'Commercial', 'Planning'],
      icon: Grid3x3,
    },
    {
      id: 7,
      title: 'Luxury Hotel Suite',
      description: 'Elegant hotel suite design combining comfort with sophisticated aesthetics.',
      tags: ['Hospitality', 'Luxury', 'Interior'],
      icon: Building2,
    },
    {
      id: 8,
      title: 'Educational Facility',
      description: 'Innovative learning environment with flexible classroom configurations.',
      tags: ['Education', 'Institutional', 'Design'],
      icon: Ruler,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,.05) 0px, transparent 1px, transparent 40px, rgba(255,255,255,.05) 41px), repeating-linear-gradient(90deg, rgba(255,255,255,.05) 0px, transparent 1px, transparent 40px, rgba(255,255,255,.05) 41px)',
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-6 py-2 mb-6">
              <Building2 className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm font-medium">Physical Portfolio</span>
            </div>

            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
              Architecture &
              <span className="block mt-2 bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
                Interior Design
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Precision-engineered spaces where form meets function. Our AutoCAD expertise transforms visions into detailed blueprints and stunning realities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            {[
              { icon: Ruler, label: 'Precision Design' },
              { icon: Layers, label: 'Technical Drawings' },
              { icon: PenTool, label: 'Space Planning' },
              { icon: Grid3x3, label: '3D Modeling' },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-slate-300">
                <div className="bg-white/10 rounded-lg p-2">
                  <item.icon className="w-5 h-5 text-amber-400" />
                </div>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-600">
              A showcase of our architectural and interior design work
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {placeholderProjects.map((project, index) => (
              <PortfolioCard
                key={project.id}
                project={project}
                index={index}
                type="autocad"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Have a Space to Transform?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Let's collaborate to create physical environments that inspire and delight.
            </p>
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all"
              >
                <Building2 className="w-5 h-5" />
                Start Your Project
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
