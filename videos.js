const videos = document.querySelectorAll(".video")
const arrownav = document.querySelector(".arrownav")
const nav = document.querySelector("nav")
const cards = document.querySelectorAll(".card__box")
const cardsimg = document.querySelectorAll(".card__img")
const links = document.querySelectorAll(".links__text")
const linksline = document.querySelectorAll(".links__line")
const topicvideos = document.querySelector(".topicvideos")
const topicvideosleft = document.querySelectorAll(".topicvideos__left")
const topicvideosright = document.querySelectorAll(".topicvideos__right")
const topicvideoscontainer = document.querySelector(".topicvideos__container")
var numero = 0
var widthvideos = 0
var right = 0
var numberofvideos = 5
var contador = 0








topicvideosright.forEach((element)=>{element.addEventListener("click",(e)=>{
    console.log( e.target.parentNode.parentNode.children[2].children[0])
    console.log(numberofvideos)
    if(right > 0 && contador === 5){
        contador = 0
        numero = 0
        widthvideos = 0
        right = 0
    }
if(contador < numberofvideos){
    numero = numero+1
    e.target.parentNode.parentNode.children[2].children[0].style.transition = "1s all"
    e.target.parentNode.parentNode.children[2].children[0].style.right = `${numero * 570}px`
    right = right + 570
    console.log(right)
    contador = contador +1
    console.log(contador)

}

})})

topicvideosleft.forEach((element)=>{element.addEventListener("click",(e)=>{


if(right === 570){
    console.log("soy 570")


    e.target.parentNode.parentNode.children[2].children[0].style.right = `${right - 570 }px`
}

if( right !== 0){
    numero = numero-1
    console.log("soy 0")
    e.target.parentNode.parentNode.children[2].children[0].style.right = `${right - 570 }px`
    console.log(right - 570 * numero)
    right = right - 570
    contador = contador - 1

}

})})


var navshow = false
arrownav.addEventListener("click",()=>{
if(navshow === false){
    navshow = true
    nav.style.top = "0px"
    arrownav.style.top = "10vh"
    arrownav.src = "./src/arrowup.svg"
}else{
    navshow = false
    nav.style.top = "-100%"
    arrownav.style.top = "0px"
    arrownav.src = "./src/arrow.svg"
}
})
console.log(videos)

links.forEach(element => {
    element.addEventListener("mouseover",(objeto)=>{
        objeto.target.nextElementSibling.style.width = "100%"
        console.log(objeto)
    })

    element.addEventListener("mouseout",(objeto)=>{
        objeto.target.nextElementSibling.style.width = "0%"
        console.log(objeto)
    })
});