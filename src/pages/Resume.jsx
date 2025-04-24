import React from 'react';
import { motion } from 'framer-motion';
import { FaFileDownload, FaFilePdf, FaGraduationCap, FaBriefcase, FaCode, FaAward } from 'react-icons/fa';
import './Resume.css';

const Resume = () => {
  const resumeHighlights = [
    {
      icon: <FaGraduationCap className="highlight-icon" />,
      title: "Education",
      description: "B.Tech in Computer Science from LPU, Punjab"
    },
    {
      icon: <FaBriefcase className="highlight-icon" />,
      title: "Experience",
      description: "hands-on experience in fullstack development"
    },
    {
      icon: <FaCode className="highlight-icon" />,
      title: "Skills",
      description: "10+ technical skills mastered"
    },
    {
      icon: <FaAward className="highlight-icon" />,
      title: "Achievements",
      description: "5+ awards and certifications"
    }
  ];

  return (
    <motion.section 
      className="resume-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="resume-container">
        <motion.div 
          className="section-header"
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <FaFilePdf className="title-icon" />
            My Resume
          </h2>
          <p className="section-subtitle">A comprehensive overview of my qualifications</p>
        </motion.div>

        <motion.div 
          className="resume-highlights"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          {resumeHighlights.map((highlight, index) => (
            <motion.div 
              key={index}
              className="highlight-card"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="highlight-icon-container">
                {highlight.icon}
              </div>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="download-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="download-text">
            Download my complete resume to view detailed information about my education, work experience, skills, and achievements.
          </p>
          <motion.a
            href="/resume/spel.pdf"
            className="resume-btn"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFileDownload className="btn-icon" />
            Download Resume (PDF)
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Resume;