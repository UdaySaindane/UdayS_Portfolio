import { projects } from '../data/portfolio';
import { skillIcons } from '../data/skillIcons';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import './Projects.css';

const pad = (n) => String(n).padStart(2, '0');

const Projects = () => (
  <section id="projects" className="section">
    <div className="container">
      <SectionHead index="04" title="Projects" note="Selected work" />

      <div className="projects-grid">
        {projects.map((p, i) => (
          <Reveal as="article" key={p.name} className="project" delay={i * 0.08}>
            <span className="project-num" aria-hidden="true">
              {pad(i + 1)}.
            </span>

            <a
              className="project-media"
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={-1}
              aria-hidden="true"
            >
              <img src={p.image} alt="" loading="lazy" decoding="async" />
            </a>

            <div className="project-body">
              <p className="label">{p.subtitle}</p>
              <h3 className="project-name">{p.name}</h3>
              <p className="project-desc">{p.description}</p>

              {p.highlights?.length > 0 && (
                <ul className="project-highlights">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}

              <ul className="project-tech" aria-label="Tech stack">
                {p.tech.map((t) => {
                  const [Icon, color] = skillIcons[t] ?? [];
                  return (
                    <li key={t}>
                      {Icon && <Icon aria-hidden="true" style={color ? { color } : undefined} />}
                      {t}
                    </li>
                  );
                })}
              </ul>

              <div className="project-links">
                {p.live && (
                  <a className="link-u" href={p.live} target="_blank" rel="noopener noreferrer">
                    Live site ↗<span className="sr-only"> — {p.name}</span>
                  </a>
                )}
                {p.repo && (
                  <a className="link-u" href={p.repo} target="_blank" rel="noopener noreferrer">
                    Source code ↗<span className="sr-only"> — {p.name}</span>
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
