

// PROYECTOS SLIDER
document.addEventListener('DOMContentLoaded', function () {
  new Splide('#principal-slider', {
    type: 'slide',
    perPage: 3, // Muestra 3 elementos por página
    perMove: 1,
    rewind: true,
    gap: '0rem', // Espaciado entre slides incrementado en un 50%
    pagination: true,
    arrows: true,
    focus: 'center',
    snap: true,
    autoScroll: false,
    start: 1,

    video: {
      loop: true,
      mute: false,
      controls: false, // Controles desactivados
      volume: "0.80",
      autoplay: false,
    },

    breakpoints: {
      1450: {
        perPage: 3, // Muestra 3 elementos por página en pantallas grandes
        gap: '1.5rem', // Espaciado ajustado para pantallas grandes
        start: 1,
      },
      1300: {
        perPage: 2, // Muestra 2 elementos por página en pantallas medianas
        gap: '0rem', // Espaciado ajustado para pantallas medianas
        start: 1,
      },
      850: {
        perPage: 1.5, // Muestra 2 elementos por página en pantallas medianas
        gap: '1.5rem', // Espaciado ajustado para pantallas medianas
        start: 1,
      },
      650: {
        perPage: 1, // Muestra 1 elemento por página en pantallas pequeñas
        gap: '0.5rem', // Espaciado ajustado para pantallas pequeñas
        start: 0,
      },
    },
  }).mount(window.splide.Extensions);
});

// CLIENTS INFINITE SLIDER
document.addEventListener('DOMContentLoaded', function () {
  new Splide('#infinite-slider', {
    type: 'loop',
    perPage: 5, // Número de slides visibles por defecto
    //perMove: 0, 
    pagination: false,
    arrows: false,
    drag: true, // Permite arrastrar en dispositivos táctiles
    gap: '3rem', // Espaciado entre slides ajustado para evitar amontonamiento
    direction: 'ltr',   

    autoScroll: {
      speed: -35, // Velocidad del desplazamiento automático
    },

    breakpoints: {
      1500: {
        perPage: 3, // Muestra 3 slides en pantallas grandes
        gap: '-50px', // Espaciado ajustado para pantallas grandes
      },
      1200: {
        perPage: 3, // Muestra 3 slides en pantallas grandes
        gap: '30px', // Espaciado ajustado para pantallas grandes
      },
      1024: {
        perPage: 2, // Muestra 2 slides en pantallas medianas
        gap: '5px', // Espaciado ajustado para pantallas medianas
      },
      768: {
        perPage: 2, // Muestra 1 slide en pantallas pequeñas
        gap: '-10px', // Espaciado ajustado para pantallas pequeñas
      },
      650: {
        perPage: 2, // Muestra 1 slide en pantallas pequeñas
        gap: '30px', // Espaciado ajustado para pantallas pequeñas
        },
    },
  }).mount({ AutoScroll: window.splide.Extensions.AutoScroll });
});

const slider = document.querySelector('#infinite-slider .splide__list');
if (slider.children.length < 5) {
  slider.innerHTML += slider.innerHTML; // Duplica los slides si son insuficientes
}

// // LOADER MINIMALISTA
// document.addEventListener('DOMContentLoaded', function () {
//   // Crear el contenedor del loader
//   const loaderContainer = document.createElement('div');  
//   loaderContainer.id = 'loader-container';
//   loaderContainer.style.position = 'fixed';
//   loaderContainer.style.top = '0';
//   loaderContainer.style.left = '0';
//   loaderContainer.style.width = '100%';
//   loaderContainer.style.height = '100%';
//   loaderContainer.style.backgroundColor = '#1D1819';
//   loaderContainer.style.display = 'flex';
//   loaderContainer.style.flexDirection = 'column';
//   loaderContainer.style.justifyContent = 'center';
//   loaderContainer.style.alignItems = 'center';
//   loaderContainer.style.zIndex = '9999';

//   // Crear el contenedor del círculo de carga
//   const loader = document.createElement('div');
//   loader.style.position = 'relative';
//   loader.style.width = '80px';
//   loader.style.height = '80px';

//   // Crear los puntos del círculo
//   for (let i = 0; i < 12; i++) {
//     const dot = document.createElement('div');
//     dot.style.position = 'absolute';
//     dot.style.width = '9px';
//     dot.style.height = '9px';
//     dot.style.backgroundColor = '#F9B75F';
//     dot.style.borderRadius = '10%';
//     dot.style.animation = `dot-spin 1.2s linear infinite`;
//     dot.style.animationDelay = `${i * 0.1}s`;

//     // Posicionar los puntos en círculo
//     const angle = (i * 30) * (Math.PI / 180); // Convertir a radianes
//     const x = 35 + 30 * Math.cos(angle); // Ajustar posición X
//     const y = 35 + 30 * Math.sin(angle); // Ajustar posición Y
//     dot.style.left = `${x}px`;
//     dot.style.top = `${y}px`;

//     loader.appendChild(dot);
//   }

//   // Crear el texto "cargando"
//   const loadingText = document.createElement('p');
//   loadingText.textContent = 'Cargando...';
//   loadingText.style.marginTop = '20px';
//   loadingText.style.fontFamily = 'inherit'; // Usa la fuente principal de la página
//   loadingText.style.fontSize = '17px';
//   loadingText.style.color = '#F2E8D7';

//   // Estilo para la animación de los puntos
//   const style = document.createElement('style');
//   style.textContent = `
//     @keyframes dot-spin {
//       0%, 20% { transform: scale(1); opacity: 1; }
//       50% { transform: scale(0.5); opacity: 0.5; }
//       100% { transform: scale(1); opacity: 1; }
//     }
//   `;
//   document.head.appendChild(style);

//   // Agregar el círculo de carga y el texto al contenedor
//   loaderContainer.appendChild(loader);
//   loaderContainer.appendChild(loadingText);

//   // Agregar el contenedor al body
//   document.body.appendChild(loaderContainer);

//   // Eliminar el loader después de 5 segundos
//   setTimeout(() => {
//     loaderContainer.style.opacity = '0';
//     loaderContainer.style.transition = 'opacity 0.5s';
//     setTimeout(() => loaderContainer.remove(), 500);
//   }, 2000);
// });












// SLIDER VERTICAL COMENTADO
// document.addEventListener('DOMContentLoaded', function () {
//   new Splide('#main-slider', {
//     direction: 'ttb',
//     height   : '33rem',
//     wheel    : false,
//     rewind : true,
//     autoScroll: false,

//     perPage: 1,
//     perMove: 1,

//     video: { 
//       loop         : true,
//       mute         : false,
//       controls     : false, // Controles desactivados
//       volume: "0.75",
//       autoplay: false,
//     },

//     playerOptions: {
//       youtube: { controls: 0 }, // Desactiva controles en YouTube
//       vimeo: { controls: false }, // Desactiva controles en Vimeo
//       htmlVideo: {}, // Controles ya desactivados en video HTML
//     },

//     breakpoints: {
//       768: {
//       perPage: 1, // Muestra 1 slide por página en pantallas pequeñas
//       gap: '10px', // Espaciado entre slides
//       },
//     },
//   }).mount(window.splide.Extensions);
// });