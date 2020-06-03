
var hamb = document.querySelector('.hamburger'); 
var menu = document.getElementById('menu');
var back = document.querySelector('.about_container');
var body = document.querySelector('body');

var project = document.getElementById('projects1');
var education = document.getElementById('education1');
var skills = document.getElementById('skills1');
var about = document.getElementById('about1');
var contact = document.getElementById('contact1');
var project = document.getElementById('projects1');

function closeMenu() {
    menu.style.width = '0px';
}

function openMenu() {
    menu.style.width = '250px';
}

hamb.addEventListener('click', function() {
    var active = hamb.classList.toggle('hamburger--active');
    
    if(active) {
        hamb.addEventListener('click', openMenu());
    } else {
        hamb.addEventListener('click', closeMenu());
    }
});


project.addEventListener('click', function() {
    closeMenu()
    var active = hamb.classList.toggle('hamburger--active');
});

education.addEventListener('click', function() {
    closeMenu()
    var active = hamb.classList.toggle('hamburger--active');
});

skills.addEventListener('click', function() {
    closeMenu()
    var active = hamb.classList.toggle('hamburger--active');
});

about.addEventListener('click', function() {
    closeMenu()
    var active = hamb.classList.toggle('hamburger--active');
});

contact.addEventListener('click', function() {
    closeMenu()
    var active = hamb.classList.toggle('hamburger--active');
});

project.addEventListener('click', function() {
    closeMenu()
    var active = hamb.classList.toggle('hamburger--active');

});


