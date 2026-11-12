import { experience } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import './Experience.css';

const Experience = () => (
  <section id="experience" className="section">
    <div className="container">
      <SectionHead index="03" title="Experience" note="Where I've worked" />

      <ol className="xp-list">
        {experience.map((job, i) => (
          <Reveal as="li" key={job.role + job.company} className="xp-item grid" delay={i * 0.06}>
            <div className="xp-meta">
              <p className="xp-company">{job.company}</p>
              {job.period && <p className="label">{job.period}</p>}
            </div>

            <h3 className="xp-role">{job.role}</h3>

            <div className="xp-detail">
              <ul className="xp-points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {job.tech?.length > 0 && <p className="label xp-tech">{job.tech.join(' / ')}</p>}
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
