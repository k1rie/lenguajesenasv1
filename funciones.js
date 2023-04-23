const cards = document.querySelectorAll(".card__box")

const cardsimg = document.querySelectorAll(".card__img")

const links = document.querySelectorAll(".links__text")

const linksline = document.querySelectorAll(".links__line")

links.forEach(element => {
    element.addEventListener("mouseover", (objeto) => {
        objeto.target.nextElementSibling.style.width = "100%"
        console.log(objeto)
    })

    element.addEventListener("mouseout", (objeto) => {
        objeto.target.nextElementSibling.style.width = "0%"
        console.log(objeto)
    })
});