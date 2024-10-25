import React, { useEffect, useRef } from 'react';
import './App.css';

const Home = () => {
  const cursorRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    // Cursor movement effect
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }

      if (backgroundRef.current) {
        const { offsetWidth: width, offsetHeight: height } = backgroundRef.current;
        const moveX = (clientX / width) * 20 - 10;
        const moveY = (clientY / height) * 20 - 10;
        backgroundRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        ref={backgroundRef}
        className="absolute top-0 left-0 w-full h-full bg-effect"
        style={{ transition: 'transform 0.1s ease-out' }}
      ></div>

      {/* Custom Cursor */}
      <div ref={cursorRef} className="cursor-effect"></div>

      <div className="relative z-10 flex flex-col justify-center items-start h-full p-10">
        <h1 className="text-white text-6xl font-bold">Nikita Vyas</h1>
        <h2 className="text-blue-400 text-3xl mt-2">Full Stack Developer</h2>
        <button className="mt-5 bg-blue-500 text-white px-6 py-2 rounded-lg">
          About Me
        </button>
      </div>

      {/* Add your profile photo here */}
      <div className="absolute right-10 bottom-10">
        <img src="/path-to-your-photo.png" alt="Nikita Vyas" className="w-64 h-64 rounded-full" />
      </div>
    </div>
  );
};

export default Home;
