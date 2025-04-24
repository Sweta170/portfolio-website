import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaAward, FaLightbulb } from 'react-icons/fa';
import './Achievements.css';

const achievements = [
  {
    title: "Smart India Hackathon 2025",
    description: "Participated in Smart India Hackathon 2025 with the Nirmaan App project focused on construction industry solutions.",
    year: 2025,
    icon: <FaTrophy className="achievement-icon" />,
    color: "#FFD700"
  },
  {
    title: "GeeksforGeeks 160 Coding Challenge",
    description: "Registered and completed the 160-day coding challenge, solving daily algorithm problems.",
    year: 2025,
    icon: <FaMedal className="achievement-icon" />,
    color: "#4CAF50"
  },
  {
    title: "Best Project Award - SIH",
    description: "Received Best Project Award for the Nirmaan App during the Smart India Hackathon 2025.",
    year: 2025,
    icon: <FaAward className="achievement-icon" />,
    color: "#E91E63"
  },
  {
    title: "Patent Application - Self-Cleaning Keyboard",
    description: "Filed a patent for an innovative self-cleaning keyboard utilizing micro-vibration technology for improved hygiene.",
    year: 2025,
    icon: <FaLightbulb className="achievement-icon" />,
    color: "#2196F3"
  }
];

const Achievements = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="achievements-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="achievements-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="title-decorator"></span>
            My Achievements
            <span className="title-decorator"></span>
          </h2>
          <p className="section-subtitle">Recognitions and milestones in my journey</p>
        </motion.div>

        <motion.div 
          className="achievements-grid"
          variants={containerVariants}
        >
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              className="achievement-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              style={{ '--accent-color': achievement.color }}
            >
              <div className="achievement-icon-container">
                {achievement.icon}
              </div>
              <div className="achievement-content">
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
                <div className="achievement-footer">
                  <span className="achievement-year">{achievement.year}</span>
                  <div className="achievement-badge" style={{ backgroundColor: achievement.color }}>
                    {index + 1}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Achievements;