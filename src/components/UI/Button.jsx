import './Button.css';

export function Button({ children, onClick, variant = 'primary', size = 'md', className = '' }) {
  return (
    <button
      className={`btn btn--${variant} btn--${size} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
