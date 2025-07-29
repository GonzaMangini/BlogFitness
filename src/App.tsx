import React from 'react';
import {createBrowserRouter,RouterProvider} from "react-router";
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import PostDetail from './pages/PostDetail';
import ScrollToTop from './components/ScrollToTop';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout><Home /></RootLayout>,
  },
  {
    path: "/blog",
    element: <RootLayout><Blog /></RootLayout>,
  },
  {
    path: "/blog/:id",
    element: <RootLayout><PostDetail /></RootLayout>,
  },
  {
    path: "/about",
    element: <RootLayout><About /></RootLayout>,
  },
])

const App: React.FC = () => {
  return (
    <RouterProvider router={router}/>
  );
};

function RootLayout ({children}: {children: React.ReactNode}) {

return (
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
      {children}
    </motion.main>
  </AnimatePresence>
  
  <Footer />
</div>
)
}

export default App;
