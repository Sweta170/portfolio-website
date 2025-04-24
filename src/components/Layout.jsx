import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';


export default function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="layout-root">
      <Navbar />
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="layout-container"
      >
        <div className="full-width-content">
          {children}
        </div>
        <div className="layout-decoration top-left"></div>
        <div className="layout-decoration bottom-right"></div>
      </motion.div>
    </div>
  );
}