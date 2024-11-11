import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const [theme, setTheme] = React.useState('light');

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="p-2 rounded-lg bg-opacity-20 hover:bg-opacity-30 transition-colors"
      style={{ background: 'var(--background-tertiary)' }}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
      ) : (
        <Sun className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
      )}
    </motion.button>
  );
}