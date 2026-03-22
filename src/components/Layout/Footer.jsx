import './Footer.css';

export function Footer({ lang }) {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__text">
          🧠 {lang === 'zh' ? 'AI百科' : 'AI Encyclopedia'} - {lang === 'zh' ? '让AI知识触手可及' : 'Making AI knowledge accessible to everyone'}
        </p>
        <p className="footer__copyright">
          {lang === 'zh' ? '使用 Claude Code + MiniMax 2.7 零代码构建' : 'Built with Claude Code + MiniMax 2.7'}
        </p>
      </div>
    </footer>
  );
}
