export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface GameMode {
  id: number;
  name: string;
  description: string;
  icon: string;
  bgColor: string;
}

export interface ServerInfo {
  name: string;
  ip: string;
  port: number;
  status: 'online' | 'offline';
  latency: number;
  onlinePlayers: number;
  maxPlayers: number;
  version: string;
}

export const serverInfo: ServerInfo = {
  name: 'A Minecraft Server',
  ip: 'mc.example.com',
  port: 25565,
  status: 'online',
  latency: 28,
  onlinePlayers: 156,
  maxPlayers: 500,
  version: '1.21.1',
};

export const features: Feature[] = [
  {
    id: 1,
    title: '无限世界',
    description: '探索由程序生成的无限世界，每个角落都充满惊喜和冒险',
    icon: 'Globe',
    color: '#567d46',
  },
  {
    id: 2,
    title: '多人联机',
    description: '与全球玩家一起建造、冒险、对战，体验真正的多人乐趣',
    icon: 'Users',
    color: '#1e40af',
  },
  {
    id: 3,
    title: '自定义插件',
    description: '丰富的插件系统，提供独特的游戏玩法和功能',
    icon: 'Plugin',
    color: '#f59e0b',
  },
  {
    id: 4,
    title: '安全稳定',
    description: '专业服务器托管，99.9%在线率，数据定期备份',
    icon: 'Shield',
    color: '#8b5cf6',
  },
];

export const gameModes: GameMode[] = [
  {
    id: 1,
    name: '生存模式',
    description: '收集资源、建造庇护所、对抗怪物，体验最经典的Minecraft生存玩法',
    icon: 'Heart',
    bgColor: '#ef4444',
  },
  {
    id: 2,
    name: '创造模式',
    description: '无限资源、飞行能力，释放你的创造力，建造宏伟建筑',
    icon: 'Wand2',
    bgColor: '#22c55e',
  },
  {
    id: 3,
    name: '迷你游戏',
    description: '饥饿游戏、起床战争、空岛战争等多种迷你游戏等你来挑战',
    icon: 'Trophy',
    bgColor: '#f59e0b',
  },
  {
    id: 4,
    name: '角色扮演',
    description: '沉浸在精心设计的RPG世界中，完成任务、升级技能',
    icon: 'Sword',
    bgColor: '#8b5cf6',
  },
];

export const stats = {
  totalPlayers: 12580,
  onlinePlayers: 156,
  serverUptime: '99.9%',
  yearsOnline: 5,
};