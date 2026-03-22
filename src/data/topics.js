import { topicsEn } from './topicsEn';
import { topicsZh } from './topicsZh';

export const categoriesEn = [
  { id: 'latest', name: 'Latest', icon: '✨' },
  { id: 'fundamentals', name: 'Fundamentals', icon: '📚' },
  { id: 'ml', name: 'Machine Learning', icon: '🤖' },
  { id: 'deep-learning', name: 'Deep Learning', icon: '🧠' },
  { id: 'nlp', name: 'NLP', icon: '💬' },
  { id: 'vision', name: 'Computer Vision', icon: '👁️' },
  { id: 'applications', name: 'Applications', icon: '🚀' }
];

export const categoriesZh = [
  { id: 'latest', name: '最新', icon: '✨' },
  { id: 'fundamentals', name: '基础知识', icon: '📚' },
  { id: 'ml', name: '机器学习', icon: '🤖' },
  { id: 'deep-learning', name: '深度学习', icon: '🧠' },
  { id: 'nlp', name: '自然语言处理', icon: '💬' },
  { id: 'vision', name: '计算机视觉', icon: '👁️' },
  { id: 'applications', name: '应用', icon: '🚀' }
];

export const getTopics = (lang) => lang === 'zh' ? topicsZh : topicsEn;
export const getCategories = (lang) => lang === 'zh' ? categoriesZh : categoriesEn;
export const getLatestTopics = () => topicsEn.filter(t => t.isNew);
