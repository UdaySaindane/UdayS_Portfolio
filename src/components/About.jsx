import { about, profile } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import './About.css';

const About = () => (
  <section id="about" className="section">
    <div className="container">
      <SectionHead index="01" title="About" note="Who I am" />

      <div className="grid about-grid">
        <Reveal as="p" className="about-statement">
          {about.statement}
        </Reveal>

        <Reveal className="about-photo" delay={0.05}>
          <div className="about-photo-frame">
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width="900"
              height="1200"
              loading="lazy"
              decoding="async"
            />
          </div>
          <p className="label about-caption">
            {profile.fullName}
            {profile.location && <> — {profile.location}</>}
          </p>
        </Reveal>

        <div className="about-text">
          {about.paragraphs.map((text, i) => (
            <Reveal as="p" key={i} delay={0.1 + i * 0.05}>
              {text}
            </Reveal>
          ))}
        </div>

        <Reveal className="about-side" delay={0.15}>
          <ul className="about-stats">
            {about.stats.map((s) => (
              <li key={s.label}>
                <span className="stat-value">{s.value}</span>
                <span className="label">{s.label}</span>
              </li>
            ))}
          </ul>

          {about.openTo && (
            <div className="open-to">
              <p className="open-to-head label">
                <span className="dot" aria-hidden="true" />
                Open to
              </p>
              <ul className="open-to-roles">
                {about.openTo.roles.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
              {about.openTo.note && <p className="label">{about.openTo.note}</p>}
              <div className="open-to-cta">
                <a className="btn btn-solid" href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                  Résumé ↗
                </a>
                <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
                  Email me
                </a>
              </div>
            </div>
          )}
        </Reveal>
      </div>
    </div>
  </section>
);

export default About;
