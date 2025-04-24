import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import './Experience.css';

const experiences = [
  {
    company: "Earth5R - Content Writer",
    duration: "June 2023 - Present",
    description: [
      "Research and create engaging content on sustainability and environmental initiatives",
      "Develop SEO-optimized articles and blog posts to increase organic traffic",
      "Collaborate with the marketing team to align content with brand messaging",
      "Conduct interviews with environmental experts for featured articles"
    ],
    tech: ["Content Writing", "SEO", "Research", "WordPress", "Google Analytics"],
    logo: "earth5r-logo.png"
  },
  {
    company: "Outlier - Freelance Writer",
    duration: "January 2023 - May 2023",
    description: [
      "Created high-quality training data for AI and machine learning models",
      "Specialized in technical writing for computer science and programming topics",
      "Ensured accuracy and consistency in large datasets",
      "Worked with NLP teams to improve model performance"
    ],
    tech: ["Technical Writing", "AI Training", "Data Annotation", "NLP", "Quality Assurance"],
    logo: "outlier-logo.png"
  }
  // {
  //   company: "Optmyzr - SDE Intern",
  //   duration: "March 2022 - December 2022",
  //   description: [
  //     "Integrated Google Ads and Bing Ads APIs into Optmyzr's backend infrastructure using .NET",
  //     "Enhanced the user interface of Optmyzr's web application using React, PHP, and CoffeeScript",
  //     "Collaborated with cross-functional teams to implement new features and fix bugs"
  //   ],
  //   tech: ["Redux", "C#", "CodeIgniter", ".NET Framework", "React.js", "PHP"],
  //   logo: "optmyzr-logo.png"
  // },
  // {
  //   company: "Payben Private Limited - Freelancer",
  //   duration: "April 2021 - February 2022",
  //   description: [
  //     "Re-developed a recharge and bill payment platform from scratch",
  //     "Managed recharge services and rewards system implementation",
  //     "Enabled users to become agents for offering services through the platform"
  //   ],
  //   tech: ["Android", "Web", "PHP", "MySQL"],
  //   logo: "payben-logo.png"
  // }
];

const Experience = () => {
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
      className="experience-section"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="experience-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="title-icon"><FaBriefcase /></span>
            Professional Experience
          </h2>
          <p className="section-subtitle">Where I've worked and contributed</p>
        </motion.div>

        <motion.div 
          className="experience-timeline"
          variants={containerVariants}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="experience-card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="card-header">
                <div className="company-logo">
                  <div className="logo-placeholder">{exp.company.charAt(0)}</div>
                </div>
                <div className="company-info">
                  <h3 className="company-name">{exp.company}</h3>
                  <div className="duration">
                    <FaCalendarAlt className="duration-icon" />
                    <span>{exp.duration}</span>
                  </div>
                </div>
              </div>

              <div className="card-body">
                <ul className="responsibilities">
                  {exp.description.map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="card-footer">
                <div className="tech-tags">
                  {exp.tech.map((t, i) => (
                    <motion.span 
                      key={i}
                      className="tag"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      viewport={{ once: true }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;