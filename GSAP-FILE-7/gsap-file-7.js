const marqueAnimation = () => {

    window.addEventListener("wheel", (dets) => {
        
        if(dets.deltaY > 0)
        {
            gsap.to(".marque", {
                transform:"translateX(-200%)",
                repeat: -1,
                duration: 6,
                ease:"none",
            })
            gsap.to(".marque img", {
                rotate: 180,
                duration: 2,
            })
        }else
        {
            gsap.to(".marque", {
                transform:"translateX(0%)",
                repeat: -1,
                duration: 6,
                ease:"none",
            })
            gsap.to(".marque img", {
                rotate: 0,
                duration: 2,
            })
        }

    })

}

marqueAnimation()