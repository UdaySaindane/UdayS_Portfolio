import { certifications, education } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import './Education.css';

const Education = () => (
  <section id="education" className="section">
    <div className="container">
      <SectionHead index="05" title="Education" note="Studies & certifications" />

      <ol className="edu-list">
        {education.map((e, i) => (
          <Reveal as="li" key={e.degree} className="edu-row grid" delay={i * 0.05}>
            <span className="label edu-period">{e.period}</span>
            <h3 className="edu-degree">{e.degree}</h3>
            <p className="edu-school">{e.school}</p>
            <p className="edu-score">{e.score}</p>
          </Reveal>
        ))}
      </ol>

      {certifications.length > 0 && (
        <>
          <h3 className="label edu-subhead">Certifications</h3>
          <ul className="edu-list">
            {certifications.map((c) => (
              <Reveal as="li" key={c.name} className="edu-row grid">
                <span className="label edu-period">{c.issuer}</span>
                <h4 className="edu-degree">
                  {c.link ? (
                    <a className="link-u" href={c.link} target="_blank" rel="noopener noreferrer">
                      {c.name} ↗
                    </a>
                  ) : (
                    c.name
                  )}
                </h4>
                {c.year && <p className="edu-score">{c.year}</p>}
              </Reveal>
            ))}
          </ul>
        </>
      )}
    </div>
  </section>
);

export default Education;
