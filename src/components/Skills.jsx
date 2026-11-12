import { coreConcepts, skills } from '../data/portfolio';
import { skillIcons } from '../data/skillIcons';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import './Skills.css';

const SkillItem = ({ name }) => {
  const [Icon, color] = skillIcons[name] ?? [];
  return (
    <li className="skill-item" style={color ? { '--brand': color } : undefined}>
      <span className="skill-logo" aria-hidden="true">
        {Icon ? <Icon /> : <span className="skill-logo-fallback">{name[0]}</span>}
      </span>
      <span className="skill-name">{name}</span>
    </li>
  );
};

const Skills = () => (
  <section id="skills" className="section">
    <div className="container">
      <SectionHead index="02" title="Skills" note="Tools I build & ship with" />

      <div className="skills-grid">
        {skills.map((group, i) => (
          <Reveal key={group.group} className="skill-group" delay={(i % 3) * 0.06}>
            <h3 className="label skill-group-title">
              <span className="skill-group-idx">{String.fromCharCode(65 + i)}/</span>
              {group.group}
              <span className="skill-count">{group.items.length}</span>
            </h3>
            <ul>
              {group.items.map((item) => (
                <SkillItem key={item} name={item} />
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      {coreConcepts.length > 0 && (
        <Reveal as="p" className="skills-core">
          <span className="label">Core CS</span>
          <span>{coreConcepts.join(' · ')}</span>
        </Reveal>
      )}
    </div>
  </section>
);

export default Skills;
