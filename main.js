// toggle icon bar

let nemuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classlist.toggle('fa-xmark');
    navbar.classList.toggle('active')

}

// scroll selection active link

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height){
            navlinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active')
            });
        };
    });

    // sticky navbar
    let header = document.querySelector('header');
    header.classlist.toggle('sticky' , window.scrollY > 100);

    // remove toggle icon and navbar

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');


};

// scroll reveal

ScrollReveal({ 
    distane:'80px' ,
    duration:2000 ,
    delay : 200,
});

ScrollReveal().reveal('.home-content , heading', { origin:'top' });
ScrollReveal().reveal('.home-img , .services-container, .portfolio-box , .contact form', {origin:'button' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin:'left' });
ScrollReveal().reveal('.home-contact p, .about-content', {origin:'right' });

// typed js

Const typed = new Typed('.multiple-text' ,{
    Strings: ['Frontend Developer' , 'Web Designer' , 'Youtuber'],
    typeSpeed : 70,
    backSpees :70,
    backDelay :1000,
    loop:true,
});