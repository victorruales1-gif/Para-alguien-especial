// ==========================================
// ¡HOLA! EDITA AQUÍ PARA AGREGAR CONTENIDO NUEVO
// ==========================================

// 1. FECHA ESPECIAL
const fechaEspecial = new Date('2026-05-11').getTime();

// 2. TUS FOTOS
const fotos = [
    "https://i.imgur.com/h1lB69E.jpg"
];

// 3. TUS POEMAS Y MENSAJES
const mensajes = [
    {
        fecha: "⭐",
        texto: "Y al verte entendí por qué existen grandes obras sin título, porque hay cosas que, cuando son demasiado grandes, simplemente no caben en una palabra. Hay obras que no necesitan nombre, basta con mirarlas para sentir algo que uno no sabe explicar. Y mírame aquí, frente a ti, intentando hacer con palabras lo que las palabras no pueden hacer. No sé qué adjetivo inventar, qué metáfora robarle a algún poeta muerto, qué frase escribir para acercarme siquiera un poco a lo que eres y quizá ahí está mi fracaso, que llevo tantas palabras dentro y ninguna parece suficiente cuando se trata de ti. Porque puedo escribir sobre tus ojos, sobre tu boca, sobre la forma en la que tu presencia consigue desordenarme la cabeza... Pero todo eso sigue siendo apenas una mala aproximación."
    },
    {
        fecha: "🌌",
        texto: "No quiero decirte que eres mi universo, eso sería científicamente incorrecto.\nEl universo es demasiado grande, hay galaxias que jamás veremos, estrellas cuya luz todavía no nos alcanza y lugares donde quizá exista algo que ni siquiera imaginamos.\n\nLo que quiero decirte es algo mucho más extraño:\nEntre todo lo que existe, entre todo lo que puede existir y entre todo aquello que jamás llegará a existir, tú eres la parte del universo que me interesa conocer hasta el final."
    },
    {
        fecha: "🌹",
        texto: "Te elijo incluso sabiendo que podría no hacerlo.\nTe elijo sin certezas, sin promesas eternas, pero con la convicción de quien ha probado la soledad y aun así decide compartir su calma.\n\nTe elijo en lo simple, en las mañanas sin filtro, en los días donde amar se siente más como esfuerzo que como impulso.\n\nTe elijo porque contigo la vida no es perfecta, pero es verdad; porque no necesito un destino que nos una si tengo el coraje de elegirte aquí y ahora, en lo real, en lo humano, en lo nuestro.\n\nY si amar es una decisión, entonces te sigo eligiendo aunque el mundo cambie de rumbo."
    },
    {
        fecha: "🤍",
        texto: "Me encantas más cada día.\n\nPensé que el amor alcanzaba un límite, pero contigo pasa algo extraño: mientras más comparto contigo, más cosas encuentro para admirar.\n\nTu manera de pensar, de hablar, de preocuparte por quienes amas... todo en ti termina acercándome más.\n\nY lo más peligroso es que ya no solo me gustas por lo que haces, sino por la tranquilidad inmensa que siento cada vez que apareces en mi vida."
    },
    {
        fecha: "🌠",
        texto: "Hace no mucho ni siquiera nos conocíamos.\nÉramos simplemente dos almas caminando sin vernos.\n\nY entonces, un día, sin previo aviso, nos encontramos en el mismo camino.\n\nA veces dicen que ciertos encuentros te cambian la vida; este es uno de ellos.\n\nEs extraño, lo sé. Cuanto más te conozco, más olvido cómo era mi vida sin ti.\n\nMe haces una mejor persona y por eso te estoy agradecido.\n\nPorque si amar es un pecado, que el mundo me juzgue y me pierda por toda la eternidad."
    }
];

// ==========================================
// NO TOQUES NADA DE AQUÍ PARA ABAJO
// ==========================================

function cargarContador() {
    const ahora = new Date().getTime();
    const diferenciaEnMilisegundos = ahora - fechaEspecial;
    const diferenciaEnSegundos = Math.floor(diferenciaEnMilisegundos / 1000);
    const latidosTotales = Math.floor(diferenciaEnSegundos * LATIDOS_POR_SEGUNDO);
    const latidosFormateados = latidosTotales.toLocaleString('es-ES');
    document.getElementById('contador').innerHTML = "❤️ " + latidosFormateados + " latidos";
    
    // Sincronizar la línea de vida con el latido
    const linea = document.querySelector('.linea-vida svg');
    if (linea) {
        linea.style.animationDuration = (60 / LATIDOS_POR_MINUTO) + 's';
    }
}

function cargarGaleria() {
    const contenedor = document.getElementById('galeria');
    let html = '';
    fotos.forEach(function(foto) {
        html += '<img src="' + foto + '" alt="Momento especial">';
    });
    contenedor.innerHTML = html;
}

function cargarMensajes() {
    const contenedor = document.getElementById('lista-mensajes');
    let html = '';
    mensajes.forEach(function(mensaje) {
        html += '<div class="mensaje-item">';
        html += '<p class="fecha-mensaje">' + mensaje.fecha + '</p>';
        html += '<p>' + mensaje.texto + '</p>';
        html += '</div>';
    });
    contenedor.innerHTML = html;
}

cargarContador();
cargarGaleria();
cargarMensajes();

setInterval(cargarContador, 1000);
