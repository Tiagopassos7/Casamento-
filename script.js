// ===========================
// ELEMENTOS
// ===========================

const intro = document.getElementById("intro");
const site = document.getElementById("site");
const botaoAbrir = document.getElementById("abrirConvite");

const audio = document.getElementById("audio");
const musicButton = document.getElementById("musicButton");

const navbar = document.querySelector("nav");

// ===========================
// ABRIR CONVITE
// ===========================

botaoAbrir.addEventListener("click", () => {

    intro.classList.add("hide");
    site.classList.add("show");

    audio.volume = 0.5;

    audio.play().catch(() => {});

});

// ===========================
// BOTÃO MÚSICA
// ===========================

let tocando = true;

musicButton.addEventListener("click", () => {

    if(tocando){

        audio.pause();

        musicButton.innerHTML =
        '<i class="fa-solid fa-music"></i>';

    }else{

        audio.play();

        musicButton.innerHTML =
        '<i class="fa-solid fa-pause"></i>';

    }

    tocando = !tocando;
    musicButton.classList.toggle("playing");

});

// ===========================
// MENU
// ===========================

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});

// ===========================
// CONTADOR
// ===========================

const casamento =
new Date("2026-11-22T16:00:00").getTime();

function atualizarContador(){

    const agora = new Date().getTime();

    const distancia = casamento - agora;

    if(distancia <= 0){

        return;

    }

    const dias =
    Math.floor(distancia / (1000*60*60*24));

    const horas =
    Math.floor((distancia%(1000*60*60*24))/(1000*60*60));

    const minutos =
    Math.floor((distancia%(1000*60*60))/(1000*60));

    const segundos =
    Math.floor((distancia%(1000*60))/1000);

    document.getElementById("dias").innerHTML =
    dias.toString().padStart(3,"0");

    document.getElementById("horas").innerHTML =
    horas.toString().padStart(2,"0");

    document.getElementById("minutos").innerHTML =
    minutos.toString().padStart(2,"0");

    document.getElementById("segundos").innerHTML =
    segundos.toString().padStart(2,"0");

}

atualizarContador();

setInterval(atualizarContador,1000);

// ===========================
// REVELAR SEÇÕES
// ===========================

const sections =
document.querySelectorAll("section");

const observer =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:.15
});

sections.forEach(sec=>{

    sec.style.opacity="0";
    sec.style.transform="translateY(40px)";
    sec.style.transition=".8s";

    observer.observe(sec);

});
