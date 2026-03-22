import './ChangelogPage.css';

const changelogEn = [
  {
    version: '1.0.0',
    date: '2026-03-23',
    changes: [
      { type: 'feature', text: 'Initial release with 8 AI topics' },
      { type: 'feature', text: 'Chinese/English language switching' },
      { type: 'feature', text: 'Dark mode support' },
      { type: 'feature', text: 'Responsive design for mobile and desktop' },
      { type: 'feature', text: 'Search functionality' },
      { type: 'feature', text: 'Category filtering' },
      { type: 'feature', text: 'Latest topics with "New" badge' },
      { type: 'feature', text: 'GitHub Pages deployment' },
    ]
  },
  {
    version: '1.1.0',
    date: '2026-03-23',
    changes: [
      { type: 'feature', text: 'Back to top button' },
      { type: 'feature', text: 'Draggable back button on mobile' },
      { type: 'feature', text: 'Changelog page' },
    ]
  }
];

const changelogZh = [
  {
    version: '1.0.0',
    date: '2026-03-23',
    changes: [
      { type: 'feature', text: '首发版本，包含8个AI主题' },
      { type: 'feature', text: '中英文切换功能' },
      { type: 'feature', text: '暗黑模式支持' },
      { type: 'feature', text: '响应式设计，适配移动端和桌面端' },
      { type: 'feature', text: '搜索功能' },
      { type: 'feature', text: '分类筛选' },
      { type: 'feature', text: '最新主题标识' },
      { type: 'feature', text: 'GitHub Pages 部署' },
    ]
  },
  {
    version: '1.1.0',
    date: '2026-03-23',
    changes: [
      { type: 'feature', text: '回到顶部按钮' },
      { type: 'feature', text: '移动端可拖拽返回按钮' },
      { type: 'feature', text: '更新日志页面' },
    ]
  }
];

export function ChangelogPage({ lang }) {
  const changelog = [...(lang === 'zh' ? changelogZh : changelogEn)].reverse();

  const getTypeLabel = (type) => {
    const labels = {
      feature: lang === 'zh' ? '新功能' : 'Feature',
      fix: lang === 'zh' ? '修复' : 'Fix',
      improve: lang === 'zh' ? '优化' : 'Improvement',
    };
    return labels[type] || type;
  };

  const getTypeClass = (type) => {
    const classes = {
      feature: 'changelog__tag--feature',
      fix: 'changelog__tag--fix',
      improve: 'changelog__tag--improve',
    };
    return classes[type] || '';
  };

  return (
    <div className="changelog">
      <header className="changelog__header">
        <h1 className="changelog__title">
          {lang === 'zh' ? '更新日志' : 'Changelog'}
        </h1>
        <p className="changelog__subtitle">
          {lang === 'zh'
            ? '记录产品的每一次迭代与成长'
            : 'Recording every iteration and growth of the product'}
        </p>
      </header>

      <div className="changelog__timeline">
        {changelog.map((release, index) => (
          <div key={release.version} className="changelog__release">
            <div className="changelog__version-row">
              <span className="changelog__version">v{release.version}</span>
              <span className="changelog__date">{release.date}</span>
              {index === 0 && (
                <span className="changelog__latest">
                  {lang === 'zh' ? '最新' : 'Latest'}
                </span>
              )}
            </div>
            <ul className="changelog__changes">
              {release.changes.map((change, i) => (
                <li key={i} className="changelog__change">
                  <span className={`changelog__tag ${getTypeClass(change.type)}`}>
                    {getTypeLabel(change.type)}
                  </span>
                  <span className="changelog__text">{change.text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
