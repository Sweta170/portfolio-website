import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import { FaCode, FaPalette, FaTheaterMasks } from 'react-icons/fa';

const About = () => {
  const interests = [
    { icon: <FaCode size={24} />, title: "Coding", description: "Passionate about building innovative solutions" },
    { icon: <FaPalette size={24} />, title: "Painting", description: "Expressing creativity through colors" },
    { icon: <FaTheaterMasks size={24} />, title: "Drama", description: "Performing in Nukad Nataks" }
  ];

  return (
    <div className="content-wrapper">
      <motion.section
        className="about-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="about-container">
          <motion.div
            className="about-header"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>
              <span className="greeting">Hello!</span> I'm <span className="highlight-name">Sweta Kumari</span>
            </h1>
            <p className="tagline">Computer Science Student | Aspiring Software Developer</p>
          </motion.div>

          <div className="about-content">
            <motion.div 
              className="about-text"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="intro-text">
                I'm a passionate 3rd-year Computer Science Engineering student with a drive to create impactful software solutions. My journey in tech combines technical skills with creative problem-solving.
              </p>
              
              <div className="interests-grid">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    className="interest-card"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                  >
                    <div className="interest-icon">{interest.icon}</div>
                    <h3>{interest.title}</h3>
                    <p>{interest.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="about-image-container"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="image-wrapper">
                <img 
                  src="/about/profile.jpg" 
                  alt="Sweta Kumari" 
                  className="profile-image"
                />
                <div className="image-border"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;