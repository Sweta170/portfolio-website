import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaYoutube, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Footer.css';

export default function Footer() {
  const location = useLocation();

  if (location.pathname === '/resume') return null;

  return (
    <div className="footer-wrapper">
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="footer"
      >
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-brand">
              <h3 className="footer-title">Sweta Kumari</h3>
              <p className="footer-tagline">Digital creator & developer</p>
            </div>
            
            <div className="footer-social">
              {[
                { icon: <FaLinkedin />, href: "https://linkedin.com/in/sweta-kumari", label: "LinkedIn" },
                { icon: <FaGithub />, href: "https://github.com/swetakumari", label: "GitHub" },
                { icon: <FaYoutube />, href: "https://youtube.com/@yourchannel", label: "YouTube" },
                { icon: <FaEnvelope />, href: "mailto:sweta@example.com", label: "Email" },
                { icon: <SiLeetcode />, href: "https://leetcode.com/yourprofile", label: "LeetCode" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -2 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Sweta Kumari</p>
            <div className="footer-links">
              <a href="/privacy">Privacy</a>
              <span>•</span>
              <a href="/terms">Terms</a>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}