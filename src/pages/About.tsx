import { useState, useEffect, useRef } from 'react';
import { EnergySphere } from '../components/EnergySphere';
import Navbar from '../components/Navbar';
import { Server } from 'lucide-react';

export default function About() {
  const [showContent, setShowContent] = useState(false);
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#1a1512]">
      <Navbar currentPage="about" />

      <section className="relative min-h-screen flex flex-col justify-end pb-32 px-6 pt-20">
        <div className="absolute inset-0">
          <EnergySphere />
        </div>

        <div className="relative max-w-6xl mx-auto w-full">
          <div className="scroll-reveal">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-12 h-px bg-gradient-to-r from-[#c9a962] to-transparent" />
              <span className="text-[#c9a962] text-xs tracking-[0.3em] uppercase">ABOUT</span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl text-white leading-none mb-8">
              A Minecraft Server<br />
              <span className="text-gradient-gensyn">2022 — 2077</span>
            </h1>

            <div className="space-y-6 text-gray-400 text-lg max-w-2xl leading-relaxed">
              <p>A Minecraft Server 是一个从2022年不间断运行至今的Minecraft技术生存服务器</p>
            </div>
          </div>
        </div>

        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={() => {
              const nextSection = document.querySelector('section.border-t');
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="cursor-pointer hover:text-[#d4a373] transition-colors"
          >
            <svg className="w-8 h-8 text-[#c9a962] animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded flex items-center justify-center border border-[#c9a962]/30">
                <Server className="w-4 h-4 text-[#c9a962]" />
              </div>
              <span className="text-[#c9a962] font-serif tracking-wider">A Minecraft Server</span>
            </div>

            <div className="flex items-center gap-8 text-gray-600 text-xs tracking-wider">
              <span>©2026 1024_byteeeee All rights reserved</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}