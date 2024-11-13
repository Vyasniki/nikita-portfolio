import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
// import ThemeToggle from './ThemeToggle.tsx';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{ 
        background: 'var(--background)',
        borderBottom: '1px solid var(--card-border)',
      }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
          
              <div 
              className="w-8 h-8 flex items-center justify-center font-bold text-white rounded-full"
              style={{
                backgroundColor: 'var(--accent)',
                color: 'var(--background)',
              }}
            >
              N
            </div>
          
            <span className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
              Nikita
            </span>
          </motion.a>

          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.05 }}
                style={{ color: 'var(--text-secondary)' }}
                className="hover:text-accent transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {[
              { Icon: Github, href: 'https://github.com/Vyasniki' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/nikita-vyas-50203a111/' },
              { Icon: Mail, href: 'mailto:vyasniki93@gmail.com' }
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.1 }}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-secondary)' }}
                className="hover:text-accent transition-colors"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
            {/* <ThemeToggle /> */}
          </div>
        </div>
      </nav>
    </motion.header>
  );
}