🏫 Tour Virtual del Colegio Santa Rosa de Lima

📌 Descripción del Proyecto
Este proyecto es un tour virtual interactivo que permite a los usuarios explorar las instalaciones del Colegio Santa Rosa de Lima. La página web proporciona dos vistas detalladas del colegio: Planta Superior y Planta Inferior. Cada planta incluye puntos interactivos con videos informativos que se reproducen en pantalla completa al hacer clic sobre ellos. Además, la página contiene una sección de información del colegio, con detalles sobre convenios, profesores, ventajas y más.

🌐 Características Principales
Interactividad: Mapa dividido en dos plantas (superior e inferior) con puntos clicables.
Videos Informativos: Cada punto del mapa reproduce un video relacionado con esa sección del colegio.
Navegación Fluida: Menú de navegación claro para cambiar entre las diferentes plantas y volver a la información principal.
Responsive Design: La página está optimizada para funcionar en cualquier dispositivo.
GitHub Pages: El proyecto está disponible en línea para su visualización.
🚀 Cómo Ejecutar el Proyecto Localmente
Clonar el repositorio:

bash
Copiar código
git clone https://github.com/Mithryll/tour-virtual.git
Navegar al directorio del proyecto:

bash
Copiar código
cd tour-virtual
Abrir el archivo index.html en un navegador web.

📋 Estructura del Proyecto
plaintext
Copiar código
📁 tour-virtual
│
├── 📁 css
│   ├── navbar.css          # Estilos del menú de navegación
│   ├── styles.css          # Estilos globales del sitio
│   ├── videos.css          # Estilos específicos de la página de videos
│   └── offcanvas.css       # Estilos del menú offcanvas
│
├── 📁 images
│   └── mapa.png            # Imagen del mapa del colegio
│
├── 📁 js
│   ├── main.js             # Lógica principal del sitio
│   └── videos.js           # Control de la reproducción de videos
│
├── 📁 videos               # Carpeta con los videos interactivos
│   ├── video1.mp4
│   ├── video2.mp4
│   └── ...
│
├── index.html              # Página de inicio
├── videos1.html            # Planta Superior
├── videos2.html            # Planta Inferior
└── README.md               # Descripción del proyecto (este archivo)
🎨 Tecnologías Utilizadas
HTML5: Estructura de las páginas web.
CSS3: Estilos y diseño del sitio.
JavaScript: Funcionalidad de los puntos interactivos y reproducción de videos.
GitHub Pages: Hospedaje del sitio web.
Git LFS: Almacenamiento de videos grandes.
📖 Uso del Sitio
Página de Inicio: Contiene la información principal del colegio, como convenios y ventajas.
Navegación por el Colegio:
Planta Superior: Vista de la planta superior del colegio con puntos clicables.
Planta Inferior: Vista de la planta inferior del colegio con más puntos interactivos.
Reproducción de Videos: Cada punto reproduce un video informativo en pantalla completa.
Menú Offcanvas: Acceso rápido al tour virtual desde cualquier sección.
🛠️ Problemas Conocidos y Soluciones
Límite de tamaño en GitHub: Algunos videos se almacenan utilizando Git LFS debido a las restricciones de tamaño.
Reproducción Automática: Los videos comienzan en pantalla completa, pero es posible que en algunos navegadores el botón de Esc interrumpa la reproducción.
🌟 Próximas Mejoras
Añadir más puntos interactivos con imágenes y videos.
Implementar un sistema de comentarios para cada sección del tour.
Optimizar la carga de los videos para conexiones más lentas.
👥 Contribuidores
Mithryll - Desarrollador del proyecto
📄 Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

📬 Contacto
Si tienes alguna duda o sugerencia, no dudes en contactarme a través de mi perfil de GitHub.
