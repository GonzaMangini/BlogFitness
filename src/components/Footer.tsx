import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../data/socialLinks';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors duration-200"
              >
                <span className="text-xl">{social.icon}</span>
                <span className="font-medium">{social.name}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-px bg-gray-700 max-w-md"
          />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center space-y-2"
          >
            <p className="text-gray-300">
              © 2025 Gonza Mangini. Todos los derechos reservados.
            </p>
            <p className="text-sm text-gray-400">
              Construido con ❤️ y mucha determinación
            </p>
          </motion.div>

          {/* Motivational Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl"
          >
            <blockquote className="text-lg italic text-gray-300">
              "El éxito no es definitivo, el fracaso no es fatal: lo que cuenta es el coraje para continuar."
            </blockquote>
            <cite className="text-sm text-gray-400 mt-2 block">- Winston Churchill</cite>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
