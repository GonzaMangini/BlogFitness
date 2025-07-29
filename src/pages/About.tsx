import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const skills = [
    { name: 'Entrenamiento de Fuerza', level: 75, icon: '🏋️' },
    { name: 'Cardio', level: 60, icon: '🏃' },
    { name: 'Nutrición', level: 80, icon: '🥗' },
    { name: 'Constancia', level: 90, icon: '💪' },
    { name: 'Motivación', level: 95, icon: '🔥' }
  ];

  const timeline = [
    {
      date: 'Enero 2025',
      title: 'Inicio del viaje',
      description: 'Decidí cambiar mi estilo de vida y comenzar a entrenar regularmente.',
      icon: '🚀'
    },
    {
      date: 'Febrero 2025',
      title: 'Primeros resultados',
      description: 'Comencé a ver cambios físicos y mentales significativos.',
      icon: '📈'
    },
    {
      date: 'Presente',
      title: 'Compartiendo mi experiencia',
      description: 'Creé este blog para documentar y compartir mi progreso.',
      icon: '✍️'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Hola, soy Gonza 👋
              </h1>
              <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                Un desarrollador apasionado que decidió embarcarse en un viaje de 
                transformación personal a través del fitness y el entrenamiento.
              </p>
              <p className="text-lg text-blue-200 leading-relaxed">
                Este blog es mi diario personal donde comparto mis experiencias, 
                aprendizajes y reflexiones en este camino hacia una vida más saludable.
              </p>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-8xl shadow-2xl"
                >
                  🧑‍💻
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute -bottom-4 -right-4 bg-yellow-400 text-yellow-800 p-3 rounded-full text-2xl shadow-lg"
                >
                  💪
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Mi Progreso Actual
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estas son las áreas en las que he estado trabajando y mi nivel actual de progreso.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{skill.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
                </div>
                
                <div className="mb-2">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progreso</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Mi Viaje Hasta Ahora
            </h2>
            <p className="text-gray-600">
              Los momentos más importantes de mi transformación personal.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-50 rounded-xl p-6 shadow-lg"
                  >
                    <div className="text-sm text-blue-600 font-semibold mb-2">
                      {item.date}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center text-xl shadow-lg"
                >
                  {item.icon}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Message Section */}
      <section className="py-16 bg-gradient-to-r from-gray-100 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-xl text-center"
          >
            <div className="text-4xl mb-6">💭</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Mi Filosofía Personal
            </h2>
            <blockquote className="text-lg text-gray-600 italic leading-relaxed mb-6">
              "Creo firmemente que el fitness no se trata solo de cambiar tu cuerpo, 
              sino de transformar tu mente y tu relación contigo mismo. Cada día es 
              una oportunidad para ser una mejor versión de quien fuiste ayer."
            </blockquote>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
