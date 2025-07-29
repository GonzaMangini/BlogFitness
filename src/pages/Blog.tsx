import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogPosts';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [copied, setCopied] = useState(false);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', 'rutinas', 'nutrición', 'motivación', 'progreso'];

  // Obtener nombre de categoría en español
  const getCategoryLabel = (category: string) => {
    const labels: { [key: string]: string } = {
      'all': 'Todos',
      'rutinas': 'Rutinas',
      'nutrición': 'Nutrición',
      'motivación': 'Motivación',
      'progreso': 'Progreso'
    };
    return labels[category] || category;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rounded-lg rotate-45"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-white rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Mi Blog de Entrenamiento
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Comparto mi experiencia, aprendizajes y reflexiones para una vida más saludable. Todo desde un punto de la experiencia personal.
              <span className="block mt-2 text-lg text-blue-200">Si de verdad queres lo mismo para vos, asesorate con profesionales.</span>
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold text-white mb-1">{blogPosts.length}</div>
              <div className="text-blue-200 text-sm font-medium">Posts Publicados</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold text-white mb-1">4</div>
              <div className="text-blue-200 text-sm font-medium">Categorías</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold text-white mb-1">2+</div>
              <div className="text-blue-200 text-sm font-medium">Meses Activo</div>
            </div>
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
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {getCategoryLabel(category)}
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
                {searchTerm && selectedCategory !== 'all' 
                  ? `No hay posts que coincidan con "${searchTerm}" en la categoría ${getCategoryLabel(selectedCategory).toLowerCase()}.`
                  : searchTerm 
                  ? `No hay posts que coincidan con "${searchTerm}".`
                  : `No hay posts en la categoría ${getCategoryLabel(selectedCategory).toLowerCase()}.`
                }
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Intenta con otros términos de búsqueda o selecciona una categoría diferente.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comparti mi blog Fitness
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Sígueme en mis redes sociales y comparti mi blog Fitness. Si te gusto lo que viste no
              dudes en compartirlo con tus amigos y conmigo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.location.href = 'mailto:gonzamangini@gmail.com';
                }}
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg cursor-pointer"
              >
                Contactame 📩
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(window.location.origin);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  } catch (err) {
                    // Fallback para navegadores que no soportan clipboard API
                    const textArea = document.createElement('textarea');
                    textArea.value = window.location.origin;
                    document.body.appendChild(textArea);
                    textArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textArea);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }
                }}
                className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 border-2 border-blue-400 cursor-pointer"
              >
                {copied ? 'Copiado! ✓' : 'Compartir ⛓️'}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
