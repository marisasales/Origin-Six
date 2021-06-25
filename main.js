// Vai procurar dentro do documento os seletores indicados e colocar o valor na variável.
const nav = document.querySelector('#header nav')
// Pega todos os elementos toggle dentro de nav
const toggle = document.querySelectorAll('nav .toggle')

// Para cada elemento no toggle adiciona um evento ouvinte que com o click do mouse 
// vai adicionar show à lista de classe se não tiver e tirar se tiver.
for(const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

// Quando clicar em um item no menu, esconder o menu removendo .show
const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
    link.addEventListener('click', function (event) {
        event.preventDefault()

        nav.classList.remove('show')
        scrollSmooth(link)
    })
}

// Coloca uma sombra no header da página quando der scroll
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})

// Scroll suave
function scrollSmooth (link) {
    const sectionId = link.getAttribute('href')
    document.querySelector(sectionId).scrollIntoView({
        behavior: 'smooth'
    })
}

/* Testimonials slider */
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    Keyboard: true
})

/* ScrollReveal: mostrar elementos quando der scroll */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links
    `, { interval: 100 }
)