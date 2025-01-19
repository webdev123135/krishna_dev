var path = "M 10 100 Q 500 100 990 100"

var finalPath = "M 10 100 Q 500 100 990 100"

var string = document.querySelector(".string")

string.addEventListener("mousemove", (dets) =>{
    path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`
    // console.log(path)
    gsap.to("svg path", {
        attr:{d: path},
        duration:.5,
        ease:"power3.out"

    })
})

string.addEventListener("mouseleave", () => {
    gsap.to("svg path", {
        attr:{d:finalPath},
        duration:.5,
        ease:"elastic.out(1,0.2)"
    })
})
