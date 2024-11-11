import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Projects from './components/Projects.tsx';
import Skills from './components/Skills.tsx';
import Contact from './components/Contact.tsx';
import About from './components/About.tsx';

function App() {
  return (
    <div style={{ background: 'var(--background)' }} className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer style={{ background: 'var(--background-secondary)' }} className="py-8">
        <div className="container mx-auto px-6 text-center">
          <p style={{ color: 'var(--text-secondary)' }}>
            © {new Date().getFullYear()} Nikita Vyas. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
