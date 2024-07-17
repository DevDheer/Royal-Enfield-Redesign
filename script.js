(function () {
    const locomotiveScroll = new LocomotiveScroll();
})();

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
    width: '300vw',
    height: '300vh',
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

function madeinmadras(){
gsap.to('.video-sec-1 ', {
    scrollTrigger: {
      trigger: '.video-sec-1',
      start: 'top center',
      end: 'bottom center',
      scrub: true,
    },
    scale: 1.5 
  });
}
madeinmadras()


function cursorfollower(){
    let cursorfollower = document.querySelector('.cursor-follower')
    let cursoreffect1 = document.querySelectorAll('.left-home h1, .right-home svg')
    let cursoreffect2 = document.querySelectorAll('a')

    window.addEventListener('mousemove', (e) => {
        gsap.to(cursorfollower, {
            x: e.clientX + 10,
            y: e.clientY + 10,
            duration: .5,
            display: 'block',
            rotation: e.movementX * 0.9,
        })
    })

    // cursoreffect1

    cursoreffect1.forEach(cursor1 => {
        cursor1.addEventListener("mouseenter", () => {
            gsap.to(cursorfollower, {
                width: "4vw",
                height: "4vw",
                rotate: '360deg',
                borderRadius: '1vw',
                duration: 0.2,
            });
        });
    });

    cursoreffect1.forEach(cursor1 => {
        cursor1.addEventListener("mouseleave", () => {
            gsap.to(cursorfollower, {
                width: "2vw",
                height: "2vw",
                rotate: '-360deg',
                borderRadius: '0',
                duration: 0.2,
            });
        });
    });

    // cursoreffect2

    cursoreffect2.forEach(cursor2 => {
        cursor2.addEventListener("mouseenter", () => {
            gsap.to(cursorfollower, {
                rotate: '360deg',
                duration: .2,
            });
        });
    });

    cursoreffect2.forEach(cursor2 => {
        cursor2.addEventListener("mouseleave", () => {
            gsap.to(cursorfollower, {
                rotate: '-360deg',
                duration: 0.2,
            });
        });
    });
    
}
cursorfollower()

function marqueetl(){
    window.addEventListener('wheel', (dets) =>{
        if(dets.deltaY > 0){
            gsap.to('.marquee', {
                transform: ('translateX(-200%)'),
                repeat: -1,
                duration: 4,
                ease: 'none',
            })
            gsap.to('.marquee svg', {
                rotate: '0deg',
            })
        }
        else{
            gsap.to('.marquee', {
                transform: ('translateX(100%)'),
                repeat: -1,
                duration: 4,
                ease: 'none',
            })
            gsap.to('.marquee svg', {
                rotate: '360deg',
            })
        }
    })
}
marqueetl()

function motorcyclesanimation() {
    var elemC = document.querySelector(".motorcycles")
    var fixed = document.querySelector(".motorcycles-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".motorcycles")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`;
            })
        })

}

function accessories(){
    let next = document.querySelector('#next')
    let previous = document.querySelector('#previous')

        next.addEventListener('click', () => {
            gsap.to('.accessory', {
                transform: 'translateX(-250%)',
            })
        })    

        previous.addEventListener('click', () => {
            gsap.to('.accessory', {
                transform: 'translateX(0%)',
            })
        })  

}
accessories()