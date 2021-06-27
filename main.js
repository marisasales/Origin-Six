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
function changeHeaderWhenScroll() {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}

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
    Keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
})

// ScrollReveal: mostrar elementos quando der scroll
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
    #contact .text, #contact .links,
    footer .brand, footer .social
    `, { interval: 100 }
)

// Botão voltar para o topo
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

// Menu ativo conforme a seção visível na página
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (innerHeight / 8) * 4

    for (const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if (checkpointStart && checkpointEnd) {
            document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.add('active')
        } else {
            document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.remove('active')
        }
    }
}

// Scroll
window.addEventListener('scroll', function(){
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
})