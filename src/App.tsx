import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import PostDetail from './pages/PostDetail';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        
        <AnimatePresence mode="wait">
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<PostDetail />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </motion.main>
        </AnimatePresence>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
