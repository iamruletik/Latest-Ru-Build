//CONSTANTS
const   DESKTOP_BREAKPOINT = window.matchMedia("(min-width: 768px)"),
        AUDIO_ELEMENT = document.getElementById("gospel"),
        HALO_MODEL_PATH = '/static/final-torus-opt.glb',
        THREEJS_HALO_WRAPPER = document.querySelector(".threejs-wrapper"),
        FOOTER = document.querySelector("footer"),
        TAP_HALO_TEXT_CLASS = document.querySelector(".tap-halo"),
        DESKTOP_MENU = document.querySelector("#menu-section"),
        DESKTOP_MENU_BACKDROP = document.querySelector("#menu-backdrop"),
        DESKTOP_MENU_BACKGROUND = document.querySelector("#menu-background"),
        DESKTOP_MENU_LINKS = DESKTOP_MENU.querySelectorAll(".animated-menu-link"),
        DESKTOP_MENU_ANIM_LINKS = DESKTOP_MENU.querySelectorAll(".menu-anim-link");
        DESKTOP_MENU_BUTTON_TEXT = document.querySelector("#menu-button-text"),
        DESKTOP_MENU_BUTTON = document.querySelector("#menu-button"),
        DESKTOP_MENU_DIVIDER = document.querySelector(".menu-divider");
        DESKTOP_MENU_LAYOUT = DESKTOP_MENU.querySelector(".menu-popup-layout"),
        MOBILE_MENU_BRIEF_BUTTON = document.querySelector("#brief-button"),
        MOBILE_MENU_BUTTON = document.querySelector("#menu-button"),
        MOBILE_MENU = document.querySelector(".mobile-menu"),
        MOBILE_MENU_LINKS = MOBILE_MENU.querySelectorAll(".animated-menu-link"),
        MOBILE_MENU_BUTTONS = MOBILE_MENU.querySelectorAll(".menu-button-top"),
        OGL_CANVAS = document.querySelector("#ogl-canvas"),
        DESCRIPTOR_CONTAINER = document.querySelector(".descriptor"),
        PRESENTATION_CARDS = document.querySelectorAll(".slide");
        


let DESCRIPTOR_NAMES = [
    "DESIGN STUDIO",
    "DEVELOPMENT TEAM",
    "DESIGN CREW",
    "PRODUCT SQUAD",
    "COMMUNICATION AGENCY",  
]

//MENU TRANSLATIONS FOR RU EN DE
let MENU_TRANSLATION = {
    open: "OPEN MENU",
    openMobile: "MENU",
    close: "CLOSE MENU",
    closeMobile: "CLOSE",
    briefMobile: "BRIEF"
}

//PROJECT DESCRIPTIONS
let PROJECT_NAMES = [
    "BIDAPP SDK",
    "UNITS COMMUNITY",
    "POLEMICA PLATFORM",
    "URBAN AMENITIES",
    "INDIEVID LABEL",
    "SCREEN BLASTERS"
]

let PROJECT_TAGS = [
    "STRATEGY DIGITAL",
    "BRANDING DIGITAL",
    "BRAND IDENTITY",
    "STRATEGY BRANDING",
    "IDENTITY, WEBSITE",
    "READYMAG WEBSITE",
]

let PROJECT_YEARS = [
    "2024",
    "2023",
    "2021",
    "2022",
    "2022",
    "2022"
]


if (document.documentElement.lang === "de") {
        MENU_TRANSLATION = {
        open: "MENU",
        openMobile: "MENU",
        close: "SCHLIESSEN",
        closeMobile: "SCHLIESSEN",
        briefMobile: "FORMULAR"
    }

    DESCRIPTOR_NAMES = [
        "DESIGNSTUDIO",
        "DESIGNTEAM",
        "KOMMUNIKATIONSAGENTUR",
        "ENTWICKLUNGSTEAM",
        "PRODUKTSQUAD",
    ]

     PROJECT_NAMES = [
        "BIDAPP SDK",
        "UNITS COMMUNITY",
        "POLEMICA PLATFORM",
        "URBAN AMENITIES",
        "INDIEVID LABEL",
        "SCREEN BLASTERS"
    ]

     PROJECT_TAGS = [
        "STRATEGY DIGITAL",
        "BRANDING DIGITAL",
        "BRAND IDENTITY",
        "STRATEGY BRANDING",
        "IDENTITY, WEBSITE",
        "READYMAG WEBSITE",
    ]
} 

if (document.documentElement.lang === "ru") {
    MENU_TRANSLATION = {
        open: "МЕНЮ",
        openMobile: "МЕНЮ",
        close: "ЗАКРЫТЬ",
        closeMobile: "ЗАКРЫТЬ",
        briefMobile: "СВЯЗАТЬСЯ"
    }

    DESCRIPTOR_NAMES = [
        "ДИЗАЙН СТУДИЯ",
        "КОМАНДА РАЗРАБОТКИ",
        "КОММУНИКАЦИОННОЕ АГЕНТСТВО",
        "ДИЗАЙН КОМАНДА",
        "ПРОДУКТОВЫЙ ОТРЯД",
    ]

    PROJECT_NAMES = [
        "BIDAPP SDK",
        "UNITS COMMUNITY",
        "ПЛАТФОРМА ПОЛЕМИКА",
        "URBAN AMENITIES",
        "ЛЕЙБЛ ИНДИВИД",
        "SCREEN BLASTERS"
    ]
    
    PROJECT_TAGS = [
        "СТРАТЕГИЯ ПРОДУКТ",
        "БРЕНДИНГ САЙТ",
        "БРЕНД АЙДЕНТИКА",
        "СТРАТЕГИЯ БРЕНДИНГ",
        "АЙДЕНТИКА САЙТ",
        "READYMAG САЙТ",
    ]
}


/*New Contact Form Script*/
  const myForm = document.querySelector("#contactForm")
  //const buttonGroup = document.querySelector(".contacts-button-group")
  const firstMessage = document.querySelector("#firstMessage")
  const lastMessage = document.querySelector("#lastMessage")

  let formAnimation = gsap.timeline().pause()

          formAnimation.to(myForm, {
            height: 0,
            autoAlpha: 0,
            ease: "power2.inOut"
        })

        /*formAnimation.to(buttonGroup, {
            autoAlpha: 1,
            height: "auto",
            ease: "power2.inOut"
        }, "<")*/

        formAnimation.to(firstMessage, {
            height: 0,
            autoAlpha: 0,
            ease: "power2.inOut"
        }, "<")

        formAnimation.to("#bottom-popup-part", {
            height: 0,
            autoAlpha: 0,
            ease: "power2.inOut"
        }, "<")

        formAnimation.to(lastMessage, {
            autoAlpha: 1,
            height: "auto",
            ease: "power2.inOut"
        }, "<")



myForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            localStorage.setItem("userMail", document.getElementById('your-email-field').value)
            localStorage.setItem("userName", document.getElementById('your-name-field').value)
            localStorage.setItem("userText", document.getElementById('your-comment-field').value)
            
            // REPLACE THIS with your actual Cloud Function URL from the GCP Console
            const FUNCTION_URL = "https://radiance-contact-1096616366730.asia-east1.run.app";

            const payload = {
                email: document.getElementById('your-email-field').value,
                text: document.getElementById('your-comment-field').value,
                name: document.getElementById('your-name-field').value,
            };

            try {
                const response = await fetch(FUNCTION_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (response.ok) {
                    //formAnimation.restart()
                    console.log("✅ Email sent successfully!" + response.statusText)
                    window.location.href = "/brief/?lang=ru"
                    //window.location.replace("/brief/?lang=ru")
                    myForm.reset()
                } else {
                    //formAnimation.restart()
                    console.log(response.statusText)
                }
            } catch (err) {
                //formAnimation.restart()
                console.error(err)
            }
        })


const formCloseButton = document.querySelector("#contact-form-close")
//const noThanksButton = document.querySelector("#noThanksButton")
const contactLayout = document.querySelector(".contacts-popup")
const contactForm = document.querySelector("#contact-form")
const briefButton = document.querySelector("#brief-button")
const contactSubmitButton = document.querySelector("#contact-submit-button")

let openContactForm = gsap.timeline().pause()

openContactForm.set(contactLayout, {
    yPercent: 100
})

openContactForm.to(contactForm, {
                     autoAlpha: 1,
                     ease: "power2.inOut"
                 })
                 .to(contactLayout, {
                    yPercent: 0,
                        autoAlpha: 1,
                        duration: 1,
                        ease: "power2.inOut"
                 }, "<")


contactSubmitButton.addEventListener("click", (e) => {
    formAnimation.restart()
}, true)


briefButton.addEventListener("click", (e) => {
    openContactForm.play()
    formAnimation.time(0).kill()
    console.log("MODAL OPEN")
}, true)

formCloseButton.addEventListener("click", (e) => {
    openContactForm.reverse()
    console.log("MODAL CLOSE")
}, true)


/*noThanksButton.addEventListener("click", (e) => {
    openContactForm.reverse()
    console.log("noThanks")
}, true)*/



//VARIABLES
var preloaderIsDone = false;
var isHaloHovered = false;
var isMenuOpen = false;

//HALO 3D
var gltfThreeLoader = new THREE.GLTFLoader();
var haloScene = new THREE.Scene();
var haloRenderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
});
var haloCamera = new THREE.PerspectiveCamera(10, 1, 1, 1000);
var haloBase = new THREE.Object3D();
var haloClock = new THREE.Clock();
var haloCanvas = haloRenderer.domElement;
var haloModel, haloMixer;
var haloAnimation = gsap.timeline().pause();
//WELCOME
var welcome = gsap.timeline({ defaults: { duration: 0.4, ease: "expo.out" }}).pause();
//MENU
var menuAnimation;
if (DESKTOP_BREAKPOINT.matches) {
    menuAnimation = gsap.timeline({
        defaults: { duration: 0.5, ease: "power3.inOut" },
        onReverseComplete: () => {
            
            isMenuOpen = false;
        }
    }).pause();
} else {
    menuAnimation = gsap.timeline({
        defaults: { duration: 0.5, ease: "power3.out" },
        onStart: () => { MOBILE_MENU_BUTTON.children[0].innerHTML = MENU_TRANSLATION.closeMobile; }
    }).pause();
}


//SETS
gsap.set(DESKTOP_MENU, { autoAlpha: 0 });
gsap.set(DESKTOP_MENU_BACKDROP, { autoAlpha: 0 });
gsap.set(OGL_CANVAS, { autoAlpha: 0 });
gsap.set(DESKTOP_MENU_BACKGROUND, {
    width: DESKTOP_MENU_BUTTON.offsetWidth + 16,
    height: DESKTOP_MENU_BUTTON.offsetHeight * 2,
});
gsap.set(DESKTOP_MENU_DIVIDER, { autoAlpha: 0 });
gsap.set(MOBILE_MENU, { xPercent: 100 })
gsap.set(MOBILE_MENU_LINKS, { yPercent: 50, autoAlpha: 0 })
gsap.set(MOBILE_MENU_BUTTONS, { autoAlpha: 0 });
//WELCOME
gsap.set(".letter-container", { yPercent: 200 });
gsap.set(".welcome", { autoAlpha: 0, y: -20 });
gsap.set("nav", { yPercent: -200 });
//PRESENTATION
gsap.set(".slide", { transformStyle: "preserve-3d", transformPerspective: 800,});
gsap.set(".middle", {
    transformOrigin: "center top",
    y: window.innerHeight,
    rotationX: 40,
    scale: 1.1,
});
gsap.set(".team-background", { scale: 1.15 });




//LENIS ACTIVATION
const lenis = new Lenis({ touchMultiplier: 0.2});
lenis.on('scroll', (e) => {  });
gsap.ticker.add((time)=>{ lenis.raf(time * 1000) });
gsap.ticker.lagSmoothing(0);


//WECLOME ANIMATION
welcome.to(".letter-container", { yPercent: 0, stagger: 0.1});
welcome.to(".hero-mask-part", { scaleY: 0, ease: "power3.out", duration: 1}, "<");
welcome.to(".welcome", {
    autoAlpha: 1,
    y: 0,
    stagger: 0.1,
    duration: 0.8,
}, "<");
welcome.to("nav", { yPercent: 0}, "<");

function welcomeLoop() {
    if (preloaderIsDone) { welcome.play() } 
    else { setTimeout(welcomeLoop, 200); }   
}
setTimeout(welcomeLoop, 200);


//LOADING HALO 3D MODEL
gltfThreeLoader.load(HALO_MODEL_PATH, function (gltf) {
    haloModel = gltf.scene;
    const scale = 0.4;
    haloModel.scale.set(scale, scale, scale);
    haloBase.add(haloModel);
    haloMixer = new THREE.AnimationMixer(haloModel);
    const clips = gltf.animations;
    const clip = THREE.AnimationClip.findByName(clips, 'axisAction');
    const action = haloMixer.clipAction(clip);
    action.play();
});

//THREE JS HALO 3D SCENE INITIATION
haloRenderer.outputEncoding = THREE.sRGBEncoding;
haloRenderer.setPixelRatio(2);
haloCamera.position.set(0, 0, 4.5);
haloBase.rotation.set(0.3, 0, 0);
THREEJS_HALO_WRAPPER.appendChild(haloCanvas);
haloScene.add(haloBase);


//HALO 3D SET ANIMATION LOOP
haloRenderer.setAnimationLoop(() => {
    let delta = haloClock.getDelta();
    if (resizeThreeCanvas(haloRenderer)) {
        haloCamera.aspect = haloCanvas.clientWidth / haloCanvas.clientHeight;
        haloCamera.updateProjectionMatrix();
    }
    if (haloMixer) {
        haloMixer.update(delta);
    }
    haloRenderer.render(haloScene, haloCamera); 
});

//HALO HOVER ANIMATION
haloAnimation.fromTo(haloBase.rotation, {
    x: 0.3,
}, {
    x: -0.3,
    duration: 0.7,
    ease: "back.out(2)"
});

haloAnimation.to(TAP_HALO_TEXT_CLASS, {
    autoAlpha: 1,
    ease: "power2.out"
}, "<");

//PLAY RADIANCE SOUND CLICKING ON HALO
THREEJS_HALO_WRAPPER.addEventListener("click", (event) => {
    AUDIO_ELEMENT.muted = false;
    AUDIO_ELEMENT.play();
    audioVolumeIn(AUDIO_ELEMENT);
});

//PLAY HALO ANIMATION ON HOVER
haloCanvas.addEventListener("mouseenter", (event) => {
    isHaloHovered = true;
    haloAnimation.play();
});

//REVERSE HALO ANIMATION ON HOVER
haloCanvas.addEventListener("mouseleave", (event) => {
    isHaloHovered = false;
    haloAnimation.reverse();
});

//CONTROL VOLUME FUNCTION
function audioVolumeIn(audioFile) {
    if (audioFile.volume) {
        var InT = 0;
        var setVolume = 1; // Target volume level for new song
        var speed = 0.1; // Rate of increase
        audioFile.volume = InT;
        var eAudio = setInterval(function () {
            InT += speed;
            audioFile.volume = InT.toFixed(1);
            if (InT.toFixed(1) >= setVolume) { clearInterval(eAudio); }
        }, 50);
    }
}

//RESIZE CANVAS FOR THREE JS
function resizeThreeCanvas(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
        renderer.setSize(width, height, false); 
    }
    return needResize;
}

//ACTIVATE DESKTOP OR MOBILE MENU
if (DESKTOP_BREAKPOINT.matches) {
    //CREATE MENU TIMELINE WHEN LOADED
    menuAnimation.fromTo(DESKTOP_MENU_BACKGROUND, {
                    autoAlpha: 0,
                    x: 32
                }, {
                    autoAlpha: 1,
                    x: 0
                })
                .to(DESKTOP_MENU, { autoAlpha: 1 })
                .to(DESKTOP_MENU_BACKDROP, { autoAlpha: 1 }, "<")
                .to(DESKTOP_MENU_BACKGROUND, {
                    width: DESKTOP_MENU_LAYOUT.offsetWidth - 12,
                    height: DESKTOP_MENU_LAYOUT.offsetHeight - 12,
                }, "<")
                .from(DESKTOP_MENU_LINKS, { autoAlpha: 0, yPercent: -20, stagger: 0.05 }, "<+=0.2")
                .to(DESKTOP_MENU_DIVIDER, { autoAlpha: 1 }, "<+=0.2")
                .from(DESKTOP_MENU_ANIM_LINKS, { autoAlpha: 0, yPercent: -20, stagger: 0.05 }, "<");

    DESKTOP_MENU_LINKS.forEach((element) => {
        element.addEventListener("click", (event) => { menuAnimation.reverse();}, true);
    });

    DESKTOP_MENU_BUTTON.addEventListener("click", (event) => {
        if (isMenuOpen == true) {
            menuAnimation.reverse();
            DESKTOP_MENU_BUTTON_TEXT.innerHTML = MENU_TRANSLATION.open;
        } else if (isMenuOpen == false) {
            DESKTOP_MENU_BUTTON_TEXT.innerHTML = MENU_TRANSLATION.close;
            menuAnimation.seek(0.5).play();
            isMenuOpen = true;
        }
    });

    DESKTOP_MENU.addEventListener("click", (event) => {
        if (isMenuOpen) {
            menuAnimation.reverse();
            DESKTOP_MENU_BUTTON_TEXT.innerHTML = MENU_TRANSLATION.open;
        }
    });

    DESKTOP_MENU_BUTTON.addEventListener("mouseenter", (event) => {
        if (isMenuOpen == false) {
            gsap.to(menuAnimation, { time: 0.5 });
            menuAnimation.pause()
        }
    });

    DESKTOP_MENU_BUTTON.addEventListener("mouseleave", (event) => {
        if (isMenuOpen == false) {
            gsap.to(menuAnimation, { time: 0});
            menuAnimation.pause()
        }
    });

    //RESIZE MENU BACKGROUND
    window.addEventListener("resize", (event) => {

        gsap.set(DESKTOP_MENU_BACKGROUND, {
            width: DESKTOP_MENU_LAYOUT.offsetWidth - 12,
            height: DESKTOP_MENU_LAYOUT.offsetHeight - 12,
        });

    });

} else {
    MOBILE_MENU_BUTTON.children[0].innerHTML = MENU_TRANSLATION.openMobile;
    MOBILE_MENU_BRIEF_BUTTON.children[0].innerHTML = MENU_TRANSLATION.briefMobile;

        menuAnimation
            .fromTo(MOBILE_MENU, { xPercent: 100 }, { xPercent: 0 })
            .fromTo(MOBILE_MENU_LINKS, { yPercent: 50, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, stagger: 0.1 })
            .fromTo(MOBILE_MENU_BUTTONS, { autoAlpha: 0 }, { autoAlpha: 1 }, "<");

        MOBILE_MENU_BUTTON.addEventListener("click", (event) => {
            if (isMenuOpen == true) {
                menuAnimation.reverse();
                MOBILE_MENU_BUTTON.children[0].innerHTML = MENU_TRANSLATION.openMobile;
                isMenuOpen = false;
            } else if(isMenuOpen == false) {
                menuAnimation.play();
                isMenuOpen = true;
            }
        });

        MOBILE_MENU_LINKS.forEach((link) => {
            link.addEventListener("click", (event) => {
                if (isMenuOpen == true) {
                    menuAnimation.reverse();
                    MOBILE_MENU_BUTTON.children[0].innerHTML = MENU_TRANSLATION.openMobile;
                    isMenuOpen = false;
                }
            });
        });

}

//LOAD VIDEOS AND ADD HOVER TO BACKGROUND VIDEO PORTFOLIO
if (DESKTOP_BREAKPOINT.matches) {
    const heading = document.querySelector(".hero-heading");
    const bVideoWrapper = document.querySelector(".background-video-wrapper");
    const bVideoElement = Array.from(bVideoWrapper.querySelectorAll("video"));
    const hoverables = heading.querySelectorAll(".heading-link");
    const notHoverables = heading.querySelectorAll(".not-hoverable");
    const bottomLinks = document.querySelector(".bottom-links-wrapper");
    const content = Array.from(hoverables);
    let isHovering = false;
    let isAnimating = false;
    //let content = Array.from(heading.querySelectorAll("span"));

    let colors = [
        "#0D99FE",
        "#FFD73B",
        "#F15F1B"
    ];

    bVideoElement[0].load();
    bVideoElement[1].load();
    bVideoElement[2].load();
    
    hoverables.forEach((span, id) => {
 
        let current = content.indexOf(hoverables[id]);
        let list = content.filter((element, index) => index != current);
        let videoList = bVideoElement.filter((element, index) => index != id);

         //Moouse Hovering
        span.addEventListener("mouseenter", () => {
            setTimeout(() => {
                if (isHovering && !isAnimating) {

                    let enter = gsap.timeline({
                        defaults: { ease:"circ.inOut", duration: 0.5 },
                        onStart: () => {
                            bVideoElement[id].play();
                            isAnimating = true;
                        },
                        onComplete: () => {
                            isAnimating = false
                        }
                    });
    
                    //Hide Other Videos
                    enter.set(videoList, {
                        autoAlpha: 0,
                    });
    
                    //Show Current Video
                    enter.to(bVideoElement[id], {
                        autoAlpha: 1,
                        scale: 1,
                    }, "<");
    
                    //Hide Other Links
                    enter.to(notHoverables, {
                        autoAlpha: 0,
                    }, "<");

                    enter.to(".letter-container", {
                        autoAlpha: 0,
                    }, "<");

                    enter.to(bottomLinks, {
                        autoAlpha: 0,
                    }, "<");
    
                    enter.to(list, {
                        autoAlpha: 0,
                    }, "<");
    
                    //Hover on Link
                    enter.to(span, {
                    "--animated-link-width": 0,
                    "--animated-link-opacity": 0,
                        paddingLeft: 12,
                        paddingRight: 12,
                        paddingTop: 6,
                        paddingBottom: 6,
                        marginLeft: -12,
                        marginRight: -12,
                        marginTop: -6,
                        marginBottom: -6,
                        backgroundColor: colors[id]
                    }, "<");
                }

            }, 300);

    });

        //console.log(!isHovering && !isAnimating);
        //Moouse Leaves Link
        span.addEventListener("mouseleave", () => {
            
            
            let delayId = setInterval(() => {
                //console.log(!isHovering && !isAnimating);
                if (!isHovering && !isAnimating) {
                    let exit = gsap.timeline({
                        defaults: { ease:"circ.inOut", duration: 0.5 },
                        onStart: () => {
                            bVideoElement[id].pause();
                        }
                    });

                    //Show Current Video
                    exit.to(bVideoElement[id], {
                        autoAlpha: 0,
                        scale: 1.15,
                    }, "<");

                    //Hide Other Links
                    exit.to(notHoverables, {
                        autoAlpha: 1,
                    }, "<");

                    exit.to(".letter-container", {
                        autoAlpha: 1,
                    }, "<");

                    exit.to(bottomLinks, {
                        autoAlpha: 1,
                    }, "<");

                    exit.to(list, {
                        autoAlpha: 1,
                    }, "<");

                    //Hover on Link
                    exit.to(span, {
                        "--animated-link-width": 100,
                        "--animated-link-opacity": 1,
                        paddingLeft: 0,
                        paddingRight: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: 0,
                        marginBottom: 0,
                        backgroundColor: "transparent"
                    }, "<");
                    clearInterval(delayId);
                }
            }, 200);
                

        });

        span.addEventListener("mousemove", () => {
            isHovering = true;
        });

        span.addEventListener("mouseout", () =>  {
            isHovering = false;
        });

    });

}



//DESCRIPTOR AND TIME FOR DESKTOP
if (DESKTOP_BREAKPOINT.matches) {
//CHANGE DESCRIPTOR WHEN FULLY LOADED
window.addEventListener('load', (event) => {
    let counter = -1;
    gsap.to(DESCRIPTOR_CONTAINER.children[0], {
        text: () => {
            counter = counter  + 1;
            if (counter > 4) { counter = 0 }
            return DESCRIPTOR_NAMES[counter]
        },
        duration: 0.7,
        repeatDelay: 1,
        repeat:-1,
        repeatRefresh:true
    });
});

//SHOW ACTUAL TIME
window.addEventListener('load', (event) => {

    let locale = 'en-US'
    let utcTime = 'UTC+2'

    if (document.documentElement.lang === "ru") {
        locale = 'ru-RU'
        utcTime = 'UTC+4'
    } else if (document.documentElement.lang === "de") {
        locale = 'de-DE'
        utcTime = 'UTC+2'
    }


    let DateTime = luxon.DateTime;
    let localtime = document.getElementById("local-time");

    let f = { weekday: "short", hour: "numeric", minute: "2-digit", second: "2-digit"};

    localtime.innerHTML = DateTime.now().setZone(utcTime).setLocale(locale).toLocaleString(f);

    setInterval(changeTime, 1000);

    function changeTime() {
        localtime.innerHTML = DateTime.now().setZone(utcTime).setLocale(locale).toLocaleString(f);
    }
});
}

//ANIMATE LETTERS ON DESKTOP OR MOBILE
if (DESKTOP_BREAKPOINT.matches) {

    const letters = Array.from(document.querySelectorAll(".letter-container"));
    const spriteWrapper = document.querySelector(".sprite-wrapper");
    const spriteContainer = spriteWrapper.querySelectorAll(".sprite-container");

    spriteContainer[1].children[0].src = "/static/pic/sprites/A-1.avif";
    spriteContainer[2].children[0].src = "/static/pic/sprites/D.avif";
    spriteContainer[3].children[0].src = "/static/pic/sprites/I.avif";
    spriteContainer[4].children[0].src = "/static/pic/sprites/AA.avif";
    spriteContainer[5].children[0].src = "/static/pic/sprites/N.avif";
    spriteContainer[6].children[0].src = "/static/pic/sprites/C.avif";
    spriteContainer[7].children[0].src = "/static/pic/sprites/E.avif";

    //console.log(spriteContainer[1].offsetWidth/2);

    gsap.set(spriteContainer, {
        autoAlpha: 0,
        scale: 1.3
    });

    letters.forEach((letter, id) => {

        //console.log(spriteContainer[0].children[0].scrollWidth+spriteContainer[0].children[0].scrollWidth/18);

        let dimensions = letter.getBoundingClientRect();
        let sprite = spriteContainer[id].querySelector(".sprite");
        
        if (id == 3) {
            gsap.set(spriteContainer[id], {
                x: dimensions.left-spriteContainer[id].offsetWidth/2,
            });
        } else {
            gsap.set(spriteContainer[id], {
                x: dimensions.left - 24,
            });
        }
        
        
        let timeline = gsap.timeline({
            defaults: {
                duration: 0.7
            }
        }).pause();


        timeline.fromTo(letter, {
            opacity: 1,
        }, {
            opacity: 0,
            duration: 0.3
        });

        timeline.fromTo(spriteContainer[id], {
            autoAlpha: 0,
        }, {
            autoAlpha: 1,
            duration: 0.3
        }, "<");

        timeline.fromTo(sprite, {
            x: 0
        },{
            x: -spriteContainer[0].children[0].scrollWidth+spriteContainer[0].children[0].scrollWidth/18,
            ease: "steps(17)",
        }, "<");

        //Mouse Enter
        letter.addEventListener("mouseenter", (event) => {
            timeline.restart();
        });
        
        //Mouse Leave
        letter.addEventListener("mouseleave", (event) => {
            setTimeout(() => {
                timeline.reverse();
            }, 200);
        });
        
    });

} else {
    let animationPath = "/static/hero-physics.json";    
    let animationWrapper = document.querySelector(".mobile-letters-lottie-container"),
        playhead = { frame: 0 },
        animation = lottie.loadAnimation({
            container: animationWrapper,
            renderer: "svg",
            loop: false,
            autoplay: false,
            path: animationPath,
            rendererSettings: {
                preserveAspectRatio: "xMaxYMax meet",
            },
        });
    
    animation.addEventListener("DOMLoaded", function () {
        gsap.to(playhead, {
            frame: animation.totalFrames - 1,
            ease: "none",
            duration: 6,
            onStart: () => { console.log(animation.totalFrames); },
            onUpdate: () => animation.goToAndStop(playhead.frame, true),
        });
    });
}


//HORIZONTAL LOOP
function runHorizontalLoop(items, config) {
  items = gsap.utils.toArray(items);
  config = config || {};
  let tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: "none" },
      onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
    }),
    length = items.length,
    startX = items[0].offsetLeft,
    times = [],
    widths = [],
    xPercents = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
    totalWidth,
    curX,
    distanceToStart,
    distanceToLoop,
    item,
    i;
  gsap.set(items, {
    // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
    xPercent: (i, el) => {
      let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
          gsap.getProperty(el, "xPercent")
      );
      return xPercents[i];
    },
  });
  gsap.set(items, { x: 0 });
  totalWidth =
    items[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    items[length - 1].offsetWidth *
      gsap.getProperty(items[length - 1], "scaleX") +
    (parseFloat(config.paddingRight) || 0);
  for (i = 0; i < length; i++) {
    item = items[i];
    curX = (xPercents[i] / 100) * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop =
      distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0
    )
      .fromTo(
        item,
        {
          xPercent: snap(
            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
          ),
        },
        {
          xPercent: xPercents[i],
          duration:
            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond
      )
      .add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }
  function toIndex(index, vars) {
    vars = vars || {};
    Math.abs(index - curIndex) > length / 2 &&
      (index += index > curIndex ? -length : length); // always go in the shortest direction
    let newIndex = gsap.utils.wrap(0, length, index),
      time = times[newIndex];
    if (time > tl.time() !== index > curIndex) {
      // if we're wrapping the timeline's playhead, make the proper adjustments
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }
  tl.next = (vars) => toIndex(curIndex + 1, vars);
  tl.previous = (vars) => toIndex(curIndex - 1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index, vars) => toIndex(index, vars);
  tl.times = times;
  tl.progress(1, true).progress(0, true); // pre-render for performance
  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }
  return tl;
}


//PRESENTATION STACK
window.addEventListener('DOMContentLoaded', (event) => {
    const stagger = 0.5;
    const scaleMax = gsap.utils.mapRange(0, PRESENTATION_CARDS.length - 1, 0.75, 1);

    let presentationTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".presentation-wrapper",
          pin: ".presentation-section",
          start: "top top",
          end: "bottom",
          scrub: 1,
          onEnter: () => {

          }
        }
      });

      showLottiePhysics();
      animateHorizontalCards();
      
      presentationTimeline.from(".team-background", {
        scale: 0.075,
        ease: "power1.in",
      });
        
      presentationTimeline.to(".team-background", {
        scale: 1,
        ease: "power1.in",
      });
    
      presentationTimeline.to(".presentation-wrapper", {
        backgroundColor: "#FFD73B",
      }, "<");
      
      presentationTimeline.set(".first", {
        transformOrigin: "center top",
      });
      
      presentationTimeline.to(".first", {
          rotationX: -40,
          y: -6,
          ease: "power1.in",
          scale: 0.7
        });
      
        presentationTimeline.to(".middle", {
        scale: 1,
        ease: "power1.out",
        y: (index) => {
            return 2 * index;
          },
        rotationX: 0,
        stagger: {
          each: stagger
        }
      }, "-=0.4");
    
      presentationTimeline.to(".middle", {
          rotationX: -40,
          y: (index) => {
            return 12 * index;
          },
          ease: "power1.in",
          scale: (index) => {
            return scaleMax(index);
          },
          stagger: {
            each: stagger
          }
        }, "<+=0.5");
    
        presentationTimeline.to(".presentation-wrapper", {
            backgroundColor: "#F3F3EF"
        }, "<+=1.5");
});


//Horizontal Animation for Cards
function animateHorizontalCards() {
    
    let cardWrapper = document.querySelector(".estimate-cards-wrapper")
    let cardWrapperParent = document.querySelector(".approach-layout")

    console.log(cardWrapper.offsetWidth)
    console.log(cardWrapperParent.offsetWidth)

    let cardsOffset = cardWrapper.offsetWidth / 2

    gsap.to(cardWrapper, {
        x: -cardsOffset,
        repeat: -1,
        duration: 20,
        ease: "none"
    })


}


//LOTTIE PHYSICS FOR PRESENTATION
function showLottiePhysics() {
    
    let animationPath = "/static/lottie-physics.json";

    console.log(DESKTOP_BREAKPOINT.matches)

    if (DESKTOP_BREAKPOINT.matches == false) {
        animationPath = "/static/lottie-physics-mobile.json";
    }
  
  let animationWrapper = document.querySelector(".lottie-physics-wrapper"),
      playhead = { frame: 0 },
      animation = lottie.loadAnimation({
          container: animationWrapper,
          renderer: "svg",
          loop: false,
          autoplay: false,
          path: animationPath,
          rendererSettings: {
              preserveAspectRatio: "xMidYMin slice",
          },
      });

  animation.addEventListener("DOMLoaded", function () {
    ScrollTrigger.refresh()
      gsap.to(playhead, {
          scrollTrigger: {
              trigger: "#greetings-slide",
              start: "+=2000",
              end: "+=5000",
              toggleActions: "play reset play reset",
              //markers: true
          },
          frame: animation.totalFrames - 1,
          ease: "none",
          duration: 6,
          onStart: () => { console.log(animation.totalFrames);},
          onUpdate: () => animation.goToAndStop(playhead.frame, true),
      });
  });

}

//ANIMATE LAST CARD
window.addEventListener('load', (event) => {
    animateLastCard();
});

function animateLastCard() {
    gsap.to(".ending-background", {
        scrollTrigger: {
            trigger: "#portfolio-section",
            start: "top 200%",
            end: "bottom bottom",
            //markers: true,
            scrub: 0.4
        },
        scale: 3.5
    });
  
  
    gsap.to("#arrow-svg-arrow", {
        y: 6,
        yoyo: true,
        duration: 0.75,
        ease: "power2.inOut",
        repeat: -1
    });
  
    document.querySelector(".arrow-svg").addEventListener("mouseenter", (event) => {
  
        //console.log("hovered");
  
        gsap.to("#arrow-svg-background", {
            duration: 0.3,
            ease: "power2.inOut",
            fill: "#0D99FE  ",
        });
  
        gsap.to("#arrow-svg-line", {
            duration: 0.3,
            ease: "power2.inOut",
            scale: 0
        });
  
        gsap.to(".arrow-svg", {
            duration: 0.3,
            ease: "power2.inOut",
            scale: 1.1
        });
  
    }, true);
  
  
    document.querySelector(".arrow-svg").addEventListener("mouseleave", (event) => {
  
        //console.log("hovered");
  
        gsap.to("#arrow-svg-background", {
            duration: 0.3,
            ease: "power2.inOut",
            fill: "#000000",
        });
  
        gsap.to("#arrow-svg-line", {
            duration: 0.3,
            ease: "power2.inOut",
            scale: 1
        });
  
        gsap.to(".arrow-svg", {
            duration: 0.3,
            ease: "power2.inOut",
            scale: 1
        });
  
    }, true);
  
  
  }


//PORTFOLIO SECTION
window.addEventListener('load', (event) => {
    let scrollObserver = null;
    let cardWrapper = document.querySelector("#portfolio-section");
    let cardCursor = document.querySelector(".portfolio-cursor");
    let cards = gsap.utils.toArray(".tilt-card-container");
    let welcomeWall = cardWrapper.querySelector(".welcome-wall");
    let projectHeading = [
        document.querySelector(".project-name-a"),
        document.querySelector(".project-name-b")
    ];
    let projectTag = [
        document.querySelector(".project-tag-a"),
        document.querySelector(".project-tag-b")
    ];
    let workYear = document.querySelector(".project-year");
    let portfolioCounter = document.querySelector(".portfolio-counter");
    const scaleMin = gsap.utils.mapRange(0, cards.length - 1, 1, 0.75);
    const alphaMap = gsap.utils.mapRange(0, cards.length - 1, 1, 0.25);
    let cpush = 20;
    let portfolioFirstTime = false;


    //Hide Fake Cursor
    gsap.set(cardCursor, {autoAlpha: 0,});


    //First State Set for Portfolio
    gsap.set(cards, {
        transformOrigin: "center center",
        zIndex: (index) => { return -index },
        y: (index) => {return index*cpush },
        scale: (index) => { return scaleMin(index) },
        autoAlpha: (index) => {
                if (index < 3) { return alphaMap(index) } else { return 0 }   
        }
    });


    let portfolioWelcome = gsap.timeline({
        onComplete: () => {
            portfolioFirstTime = true;
            //console.log("Welcome");
        }
    }).pause();

    portfolioWelcome.from(welcomeWall, {
        yPercent: 100,
        duration: 0.3,
        delay: 0.5,
        ease: "power2.out"
    });

    portfolioWelcome.from(cards, {
        yPercent: 10,
        autoAlpha: 0,
        ease: "power2.out",
        stagger: {
            from: "start",
            each: 0.3
        },
        duration: 0.5
    });

    portfolioWelcome.from([projectTag, projectHeading, workYear], {
        yPercent: 100,
        duration: 0.3,
        stagger: 0.1
    }, "<");

    portfolioWelcome.set(".portfolio-welcome", {
        autoAlpha: 0
    });

    function portfolioSection() {   

        let currentIndex = 0;
        let scrollTimeout = gsap.delayedCall(1, () => allowScroll = true).pause(); // controls how long we should wait after an Observer-based animation is initiated before we allow another scroll-related action
        let allowScroll = true;


        //Create Scrolltrigger Observer
        scrollObserver = ScrollTrigger.observe({
            type: "wheel, touch",
            onUp: () => { 
                if (portfolioFirstTime) {
                    allowScroll && changeCards(currentIndex + 1, true)
                }

                if (currentIndex == (cards.length - 1)) {
                    gsap.to(cardWrapper, {
                        color: "#F3F3EF",
                        backgroundColor: "#060606",
                        duration: 0.5
                    });
                }

            },
            onDown: () => {
                if (portfolioFirstTime) {
                    allowScroll && changeCards(currentIndex - 1, false)
                }

                if (currentIndex > 2) {
                    gsap.to(cardWrapper, {
                        color: "#060606",
                        backgroundColor: "#F3F3EF",
                        duration: 0.5
                    });
                }
                

            },
            wheelSpeed: -1,
            tolerance: 1,
            preventDefault: true,
            onEnable: (self) => {
                //console.log("Observer Enabled");
                allowScroll = false;
                scrollTimeout.restart(true);
                // when enabling, we should save the scroll position and freeze it. This fixes momentum-scroll on Macs, for example.
                lenis.stop();
            },
            onDisable: (self) => { 
                //console.log("Observer Disabled");
                lenis.start() 
            } 
        });
        scrollObserver.disable();


        

        function changeCards(index, isScrollingDown) {

            if ((index === cards.length && isScrollingDown) || (index === -1 && !isScrollingDown)) {
                scrollObserver.disable(); // resume native scroll
                return;
            }
            allowScroll = false;
            scrollTimeout.restart(true);

            if (isScrollingDown) {
                nextCard(currentIndex);
                changeText(index, isScrollingDown);
            } else {
                prevCard(index);
                changeText(index, isScrollingDown);
            }
            //console.log(currentIndex + " : " + index );
            currentIndex = index;
        }


        // pin swipe section and initiate observer
        portfolioScrollTrigger = ScrollTrigger.create({
            trigger: ".portfolio-section",
            pin: true,
            start: "top top",
            end: "+=300", // just needs to be enough to not risk vibration where a user's fast-scroll shoots way past the end
            onEnter: (self) => {
                if (scrollObserver.isEnabled) { return } // in case the native scroll jumped past the end and then we force it back to where it should be.
                self.scroll(self.start + 1); // jump to just one pixel past the start of this section so we can hold there.
                scrollObserver.enable(); // STOP native scrolling
                
                if (portfolioFirstTime == false) {
                    portfolioWelcome.play();
                    addTiltEffect();
                    animateImagesInCards();
                }

            },
            onLeave: () => {
            },
            onEnterBack: (self) => {
                if (scrollObserver.isEnabled) { return } // in case the native scroll jumped backward past the start and then we force it back to where it should be.
                self.scroll(self.end - 1); // jump to one pixel before the end of this section so we can hold there.
                scrollObserver.enable(); // STOP native scrolling
            }
        });


    }

    //Function for changing text of the projects
    function changeText(cardIndex, isScrollingDown) {

        let projects = PROJECT_NAMES

        let tags = PROJECT_TAGS

        let years = PROJECT_YEARS


        let textChange = gsap.timeline({ defaults: { ease: "power1.inOut"}});

        textChange.to([projectTag, projectHeading, workYear], {
            yPercent: isScrollingDown ? -100 : 100,
            duration: 0.25,
            stagger: 0.1,
            onComplete: () => {
                let [a, b] = projects[cardIndex].split(" ");
                projectHeading[0].textContent = a;
                projectHeading[1].textContent = b;
                workYear.textContent =  years[cardIndex];
        
                [a, b] = tags[cardIndex].split(" ");
                projectTag[0].textContent = a;
                projectTag[1].textContent = b;
        
                portfolioCounter.textContent = "0"+(cardIndex+1)+" / 06";
            }
        });

        textChange.set([projectTag, projectHeading, workYear], {
            yPercent: isScrollingDown ? 100 : -100,
        });

        textChange.to([projectTag, projectHeading, workYear], {
            duration: 0.25,
            stagger: 0.1,
            yPercent: 0
        });


    }

    //Moving Card Stack Next
    function nextCard(index) {
        //console.log("next");
        //Move Cards Until the last is reached
        let tl = gsap.timeline({ defaults: { ease: "power2.inOut"}});

        if (index < (cards.length - 1)) {
            //Moving card to the previous cards place
            for (let i = index+1; i < cards.length; i++) {
                tl.to(cards[i], {
                    autoAlpha: gsap.getProperty(cards[i-1], "opacity"),
                    y: gsap.getProperty(cards[i-1], "y"),
                    scale: gsap.getProperty(cards[i-1], "scale"),
                    zIndex: gsap.getProperty(cards[i-1], "zIndex")
                }, "<");
            }

            //Move Active Card out of the way
            tl.to(cards[index], {
                yPercent: -300,
                zIndex: 99,
            }, "<");
        }
    }

    //Moving Card Stack Back
    function prevCard(cardIndex) {
        //console.log("prev");
        let tl = gsap.timeline({defaults: { ease: "power2.inOut"}});

        //Move Cards Until the last is reached
            //Move Prev Card To active
            tl.to(cards[cardIndex], {
                yPercent: 0,
            });

            tl.to(cards.slice(cardIndex), {
                zIndex: (index) => { return -index },
                y: (index) => {return index*cpush },
                scale: (index) => { return scaleMin(index) },
                autoAlpha: (index) => {
                    if (index < 3) { return alphaMap(index) } else { return 0 } },


            }, "<");
    }

    function addTiltEffect() {
        /* Store the element in el */
        
        let tilt = 40;

        cards.forEach((cardContainer) => {

        let card = cardContainer.children[0];
            
        gsap.set(card, {
            transformStyle: "preserve-3d",
            transformPerspective: 800,
        });

        /* Get the height and width of the element */
        const height = card.clientHeight
        const width = card.clientWidth

        /*
        * Add a listener for mousemove event
        * Which will trigger function 'handleMove'
        * On mousemove
        */
        card.addEventListener('mousemove', handleMove)

        function handleMove(e) {
            /*Get position of mouse cursor * With respect to the element */
            const xVal = e.layerX;
            const yVal = e.layerY;

            /*Also show cursor*/
            gsap.to(cardCursor, {
                x: e.clientX+32,
                y: e.clientY+32,
                autoAlpha: 1
            });
            
            /* Calculate rotation valuee along the Y-axis */
            const yRotation = tilt * ((xVal - width / 2) / width);
            
            /* Calculate the rotation along the X-axis */
            const xRotation = -tilt * ((yVal - height / 2) / height);

            /* Apply the calculated transformation */
            gsap.to(card, {
                rotationX: xRotation,
                rotationY: yRotation,
                //scale: 1.25,
                duration: 0.4
            });
            gsap.to(card, {
                scale: 1.25,
            });
        }

        /* Add listener for mouseout event, remove the rotation */
        card.addEventListener('mouseleave', function() {

            //console.log("LEFT CARD");
            /*Also hide cursor*/
            gsap.to(cardCursor, {
                autoAlpha: 0
            });

            gsap.to(card, {
                rotationX: 0,
                rotationY: 0,
                duration: 0.4,
                //scale: 1
            });

            gsap.to(card, {
                scale: 1,
            });
        });

        /* Add listener for mousedown event, to simulate click */
        card.addEventListener('mousedown', function() {
            gsap.to(card, {
                scale: 0.97,
                duration: 0.2,
                overwrite: true
            });
        });

        /* Add listener for mouseup, simulate release of mouse click */
        card.addEventListener('mouseup', function() {
            gsap.to(card, {
                duration: 0.2,
                scale: 1,
                overwrite: true
            });
        });
        });

    }

    function animateImagesInCards() {

        const portfolioImages = [
            "/static/pic/work/avif/bdp-",
            "/static/pic/work/avif/unnts-",
            "/static/pic/work/avif/plmc-",  
            "/static/pic/work/avif/urb-",
            "/static/pic/work/avif/indvd-",
            "/static/pic/work/avif/scrn-",
        ];


        //Timeline to change images inside
        cards.forEach((card, index) => {

            let tiltCard = card.querySelector(".tilt-card");

            function loadImages(imgArr){
                for(var i=1; i <= 5; i++) {
                    var img = new Image();
                        img.src = imgArr + '0' + i + '.avif';
                        //console.log(img.src);
                        if (i == 1) {img.style.opacity = 1;}
                        tiltCard.appendChild(img);
                }
            }

            loadImages(portfolioImages[index]);

            let images = Array.from(card.querySelectorAll("img"));
            let tl = gsap.timeline();

            tl.to(images, {
                autoAlpha: 1,
                repeat: -1,
                duration: 0,
                repeatDelay: 1,
                stagger: {
                    //from: "random",
                    amount: 3
                },
                yoyo: true
            });
            tl.pause();

            card.addEventListener('mouseenter', () => {
                tl.play();
            });

            card.addEventListener('mouseleave', () => {
                tl.pause();
            });


        });
    }


    portfolioSection();
});

//MENU ANCHORS
window.addEventListener('DOMContentLoaded', (event) => {
    let menu = document.querySelector("#menu-section");
    let windowSize = window.innerHeight;
    let anchors = [];

    if (DESKTOP_BREAKPOINT.matches) {
        anchors = [
            menu.querySelector("#anchor-main"),
            menu.querySelector("#anchor-meet"),
            menu.querySelector("#anchor-approach"),
            menu.querySelector("#anchor-works"),
            menu.querySelector("#anchor-contacts"),
        ];
    } else {
        anchors = [
            document.querySelector("#anchor-main-m"),
            document.querySelector("#anchor-meet-m"),
            document.querySelector("#anchor-approach-m"),
            document.querySelector("#anchor-works-m"),
            document.querySelector("#anchor-contacts-m"),
        ];
    }

    let targets = [
        document.querySelector("#hero-section"),
        document.querySelector("#portfolio-section"),
        document.querySelector("#footer"),
    ];

    anchors[0].addEventListener("click", (e) => {
        //lenis.scrollTo(targets[0]);
        gsap.to(window, {
            scrollTo: targets[0],
            duration: 1
        });
    }, true);

    anchors[1].addEventListener("click", (e) => {
        //lenis.scrollTo(windowSize+windowSize/2);
        gsap.to(window, {
            scrollTo: windowSize+windowSize/2,
            duration: 1
        });
    }, true);

    anchors[2].addEventListener("click", (e) => {
        //lenis.scrollTo(windowSize*4);
        gsap.to(window, {
            scrollTo: windowSize*4,
            duration: 1
        });
    }, true);

    anchors[3].addEventListener("click", (e) => {
        //lenis.scrollTo(targets[1]);
        gsap.to(window, {
            scrollTo: targets[1],
            duration: 1
        });
        
    }, true);

    anchors[4].addEventListener("click", (e) => {
        gsap.to(window, {
            scrollTo: targets[2],
            duration: 1
        });
    }, true);

    window.addEventListener("resize", (event) => {
        windowSize = window.innerHeight;
    });

});

//ANIMATE LINKS
window.addEventListener('DOMContentLoaded', (event) => {
    //Animate Links when loaded
    animateLinks(".animated-link");
    animateLinks(".animated-menu-link");
});

function animateLinks(linkClass) {

    let links = document.querySelectorAll(linkClass);

    links.forEach((link) => {

        const tempLink = link.children[0];
        tempLink.style.textShadow = "0 1em"; //Add Shadow to the text

        link.addEventListener("mouseenter", () => {
            gsap.to(tempLink, {
                yPercent: -100,
                ease: "circ.inOut",
                overwrite: true
            });

        });

        link.addEventListener("mouseleave", () => {
            gsap.set(tempLink, {
                yPercent: 0,
                overwrite: true
            });
        });

    });
}


//Run Only When Whole Page is Completed
//Footer WebGL scene and email animation

window.addEventListener('load', (event) => {

    //console.log("Footer readystate: " + document.readyState);

        //OGL Variables
        var canvas, gl, vp_size, progDraw, glState, bufObj = {}, mousepos = [0, 0];

        //Footer Timeline
        let footertl = gsap.timeline({
            scrollTrigger: {
                trigger: "#footer",
                start: "top bottom",
                end: "bottom bottom",
                scrub: 0.5,
                onEnter: () => {
                    //console.log("ENTERED FOOTER")
                    initScene();
                    animateEmail();
                },
            },
        });

        footertl.to("#ogl-canvas", {
            duration: 1,
            autoAlpha: 1,
            ease: "power3.out",
            scale: 1.2,
            y: 0
        });


        function animateEmail() {

            const footerEmail = document.querySelector(".footer-heading");

            const TYPE_SPLIT = new SplitType(footerEmail, {
                types: "chars",
                tagName: "span"
            });

            let allChars = footerEmail.querySelectorAll(".char");

            footerEmail.addEventListener("mouseenter", (event) => {
                gsap.to(allChars, {
                    //duration: 0.4,
                    ease: "power2.inOut",
                    color: "#FFD73B",
                    stagger: {
                        from: "center",
                        amount: 0.6
                    }
                });
            });


            footerEmail.addEventListener("mouseleave", (event) => {
                gsap.to(allChars, {
                    //duration: 0.4,
                    ease: "power2.inOut",
                    color: "#B3B3B5",
                    stagger: {
                        from: "center",
                        amount: 0.6
                    }
                });
            });

        }

        //OGL Functions

        function initScene() {
            canvas = document.getElementById("ogl-canvas");
            gl = canvas.getContext("webgl");
            if (!gl) return;
            canvas.addEventListener("mousemove", (e) => {
                mousepos = [e.clientX, e.clientY];
            });
            progDraw = gl.createProgram();
            for (let i = 0; i < 2; ++i) {
                let source = document.getElementById(
                    i == 0 ? "draw-shader-vs" : "draw-shader-fs"
                ).text;
                let shaderObj = gl.createShader(
                    i == 0 ? gl.VERTEX_SHADER : gl.FRAGMENT_SHADER
                );
                gl.shaderSource(shaderObj, source);
                gl.compileShader(shaderObj);
                glState = gl.getShaderParameter(shaderObj, gl.COMPILE_STATUS);
                if (!glState) alert(gl.getShaderInfoLog(shaderObj));
                gl.attachShader(progDraw, shaderObj);
                gl.linkProgram(progDraw);
            }
            glState = gl.getProgramParameter(progDraw, gl.LINK_STATUS);
            if (!glState) alert(gl.getProgramIn / foLog(progDraw));
            progDraw.inPos = gl.getAttribLocation(progDraw, "inPos");
            progDraw.iTime = gl.getUniformLocation(progDraw, "iTime");
            progDraw.iMouse = gl.getUniformLocation(progDraw, "iMouse");
            progDraw.iResolution = gl.getUniformLocation(progDraw, "iResolution");
            gl.useProgram(progDraw);
            var pos = [-1, -1, 1, -1, 1, 1, -1, 1];
            var inx = [0, 1, 2, 0, 2, 3];
            bufObj.pos = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, bufObj.pos);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(pos), gl.STATIC_DRAW);
            bufObj.inx = gl.createBuffer();
            bufObj.inx.len = inx.length;
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, bufObj.inx);
            gl.bufferData(
                gl.ELEMENT_ARRAY_BUFFER,
                new Uint16Array(inx),
                gl.STATIC_DRAW
            );
            gl.enableVertexAttribArray(progDraw.inPos);
            gl.vertexAttribPointer(progDraw.inPos, 2, gl.FLOAT, false, 0, 0);
            gl.enable(gl.DEPTH_TEST);
            gl.clearColor(0.0, 0.0, 0.0, 1.0);
            window.onresize = resize;
            resize();
            requestAnimationFrame(render);
        }

        function resize() {
            const canvasWrapper = document.querySelector(".canvas-wrapper");
            //vp_size = [gl.drawingBufferWidth, gl.drawingBufferHeight];
            vp_size = [canvasWrapper.offsetWidth, canvasWrapper.offsetHeight];
            //vp_size = [256, 256]
            canvas.width = vp_size[0];
            canvas.height = vp_size[1];
        }

        function render(deltaMS) {
            gl.viewport(0, 0, canvas.width, canvas.height);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
            gl.uniform1f(progDraw.iTime, deltaMS / 1000.0);
            gl.uniform2f(progDraw.iResolution, canvas.width, canvas.height);
            gl.uniform2f(progDraw.iMouse, mousepos[0], mousepos[1]);
            gl.drawElements(gl.TRIANGLES, bufObj.inx.len, gl.UNSIGNED_SHORT, 0);
            requestAnimationFrame(render);
        }

});