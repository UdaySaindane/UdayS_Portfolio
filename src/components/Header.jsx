import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import './Header.css';

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const pad = (n) => String(n).padStart(2, '0');

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  // Header background once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the nav link for the section in the middle of the screen
  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Mobile menu: lock page scroll, close on Escape or when resized to desktop
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const mq = window.matchMedia('(min-width: 901px)');
    const onMq = (e) => e.matches && setOpen(false);
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onMq);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onMq);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={`site-header${scrolled || open ? ' is-solid' : ''}`}>
        <div className="container header-inner">
          <a href="#top" className="brand" onClick={close}>
            {profile.name}
            <span className="accent">.</span>
          </a>

          <nav className="nav-desktop" aria-label="Primary">
            <ul>
              {links.map((l, i) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className={active === l.id ? 'is-active' : undefined}
                    aria-current={active === l.id ? 'location' : undefined}
                  >
                    <span className="nav-idx">{pad(i + 1)}</span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            className="header-resume"
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé ↗
          </a>

          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <nav aria-label="Mobile">
              <ul>
                {links.map((l, i) => (
                  <li key={l.id}>
                    <a href={`#${l.id}`} className="mm-link" onClick={close}>
                      <span className="nav-idx">{pad(i + 1)}</span>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mm-foot">
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                Résumé ↗
              </a>
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
              <a href={`mailto:${profile.email}`}>Email ↗</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
