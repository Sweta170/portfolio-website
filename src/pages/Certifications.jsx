import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import './Certifications.css'; // Keep your CSS import

const certifications = [
  {
    title: "Python for Data Science, AI & Development",
    organization: "IBM (via Coursera)",
    year: "2024",
    link: "/certificates/python.pdf", // Ensure this file is in public/certificates/
    image: "/certificates/python.png"
  },
  {
    title: "HTML, CSS, and Js for Web Developers",
    organization: "Johns Hopkins University (via Coursera)",
    year: "2024",
    link: "/certificates/html.pdf",
    image: "/certificates/fullstack.png"
  },
  {
    title: "Problem Solving (Basic)",
    organization: "HackerRank",
    year: "2025",
    link: "certificates/problem.pdf",
    image: "/certificates/hackerrank-problem-solving.png"
  },
  {
    title: "Cloud Computing",
    organization: "NPTEL - IIT Kharagpur",
    year: "2024",
    link: "/certificates/cloud.pdf",
    image: "/certificates/nptel-cloud-computing.png"
  },
  {
    title: "Data Structures Using Java",
    organization: "CipherSchools",
    year: "2024",
    link: "/certificates/dsa.pdf",
    image: "/certificates/cipherschools-java.png"
  }
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 }
    }
  ]
};

const Certifications = () => {
  return (
    <motion.section 
      className="certifications-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="certifications-container">
        <motion.div 
          className="section-header"
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <FaCertificate className="title-icon" />
            Certifications & Achievements
          </h2>
          <p className="section-subtitle">My professional credentials and recognitions</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Slider {...sliderSettings} className="cert-slider">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="cert-card">
                  <div className="cert-image-container">
                    <img src={cert.image} alt={cert.title} className="cert-image" />
                    <div className="cert-overlay">
                      {cert.link !== "#" && (
                        <a 
                          href={cert.link} 
                          target="_blank" 
                          rel="noreferrer"
                          className="view-button"
                        >
                          <FaExternalLinkAlt /> View
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="cert-details">
                    <h3>{cert.title}</h3>
                    <div className="cert-meta">
                      <span className="organization">{cert.organization}</span>
                      <span className="year">{cert.year}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Certifications;
