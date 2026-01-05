'use client';

import { motion } from 'framer-motion';
import { Monitor, Globe, Palette, Code, Zap, Smartphone } from 'lucide-react';
import { PortfolioCard } from '@/components/portfolio-card';
import Link from 'next/link';

export default function WebsitePortfolioPage() {
  const placeholderProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Modern shopping experience with seamless checkout flow and personalized recommendations.',
      tags: ['React', 'Next.js', 'Stripe'],
      icon: Globe,
    },
    {
      id: 2,
      title: 'Corporate Website',
      description: 'Professional brand presence with elegant animations and compelling storytelling.',
      tags: ['UI/UX', 'Branding', 'CMS'],
      icon: Palette,
    },
    {
      id: 3,
      title: 'SaaS Dashboard',
      description: 'Data-driven interface with real-time analytics and intuitive user workflows.',
      tags: ['Dashboard', 'Analytics', 'API'],
      icon: Code,
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Creative showcase with smooth parallax effects and interactive galleries.',
      tags: ['Portfolio', 'Animation', 'WebGL'],
      icon: Zap,
    },
    {
      id: 5,
      title: 'Mobile App Landing',
      description: 'High-converting landing page with app preview and download optimization.',
      tags: ['Mobile', 'Marketing', 'SEO'],
      icon: Smartphone,
    },
    {
      id: 6,
      title: 'Restaurant Platform',
      description: 'Beautiful menu presentation with online ordering and reservation system.',
      tags: ['Food & Beverage', 'Ordering', 'Design'],
      icon: Globe,
    },
    {
      id: 7,
      title: 'Real Estate Portal',
      description: 'Property search platform with virtual tours and advanced filtering options.',
      tags: ['Real Estate', 'Search', '3D Tours'],
      icon: Palette,
    },
    {
      id: 8,
      title: 'Health & Wellness',
      description: 'Calming digital experience with appointment booking and health tracking.',
      tags: ['Healthcare', 'Wellness', 'Booking'],
      icon: Code,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-slate-900 to-slate-800 py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
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
              <Monitor className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm font-medium">Digital Portfolio</span>
            </div>

            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
              Website Design &
              <span className="block mt-2 bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
                Development
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Crafting digital experiences that engage, convert, and inspire. Each project is a unique blend of aesthetic excellence and technical innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            {[
              { icon: Globe, label: 'Responsive Design' },
              { icon: Zap, label: 'Performance' },
              { icon: Palette, label: 'UI/UX Excellence' },
              { icon: Code, label: 'Clean Code' },
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
              A selection of our recent website design and development work
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {placeholderProjects.map((project, index) => (
              <PortfolioCard
                key={project.id}
                project={project}
                index={index}
                type="website"
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
              Ready to Build Your Digital Presence?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Let's discuss how we can bring your vision to life with a stunning website.
            </p>
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all"
              >
                <Globe className="w-5 h-5" />
                Get Started
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
