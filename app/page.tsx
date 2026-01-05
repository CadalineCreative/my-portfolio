'use client';

import { motion } from 'framer-motion';
import { Building2, Monitor, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-white text-sm font-medium">Where Vision Meets Reality</span>
          </motion.div>

          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Designing Spaces That
            <span className="block mt-2 bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
              Transform Lives
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            At Cadaline, we bridge the physical and digital realms, crafting environments that inspire, engage, and elevate experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/website-portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-4 rounded-lg shadow-xl shadow-amber-500/30 transition-all"
              >
                <Monitor className="w-5 h-5" />
                Digital Portfolio
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
            <Link href="/autocad-portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-all"
              >
                <Building2 className="w-5 h-5" />
                Physical Portfolio
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Dual Expertise, Singular Vision
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We seamlessly integrate physical architecture with digital innovation to create comprehensive design solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Physical Spaces Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8 }}
              className="group bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className="bg-blue-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Building2 className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-slate-900 mb-4">
                Physical Spaces
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                From architectural blueprints to interior design, we craft tangible environments that combine functionality with aesthetic excellence. Our AutoCAD expertise brings precision to every project.
              </p>
              <Link href="/autocad-portfolio" className="inline-flex items-center gap-2 text-blue-900 font-semibold hover:gap-3 transition-all">
                Explore Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Digital Spaces Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -8 }}
              className="group bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className="bg-amber-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Monitor className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-slate-900 mb-4">
                Digital Experiences
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                We build websites and digital platforms that are as thoughtfully designed as our physical spaces. User-centric interfaces meet sophisticated aesthetics in every pixel.
              </p>
              <Link href="/website-portfolio" className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:gap-3 transition-all">
                View Portfolio <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Our Philosophy
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Whether designing a living room or a landing page, we believe every space should tell a story. Our approach combines technical precision with creative intuition, ensuring that form and function exist in perfect harmony.
            </p>
            <div className="inline-flex items-center gap-2 text-amber-400 font-semibold">
              <Sparkles className="w-5 h-5" />
              <span>Creating Spaces That Matter</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
