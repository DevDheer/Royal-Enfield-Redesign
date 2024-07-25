const Scroll = new LocomotiveScroll();
function scrolltotop() {
    Scroll.scrollTo(0, 0)
}

Scroll.scrollTo(0, 0)

function loader() {
    document.addEventListener('DOMContentLoaded', function () {
        let loader = document.getElementById('loader-text');
        let percentage = 0;

        let interval = setInterval(function () {
            percentage += 2;
            loader.textContent = percentage;

            if (percentage >= 100) {
                clearInterval(interval);
            }
        }, 45);
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
loader()

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
homepage()

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
        width: '100vw',
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
    })

    navmenutl.from('.menu-header', {
        opacity: 0,
        stagger: 0.05,
    })

    navmenutl.from('.circle-menu', {
        display: 'none',
        rotate: '-360deg',
        duration: 1,
        ease: Expo.easeInOut,
    }, 'a')

    navmenutl.from('.menu-resposnive-links li', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.05,
        ease: Expo.easeInOut,
    }, 'a')

    navmenutl.from('.bg-img-menu', {
        y: '100%',
        opacity: 0,
        duration: 1,
        ease: Expo.easeInOut,
    }, 'a')

    navmenutl.from('.img-menu', {
        y: -100,
        opacity: 0,
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


    function menu() {
        const menulink1 = document.querySelector('.menu-link-1')
        const menulink2 = document.querySelector('.menu-link-2')
        const menulink3 = document.querySelector('.menu-link-3')
        const menulink4 = document.querySelector('.menu-link-4')
        const menulink5 = document.querySelector('.menu-link-5')

        menulink1.addEventListener('click', () => {
            gsap.to('.circle-menu', {
                rotate: '30deg',
                ease: 'elastic.out(1, 0.3)',
                duration: 1.5
            })
            gsap.to('.menu-link', {
                color: '#404040'
            })
            gsap.to('.menu-link-1', {
                color: '#fff'
            })
            gsap.to('.circle-link', {
                backgroundColor: '#404040'
            })
            gsap.to('.circle-link-1', {
                backgroundColor: '#fff'
            })
            gsap.to('.img-menu', {
                opacity: 0,
            })
            gsap.to('.img-1', {
                opacity: 1,
            })
        })
        menulink2.addEventListener('click', () => {
            gsap.to('.circle-menu', {
                rotate: '15deg',
                ease: 'elastic.out(1, 0.3)',
                duration: 1.5
            })
            gsap.to('.menu-link', {
                color: '#404040'
            })
            gsap.to('.menu-link-2', {
                color: '#fff'
            })
            gsap.to('.circle-link', {
                backgroundColor: '#404040'
            })
            gsap.to('.circle-link-2', {
                backgroundColor: '#fff'
            })
            gsap.to('.img-menu', {
                opacity: 0,
            })
            gsap.to('.img-2', {
                opacity: 1,
            })
        })
        menulink3.addEventListener('click', () => {
            gsap.to('.circle-menu', {
                rotate: '0deg',
                ease: 'elastic.out(1, 0.3)',
                duration: 1.5
            })
            gsap.to('.menu-link', {
                color: '#404040'
            })
            gsap.to('.menu-link-3', {
                color: '#fff'
            })
            gsap.to('.circle-link', {
                backgroundColor: '#404040'
            })
            gsap.to('.circle-link-3', {
                backgroundColor: '#fff'
            })
            gsap.to('.img-menu', {
                opacity: 0,
            })
            gsap.to('.img-3', {
                opacity: 1,
            })
        })
        menulink4.addEventListener('click', () => {
            gsap.to('.circle-menu', {
                rotate: '-15deg',
                ease: 'elastic.out(1, 0.3)',
                duration: 1.5
            })
            gsap.to('.menu-link', {
                color: '#404040'
            })
            gsap.to('.menu-link-4', {
                color: '#fff'
            })
            gsap.to('.circle-link', {
                backgroundColor: '#404040'
            })
            gsap.to('.circle-link-4', {
                backgroundColor: '#fff'
            })
            gsap.to('.img-menu', {
                opacity: 0,
            })
            gsap.to('.img-4', {
                opacity: 1,
            })
        })
        menulink5.addEventListener('click', () => {
            gsap.to('.circle-menu', {
                rotate: '-30deg',
                ease: 'elastic.out(1, 0.3)',
                duration: 1.5
            })
            gsap.to('.menu-link', {
                color: '#404040'
            })
            gsap.to('.menu-link-5', {
                color: '#fff'
            })
            gsap.to('.circle-link', {
                backgroundColor: '#404040'
            })
            gsap.to('.circle-link-5', {
                backgroundColor: '#fff'
            })
            gsap.to('.img-menu', {
                opacity: 0,
            })
            gsap.to('.img-5', {
                opacity: 1,
            })
        })
    }
    menu()
}
menutl()

function scrolltrigger() {
    gsap.from('.sec-1-header', {
        scrollTrigger: {
            trigger: ".sec-1",
            scrub: 1,
            start: 'top 80%',
            end: "top 100%",
        },
        y: 90,
        opacity: 0,
    })

    // sec-2
    gsap.to('.video-sec-2 ', {
        scrollTrigger: {
            trigger: '.sec-2',
            start: 'top top',
            end: 'bottom center',
            scrub: 2,
            pin: true,
        },
        scale: 1.5,
    });

    gsap.to('.sec-2 h1 span', {
        scrollTrigger: {
            trigger: '.sec-2',
            start: 'top 90%',
            end: 'bottom 100%',
            scrub: 1,
        },
        color: '#fff',
        stagger: 0.1
    });

    gsap.from('.sec-2 p, .sec-2 .button', {
        scrollTrigger: {
            trigger: ".sec-2",
            scrub: 1,
            start: 'top center',
            end: "top 100%",
        },
        y: 90,
        opacity: 0,
        stagger: 0.05,
    })
    // sec-3
    gsap.to('#heading-sec-3', {
        scrollTrigger: {
            trigger: '.header-sec-3',
            start: 'top top',
            end: 'top bottom',
            scrub: 3,
            pin: true
        },
        scale: 2,
    })


    // sec-4
    gsap.from('.accessory', {
        scrollTrigger: {
            trigger: ".sec-4",
            scrub: 1,
            start: 'top center',
            end: "top 100%",
            scrub: 3,
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
            scrub: 3,
        },
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        scale: 0,
    });


    gsap.from('.goa-garage-cafe', {
        scrollTrigger: {
            trigger: ".sec-5",
            start: 'top 15%',
            end: 'top 100%',
            scrub: 5,
            pin: true,
        },
        rotate: 36,
        scale: 0,
    })

    gsap.to('.sec5-bgs', {
        scrollTrigger: {
            trigger: ".sec-5",
            scrub: 2,
            pin: true,
        },
        x: "-100%",
    })

    // services

    gsap.timeline({
        scrollTrigger: {
            trigger: ".service",
            start: "center center",
            end: "bottom top",
            scrub: 1,
            pin: true
        }
    })
        .from(".service-img", {
            x: innerWidth * 1,
            rotate: 90
        })
        .from(".service-line1", {
            x: innerWidth * 1
        })
        .from(".service-line2", {
            x: innerWidth * -1
        })
        .from(".service .button", {
            x: innerWidth * -1
        })

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
    });

    gsap.from('.row-image img', {
        scrollTrigger: {
            trigger: ".sec-6",
            start: 'top center',
            end: "top 100%",
            scrub: 3,
        },
        y: 100,
        opacity: 0,
        stagger: 0.3,
    });

    // footer

    gsap.from('.bottom-top h1 span', {
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 10%',
            end: ' bottom bottom',
            scrub: 2,
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
    })
}
scrolltrigger()

function cursorfollower() {
    let cursorfollower = document.querySelector('.cursor-follower')
    let cursoreffect1 = document.querySelectorAll('.left-home h1, .right-home svg, img')
    let cursoreffect2 = document.querySelectorAll('a, button')
    let cursoreffect3 = document.querySelectorAll('.bike, #previous, #next, .menu-link')

    document.querySelector('.main').addEventListener('mousemove', (e) => {
        gsap.to(cursorfollower, {
            x: e.clientX + 10,
            y: e.clientY + 10,
            top: 0,
            left: 0,
            duration: .5,
            opacity: 1,
            rotation: e.movementX * 0.9,
            scale: 1,
        })
    })

    document.querySelector('.main').addEventListener('mouseleave', () => {
        gsap.to(cursorfollower, {
            opacity: 0,
            duration: .5,
            scale: 0,
        });
    })
    // cursoreffect1

    cursoreffect1.forEach(cursor1 => {
        cursor1.addEventListener("mouseenter", () => {
            gsap.to(cursorfollower, {
                width: "3vw",
                height: "3vw",
                rotate: '360deg',
                borderRadius: '0.3vw',
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

    // cursoreffect3

    cursoreffect3.forEach(cursor3 => {
        cursor3.addEventListener("mouseenter", () => {
            gsap.to(cursorfollower, {
                width: "3vw",
                height: "3vw",
                borderRadius: '50%',
                mixBlendMode: 'normal',
            });
            gsap.to('.cursor-follower p', {
                opacity: 1,
            });
        });
    });

    cursoreffect3.forEach(cursor3 => {
        cursor3.addEventListener("mouseleave", () => {
            gsap.to(cursorfollower, {
                width: "2vw",
                height: "2vw",
                borderRadius: '0%',
                mixBlendMode: 'difference',
            });
            gsap.to('.cursor-follower p', {
                opacity: 0,
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
                transform: ('translateX(100%)'),
                repeat: -1,
                duration: 10,
                ease: 'none',
            })
            gsap.to('.two-marquee, .four-marquee', {
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
                transform: ('translateX(-100%)'),
                repeat: -1,
                duration: 10,
                ease: 'none',
            })
            gsap.to('.two-marquee, .four-marquee', {
                transform: ('translateX(200%)'),
                repeat: -1,
                duration: 10,
                ease: 'none',
            })
        }
    })

    gsap.to('.one-marquee, .three-marquee', {
        transform: ('translateX(100%)'),
        repeat: -1,
        duration: 10,
        ease: 'none',
    })
    gsap.to('.two-marquee, .four-marquee', {
        transform: ('translateX(-200%)'),
        repeat: -1,
        duration: 10,
        ease: 'none',
    })
}
marquee()

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
    document.querySelectorAll('#gallery-img').forEach(galleryimg => {
        galleryimg.addEventListener('mouseenter', () => {
            gsap.to('#gallery-img', {
                scale: 0.9,
            })
        })
    })

    document.querySelectorAll('#gallery-img').forEach(galleryimg => {
        galleryimg.addEventListener('mouseleave', () => {
            gsap.to('#gallery-img', {
                scale: 1,
            })
        })
    })

    const gallery1 = document.querySelectorAll('.gallery-img1')
    const gallery2 = document.querySelectorAll('.gallery-img2')
    const gallery3 = document.querySelectorAll('.gallery-img3')
    const gallery4 = document.querySelectorAll('.gallery-img4')

    // gallery 1

    gallery1.forEach(gallery1img => {
        gallery1img.addEventListener('mouseenter', () => {
            gsap.to('.main', {
                backgroundColor: '#6A5542',
            })
        })
    })

    gallery1.forEach(gallery1img => {
        gallery1img.addEventListener('mouseleave', () => {

            gsap.to('.main', {
                backgroundColor: '#101010',
            })
        })
    })

    // gallery 2

    gallery2.forEach(gallery2img => {
        gallery2img.addEventListener('mouseenter', () => {
            gsap.to('.main', {
                backgroundColor: '#303030',
            })
        })
    })

    gallery2.forEach(gallery2img => {
        gallery2img.addEventListener('mouseleave', () => {

            gsap.to('.main', {
                backgroundColor: '#101010',
            })
        })
    })

    // gallery 3

    gallery3.forEach(gallery3img => {
        gallery3img.addEventListener('mouseenter', () => {
            gsap.to('.main', {
                backgroundColor: '#002E21',
            })
        })
    })

    gallery3.forEach(gallery3img => {
        gallery3img.addEventListener('mouseleave', () => {

            gsap.to('.main', {
                backgroundColor: '#101010',
            })
        })
    })

    // gallery 4

    gallery4.forEach(gallery4img => {
        gallery4img.addEventListener('mouseenter', () => {
            gsap.to('.main', {
                backgroundColor: '#760607',
            })
        })
    })

    gallery4.forEach(gallery4img => {
        gallery4img.addEventListener('mouseleave', () => {

            gsap.to('.main', {
                backgroundColor: '#101010',
            })
        })
    })

}
gallery()


function bikes() {

    window.addEventListener('load', checkScreenSize);
    window.addEventListener('resize', checkScreenSize);

    const bike = document.querySelectorAll('.bike');

    function animateBike() {
        bike.forEach(bikescontainer => {
            bikescontainer.addEventListener('click', onClick);
            bikescontainer.addEventListener('mouseleave', onMouseLeave);
            bikescontainer.addEventListener('mouseenter', onMouseEnter);
        });
    }

    function removeAnimation() {
        bike.forEach(bikescontainer => {
            bikescontainer.removeEventListener('click', onClick);
            bikescontainer.removeEventListener('mouseleave', onMouseLeave);
            bikescontainer.removeEventListener('mouseenter', onMouseEnter);
        });
    }

    function onClick() {
        gsap.to(this, {
            width: '50vw',
            duration: 0.4
        });
        gsap.to(this.querySelector('.inner-content'), {
            display: 'block',
            delay: -0.5
        });
        gsap.to(this.querySelector('.outer-content'), {
            rotate: 0
        });
    }

    function onMouseLeave() {
        gsap.to(this, {
            width: '17vw',
            scale: 1,
            duration: 0.4
        });
        gsap.to(this.querySelector('.inner-content'), {
            display: 'none',
            delay: -0.5
        });
        gsap.to(this.querySelector('.outer-content'), {
            rotate: -90,
        });
    }

    function onMouseEnter() {
        gsap.to(this, {
            width: '17vw',
            scale: 1.03,
            duration: 0.4
        });
    }

    function checkScreenSize() {
        const screenWidth = window.innerWidth;
        if (screenWidth < 769) {
            removeAnimation();
        } else {
            animateBike();
        }
    }
}
bikes()

function cursorclicking() {
    document.addEventListener('click', function (e) {
        const effectContainer = document.getElementById('cursor-effect-container');
        const effect = document.createElement('div');
        effect.className = 'click-effect';
        effect.style.left = `${e.pageX - 10}px`;
        effect.style.top = `${e.pageY - 10}px`;
        effectContainer.appendChild(effect);

        setTimeout(() => {
            effect.remove();
        }, 600);
    });
}
cursorclicking()

function rides() {

    const details = gsap.utils.toArray(".desktop-content-section-sec-3:not(:first-child)")
    const photos = gsap.utils.toArray(".desktop-pic-sec-3:not(:first-child)")


    gsap.set(photos, { yPercent: 101 })

    const allPhotos = gsap.utils.toArray(".desktop-pic-sec-3")


    let mm = gsap.matchMedia();

    mm.add("(min-width: 651px)", () => {

        console.log("desktop")

        ScrollTrigger.create({
            trigger: ".sec-3",
            start: "top top",
            end: "bottom bottom",
            pin: ".right-sec-3"
        })

        details.forEach((detail, index) => {

            let headline = detail.querySelector("h1")
            let animation = gsap.timeline()
                .to(photos[index], { yPercent: 0 })
                .set(allPhotos[index], { autoAlpha: 0 })
            ScrollTrigger.create({
                trigger: headline,
                start: "top 80%",
                end: "top 50%",
                animation: animation,
                scrub: true,
                markers: false
            })
        })
    });

}
rides()