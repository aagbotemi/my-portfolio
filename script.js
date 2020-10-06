// HAMBURGER MENU
const menuIcon = document.querySelector('.menu-icon');

function toggleMenuIcon() {
    menuIcon.classList.toggle('active');
}
menuIcon.addEventListener('click', toggleMenuIcon);

// COLLAPSE NAVBAR AFTER CLICKING NAV ITEM (...jQuery)
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

//TYPEWRITER WORD
const typeWord = document.getElementById('describe');

const typewriter = new Typewriter (typeWord, {
    loop: true
});

typewriter.typeString('I am a frontend Software Developer.')
    .pauseFor(1500)
    .deleteAll()
    .typeString('I turn designs into beautiful & efficient code')
    .pauseFor(1500)
    // .deleteChars(7)
    // .typeString('<strong>I turn designs into beautiful code</strong>')
    //.pauseFor(1500)
    .deleteAll()
    .typeString('I am a content creator')
    .pauseFor(1500)
    .start();

//GSAP

gsap.to(".navbar-brand", {duration: 2, rotationY: 360}); // class of navbar-brand to rotate in Y axis

gsap.to(".menu-icon", {duration: 1, rotation: 360, scale: 1}); //menu icon  to rotate

gsap.from(".banner .name", {duration: 2, y: -300, opacity: 0, scale: 0.8}); //the name to scroll down

gsap.from(".about ul li", { //the tools will stagger in elastically after each other
    duration: 2,
    scale: 0.5, 
    opacity: 0, 
    delay: 0.3, 
    stagger: 0.4,
    ease: "elastic", 
    force3D: true
});

gsap.from(".media-link a i", { //the media link will stagger in elastically after each other
    duration: 2,
    scale: 0.5, 
    opacity: 0, 
    delay: 0.3, 
    stagger: 0.7,
    ease: "elastic", 
    force3D: true
});