import { Button } from '../UI/Button';
import './Header.css';

export function Header({ onLogoClick, lang, onToggleLang, isDark, onToggleDark, searchQuery, onSearchChange }) {
  return (
    <header className="header">
      <div className="header__inner">
        <button className="header__logo" onClick={onLogoClick}>
          <span className="header__logo-icon">🧠</span>
          <span className="header__logo-text">{lang === 'zh' ? 'AI百科' : 'AI Encyclopedia'}</span>
        </button>

        <div className="header__search">
          <input
            type="text"
            className="header__search-input"
            placeholder={lang === 'zh' ? '搜索主题...' : 'Search topics...'}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          {searchQuery && (
            <button className="header__search-clear" onClick={() => onSearchChange('')}>
              ✕
            </button>
          )}
        </div>

        <nav className="header__nav">
          <Button variant="secondary" size="sm" onClick={onToggleDark} title={isDark ? (lang === 'zh' ? '切换浅色模式' : 'Switch to light') : (lang === 'zh' ? '切换深色模式' : 'Switch to dark')}>
            {isDark ? '☀️' : '🌙'}
          </Button>
          <Button variant="secondary" size="sm" onClick={onToggleLang} className="header__lang-btn">
            {lang === 'zh' ? 'EN' : '中'}
          </Button>
          <Button variant="secondary" size="sm" onClick={onLogoClick}>
            {lang === 'zh' ? '首页' : 'Home'}
          </Button>
        </nav>
      </div>
    </header>
  );
}
