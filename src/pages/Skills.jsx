import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import './Skills.css';

// Import only the specified skill icons
import python from '../assets/skills/python.png';
import java from '../assets/skills/java.png';
import cpp from '../assets/skills/cpp.png';
import js from '../assets/skills/javascript.png';
import html from '../assets/skills/html.png';
import css from '../assets/skills/css.png';
import nextjs from '../assets/skills/nextjs.jpg';
import node from '../assets/skills/nodejs.jpg';
import express from '../assets/skills/express.png';
import mysql from '../assets/skills/mysql.png';
import aws from '../assets/skills/aws.png';
import docker from '../assets/skills/docker.png';

const skillsData = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', icon: python, level: 5 },
      { name: 'Java', icon: java, level: 4 },
      { name: 'C++', icon: cpp, level: 3 },
      { name: 'JavaScript', icon: js, level: 5 },
    ],
  },
  {
    category: 'Frontend Development',
    skills: [
      { name: 'HTML5', icon: html, level: 5 },
      { name: 'CSS3', icon: css, level: 5 },
      { name: 'Next.js', icon: nextjs, level: 4 },
    ],
  },
  {
    category: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: node, level: 4 },
      { name: 'Express.js', icon: express, level: 4 },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'MySQL', icon: mysql, level: 4 },
    ],
  },
  {
    category: 'DevOps & Cloud',
    skills: [
      { name: 'AWS', icon: aws, level: 3 },
      { name: 'Docker', icon: docker, level: 3 },
    ],
  },
];

const SkillLevel = ({ level }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= level) {
      stars.push(<FaStar key={i} className="full-star" />);
    } else if (i - 0.5 <= level) {
      stars.push(<FaStarHalfAlt key={i} className="half-star" />);
    } else {
      stars.push(<FaRegStar key={i} className="empty-star" />);
    }
  }
  return <div className="skill-level">{stars}</div>;
};

const Skills = () => {
  return (
    <motion.section 
      className="skills-section"
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="skills-container">
        <motion.div
          className="section-header"
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>My <span className="highlight">Technical</span> Skills</h2>
          <p className="section-subtitle">Technologies I've mastered through projects and coursework</p>
        </motion.div>

        <div className="skills-categories">
          {skillsData.map((category, index) => (
            <motion.div
              className="skills-category"
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="category-header">
                <h3>{category.category}</h3>
                <div className="category-line"></div>
              </div>
              
              <div className="skills-grid">
                {category.skills.map((skill, i) => (
                  <motion.div
                    className="skill-card"
                    key={i}
                    whileHover={{ y: -10 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-icon-container">
                      <img src={skill.icon} alt={skill.name} className="skill-icon" />
                    </div>
                    <h4>{skill.name}</h4>
                    <SkillLevel level={skill.level} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;