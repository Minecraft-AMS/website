import { useState, useEffect, useRef } from 'react';
import { EnergySphere } from '../components/EnergySphere';
import Navbar from '../components/Navbar';
import { Server } from 'lucide-react';

export default function Join() {
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
              <span className="text-[#c9a962] text-xs tracking-[0.3em] uppercase">Join Us</span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl text-white leading-none mb-8">
              加入 A Minecraft Server<br />
              <span className="text-gradient-gensyn">与红石共舞</span>
            </h1>
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

      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal">
            <p className="text-gray-400 leading-relaxed mb-8">
              我们十分欢迎新成员加入群体。但由于不可抗力因素，我们必须采用审核机制。
            </p>

            <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">
              需要满足的基本条件
            </h2>

            <ul className="space-y-4 text-gray-400 text-sm leading-relaxed">
              <li className="flex gap-3">
                <span className="text-[#c9a962]">○</span>
                <span>拥有国际正版 Minecraft 账号。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c9a962]">○</span>
                <span>年龄满18周岁。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c9a962]">○</span>
                <span>没有心理疾病。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c9a962]">○</span>
                <span>游玩的大部分时间可以使用KOOK语音（可以不说话，但是得在频道里面听着）。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c9a962]">○</span>
                <span>语言要文明，语气要诚恳，语调要柔和，语速要适中，吐字要清晰。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c9a962]">○</span>
                <span>可以熟练使用常用辅助 Mod，如下列模组：</span>
              </li>
              <li className="flex gap-3 pl-8">
                <span className="text-[#c9a962]">○</span>
                <span> Carpet</span>
              </li>
              <li className="flex gap-3 pl-8">
                <span className="text-[#c9a962]">○</span>
                <span> Item Scroller</span>
              </li>
              <li className="flex gap-3 pl-8">
                <span className="text-[#c9a962]">○</span>
                <span> Litematica</span>
              </li>
              <li className="flex gap-3 pl-8">
                <span className="text-[#c9a962]">○</span>
                <span> Tweakeroo</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c9a962]">○</span>
                <span>具有一定的独立设计机器或建筑的能力，我们是鼓励原创的服务器。</span>
              </li>
            </ul>

            <p className="text-gray-400 text-sm leading-relaxed mt-8">
              若你满足以上要求，便可以加入审核群，针对你个人的特长（如红石、建筑等）接受进一步的审核。
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">
              审核流程
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              审核流程不是固定不变的，受服务器况、社区环境等各种因素影响，以下是基本的审核流程。
            </p>

            <ul className="space-y-4 text-gray-400 text-sm leading-relaxed">
              <li className="flex gap-3">
                <span className="text-[#c9a962]">○</span>
                <span>在满足基本条件的情况下进入审核群。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c9a962]">○</span>
                <span>写一份自我介绍发给群主。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c9a962]">○</span>
                <span>自我介绍通过后会由群主或其他的服务器成员来进行审核。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c9a962]">○</span>
                <span>你或许会回答一些问题以及进行一些实操，但这并不是影响审核结果的必要条件。</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">
              审核群地址
            </h2>

            <ul className="space-y-4 text-gray-400 text-sm leading-relaxed">
              <li className="flex gap-3">
                <span className="text-[#c9a962]">○</span>
                <span>腾讯 QQ</span>
              </li>
              <li className="flex gap-3 pl-8">
                <span className="text-[#c9a962]">○</span>
                <span>群号 961795862</span>
              </li>
              <li className="flex gap-3 pl-8">
                <span className="text-[#c9a962]">○</span>
                <span>链接 <a href="https://qm.qq.com/cgi-bin/qm/qr?k=P9p8jF5iBZwF73Bs6LR0eYACZUz8SgP4&authKey=eSAmTuhUwjKnZU%2BX9YZjR1%2F%2FQRpq28%2F8y7F3cJF5EPHBzGiRkWkXmu6k%2Bd5pMnnR&noverify=0&group_code=961795862" target="_blank" rel="noopener noreferrer" className="text-[#c9a962] hover:underline">点此打开</a></span>
              </li>
            </ul>
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