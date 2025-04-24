import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Nirmaan App",
      description: "A construction monitoring app that detects material usage (cement, concrete, etc.) and sends real-time updates to stakeholders. Built during Smart India Hackathon 2025.",
      techStack: ["React", "Node.js", "AI", "MySQL"],
      links: {
        demo: "#",
        code: "#"
      },
      featured: true
    },
    {
      title: "ChitChat – Modern Chat Application",
      description: "A real-time chat app developed using Laravel MVC for INT221 project. Includes features like messaging, online status, and more.",
      techStack: ["Laravel", "PHP", "JavaScript"],
      links: {
        demo: "#",
        code: "#"
      }
    },
    {
      title: "Bookstore Website",
      description: "An e-commerce website for book purchases developed using the MERN stack. Features include cart, authentication, and admin panel.",
      techStack: ["MongoDB", "Express", "React", "Node.js"],
      links: {
        demo: "https://bookplaza.netlify.app/",
        code: "https://github.com/Sweta170/BookstoreApp"
      }
    },
    {
      title: "Student Information System",
      description: "A web application to manage student data with features like adding, updating, and deleting student info.",
      techStack: ["PHP", "MySQL", "HTML", "Bootstrap"],
      links: {
        demo: "https://studet.in/admin/login.php",
        code: "https://github.com/Sweta170/php-project/tree/master"
      }
    },
    {
      title: "Weather Dashboard",
      description: "A real-time weather dashboard that displays current weather conditions, forecasts, and city-based search functionality. Built with the MERN stack.",
      techStack: ["MongoDB", "Express", "React", "Node.js"],
      links: {
        demo: "https://weatherapp-flame-mu.vercel.app/",
        code: "https://github.com/Sweta170/Wheather_Dashboard"
      }
    },
    
  ];

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
      className="projects-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="projects-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="title-decorator"></span>
            My Projects
            <span className="title-decorator"></span>
          </h2>
          <p className="section-subtitle">Some of my recent work and contributions</p>
        </motion.div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-content">
                {project.featured && (
                  <div className="featured-badge">Featured</div>
                )}
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="tech-stack">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-pill">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-links">
                <a 
                  href={project.links.demo} 
                  target="_blank" 
                  rel="noreferrer"
                  className="project-link"
                >
                  <FiExternalLink /> Live Demo
                </a>
                <a 
                  href={project.links.code} 
                  target="_blank" 
                  rel="noreferrer"
                  className="project-link"
                >
                  <FiGithub /> View Code
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;