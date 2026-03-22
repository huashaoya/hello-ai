import { getCategories } from '../../data/topics';
import './Badge.css';

export function Badge({ categoryId, size = 'md', lang = 'en' }) {
  const categories = getCategories(lang);
  const category = categories.find(c => c.id === categoryId);
  if (!category) return null;

  return (
    <span className={`badge badge--${size}`} data-category={categoryId}>
      <span className="badge__icon">{category.icon}</span>
      <span className="badge__name">{category.name}</span>
    </span>
  );
}
