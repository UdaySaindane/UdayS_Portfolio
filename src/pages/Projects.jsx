import { motion } from 'framer-motion';
import './Projects.css';
import scholar from "../assets/scholar.jpg";
import study from "../assets/ScholarStudy.jpg";
import learner from "../assets/learner.jpg";

image: scholar

const Projects = () => {
  const projects = [
    {
      name: 'ScholarStudy : E-Learning Platform',
      description: 'Developed a comprehensive, role-based web application (LMS platform) using Python’s Django framework.',
      tech: ['Django', 'Python', 'SQLite', 'Postgresql'],
      link: 'https://scholarstudy.onrender.com/',
      image: study
    },
        {
      name: 'ScholarNest : Scholarship and mentorship platform',
      description: 'Developed a full-featured scholarship platform enabling efficient searching and management of scholarships through a web-based interface with mentorship approach',
      tech: ['React', 'Node', 'Express','MySql'],
      link: 'https://github.com/UdaySaindane/ScholarNest',
      image: scholar
    },
    {
      name: 'The Learner Tattooz and Arts',
      description: 'A modern portfolio website for a tattoo studio owner developed using React.js. The project focuses on reusable components, responsive design, and visual presentation. ',
      tech: ['React.js', 'CSS3'],
      link: 'https://the-learner-tattooz-and-arts.netlify.app/',
      image: learner
    },

    // {
    //   name: 'Portfolio Website',
    //   description: 'Creative portfolio with unique notebook theme, smooth animations, and fully responsive design.',
    //   tech: ['React', 'Framer Motion', 'CSS3'],
    //   link: '#',
    //   image: 'https://via.placeholder.com/400/26a69a/ffffff?text=Portfolio'
    // }
  ];

  return (
    <div className="projects-container">
      <motion.h1 
        className="page-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
        <div className="title-underline"></div>
      </motion.h1>

      <motion.p 
        className="projects-intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Here are some of the cool things I've built. Each project taught me 
        something new and pushed my skills further!
      </motion.p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`project-card ${index % 2 === 0 ? 'left-align' : 'right-align'}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            {/* Decorative corners */}
            <div className="card-corner tl"></div>
            <div className="card-corner tr"></div>
            <div className="card-corner bl"></div>
            <div className="card-corner br"></div>

            {/* Project number badge */}
            <div className="project-badge">
              <span className="badge-number">{index + 1}</span>
            </div>

            {/* Project image */}
            <div className="project-image-wrapper">
              <img 
                src={project.image} 
                alt={project.name}
                className="project-image"
              />
              <div className="image-overlay">
                <motion.a 
                  href={project.link}
                  className="view-button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  View Project →
                </motion.a>
              </div>
            </div>

            {/* Project info */}
            <div className="project-info">
              <h3 className="project-title">{project.name}</h3>
              
              <p className="project-desc">{project.description}</p>
              
              <div className="project-tech-tags">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Doodle decoration */}
            <svg className="card-doodle" width="60" height="30" viewBox="0 0 60 30">
              <path 
                d="M 5 15 Q 20 5, 30 15 T 55 15" 
                stroke={index % 2 === 0 ? "#667eea" : "#764ba2"}
                strokeWidth="2" 
                fill="none"
                strokeDasharray="3,3"
              />
            </svg>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="decorative-elements"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <svg width="150" height="80" viewBox="0 0 150 80">
          <path d="M 10 40 Q 50 10, 75 40 T 140 40" 
            stroke="#667eea" 
            strokeWidth="2" 
            fill="none"
            strokeDasharray="5,5"
          />
          <circle cx="75" cy="40" r="4" fill="#764ba2" />
          <text x="50" y="70" fontFamily="Caveat" fontSize="18" fill="#667eea" fontWeight="700">
            More coming soon!
          </text>
        </svg>
      </motion.div>
    </div>
  );
};

export default Projects;