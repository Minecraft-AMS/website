import { useEffect, useState, useRef } from 'react';
import { EnergySphere } from '../components/EnergySphere';
import Navbar from '../components/Navbar';
import { ArrowRight, Server } from 'lucide-react';

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
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
      <Navbar currentPage="home" />

      <section
        id="hero"
        ref={(el) => { sectionsRef.current['hero'] = el; }}
        className="relative min-h-screen flex flex-col justify-end pb-32 px-6 pt-20"
      >
        <div className="absolute inset-0">
          <EnergySphere />
        </div>

        <div className="relative max-w-6xl mx-auto w-full">
          <div className={`transition-all duration-1000 delay-300 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-12 h-px bg-gradient-to-r from-[#c9a962] to-transparent" />
              <span className="text-[#c9a962] text-xs tracking-[0.3em] uppercase">AMINECRAFT SERVER</span>
            </div>

            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white leading-none mb-8">
              <span className="block text-gradient-gensyn">A Minecraft Server</span>
              <span className="block text-gray-500 text-5xl md:text-6xl lg:text-7xl mt-2">技术生存服务器</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed mb-12 font-light">
</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/join"
                className="group flex items-center gap-3 px-8 py-4 bg-[#c9a962] text-black text-sm tracking-wider hover:bg-[#d4a373] transition-colors"
              >
                <span>立即加入</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
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
    </div>
  );
}