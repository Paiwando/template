/* totop.js | https://www.indonez.com | Indonez | MIT License */
(function() {
    const inTop = document.querySelector('.in-totop');
    window.addEventListener('scroll', function() {
        setTimeout(function() {
            window.scrollY > 300 ? (inTop.style.opacity = 1, inTop.classList.add("uk-animation-slide-top")) : (inTop.style.opacity -= .1, inTop.classList.remove("uk-animation-slide-top"))
        }, 400)
    });
})();