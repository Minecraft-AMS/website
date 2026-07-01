import { useState } from 'react';
import { Server, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: '首页' },
    { path: '/about', label: '关于' },
    { path: '/join', label: '加入我们' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1512]/80 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded flex items-center justify-center border border-[#c9a962]/30">
                <Server className="w-4 h-4 text-[#c9a962]" />
              </div>
              <span className="text-[#c9a962] font-serif text-lg tracking-wider">A Minecraft Server</span>
            </Link>

            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs tracking-[0.2em] uppercase transition-colors ${
                    isActive(link.path) ? 'text-[#c9a962]' : 'text-gray-400 hover:text-[#c9a962]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:block">
              {isActive('/about') || isActive('/join') ? (
                <Link
                  to="/"
                  className="w-[120px] flex items-center justify-center px-5 py-2.5 border border-[#c9a962]/50 text-[#c9a962] text-xs tracking-wider hover:bg-[#c9a962]/10 transition-all"
                >
                  返回首页
                </Link>
              ) : (
                <Link
                  to="/join"
                  className="w-[120px] flex items-center justify-center px-5 py-2.5 border border-[#c9a962]/50 text-[#c9a962] text-xs tracking-wider hover:bg-[#c9a962]/10 transition-all"
                >
                  加入服务器
                </Link>
              )}
            </div>

            <button
              className="md:hidden text-[#c9a962] p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-[#1a1512]/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl font-serif tracking-[0.3em] uppercase transition-colors ${
                isActive(link.path) ? 'text-[#c9a962]' : 'text-gray-400 hover:text-[#c9a962]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-8">
            <Link
              to="/join"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-8 py-4 bg-[#c9a962] text-black text-sm tracking-wider hover:bg-[#d4a373] transition-colors"
            >
              加入服务器
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}