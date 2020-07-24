//select html objects
const burger = document.querySelector('.burger i');

const nav = document.querySelector('.nav');

//defining a function
function toggleNav() {
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times')
    nav.classList.toggle('nav-active');
}

//calling the function after click event occurs
burger.addEventListener('click', function() {
    toggleNav();
});