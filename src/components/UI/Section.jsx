import './Section.css';

export function Section({ title, children, className = '' }) {
  return (
    <section className={`section ${className}`}>
      {title && <h3 className="section__title">{title}</h3>}
      <div className="section__content">
        {children}
      </div>
    </section>
  );
}
