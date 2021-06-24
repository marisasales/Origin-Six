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
    link.addEventListener('click', function () {
        nav.classList.remove('show')
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
