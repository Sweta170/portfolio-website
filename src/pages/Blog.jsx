import React from 'react';
import { motion } from 'framer-motion';
import { FaPenFancy, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import './Blog.css';

const blogs = [
  {
    title: "Cybersecurity in the Modern World",
    date: "March 2024",
    description: "A beginner-friendly guide explaining the importance of cybersecurity and practical steps for staying safe online.",
    link: "https://yourblog.com/cybersecurity-modern-world",
    category: "Technology"
  },
  {
    title: "Journey of TechTalk: Our YouTube Channel",
    date: "November 2024",
    description: "We share how TechTalk began, what kind of content we create, and how it's helping the student community.",
    link: "https://yourblog.com/techtalk-journey",
    category: "Experience"
  },
  {
    title: "One World Event Experience at LPU",
    date: "December 2024",
    description: "A glimpse of our experience participating in LPU's One World event and the cultural showcase we were part of.",
    link: "https://yourblog.com/one-world-lpu",
    category: "Event"
  }
];

const Blog = () => {
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
      className="blog-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="blog-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <FaPenFancy className="title-icon" />
            My Blog
          </h2>
          <p className="section-subtitle">Thoughts, experiences and insights I've shared</p>
        </motion.div>

        <motion.div 
          className="blog-grid"
          variants={containerVariants}
        >
          {blogs.map((post, index) => (
            <motion.div 
              key={index}
              className="blog-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="card-header">
                <span className="blog-category">{post.category}</span>
                <span className="blog-date">
                  <FaCalendarAlt className="date-icon" />
                  {post.date}
                </span>
              </div>
              <div className="card-body">
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-description">{post.description}</p>
              </div>
              <div className="card-footer">
                <a 
                  href={post.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="read-more"
                >
                  Read Article <FaArrowRight className="arrow-icon" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Blog;