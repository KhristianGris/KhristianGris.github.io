

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
      controls     : false,
      volume: "0.5",
      autoplay: false,
    },

    playerOptions: {
      youtube: {},
      vimeo: {},
      htmlVideo: {},
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
    drag: true, // Permite arrastrar en dispositivos táctiles
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
