const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function menutl() {
const navmenutl = gsap.timeline()

navmenutl.to('.menu', {
    display: 'block',
    width: '100vw',
    height: "10vh",
    top: '50%',
    bottom: 0,
    duration: .3,    
})

navmenutl.to('.menu', {
    display: 'block',
    width: '100vw',
    height: "100vh",
    duration: .5,    
})

navmenutl.from('.header-menu h1, .menu hr', {
    y: 30,
    opacity: 0,
    stagger: 0.05,
})

navmenutl.from('.links-menu a', {
    y: 30,
    opacity: 0,
    duration: .5,
    stagger: 0.05,
})

navmenutl.from('.social-menu a, .social-menu h1', {
    y: 30,
    opacity: 0,
    duration: .5,
    stagger: 0.05,
    delay: -.5
})

navmenutl.pause()

const open = document.querySelector('.navigate-1')
const close = document.querySelector('.navigate-2')

open.addEventListener('click', () => {
    navmenutl.play();
})

close.addEventListener('click', () => {
    navmenutl.reverse();
})
}
menutl()


function homepage(){
const homepagetl = gsap.timeline()

homepagetl.from('.bg-home video', {
    width: '200vw',
    height: '200vh',
    duration: 1.5,
    ease: "expo.inOut",
})

homepagetl.from('.navbar', {
    y: -100,
    opacity: 0,
    stagger: 0.05,
})

homepagetl.from('.left-home',{
    x: -100,
    opacity: 0,
    duration: 1.5,
    ease: 'elastic.out(1,0.4)',
})

homepagetl.from('.right-home',{
    x: 100,
    opacity: 0,
    duration: 1,
    ease: 'elastic.out(1,0.4)',
    delay: -.9
})
}
homepage()