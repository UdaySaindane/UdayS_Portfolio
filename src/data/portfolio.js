// ─────────────────────────────────────────────────────────────
//  All portfolio content lives here. Edit this file to update
//  the site — components read from it, so no JSX changes needed.
//  Optional fields (left as '') are simply not rendered.
//  Skill logos are matched by name in ./skillIcons.js
// ─────────────────────────────────────────────────────────────

import scholar from '../assets/scholar.jpg';
import study from '../assets/ScholarStudy.jpg';
import learner from '../assets/learner.jpg';
import photo from '../assets/my-image.jpg'; // optimized copy of 'My Image.png'

export const profile = {
  name: 'Uday Saindane',
  fullName: 'Uday Chandrakant Saindane',
  photo,
  roles: ['Full Stack Developer', 'Software Engineer'],
  tagline:
    'I build scalable, maintainable web applications end to end — from React interfaces and REST APIs to databases, Docker and cloud deployment.',
  location: 'Maharashtra, India',
  availability: 'Open to full-time roles',
  email: 'udaysaindane3421@gmail.com',
  resumeUrl:
    'https://drive.google.com/file/d/1ObTAaPhDzuqGRmBXmoqZSI2yzJcZ7ed4/view?usp=drive_link',
  socials: {
    github: 'https://github.com/UdaySaindane',
    linkedin: 'https://www.linkedin.com/in/udaysaindane07/',
  },
};

export const about = {
  statement:
    'Recent Computer Engineering graduate building scalable full-stack applications with Python, Java and JavaScript — from database schema to cloud deployment.',
  paragraphs: [
    'I have hands-on experience in software development and a strong foundation in data structures, algorithms and object-oriented programming.',
    'I build full-stack applications with Python, Java and JavaScript, working with REST APIs and both SQL and NoSQL databases — and I ship them with Docker, CI/CD pipelines, AWS, Render and Netlify.',
    'I use AI-assisted tools like GitHub Copilot, Claude and ChatGPT to work faster, while reviewing, testing and debugging everything they generate. I’m comfortable with SDLC and Agile practices, code reviews, and unit and API testing.',
  ],
  stats: [
    { value: '9.26', label: 'CGPA / 10' },
    { value: '2026', label: 'B.E. Computer Engineering graduate' },
  ],
  // "Open to" card shown under the stats
  openTo: {
    roles: ['Software Engineer', 'Full Stack Developer'],
    note: 'Full-time roles', // e.g. add '· Immediate joiner' or '· Open to relocation' if true
  },
};

export const skills = [
  {
    group: 'Languages',
    items: ['Python', 'Java', 'JavaScript (ES6+)', 'C++', 'SQL'],
  },
  {
    group: 'Frontend',
    items: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap 5'],
  },
  {
    group: 'Backend',
    items: ['Node.js', 'Express.js', 'Django', 'REST APIs', 'JWT Auth'],
  },
  {
    group: 'Databases',
    items: ['MySQL', 'MongoDB', 'PostgreSQL', 'SQLite'],
  },
  {
    group: 'DevOps & Cloud',
    items: ['AWS', 'Docker', 'GitHub Actions (CI/CD)', 'Render', 'Netlify', 'Gunicorn', 'Apache Tomcat'],
  },
  {
    group: 'Tools & Testing',
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Unit & API Testing', 'GitHub Copilot', 'Claude'],
  },
];

// Shown as one line under the skill groups
export const coreConcepts = [
  'Object-Oriented Programming',
  'Data Structures & Algorithms',
  'SDLC & Agile',
  'Code Review',
  'Debugging',
];

export const experience = [
  {
    role: 'Full Stack Developer Intern',
    company: 'NewGen Tech Pvt. Ltd.',
    period: 'Jan 2025 – Feb 2025',
    points: [
      'Designed and developed a Student Management System with object-oriented backend logic and a relational database layer supporting full CRUD for 500+ records.',
      'Wrote and executed test cases to validate core modules, identifying and fixing defects before deployment.',
      'Designed a normalized MySQL schema and optimized SQL queries, improving data retrieval by 30%.',
      'Deployed the application on Apache Tomcat using Java MVC, supporting efficient multi-user database access.',
    ],
    tech: ['Java', 'JSP', 'JDBC', 'SQL', 'MySQL', 'Apache Tomcat'],
  },
];

export const projects = [
  {
    name: 'ScholarNest',
    subtitle: 'Smart scholarship discovery & mentorship platform',
    description:
      'A multi-role application with dedicated modules for Students, Mentors and Admins, built with modular, maintainable code.',
    highlights: [
      'Engineered 15+ REST APIs and optimized MySQL queries, cutting average API response time by 40%',
      'JWT authentication and role-based access control (RBAC), validated through API testing',
      'Tested CRUD workflows for scholarship management, search/filter and mentor assignment',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'REST APIs'],
    live: 'https://scholarnest-scholarships.netlify.app/',
    repo: '', // e.g. 'https://github.com/UdaySaindane/scholarnest'
    image: scholar,
  },
  {
    name: 'ScholarStudy',
    subtitle: 'Role-based e-learning platform (LMS)',
    description:
      'A learning management system supporting Students, Instructors and Admins, built with Django.',
    highlights: [
      'CSV/Excel quiz uploads, reducing manual data entry by 80%',
      'Normalized schema with 8+ relational entities, verified through test cases',
      'Gunicorn + GitHub Actions pipeline, deployed on Render',
    ],
    tech: ['Python', 'Django', 'ORM', 'Gunicorn', 'GitHub Actions', 'Render'],
    live: 'https://scholarstudy.onrender.com/',
    repo: '', // add the GitHub link from your résumé here
    image: study,
  },
  {
    name: 'The Learner Tattooz & Arts',
    subtitle: 'Client website',
    description:
      'A modern, responsive website for a tattoo studio, built with reusable React components and a strong visual focus.',
    highlights: ['Built for a tattoo studio owner', 'Fully responsive across devices'],
    tech: ['React.js', 'CSS3', 'Netlify'],
    live: 'https://the-learner-tattooz-and-arts.netlify.app/',
    repo: '',
    image: learner,
  },
];

export const education = [
  {
    degree: 'B.E. Computer Engineering',
    school: 'SNJB’s KBJ College of Engineering, Chandwad · Savitribai Phule Pune University',
    period: 'Aug 2022 – Jun 2026',
    score: 'CGPA 9.26',
  },
  { degree: 'Higher Secondary (HSC)', school: 'MSG College, Malegaon', period: '2021 – 2022', score: '78.17%' },
  { degree: 'Secondary School (SSC)', school: 'VBH Vidyalaya, Kalwadi', period: '2019 – 2020', score: '92.40%' },
];

export const certifications = [
  { name: 'Full Stack Web Development', issuer: 'AICTE · EduSkills', year: '2024', link: '' },
  { name: 'Introduction to Software Testing', issuer: 'Simplilearn', year: '2026', link: '' },
];
