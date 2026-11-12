// Skill name -> logo + brand colour.
// Names must match the strings in portfolio.js (skills / tech lists).
// Brand colours that are black/very dark are lightened so they show on the dark theme;
// `null` means "use the text colour".
import {
  SiPython, SiJavascript, SiReact, SiHtml5, SiCss, SiTailwindcss, SiBootstrap,
  SiNodedotjs, SiExpress, SiDjango, SiJsonwebtokens, SiMongodb, SiPostgresql,
  SiSqlite, SiDocker, SiGithubactions, SiRender, SiNetlify, SiGunicorn, SiApachetomcat,
  SiGit, SiGithub, SiPostman, SiClaude, SiGithubcopilot,
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';
import { TbApi, TbSql, TbTestPipe, TbBrandCpp, TbBrandVscode, TbBrandMysql } from 'react-icons/tb';

export const skillIcons = {
  // Languages
  Python: [SiPython, '#4B8BBE'],
  Java: [FaJava, '#ED8B00'],
  'JavaScript (ES6+)': [SiJavascript, '#F7DF1E'],
  'C++': [TbBrandCpp, '#659AD2'],
  SQL: [TbSql, '#4479A1'],

  // Frontend
  'React.js': [SiReact, '#61DAFB'],
  HTML5: [SiHtml5, '#E34F26'],
  CSS3: [SiCss, '#2965F1'],
  'Tailwind CSS': [SiTailwindcss, '#06B6D4'],
  'Bootstrap 5': [SiBootstrap, '#7952B3'],

  // Backend
  'Node.js': [SiNodedotjs, '#5FA04E'],
  'Express.js': [SiExpress, null],
  Django: [SiDjango, '#44B78B'],
  'REST APIs': [TbApi, null],
  'JWT Auth': [SiJsonwebtokens, '#D63AFF'],

  // Databases
  MySQL: [TbBrandMysql, '#4479A1'],
  MongoDB: [SiMongodb, '#47A248'],
  PostgreSQL: [SiPostgresql, '#4169E1'],
  SQLite: [SiSqlite, '#3E9FD8'],

  // DevOps & Cloud
  AWS: [FaAws, '#FF9900'],
  Docker: [SiDocker, '#2496ED'],
  'GitHub Actions (CI/CD)': [SiGithubactions, '#2088FF'],
  Render: [SiRender, null],
  Netlify: [SiNetlify, '#00C7B7'],
  Gunicorn: [SiGunicorn, '#499848'],
  'Apache Tomcat': [SiApachetomcat, '#F8DC75'],

  // Tools & Testing
  Git: [SiGit, '#F05032'],
  GitHub: [SiGithub, null],
  Postman: [SiPostman, '#FF6C37'],
  'VS Code': [TbBrandVscode, '#23A9F2'],
  'Unit & API Testing': [TbTestPipe, null],
  'GitHub Copilot': [SiGithubcopilot, null],
  Claude: [SiClaude, '#D97757'],
};

// Short names used in project / experience tech lists
skillIcons.JWT = skillIcons['JWT Auth'];
skillIcons['GitHub Actions'] = skillIcons['GitHub Actions (CI/CD)'];
