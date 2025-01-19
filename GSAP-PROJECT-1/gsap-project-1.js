function LocomotiveScrollAnimation() {
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
LocomotiveScrollAnimation()
const CursorMove = () => {
    var page1Content = document.querySelector(".page1-content")
var Cursor = document.querySelector(".cursor-move");

page1Content.addEventListener('mousemove', (dets) => {
    gsap.to(Cursor,{
        x:dets.x,
        y:dets.y,
        duration:1.5,
        ease: "back.out",
    })
})
page1Content.addEventListener('mouseenter', () => {
    gsap.to(Cursor, {
        scale:1,
        opacity:1,
    })
})
page1Content.addEventListener('mouseleave', () => {
    gsap.to(Cursor, {
        scale:0,
        opacity:0,
    })
})
}
CursorMove()
function Page2Animation() {
    gsap.to(".page2-text-line, .logos-inline-text", {
        y:0,
        duration:1,
        stagger:.10,
        ease:"SlowMo.easeOut",
        scrollTrigger:{
            trigger:".page2-section",
            scroller:".main",
            // markers:true,
            start:"top 80%",
            end:"top 10%",
            scrub:3,
        } 
    })
}
Page2Animation()

function Page3Animation(){
    gsap.to(".page3-inline-top",{
        y:0,
        duration:1,
        stagger:.10,
        ease:"SlowMo.easeOut",
        scrollTrigger:{
            trigger:".page3",
            scroller:".main",
            // markers:true,
            start:"top 80%",
            end:"top 40%",
            scrub:3,
        }
})
}
Page3Animation() 

function Page4Animation() {
    gsap.to(".page4-logos-inline-text,.page4-text-line", {
        y:0,
        duration:1,
        stagger:.10,
        ease:"SlowMo.easeOut",
        scrollTrigger:{
            trigger:".page4",
            scroller:".main",
            // markers:true,
            start:"top 100%",
            end:"top -30%",
            scrub:3,
        } 
    })
} 
Page4Animation()

function Page6Animation() {
    gsap.to(".page6-logos-inline-text,.page6-text-line", {
        y:0,
        duration:1,
        stagger:.10,
        ease:"SlowMo.easeOut",
        scrollTrigger:{
            trigger:".page6",
            scroller:".main",
            // markers:true,
            start:"top 100%",
            end:"top -10%",
            scrub:3,
        } 
    })
} 
Page6Animation()

function SwiperJs(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        speed: 1500,
        breakpoints: {
            1150: {
                slidesPerView: 3,
            },
            600: {
                slidesPerView: 2, 
            },
            100:{
                slidesPerView: 1,
            }
        }
      });
}
SwiperJs()

function LoaderByGsap() {
    var tl = gsap.timeline()

tl.from(".loader h3", {
    x:80,
    opacity:0,
    duration:1,
    delay:1,
    stagger:.2,
})
tl.to(".loader h3", {
    opacity:0,
    x:-10,
    duration:.50,
    stagger:.50
})
tl.to(".loader", {
    opacity:0,
    ease: "power4.out",
})
tl.from(".page1-content h1 span", {
    y:100,
    opacity:0,
    stagger:.2,
    duration:.5,
    delay:-.5,
})
tl.to(".loader",{
    display:"none"
})
}
LoaderByGsap()

function Section1(){
    gsap.to(".footer-top-header-span",{
        y:0,
        duration:1,
        stagger:.10,
        ease:"SlowMo.easeOut",
        scrollTrigger:{
            trigger:".footer-header",
            scroller:".main",
            // markers:true,
            start:"top 80%",
            end:"top 60%",
            scrub:3,
        }
})
}
Section1()

function section3() {
    gsap.from(".footer-page-3-rejouice h1 span", {
        y:-300,
        duration:2,
        delay:1,
        stagger:.2,
        scrollTrigger:{
            trigger:'.footer-page-3',
            scroller:'.main',
            // markers:true,
            start:'top 90%',
            end:'top 70%',
            scrub:6,
        }
    })
}
section3()

function page5video(){
    gsap.from('.page5 video',{
        scale:.70,
        scrollTrigger:{
            trigger:'.page5',
            scroller:'.main',
            // markers:true,
            start:'top 80%',
            end:'top -10%',
            scrub:1
        }
    })
}
page5video()

