import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'about', href: '#about' },
    { name: 'experience', href: '#experience' },
    { name: 'awards', href: '#awards' },
    { name: 'projects', href: '#projects' },
    { name: 'skills', href: '#skills' },
    { name: 'contact', href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 100,
      height: 'var(--nav-height)',
      display: 'flex',
      alignItems: 'center',
      transition: 'all 0.3s ease',
    }} className={isScrolled ? 'glass-nav' : ''}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
      }}>
        <a href="#" style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.05em' }}>
          le portfolio<span style={{ color: 'var(--accent-color)' }}>.</span>
        </a>

        {/* Desktop Nav */}
        <ul style={{ display: 'flex', gap: '2rem' }} className="desktop-nav">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} style={{
                textTransform: 'lowercase',
                fontSize: '0.875rem',
                color: 'var(--text-secondary)'
              }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </nav>
  );
};
