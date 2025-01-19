// Box Animation
gsap.to(".box1",{
    x:1100,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"blue",
    borderRadius:"50%",
    scale:0.5
})
gsap.from(".box2",{
    x:1100,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"green",
    borderRadius:"50%",
    scale:0.5
})
// Text Animation
gsap.from("h1",{
    opacity: 0,
    duration: 1,
    y:30,
    delay:1,
    stagger:0.5
    // stagger:-1
})
// Some other features
gsap.to(".box3",{
    x:1200,
    duration:3,
    delay:1,
    borderRadius:"50%",
    // rotate:360,
    repeat:-1,
    yoyo:true
})
// Basic navigation bar by gsap-timeline-property

var tl = gsap.timeline()
tl.from("h1",{
    y:-30,
    opacity:0,
    duration:0.50,
    delay:0.5
})
tl.from("h4",{
    y:-30,
    opacity:0,
    duration:0.50,
    delay:0.5,
    stagger:0.3
})
tl.from("h2",{
    y:20,
    opacity:0,
    duration:0.50,
    scale:0.3
})
