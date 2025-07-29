import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const skills = [
    { name: 'Fuerza', level: 100, icon: '🏋️' },
    { name: 'Motivación', level: 95, icon: '🔥' },
    { name: 'Nutrición', level: 82, icon: '🥗' },
    { name: 'Constancia', level: 70, icon: '🕒' },
    { name: 'Cardio', level: 45, icon: '🏃' },
    { name: 'Pelo', level: 10, icon: '👨‍🦲' },
  ];

  const timeline = [
    {
      date: 'Abril 2010',
      title: 'Empece jugando al futbol a mis 8 años',
      description: 'Buscaba adaptarme a un deporte que me gustara, pero no duro mucho.',
      icon: '⚽'
    },
    {
      date: 'Julio 2011',
      title: 'Comencé a jugar al rugby a mis 9 años',
      description: 'Mi padre hacia rugby en su juventud, y me animo a que también lo hiciera.',
      icon: '🏉'
    },
    {
      date: 'Noviembre 2014',
      title: 'Ya mucha pasión por el Rugby y un hermoso grupo de amigos',
      description: 'Decedido a seguir con el Rugby, y con un grupo de amigos que me animaban a que también lo hiciera.',
      icon: '😁'
    },
    {
      date: 'Marzo 2016',
      title: 'Mi primeros pasos en el Fitness',
      description: 'Empece en Onda Crossfit, entrenando movilidad y crossfit.',
      icon: '🏃'
    },
    {
      date: 'Mayo 2018',
      title: 'Ganamos el primer torneo de Rugby con mi categoria',
      description: 'Ya en la M15, terminamos el torneo del valle en el primer lugar.',
      icon: '🏉'
    },
    {
      date: 'Principio de 2019',
      title: 'Fui elegido como capitan por mi categoria',
      description: 'Fue un honor para mí, y me sentí responsable de mis compañeros.',
      icon: '🏃'
    },
    {
      date: 'Marzo 2020',
      title: 'Empezo la pandemia y el fitness en casa',
      description: 'Seguia entrenado, pero en casa.',
      icon: '🏋️'
    },
    {
      date: 'Mayo 2021',
      title: 'De vuelta a la rutina',
      description: 'Entrenaba en Onda Crossfit 3 veces por semana y tambien rugby 4 veces por semana.',
      icon: '🏉'
    },
    {
      date: 'Mediados de 2021',
      title: 'Tuvimos un TestMach para el seleccionado de los pumas',
      description: 'En el test solo quedo un compañero de nuestra categoria, pero la mayoria estabamosen el seleccionado el valle.',
      icon: '🏉'
    },
    {
      date: 'Fines de 2021',
      title: 'Ganamos todos los tornes del valle y un hermoso cierre de categoria',
      description: 'Con 4 copas a casa y una hermosa despedida de categoria ya no iba a volver a jugar con mis amigos',
      icon: '🏃'
    },
    {
      date: 'Febrero 2022',
      title: 'Deje rugby pero no el Club',
      description: 'En rugby estaba jugando y entrenando con primera pero no me sentia comodo, asi que decidi ayudar a categorias inferiores.',
      icon: '🏃'
    },
    {
      date: 'Febrero 2023',
      title: 'Vengo a La Plata a estudiar',
      description: 'Decidi mudarme a la Plata para estudiar programacion y no volver a jugar al Rugby. Pero nunca abandonando el gimansio',
      icon: '🏋️'
    },
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
                Hola, si llegaste aca sabes quien soy
              </h1>
              <p className="text-xl text-blue-100 mb-6 leading-relaxed">
               Un apasionado por el deporte y la programación. En esta parte de mi blog vas a conocer un poco más sobre mí y mi camino hacia una vida más saludable.
              </p>
              <p className="text-lg text-blue-200 leading-relaxed">
                Este blog es mi diario personal donde comparto mis experiencias.
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
                  className="w-80 h-80 rounded-full shadow-2xl overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center"
                >
                  <img 
                    src="/Foto1.jpg" 
                    alt="Gonzalo Mangini"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallbackElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallbackElement) {
                        fallbackElement.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="w-full h-full flex items-center justify-center text-8xl" style={{display: 'none'}}>
                  👨‍🦲
                  </div>
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
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-150"
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
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-50 rounded-xl p-6 shadow-lg text-center"
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
                  whileHover={{ 
                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
                    borderColor: "rgb(147, 51, 234)"
                  }}
                  transition={{ duration: 0.2 }}
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
      <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-12 md:p-16 shadow-2xl text-center relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500"></div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-8"
            >
              Mi Meta Personal
            </motion.h2>
            
            <motion.blockquote 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-10 max-w-4xl mx-auto"
            >
              Hoy mi meta es seguir construyendo una base sólida para mi futuro. 
              Después de vivir mi primera experiencia laboral, entendí la importancia de la 
              responsabilidad y el compromiso. Estoy enfocado en mantener buenos hábitos, 
              ser constante en lo que me propongo y seguir creciendo tanto personal como 
              profesionalmente.
            </motion.blockquote>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 mx-auto rounded-full"
            ></motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
