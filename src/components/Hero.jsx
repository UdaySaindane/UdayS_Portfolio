import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import './Hero.css';

const ease = [0.2, 0.7, 0.2, 1];
const nameLines = profile.name.split(' ');

const Hero = () => (
  <section className="hero" id="top">
    <div className="container hero-inner">
      <motion.div
        className="hero-meta"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <p>
          <strong>{profile.roles[0]}</strong> · {profile.roles[1]}
        </p>
        <p className="hero-status">
          <span className="dot" aria-hidden="true" />
          {profile.availability}
        </p>
        <ul className="hero-links">
          <li>
            <a className="link-u" href={profile.socials.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a className="link-u" href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a className="link-u" href={`mailto:${profile.email}`}>
              Email
            </a>
          </li>
        </ul>
      </motion.div>

      <h1 className="hero-name" aria-label={profile.name}>
        {nameLines.map((word, i) => (
          <span className="line-mask" key={word} aria-hidden="true">
            <motion.span
              className="line"
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 + i * 0.1, ease }}
            >
              {word}
              {i === nameLines.length - 1 && <span className="accent">.</span>}
            </motion.span>
          </span>
        ))}
      </h1>

      <div className="hero-bars" aria-hidden="true">
        {[1, 2, 3, 4].map((n, i) => (
          <motion.span
            key={n}
            className={`bar bar-${n}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4 + i * 0.08, ease }}
          />
        ))}
      </div>

      <motion.div
        className="hero-foot"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease }}
      >
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-solid">
            View projects ↓
          </a>
          <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            Résumé ↗
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
