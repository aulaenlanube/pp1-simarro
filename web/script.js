// Initialize Lucide Icons
lucide.createIcons();

// Scroll Progress Bar
window.onscroll = function () {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";

    // Reveal animations
    reveal();
};

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Run once on load
reveal();

// Typing effect for hero lead
const leadText = "Gestionamos el futuro de la educación mediante un Centro de Procesamiento de Datos local de alto rendimiento.";
const heroLead = document.querySelector('.hero-lead');

if (heroLead) {
    heroLead.textContent = '';
    let i = 0;
    function typeWriter() {
        if (i < leadText.length) {
            heroLead.textContent += leadText.charAt(i);
            i++;
            setTimeout(typeWriter, 30);
        }
    }
    setTimeout(typeWriter, 1000);
}
