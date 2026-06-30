import { Heart } from 'lucide-react';
import { serverInfo } from '../data/serverData';

export function Footer() {
  return (
    <footer className="bg-[#0f0f23] border-t border-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-pixel text-xl text-[#567d46] mb-4">{serverInfo.name}</h3>
            <p className="text-gray-400 text-sm">
              探索无限可能，建造你的梦想世界
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-[#567d46] transition-colors">关于我们</a></li>
              <li><a href="#" className="hover:text-[#567d46] transition-colors">游戏规则</a></li>
              <li><a href="#" className="hover:text-[#567d46] transition-colors">联系客服</a></li>
              <li><a href="#" className="hover:text-[#567d46] transition-colors">社区论坛</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">联系我们</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Discord: discord.gg/example</li>
              <li>QQ群: 123456789</li>
              <li>邮箱: support@example.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {serverInfo.name}. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500" /> for Minecraft players
          </p>
        </div>
      </div>
    </footer>
  );
}