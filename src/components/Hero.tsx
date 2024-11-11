import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: 'var(--background)' }}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, var(--accent) 0%, transparent 50%)`,
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 py-24 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Animated Title */}
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
             <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Nikita
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{ marginLeft: '8px' }}
              >
                Vyas
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{ color: 'var(--accent)' }}
              >
                Full Stack Developer
              </motion.span>
            </motion.h1>
            {/* Personal Introduction
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              Hi, I’m Nikita – a passionate developer dedicated to crafting seamless user experiences.
            </motion.p> */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-xl mb-8"
              style={{ color: 'var(--text-secondary)' }}
            >
              Building beautiful, responsive, and user-friendly applications with modern technologies.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex space-x-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                style={{ background: 'var(--accent)' }}
                className="px-8 py-3 rounded-lg flex items-center space-x-2 text-white hover:brightness-110 transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-3 rounded-lg border-2 transition-colors"
                style={{ 
                  borderColor: 'var(--accent)',
                  color: 'var(--accent)'
                }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Image Section with Floating Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              animate={{ y: [-20, 20, -20] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Developer workspace"
                className="rounded-2xl shadow-2xl"
                style={{ border: '1px solid var(--card-border)' }}
              />
            </motion.div>
            {/* Badge with Experience */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 p-4 rounded-lg"
              style={{ 
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            >
            
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
