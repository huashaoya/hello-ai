import './Footer.css';

export function Footer({ lang }) {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__text">
          🧠 {lang === 'zh' ? 'AI百科' : 'AI Encyclopedia'} - {lang === 'zh' ? '让AI知识触手可及' : 'Making AI knowledge accessible to everyone'}
        </p>
        <p className="footer__copyright">
          {lang === 'zh' ? '基于React构建' : 'Built with React'}
        </p>
      </div>
    </footer>
  );
}
