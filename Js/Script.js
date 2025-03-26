

// PROYECTOS SLIDER
document.addEventListener('DOMContentLoaded', function () {
  new Splide('#main-slider', {
    direction: 'ttb',
    height   : '33rem',
    wheel    : false,
    rewind : true,
    autoScroll: false,

    perPage: 1,
    perMove: 1,

    video: { 
      loop         : true,
      mute         : false,
      controls     : false, // Controles desactivados
      volume: "0.7",
      autoplay: false,
    },

    playerOptions: {
      youtube: { controls: 0 }, // Desactiva controles en YouTube
      vimeo: { controls: false }, // Desactiva controles en Vimeo
      htmlVideo: {}, // Controles ya desactivados en video HTML
    },

    breakpoints: {
      768: {
      perPage: 1, // Muestra 1 slide por página en pantallas pequeñas
      gap: '10px', // Espaciado entre slides
      },
    },
  }).mount(window.splide.Extensions);
});

// CLIENTES SLIDER
document.addEventListener('DOMContentLoaded', function () {
  new Splide('#infinite-slider', {
    type: 'loop',
    perPage: 4, // Número de slides visibles por defecto
    perMove: 1,
    pagination: false,
    arrows: false,
    drag: false, // Permite arrastrar en dispositivos táctiles
    gap: '50px', // Espaciado entre slides ajustado para evitar amontonamiento
    autoScroll: {
      speed: 30, // Velocidad del desplazamiento automático
    },
    breakpoints: {
      1500: {
        perPage: 3, // Muestra 3 slides en pantallas grandes
        gap: '150px', // Espaciado ajustado para pantallas grandes
      },
      1200: {
      perPage: 3, // Muestra 3 slides en pantallas grandes
      gap: '50px', // Espaciado ajustado para pantallas grandes
      },
      1024: {
      perPage: 2, // Muestra 2 slides en pantallas medianas
      gap: '5px', // Espaciado ajustado para pantallas medianas
      },
      768: {
      perPage: 1, // Muestra 1 slide en pantallas pequeñas
      gap: '-65px', // Espaciado ajustado para pantallas pequeñas
      },
    },
  }).mount({ AutoScroll: window.splide.Extensions.AutoScroll });
});



// CONTROL DE VOLUMEN EN #MAIN-SLIDER

// document.addEventListener('DOMContentLoaded', function () {
//   // Selecciona el slider #main-slider
//   const mainSlider = document.querySelector('#main-slider');

//   // Crea el contenedor de la barra de volumen
//   const volumeContainer = document.createElement('div');
//   volumeContainer.classList.add('volume-container');

//   // Estilo del contenedor
//   volumeContainer.style.position = 'absolute';
//   volumeContainer.style.top = '50%';
//   volumeContainer.style.left = '-40px'; // Posiciona fuera del slider a la izquierda
//   volumeContainer.style.transform = 'translateY(-50%)';
//   volumeContainer.style.display = 'flex';
//   volumeContainer.style.flexDirection = 'column';
//   volumeContainer.style.alignItems = 'center';
//   volumeContainer.style.padding = '10px';
//   volumeContainer.style.zIndex = '10';

//   // Crea la barra de volumen
//   const volumeSlider = document.createElement('input');
//   volumeSlider.type = 'range';
//   volumeSlider.min = '0';
//   volumeSlider.max = '1';
//   volumeSlider.step = '0.1';
//   volumeSlider.value = '0.5'; // Valor inicial
//   volumeSlider.style.writingMode = 'bt-lr'; // Hace que la barra sea vertical
//   volumeSlider.style.transform = 'rotate(-90deg)'; // Rota la barra para que sea vertical
//   volumeSlider.style.width = '100px';
//   volumeSlider.style.margin = '10px 0';
//   volumeSlider.style.cursor = 'pointer';

//   // Evento para ajustar el volumen de los videos dentro del slider
//   volumeSlider.addEventListener('input', () => {
//     const videos = mainSlider.querySelectorAll('video'); // Selecciona todos los videos dentro del slider
//     videos.forEach((video) => {
//       video.volume = volumeSlider.value; // Ajusta el volumen según el valor de la barra
//     });
//   });

//   // Agrega la barra al contenedor
//   volumeContainer.appendChild(volumeSlider);

//   // Cambia la posición del contenedor al lado derecho
//   volumeContainer.style.left = 'auto';
//   volumeContainer.style.right = '-40px'; // Posiciona fuera del slider a la derecha

//   // Agrega el contenedor al slider
//   mainSlider.style.position = 'relative'; // Asegura que el contenedor se posicione correctamente
//   mainSlider.appendChild(volumeContainer);
// });

// LOADER MINIMALISTA
document.addEventListener('DOMContentLoaded', function () {
  // Crear el contenedor del loader
  const loaderContainer = document.createElement('div');
  loaderContainer.id = 'loader-container';
  loaderContainer.style.position = 'fixed';
  loaderContainer.style.top = '0';
  loaderContainer.style.left = '0';
  loaderContainer.style.width = '100%';
  loaderContainer.style.height = '100%';
  loaderContainer.style.backgroundColor = '#1D1819';
  loaderContainer.style.display = 'flex';
  loaderContainer.style.flexDirection = 'column';
  loaderContainer.style.justifyContent = 'center';
  loaderContainer.style.alignItems = 'center';
  loaderContainer.style.zIndex = '9999';

  // Crear el contenedor del círculo de carga
  const loader = document.createElement('div');
  loader.style.position = 'relative';
  loader.style.width = '80px';
  loader.style.height = '80px';

  // Crear los puntos del círculo
  for (let i = 0; i < 12; i++) {
    const dot = document.createElement('div');
    dot.style.position = 'absolute';
    dot.style.width = '10px';
    dot.style.height = '10px';
    dot.style.backgroundColor = '#F9B75F';
    dot.style.borderRadius = '50%';
    dot.style.animation = `dot-spin 1.2s linear infinite`;
    dot.style.animationDelay = `${i * 0.1}s`;

    // Posicionar los puntos en círculo
    const angle = (i * 30) * (Math.PI / 180); // Convertir a radianes
    const x = 35 + 30 * Math.cos(angle); // Ajustar posición X
    const y = 35 + 30 * Math.sin(angle); // Ajustar posición Y
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;

    loader.appendChild(dot);
  }

  // Crear el texto "cargando"
  const loadingText = document.createElement('p');
  loadingText.textContent = 'Cargando...';
  loadingText.style.marginTop = '20px';
  loadingText.style.fontFamily = 'inherit'; // Usa la fuente principal de la página
  loadingText.style.fontSize = '17px';
  loadingText.style.color = '#F2E8D7';

  // Estilo para la animación de los puntos
  const style = document.createElement('style');
  style.textContent = `
    @keyframes dot-spin {
      0%, 20% { transform: scale(1); opacity: 1; }
      50% { transform: scale(0.5); opacity: 0.5; }
      100% { transform: scale(1); opacity: 1; }
    }
  `;
  document.head.appendChild(style);

  // Agregar el círculo de carga y el texto al contenedor
  loaderContainer.appendChild(loader);
  loaderContainer.appendChild(loadingText);

  // Agregar el contenedor al body
  document.body.appendChild(loaderContainer);

  // Eliminar el loader después de 5 segundos
  setTimeout(() => {
    loaderContainer.style.opacity = '0';
    loaderContainer.style.transition = 'opacity 0.5s';
    setTimeout(() => loaderContainer.remove(), 500);
  }, 3000);
});
