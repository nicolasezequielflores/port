const hamburgerBtn = document.querySelector('.hamburger-btn');
const bars = document.querySelectorAll('.bar');

hamburgerBtn.addEventListener('click', () => {
bars.forEach(bar => bar.classList.toggle('change'));
});