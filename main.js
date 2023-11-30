const text = document.getElementById('text');
const bird1 = document.getElementById('bird1');
const bird2 = document.getElementById('bird2');
const forest = document.getElementById('forest');
const btn = document.getElementById('btn');
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
     const value = window.scrollY;

     text.style.top =  value * -0.3 + '%';
     bird1.style.top = value * -0.5 + 'px';
     bird1.style.left =value * 1 + 'px';
     bird2.style.top = value * -0.5 + 'px';
     bird2.style.left = value * -2 + 'px';
     forest.style.top = value * 0.25 + 'px';
     header.style.top = value * 0.5 + 'px'
})