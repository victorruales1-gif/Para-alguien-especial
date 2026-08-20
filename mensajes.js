// 1. CONFIGURA TU FECHA ESPECIAL (Contador de Latidos)
// Fecha: 11 de Mayo de 2026 - El día que se conocieron
const fechaEspecial = new Date('2026-05-11').getTime();

const fotos = [
    "https://i.imgur.com/h1lB69E.jpg",
];

const mensajes = [
     {
        fecha: "🌌",
        texto: "No quiero decirte que eres mi universo, eso sería científicamente incorrecto.\nEl universo es demasiado grande, hay galaxias que jamás veremos, estrellas cuya luz todavía no nos alcanza y lugares donde quizá exista algo que ni siquiera imaginamos.\n\nLo que quiero decirte es algo mucho más extraño:\nEntre todo lo que existe, entre todo lo que puede existir y entre todo aquello que jamás llegará a existir, tú eres la parte del universo que me interesa conocer hasta el final."
    }
];
    {
        fecha: "🌹",
        texto: "Te elijo incluso sabiendo que podría no hacerlo.\nTe elijo sin certezas, sin promesas eternas, pero con la convicción de quien ha probado la soledad y aun así decide compartir su calma.\n\nTe elijo en lo simple, en las mañanas sin filtro, en los días donde amar se siente más como esfuerzo que como impulso.\n\nTe elijo porque contigo la vida no es perfecta, pero es verdad; porque no necesito un destino que nos una si tengo el coraje de elegirte aquí y ahora, en lo real, en lo humano, en lo nuestro.\n\nY si amar es una decisión, entonces te sigo eligiendo aunque el mundo cambie de rumbo."
    },
    {
        fecha: "💘",
        texto: "Me encantas más cada día.\n\nPensé que el amor alcanzaba un límite, pero contigo pasa algo extraño: mientras más comparto contigo, más cosas encuentro para admirar.\n\nTu manera de pensar, de hablar, de preocuparte por quienes amas... todo en ti termina acercándome más.\n\nY lo más peligroso es que ya no solo me gustas por lo que haces, sino por la tranquilidad inmensa que siento cada vez que apareces en mi vida."
    },
    {
        fecha: "🤍",
        texto: "Hace no mucho ni siquiera nos conocíamos.\nÉramos simplemente dos almas caminando sin vernos.\n\nY entonces, un día, sin previo aviso, nos encontramos en el mismo camino.\n\nA veces dicen que ciertos encuentros te cambian la vida; este es uno de ellos.\n\nEs extraño, lo sé. Cuanto más te conozco, más olvido cómo era mi vida sin ti.\n\nMe haces una mejor persona y por eso te estoy agradecido.\n\nPorque si amar es un pecado, que el mundo me juzgue y me pierda por toda la eternidad."
    }

];

// CONSTANTES DEL CORAZÓN
const LATIDOS_POR_MINUTO = 80; // Promedio de un corazón adulto en reposo
const LATIDOS_POR_SEGUNDO = LATIDOS_POR_MINUTO / 60; // 1.33 latidos por segundo

function cargarContador() {
    const ahora = new Date().getTime();
    const diferenciaEnMilisegundos = ahora - fechaEspecial;
    const diferenciaEnSegundos = Math.floor(diferenciaEnMilisegundos / 1000);
    
    // Calcular latidos totales
    const latidosTotales = Math.floor(diferenciaEnSegundos * LATIDOS_POR_SEGUNDO);
    
    // Formatear con separadores de miles (ej: 18,489,600)
    const latidosFormateados = latidosTotales.toLocaleString('es-ES');
    
    // Mostrar en el HTML
    document.getElementById('contador').innerHTML = 
        "❤️ " + latidosFormateados + " latidos";
}

function cargarGaleria() {
    const contenedor = document.getElementById('galeria');
    let html = '';
    fotos.forEach(foto => {
        html += `<img src="${foto}" alt="Momento especial">`;
    });
    contenedor.innerHTML = html;
}

function cargarMensajes() {
    const contenedor = document.getElementById('lista-mensajes');
    let html = '';
    mensajes.forEach(mensaje => {
        html += `<div class="mensaje-item">
                    <p class="fecha-mensaje">${mensaje.fecha}</p>
                    <p>${mensaje.texto}</p>
                 </div>`;
    });
    contenedor.innerHTML = html;
}

// Ejecutar todo
cargarContador();
cargarGaleria();
cargarMensajes();

// Actualizar contador cada segundo
setInterval(cargarContador, 1000);
