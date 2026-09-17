import type { Lang } from '../i18n/ui';

export type Entry = {
  org: string;
  role: string;
  period: string;
  location: string;
  logo: string;
  notes?: string[];
  keywords?: string[];
};

export type Paper = { title: string; authors: string; venue: string; url?: string };

export type Social = { icon: 'envelope' | 'linkedin-in' | 'github' | 'google-scholar'; label: string; href: string };

type Resume = {
  name: string;
  education: Entry[];
  papers: Paper[];
  experience: Entry[];
};

export const social: Social[] = [
  { icon: 'envelope', label: 'Email', href: 'mailto:xinyinzhang@cmu.edu' },
  { icon: 'linkedin-in', label: 'LinkedIn', href: 'https://www.linkedin.com/in/zhang-xinyin' },
  { icon: 'github', label: 'GitHub', href: 'https://github.com/xinyinzhangharriet' },
  { icon: 'google-scholar', label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=mGGhqgoAAAAJ&hl=en' },
];

const paper = {
  title: 'Beyond LoRA vs. Full Fine-Tuning: Gradient-Guided Optimizer Routing for LLM Adaptation',
  authors: 'Haozhan Tang, Xiuqi Zhu*, Xinyin Zhang*, Boxun Li, Virginia Smith, Kevin Kuo',
  venue: 'arXiv:2605.07111',
  url: 'https://arxiv.org/abs/2605.07111',
};

export const resume: Record<Lang, Resume> = {
  en: {
    name: 'Xinyin Zhang',
    education: [
      {
        org: 'Carnegie Mellon University, Heinz College',
        role: 'Master of Information Systems Management, Business Intelligence and Data Analytics',
        period: 'Aug 2025 – Dec 2026',
        location: 'Pittsburgh, PA',
        logo: '/logos/cmu.png',
        notes: ['Teaching Assistant, Spring 2026: 95-888 Data Focused Python · 95-865 Unstructured Data Analytics'],
      },
      {
        org: 'Peking University, Guanghua School of Management',
        role: 'Bachelor of Economics in Finance',
        period: 'Sep 2021 – Jul 2025',
        location: 'Beijing, China',
        logo: '/logos/pku.svg',
      },
      {
        org: 'Stanford University',
        role: 'Visiting Summer Student',
        period: 'Jun 2024 – Aug 2024',
        location: 'Stanford, CA',
        logo: '/logos/stanford.png',
      },
    ],
    papers: [paper],
    experience: [
      {
        org: 'TikTok USDS Joint Venture · Global E-commerce Recommendation Team',
        role: 'Machine Learning Engineer Intern',
        period: 'May 2026 – Aug 2026',
        location: 'Bellevue, WA',
        logo: '/logos/tiktok.svg',
        keywords: ['LLM agents', 'LangChain', 'Cold-start recommendation', 'Self-improving agents'],
      },
      {
        org: 'DiDi Global · Loan Risk Management Algorithm Team',
        role: 'Data Research & Development Intern',
        period: 'Oct 2024 – Jan 2025',
        location: 'Beijing, China',
        logo: '/logos/didi.svg',
        keywords: ['Risk modeling', 'Tree-based models', 'Multi-task learning', 'MoE'],
      },
    ],
  },
  zh: {
    name: 'Xinyin Zhang',
    education: [
      {
        org: '卡内基梅隆大学 Heinz 学院',
        role: '信息系统管理硕士（商业智能与数据分析方向）',
        period: '2025.08 – 2026.12',
        location: '美国匹兹堡',
        logo: '/logos/cmu.png',
        notes: ['研究生助教，2026 春季学期：95-888 Data Focused Python · 95-865 Unstructured Data Analytics'],
      },
      {
        org: '北京大学光华管理学院',
        role: '经济学学士（金融学）',
        period: '2021.09 – 2025.07',
        location: '中国北京',
        logo: '/logos/pku.svg',
      },
      {
        org: '斯坦福大学',
        role: '暑期访问学生',
        period: '2024.06 – 2024.08',
        location: '美国斯坦福',
        logo: '/logos/stanford.png',
      },
    ],
    papers: [paper],
    experience: [
      {
        org: 'TikTok USDS Joint Venture · 全球电商推荐团队',
        role: '机器学习工程师实习生',
        period: '2026.05 – 2026.08',
        location: '美国贝尔维尤',
        logo: '/logos/tiktok.svg',
        keywords: ['LLM 智能体', 'LangChain', '冷启动推荐', '自我改进智能体'],
      },
      {
        org: '滴滴出行 · 贷款风控部门算法团队',
        role: '大数据研发实习生',
        period: '2024.10 – 2025.01',
        location: '中国北京',
        logo: '/logos/didi.svg',
        keywords: ['风险建模', '树模型', '多任务学习', '混合专家（MoE）'],
      },
    ],
  },
};
