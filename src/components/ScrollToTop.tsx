import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll al tope de la página cuando cambie la ruta
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Desplazamiento suave
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
