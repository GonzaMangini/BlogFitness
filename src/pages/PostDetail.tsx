import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const post = blogPosts.find(p => p.id === parseInt(id || '0'));

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Post no encontrado</h1>
          <button 
            onClick={() => navigate('/blog')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Volver al Blog
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Back button */}
            <motion.button
              onClick={() => navigate('/blog')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Volver al Blog
            </motion.button>

            {/* Category badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-medium capitalize">{post.category}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-blue-100 mb-6 leading-relaxed">
              {post.description}
            </p>

            {/* Meta info */}
            <div className="flex items-center space-x-6 text-blue-200">
              <div className="flex items-center space-x-2">
                <span>📅</span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full overflow-hidden bg-white/10">
                  <img 
                    src="/Foto2.png" 
                    alt={post.author}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <span 
                    className="text-white text-xs w-full h-full flex items-center justify-center" 
                    style={{ display: 'none' }}
                  >
                    {post.author.split(' ').map(name => name[0]).join('')}
                  </span>
                </div>
                <span>{post.author}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
          >
            <div className="prose prose-lg max-w-none">
              {/* Contenido expandido del post */}
              <div className="text-gray-700 leading-relaxed space-y-6">
                <p className="text-xl text-gray-600 font-medium mb-8">
                  {post.description}
                </p>
                
                {/* Contenido principal */}
                <div className="space-y-4">
                  {post.content && (
                    <p>{post.content}</p>
                  )}
                  
                  {/* Contenido adicional basado en la categoría */}
                  {post.category === 'rutinas' && (
                    <>
                      <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Ejercicios Principales</h2>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Sentadillas: 3 series de 12-15 repeticiones</li>
                        <li>Press de banca: 3 series de 8-10 repeticiones</li>
                        <li>Peso muerto: 3 series de 6-8 repeticiones</li>
                        <li>Dominadas: 3 series hasta el fallo</li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Consejos Importantes</h3>
                      <p>Recuerda siempre calentar antes de comenzar y enfriar al finalizar. La técnica es más importante que el peso.</p>
                    </>
                  )}
                  
                  {post.category === 'nutrición' && (
                    <>
                      <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Principios Básicos</h2>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Mantén un déficit calórico moderado para perder grasa</li>
                        <li>Consume 1.6-2.2g de proteína por kg de peso corporal</li>
                        <li>No elimines completamente los carbohidratos</li>
                        <li>Hidrátate adecuadamente (2-3 litros de agua al día)</li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Ejemplo de Comida</h3>
                      <p>Una comida balanceada podría incluir: pechuga de pollo, arroz integral, brócoli y un poco de aceite de oliva.</p>
                    </>
                  )}
                  
                  {post.category === 'motivación' && (
                    <>
                      <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Reflexiones Personales</h2>
                      <p>El camino del fitness no es solo físico, es mental. Cada día que decides entrenar, estás eligiendo ser una mejor versión de ti mismo.</p>
                      
                      <blockquote className="border-l-4 border-blue-500 pl-6 italic text-gray-600 my-6">
                        "La disciplina es hacer lo que tienes que hacer, incluso cuando no tienes ganas de hacerlo."
                      </blockquote>
                      
                      <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Estrategias que me Funcionan</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Establecer metas pequeñas y alcanzables</li>
                        <li>Celebrar cada pequeño logro</li>
                        <li>Encontrar un compañero de entrenamiento</li>
                        <li>Documentar el progreso con fotos</li>
                      </ul>
                    </>
                  )}
                  
                  {post.category === 'progreso' && (
                    <>
                      <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Mi Evolución</h2>
                      <p>Documentar el progreso es fundamental. No solo se trata de los cambios físicos, sino también de cómo me siento mentalmente.</p>
                      
                      <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Cambios Notables</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Mayor resistencia cardiovascular</li>
                        <li>Mejor calidad de sueño</li>
                        <li>Más confianza en mí mismo</li>
                        <li>Hábitos alimenticios más saludables</li>
                      </ul>
                      
                      <p className="mt-4">Cada semana trato de hacer algo mejor que la anterior, aunque sea un pequeño detalle.</p>
                    </>
                  )}
                </div>
                
                {/* Conclusión */}
                <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Para Recordar</h3>
                  <p className="text-gray-700">
                    Este es mi viaje personal y cada experiencia es única. Si estás comenzando tu propio camino fitness, 
                    recuerda que lo más importante es la consistencia y escuchar a tu cuerpo. 
                    <strong> Siempre consulta con profesionales</strong> para obtener un plan personalizado.
                  </p>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex justify-between items-center"
          >
            <button
              onClick={() => navigate('/blog')}
              className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Volver al Blog
            </button>
            
            <div className="flex space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                Compartir
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PostDetail;
