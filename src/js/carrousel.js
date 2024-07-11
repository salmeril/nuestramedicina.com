let posicionActual = 0;
const $noticia = document.querySelector('#noticia');
let noticias; // Variable para almacenar las noticias desde el JSON

// Cargar noticias desde el archivo JSON
fetch('/src/json/noticias.json')
    .then(response => response.json())
    .then(data => {
        noticias = data;
        renderizarNoticias(); // Iniciar con las primeras noticias
        setInterval(pasarNoticia, 7000); // Cambiar automáticamente cada 7 segundos
    })
    .catch(error => console.error('Error al cargar las noticias:', error));

function pasarNoticia() {
    posicionActual += getCardsPerView();
    if (posicionActual >= noticias.length) {
        posicionActual = 0;
    }
    renderizarNoticias();
}

function retrocederNoticia() {
    posicionActual -= getCardsPerView();
    if (posicionActual < 0) {
        posicionActual = noticias.length - getCardsPerView();
    }
    renderizarNoticias();
}

function renderizarNoticias() {
    $noticia.style.animation = 'fadeOut 0.5s forwards';
    setTimeout(() => {
        $noticia.innerHTML = '';
        for (let i = 0; i < getCardsPerView(); i++) {
            const index = (posicionActual + i) % noticias.length;
            const noticia = noticias[index];
            $noticia.innerHTML += `
                <div class="card" style="width: 18rem;">
                    <img src="${noticia.imagen}" class="card-img-top" alt="${noticia.titulo}">
                    <div class="card-body">
                        <h5 class="card-title">${noticia.titulo}</h5>
                        <p class="card-text">${noticia.contenido}</p>
                        <a href="${noticia.link}" class="btn btn-primary">Entrar</a>
                    </div>
                </div>
            `;
        }
        $noticia.style.animation = 'fadeIn 0.5s forwards';
    }, 500); // Tiempo de transición (0.5 segundos)
}

function getCardsPerView() {
    if (window.innerWidth <= 480) {
        return 1;
    } else if (window.innerWidth <= 768) {
        return 2;
    } else {
        return 3;
    }
}

document.querySelector('#flecha-izquierda').addEventListener('click', retrocederNoticia);
document.querySelector('#flecha-derecha').addEventListener('click', pasarNoticia);
window.addEventListener('resize', renderizarNoticias); // Volver a renderizar al cambiar el tamaño de la ventana
