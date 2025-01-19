function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}  

locomotiveAnimation()
const Page1Animation = () => {
    var tl = gsap.timeline()

    tl.from("nav h1,nav h4,nav button",{
        y:-40,
        duration:1,
        delay:0.5,
        opacity:0,
        stagger:0.2,
    })
    tl.from(".center-part-1 h1", {
        x:-200,
        opacity:0,
        duration:.5,
    },"-=0.3")
    tl.from(".center-part-1 p", {
        x:-200,
        opacity:0,
        duration:.4,
    })
    tl.from(".center-part-1 button", {
        y:-40,
        opacity:0,
        duration:0.4,
    })
    tl.from(".center-part-2 img", {
        x:200,
        opacity:0,
        delay:0.5,
    },"-=0.5")
    tl.from(".inner-section-2 img", {
        opacity:0,
        y:-40,
        stagger:.15,
        duration:.6,
    })

}

function Page2Animation()
{
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".inner-section-3",
            scroller:".main",
            // markers:true,
            start:"top 50%",
            end:"top -30%",
            scrub:.10,
        }
    })
    
    tl2.from(".services", {
        y:50,
        opacity:0,
        duration:1,
    })
    tl2.from(".element.line1.left", {
        x:-300,
        opacity:0,
        duration:.5,
    },"anime1")
    tl2.from(".element.line1.right", {
        x:300,
        opacity:0,
        duration:.5,
    },"anime1")
    
    tl2.from(".element.line2.left", {
        x:-300,
        opacity:0,
        duration:1,
    },"anime2")
    tl2.from(".element.line2.right", {
        x:300,
        opacity:0,
        duration:1,
    },"anime2")
}
Page2Animation()
Page1Animation()



