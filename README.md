# Blog de Entrenamiento - Gonza Mangini

Una aplicación web tipo blog personal de entrenamiento desarrollada con React, TypeScript y TailwindCSS.

## 🚀 Características

- **Frontend moderno**: React 18 + TypeScript
- **Estilos elegantes**: TailwindCSS con animaciones personalizadas
- **Animaciones fluidas**: Framer Motion para transiciones suaves
- **Diseño responsivo**: Optimizado para dispositivos móviles y desktop
- **Navegación SPA**: React Router para navegación sin recargas
- **Sin backend**: Todo el contenido está almacenado localmente

## 📱 Páginas

### 🏠 Inicio
- Página de bienvenida con mensaje inspirador
- Estadísticas de progreso personal
- Enlaces de navegación rápida

### 📚 Mi Blog
- Lista de posts de entrenamiento con diferentes tipos de animación
- Buscador de contenido
- Filtros por categoría
- Cada post incluye: título, descripción, fecha, tiempo de lectura

### 👤 Conóceme
- Información personal del autor
- Progreso en diferentes áreas del fitness
- Timeline del viaje de transformación
- Filosofía personal

## 🎨 Características Técnicas

- **Animaciones**: Cada post tiene un tipo de animación específico (fade-in, slide-up, scale-in)
- **Navbar fija**: Con efectos de scroll y hover
- **Footer global**: Con enlaces a redes sociales
- **Responsive**: Diseño adaptable a todos los dispositivos
- **Performance**: Optimizado para carga rápida

## 🛠️ Tecnologías Utilizadas

- React 18
- TypeScript
- TailwindCSS
- Framer Motion
- React Router DOM

## 🚀 Instalación y Uso

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar en modo desarrollo:
```bash
npm start
```

3. Abrir [http://localhost:3000](http://localhost:3000) en el navegador

## 📝 Estructura de Posts

Los posts del blog siguen esta estructura:
```typescript
interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  animationType: 'fade-in' | 'slide-up' | 'scale-in';
  content?: string;
  author: string;
  readTime: number;
}

**© 2025 Gonza Mangini. Todos los derechos reservados.**