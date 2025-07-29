import React from 'react';
import { motion } from 'framer-motion';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getAnimationVariants = () => {
    switch (post.animationType) {
      case 'fade-in':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
      case 'slide-up':
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 }
        };
      case 'scale-in':
        return {
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1 }
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
    }
  };

  return (
    <motion.article
      variants={getAnimationVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="card p-6 h-full flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <span>📅</span>
          <time dateTime={post.date}>
            {formatDate(post.date)}
          </time>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <span>⏱️</span>
          <span>{post.readTime} min de lectura</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow">
        <motion.h3 
          className="text-xl font-bold text-gray-800 mb-3 line-clamp-2"
          whileHover={{ color: "#2563eb" }}
          transition={{ duration: 0.2 }}
        >
          {post.title}
        </motion.h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.description}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-semibold text-sm">
              {post.author.split(' ').map(name => name[0]).join('')}
            </span>
          </div>
          <span className="text-sm font-medium text-gray-700">
            {post.author}
          </span>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
        >
          Leer más →
        </motion.button>
      </div>

      {/* Animation type indicator (for demo purposes) */}
      <div className="absolute top-2 right-2 opacity-20 text-xs text-gray-400">
        {post.animationType}
      </div>
    </motion.article>
  );
};

export default BlogCard;
