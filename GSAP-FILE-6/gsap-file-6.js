const breakTheText = () => {
    let h1 = document.querySelector("h1");
    let h1Text = h1.textContent

    let splittedText = h1Text.split("");
    let halfValue = splittedText.length/2
    
    let clutter = ""

    splittedText.forEach( (elem,idx) => {

        if(idx < halfValue)
        {
            clutter += `<span class="a">${elem}</span>`
        }else
        {
            clutter += `<span class="b">${elem}</span>`
        }
    })
    h1.innerHTML = clutter
}

breakTheText()

gsap.from("h1 .a", {
    y:80,
    duration: .6,
    delay: .5,
    stagger: .15,
    opacity: 0,
})
gsap.from("h1 .b", {
    y:80,
    duration: .6,
    delay: .5,
    stagger: -.15,
    opacity: 0,
})