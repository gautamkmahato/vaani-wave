'use client'


// HeroSection.jsx
import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef(null);
  const contentRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const content = contentRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas width to match content width
    const updateCanvasSize = () => {
      canvas.width = content.offsetWidth;
      canvas.height = 120; // Fixed height for animation
    };
    
    updateCanvasSize();
    
    const bars = 50;
    const barWidth = canvas.width / bars;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < bars; i++) {
        // Random height for each bar to simulate sound waveform
        const height = Math.random() * (canvas.height * 0.7) + 10;
        const x = i * barWidth;
        const y = (canvas.height - height) / 2; // Center vertically
        
        // Gradient color from white to transparent
        const gradient = ctx.createLinearGradient(0, y, 0, y + height);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.7)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.1)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, barWidth * 0.8, height);
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      updateCanvasSize();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-[#090932] to-[#24244b] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Content Container */}
      <div ref={contentRef} className="max-w-4xl w-full mx-auto text-center z-10">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Discover the Future of Sound
        </h1>
        
        {/* Paragraph */}
        <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Experience audio like never before with our revolutionary technology. 
          Immerse yourself in crystal-clear soundscapes designed for the most 
          discerning listeners.
        </p>
        
        {/* Waveform Animation - Centered */}
        <div className="w-full mb-10">
          <canvas ref={canvasRef} className="w-full h-32"></canvas>
        </div>
        
        {/* Call to Action Button */}
        <button className="px-8 py-4 bg-white bg-opacity-10 hover:bg-opacity-20 text-white font-medium rounded-lg text-lg transition-all duration-300 border border-white border-opacity-20 hover:border-opacity-40 backdrop-blur-sm">
          Get Started
        </button>
      </div>
    </div>
  );
}


