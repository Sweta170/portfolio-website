import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Certifications from './pages/Certifications';
import Achievements from './pages/Achievements';
import Blog from './pages/Blog';
import Resume from './pages/Resume';
import { ThemeProvider } from './context/ThemeContext';
import Contact from './pages/Contact';
import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        <Router>
          <Navbar />
          <main className="page-content">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/achievements" element={<Achievements />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}