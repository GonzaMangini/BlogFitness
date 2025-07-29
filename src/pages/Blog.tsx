import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogPosts';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const categories = ['all', 'rutinas', 'nutrición', 'motivación', 'progreso'];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Mi Blog de Entrenamiento
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Comparto mi experiencia, aprendizajes y reflexiones en este viaje hacia una vida más saludable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 items-center justify-between"
          >
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Buscar posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="flex space-x-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 capitalize ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'Todos' : category}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Posts Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <p className="text-gray-600">
              Mostrando {filteredPosts.length} de {blogPosts.length} posts
            </p>
          </motion.div>

          {/* Posts Grid */}
          {filteredPosts.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No se encontraron posts
              </h3>
              <p className="text-gray-500">
                Intenta con otros términos de búsqueda o selecciona una categoría diferente.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              ¿Te gusta mi contenido?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Sígueme en mis redes sociales para no perderte ninguna actualización 
              y únete a esta comunidad de personas que buscan mejorar cada día.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Seguir mi viaje 🚀
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
