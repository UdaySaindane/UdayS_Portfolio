import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './Home.css';
import mee from '../assets/mee.jpeg';
const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Web Developer', 'Computer Engineer', 'Problem Solver', 'Creative Coder'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <motion.div 
        className="content-section"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="name-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Hi, I'm <span className="highlight-name">Uday Chandrakant Saindane</span>
        </motion.h1>

        <div className="role-container">
          <span className="role-prefix">A Passionate </span>
          <motion.span 
            className="role-text"
            key={currentRole}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {roles[currentRole]}
          </motion.span>
        </div>

        <motion.p 
          className="intro-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Welcome to my Portfolio website! I build websites 
          that bring ideas to life. Let's create something amazing together!
        </motion.p>

        <motion.div 
          className="doodles"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <svg width="100" height="40" viewBox="0 0 100 40">
            <path d="M 10 20 Q 30 5, 50 20 T 90 20" 
              stroke="#667eea" 
              strokeWidth="2" 
              fill="none"
              strokeDasharray="5,5"
            />
          </svg>
        </motion.div>
      </motion.div>

      <motion.div 
        className="photo-section"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="photo-tape tape-top-left"></div>
        <div className="photo-tape tape-top-right"></div>
        <div className="photo-tape tape-bottom-left"></div>
        <div className="photo-tape tape-bottom-right"></div>
        
        <div className="photo-container">
          <div className="photo-placeholder">
            {/* Replace this with your actual image */}
            <img 
              src={mee}
              alt="Profile" 
              className="profile-photo"
            />
          </div>
          <motion.div 
            className="photo-caption"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            That's me! →
          </motion.div>
        </div>

        <div className="decorative-stars">
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;