import { getCategories } from '../../data/topics';
import './Sidebar.css';

export function Sidebar({ selectedCategory, onCategoryClick, lang, isOpen }) {
  const categories = getCategories(lang);

  return (
    <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
      <div className="sidebar__header">
        <h2 className="sidebar__title">{lang === 'zh' ? '分类' : 'Categories'}</h2>
      </div>
      <nav className="sidebar__nav">
        <button
          className={`sidebar__item ${!selectedCategory ? 'sidebar__item--active' : ''}`}
          onClick={() => onCategoryClick(null)}
        >
          <span className="sidebar__item-icon">🏠</span>
          <span className="sidebar__item-name">{lang === 'zh' ? '所有主题' : 'All Topics'}</span>
        </button>
        {categories.map(category => (
          <button
            key={category.id}
            className={`sidebar__item ${selectedCategory === category.id ? 'sidebar__item--active' : ''}`}
            onClick={() => onCategoryClick(category.id)}
            data-category={category.id}
          >
            <span className="sidebar__item-icon">{category.icon}</span>
            <span className="sidebar__item-name">{category.name}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
