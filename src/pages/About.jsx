import { motion } from 'framer-motion';
import './About.css';
import mee from '../assets/mee.jpeg';

const About = () => {
  const skills = [
    { name: 'React.js', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'CSS/SASS', level: 88 },
    { name: 'Node.js', level: 80 },
    { name: 'HTML5', level: 95 },
    { name: 'Git', level: 82 }
  ];

  return (
    <div className="about-container">
      <motion.h1 
        className="page-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
        <div className="title-underline"></div>
      </motion.h1>

      <div className="about-content">
        <motion.div 
          className="diagram-section"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="diagram-frame">
            <div className="corner-decoration tl"></div>
            <div className="corner-decoration tr"></div>
            <div className="corner-decoration bl"></div>
            <div className="corner-decoration br"></div>
            
            <div className="diagram-photo">
              <img 
                src={mee}
                alt="Profile Diagram" 
              />
            </div>

            <svg className="diagram-arrows" viewBox="0 0 300 300">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" 
                  refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#667eea" />
                </marker>
              </defs>
              
              <motion.path
                d="M 50 50 L 120 120"
                stroke="#667eea"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.path
                d="M 250 50 L 180 120"
                stroke="#764ba2"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              />
            </svg>

            <motion.div 
              className="diagram-label label-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Uday!!
            </motion.div>
            <motion.div 
              className="diagram-label label-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              developer
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="info-section"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="handwritten-text">
            <p className="intro-paragraph">
              My name is Uday Chandrakant Saindane. <p>Computer Engineering student skilled in Full-Stack Web Development with hands-on project and internship 
experience.I thrive on exploring new technologies and translating them into real-world projects. Recognized 
for team leadership and the ability to adapt quickly in fast-paced environments. </p>
            </p>

            <p className="intro-paragraph">
              When I'm not coding, you'll find me exploring new technologies, 
              sketching UI designs in my notebook
              brainstorming the next big project!
            </p>

            <div className="fun-facts">
              <h3 className="section-heading">Quick Facts~</h3>
              <ul className="facts-list">
                <li>- Quick learner</li>
                <li>- Always learning something new</li>
              </ul>
            </div>
          </div>

          <div className="skills-section">
            <h3 className="section-heading">My Skills~</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-bar-container">
                    <motion.div 
                      className="skill-bar"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            className="decorative-doodle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <svg width="120" height="60" viewBox="0 0 120 60">
              <path d="M 10 30 Q 40 10, 60 30 T 110 30" 
                stroke="#667eea" 
                strokeWidth="2" 
                fill="none"
                strokeDasharray="3,3"
              />
              <circle cx="60" cy="30" r="3" fill="#764ba2" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;