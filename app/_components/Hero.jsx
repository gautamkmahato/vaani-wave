'use client'

// HeroSection.jsx
import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef(null);
  const contentRef = useRef(null);
  const bgCanvasRef = useRef(null);
  
  // Background dotted lines effect
  useEffect(() => {
    const bgCanvas = bgCanvasRef.current;
    if (bgCanvas) {
      const bgCtx = bgCanvas.getContext('2d');
      
      const updateBgSize = () => {
        bgCanvas.width = window.innerWidth;
        bgCanvas.height = window.innerHeight;
        drawDottedLines();
      };
      
      const drawDottedLines = () => {
        bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
        
        // Set dot properties
        const dotSize = 1;
        const spacing = 10;
        const diagonalOffset = 10;
        
        bgCtx.fillStyle = 'rgba(255, 255, 255, 0.15)';
        
        // Calculate how many diagonal lines we need
        const numDiagonals = Math.ceil((bgCanvas.width + bgCanvas.height) / spacing);
        
        // Draw diagonal lines of dots
        for (let d = -numDiagonals; d < numDiagonals; d++) {
          const offset = d * spacing * diagonalOffset;
          
          for (let i = -bgCanvas.height; i < bgCanvas.width; i += spacing) {
            const x = i;
            const y = bgCanvas.height - (x + offset);
            
            if (x >= 0 && x <= bgCanvas.width && y >= 0 && y <= bgCanvas.height) {
              bgCtx.beginPath();
              bgCtx.arc(x, y, dotSize, 0, Math.PI * 2);
              bgCtx.fill();
            }
          }
        }
      };
      
      updateBgSize();
      
      window.addEventListener('resize', updateBgSize);
      return () => {
        window.removeEventListener('resize', updateBgSize);
      };
    }
  }, []);
  
  // Sound waveform animation
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
      {/* Background dotted lines */}
      <canvas ref={bgCanvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      
      {/* Content Container */}
      <div ref={contentRef} className="max-w-4xl w-full mx-auto text-center z-10">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Discover the Future of AI Voices
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
        <button className="rounded-md bg-[#2721de] px-8 py-4 text-md font-medium text-white shadow-sm">
          Get Started
        </button>
      </div>
    </div>
  );
}