import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
import './Navbar.css';

const navItems = [
  { name: 'About', path: '/' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Certifications', path: '/certifications' },
  { name: 'Achievements', path: '/achievements' },
  // { name: 'Blog', path: '/blog' },
  { name: 'Resume', path: '/resume' },    
  { name: 'Contact', path: '/contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Update navbar height CSS variable
  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        const height = navbar.offsetHeight;
        document.documentElement.style.setProperty(
          '--navbar-height', 
          `${height}px`
        );
      }
    };

    updateNavbarHeight();
    window.addEventListener('resize', updateNavbarHeight);
    return () => window.removeEventListener('resize', updateNavbarHeight);
  }, [scrolled, isOpen]); // Also trigger when mobile menu opens/closes

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        {/* Logo/Name Section */}
        <motion.div 
          className="logo-container"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <NavLink to="/" className="logo-link">
            <span className="logo-name">Sweta</span>
            <span className="logo-surname">Kumari</span>
          </NavLink>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="desktop-nav">
          <ul className="nav-links">
            {navItems.map((item) => (
              <motion.li
                key={item.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? 'active-link' : ''
                  }
                >
                  {item.name}
                  <motion.span 
                    className="nav-underline"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right Section - Socials + Theme Toggle */}
        <div className="right-section">
          <div className="social-links">
            <motion.a
              whileHover={{ y: -2 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </motion.a>
          </div>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`hamburger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <ul className="mobile-nav-links">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.path}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ 
                      type: 'spring',
                      stiffness: 300,
                      delay: index * 0.1
                    }}
                  >
                    <NavLink
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        isActive ? 'active-link' : ''
                      }
                    >
                      {item.name}
                      <motion.span 
                        className="nav-underline"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
              
              <div className="mobile-socials">
                {[
                  { icon: <FaLinkedin />, href: "https://linkedin.com", label: "LinkedIn" },
                  { icon: <FaGithub />, href: "https://github.com", label: "GitHub" },
                  { icon: <FaYoutube />, href: "https://youtube.com", label: "YouTube" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ y: -3 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Animated Border */}
      <motion.div 
        className="nav-border"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </motion.nav>
  );
}