const Scroll = new LocomotiveScroll(); 
function scrolltotop() {
    Scroll.scrollTo(0, 0)
}
  
window.scrollTo(0, 0)

function loader() {
    document.addEventListener('DOMContentLoaded', function () {
        let loader = document.getElementById('loader-text');
        let percentage = 0;

        let interval = setInterval(function () {
            percentage++;
            loader.textContent = percentage + '%';

            if (percentage >= 100) {
                clearInterval(interval);
            }
        }, 25);
    });
    let loadertl = gsap.timeline()
    loadertl.from('.logo-loader h1 span', {
        y: 90,
        opacity: 0,
        duration: 2,
        ease: 'elastic.in(19,0.9)',
        stagger: 0.05,
        delay: 0.2
    })

    loadertl.to('.logo-loader, #loader-text', {
        y: 50,
        opacity: 0,
        delay: 0.5
    })

    loadertl.to('.bg-loader-child', {
        height: 0,
        stagger: 0.1,
        duration: .6,
    })

    loadertl.to('.loader', {
        display: 'none',
        delay: -.1,
        onComplete: homepage
    })
}
// loader()

function homepage() {
    const homepagetl = gsap.timeline()

    homepagetl.from('.bg-home video', {
        scale: 2,
        duration: 1.5,
        ease: "expo.inOut",
    })

    homepagetl.from('.navbar', {
        y: -100,
        opacity: 0,
        stagger: 0.05,
    })

    homepagetl.from('.left-home h1 span', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.05,
        ease: 'elastic.out(1,0.3)',
    })

    homepagetl.from('.right-home', {
        x: 100,
        opacity: 0,
        duration: 2,
        ease: 'elastic.out(10,0.5)',
        delay: -.9
    })
}
// homepage()

function navbar() {
    window.addEventListener('wheel', (dets) => {
        if (dets.deltaY > 0) {
            gsap.to('.navbar', {
                transform: ('translateY(-100%)'),
                duration: .4,
            })
        }
        else {
            gsap.to('.navbar', {
                transform: ('translateY(0%)'),
                duration: .4,
            })
        }
    })


    // document.querySelector('.navbar').addEventListener('mouseenter', () => {
    //     gsap.to('.navbar', {
    //         width:'100vw',
    //         duration: .4,
    //     })
    //     gsap.to('.navbar h1', {
    //         display:'block',
    //         duration: .4,
    //     })
    // })

    // document.querySelector('.navbar').addEventListener('mouseleave', () => {
    //         gsap.to('.navbar', {
    //             width:'10vw',
    //             borderRadius: '1vw',
    //             duration: .4,
    //         })
    //         gsap.to('.logo img', {
    //             width:'7vw'
    //         })
    //         gsap.to('.navbar h1', {
    //             display:'none',
    //             duration: .4,
    //             delay: -.4,
    //         })
    // })
}
navbar()

function menutl() {
    const navmenutl = gsap.timeline()

    navmenutl.to('.menu', {
        display: 'block',
        width: '20vw',
        height: "20vh",
        top: '50%',
        bottom: 0,
        duration: .3,
    })

    navmenutl.to('.menu', {
        display: 'block',
        width: '100vw',
        height: "100vh",
        duration: 1,
        ease: 'elastic.out(1,0.4)',
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
    navmenutl.from('.video-menu', {
        scale: 0,
        opacity: 0,
        duration: .5,
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

function scrolltrigger() {

    // sec-1
    gsap.from('.motorcycles', {
        scrollTrigger: {
            trigger: '.sec-1',
            start: 'top 50%',
            end: 'bottom bottom',
            scrub: true,
        },
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'elastic.out(1,0.9',
    });

    gsap.from('.move', {
        scrollTrigger: {
            trigger: '.sec-1',
            start: 'top 80%',
            end: 'bottom bottom',
            scrub: true,
        },
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'elastic.out(1,0.9',
    });

    // sec-2
    gsap.to('.video-sec-2 ', {
        scrollTrigger: {
            trigger: '.video-sec-2',
            start: 'top center',
            end: 'bottom center',
            scrub: true,
        },
        scale: 1.5,
    });

    gsap.to('.sec-2 h1 span', {
        scrollTrigger: {
            trigger: '.sec-2',
            start: 'top 90%',
            end: 'bottom 100%',
            scrub: true,
        },
        color: '#fff',
        stagger: 0.1
    });

    gsap.from('.sec-2 p, .sec-2 .btn', {
        scrollTrigger: {
            trigger: ".sec-2",
            scrub: 1,
            start: 'top center',
            end: "top 100%",
        },
        y: 90,
        opacity: 0,
        stagger: 0.05,
        ease: 'elastic.out(1,0.5)',
    })
    // sec-3

    var sec3tl = gsap.timeline({scrollTrigger:{
        trigger:".sec-3",
       //  markers:true,
        start:"50% 50%",
        end:"150% 50%",
        scrub:2,
        pin:true
    }});
    sec3tl
    .to(".center-sec-3",{
       height: "100vh",
    },'a')
    .to(".top-sec-3",{
        top: "-50vw",
     },'a')
     .to(".bottom-sec-3",{
        bottom: "-50vw",
     },'a')
    .from("#top-h1",{
        top: "30vw"
     },'a')
     .from("#bottom-h1",{
        top: "5vw"
     },'a')
    .from(".center-sec-3",{
       delay: -0.2,
       opacity: 0,
       y: "100%"
    })
    .from(".text-sec-3",{
       delay: -0.2,
       opacity: 0,
       y: "100%"
    })
    .from("#arrival-1",{
       delay: -0.2,
       stagger: 0.2,
       x: "-100%",
       opacity: 0
    })
    
    .from("#arrival-2, #arrival-3",{
       delay: -0.4,
       stagger: 0.2,
       x: "100%",
       opacity: 0
    })


    // sec-4
    gsap.from('.accessory', {
        scrollTrigger: {
            trigger: ".sec-4",
            scrub: 1,
            start: 'top center',
            end: "top 100%",
        },
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'elastic.out(1,0.9)',
    });


    gsap.from('.header-accessories, .heading, .arrows', {
        scrollTrigger: {
            trigger: ".sec-4",
            scrub: 1,
            start: 'top center',
            end: "top 100%",
        },
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        scale: 0,
    });

    // sec-5
    gsap.from('.sec-5 h1, .sec-5 img', {
        scrollTrigger: {
            trigger: ".sec-5",
            scrub: 1,
            start: 'top center',
            end: "top 100%",
        },
        y: 100,
        opacity: 0,
        stagger: 0.05,
        duration: 1.5,
        ease: 'elastic.out(1,1)',
    });

    // sec-6
    gsap.from('.header-sec-6', {
        scrollTrigger: {
            trigger: ".sec-6",
            scrub: 1,
            start: 'top center',
            end: "top 100%",
        },
        opacity: 0,
        scale: 0,
        ease: 'elastic.out(1,0.9)',
    });

    gsap.from('.sec-6 img', {
        scrollTrigger: {
            trigger: ".sec-6",
            start: 'top center',
            end: "top 100%",
            scrub: true,
        },
        y: 100,
        opacity: 0,
        stagger: 0.3,
    });

    // footer
    gsap.to('.footer', {
        zIndex: 1,
        duration: .5,
        scrollTrigger: {
            trigger: '.sec-6',
            start: 'bottom 100vw',
            end: ' bottom 100vw',
            scrub: true
        },
    })

    gsap.from('.bottom-top h1 span', {
        scrollTrigger: {
            trigger: '.sec-6',
            start: 'bottom 130vw',
            end: ' bottom 100%',
            scrub: 2,
        },
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: .5,
    })

    gsap.from('.bottom-bottom, .bottom-top', {
        scrollTrigger: {
            trigger: '.sec-6',
            start: 'bottom 130vw',
            end: ' bottom 100%',
            scrub: 2,
        },
        y: 100,
        opacity: 0,
        duration: .5,
    })
}
scrolltrigger()

function cursorfollower() {
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

function marquee() {
    window.addEventListener('wheel', (dets) => {
        if (dets.deltaY > 0) {
            gsap.to('.marquee', {
                transform: ('translateX(-200%)'),
                repeat: -1,
                duration: 4,
                ease: 'none',
            })
            gsap.to('.marquee svg', {
                rotate: '0deg'
            })
            gsap.to('.one-marquee, .three-marquee', {
                transform: ('translateX(200%)'),
                repeat: -1,
                duration: 10,
                ease: 'none',
            })
            gsap.to('.two-marquee', {
                transform: ('translateX(-200%)'),
                repeat: -1,
                duration: 10,
                ease: 'none',
            })
        }
        else {
            gsap.to('.marquee', {
                transform: ('translateX(100%)'),
                repeat: -1,
                duration: 4,
                ease: 'none',
            })
            gsap.to('.marquee svg', {
                rotate: '360deg'
            })
            gsap.to('.one-marquee, .three-marquee', {
                transform: ('translateX(-200%)'),
                repeat: -1,
                duration: 10,
                ease: 'none',
            })
            gsap.to('.two-marquee', {
                transform: ('translateX(200%)'),
                repeat: -1,
                duration: 10,
                ease: 'none',
            })
        }
    })
}
marquee()

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

function accessories() {
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

function gallery() {
    gsap.to('.images img', {
        transform: 'translateX(-700%)',
        duration: 45,
        repeat: -1,
        ease: 'none',
    })
}
gallery()

function bikes() {
    const bike = document.querySelector('.motorcycle')
    const bikeimage = document.querySelectorAll('.img-motorcycle')

    window.addEventListener('mousemove', (e) => {
        gsap.to(bikeimage, {
            x: e.clientX - 600,
            rotation: e.movementX * 0.5,
        })
    })
}
bikes()

