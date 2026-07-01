import { useState, useEffect, useRef } from 'react';
import { EnergySphere } from '../components/EnergySphere';
import Navbar from '../components/Navbar';
import { BackToTop } from '../components/BackToTop';
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
      <Navbar />

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

      <BackToTop />
    </div>
  );
}