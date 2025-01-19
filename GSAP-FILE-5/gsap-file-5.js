var menu = document.querySelector(".nav i")
var close = document.querySelector(".full i")
var nav = gsap.timeline()
nav.to(".full", {
    right:0,
    duration:.7
})
nav.from(".full h4", {
    y:40,
    duration:.3,
    stagger:.25,
    opacity:0
})

nav.pause()

menu.addEventListener("click", () => {
    nav.play()
})

close.addEventListener("click", () => {
    nav.reverse()
})
