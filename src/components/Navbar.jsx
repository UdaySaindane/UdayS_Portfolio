import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const navItems = [
    { name: 'Home', path: '/', color: '#ffd700' },
    { name: 'About', path: '/about', color: '#98fb98' },
    { name: 'Projects', path: '/projects', color: '#ffb6c1' },
    { name: 'Contact', path: '/contact', color: '#87ceeb' }
  ];

  return (
    <nav className="navbar">
      {navItems.map((item, index) => (
        <motion.div
          key={item.name}
          initial={{ y: -50, opacity: 0, rotate: 0 }}
          animate={{ y: 0, opacity: 1, rotate: index % 2 === 0 ? -2 : 2 }}
          transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
          whileHover={{ 
            y: -5, 
            rotate: 0,
            transition: { duration: 0.2 }
          }}
        >
          <NavLink
            to={item.path}
            className={({ isActive }) => 
              isActive ? 'sticky-note active' : 'sticky-note'
            }
            style={{ backgroundColor: item.color }}
          >
            <div className="tape"></div>
            {item.name}
          </NavLink>
        </motion.div>
      ))}
    </nav>
  );
};

export default Navbar;