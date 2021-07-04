
var toggle = document.querySelector('.toggle');
var nav = document.querySelector('nav');

toggle.addEventListener('click', (e) => {
    e.target.classList.toggle('fa-bars')
    e.target.classList.toggle('fa-times')
    nav.classList.toggle('close-menu')
})


