/**
 * ==========================================================
 * ARCHIVO: slider.js
 *
 * Carrusel de testimonios: renderiza las tarjetas desde
 * data.js, avanza automáticamente y permite navegar con
 * los puntos indicadores.
 * ==========================================================
 */

"use strict";

(function () {

    const track = document.getElementById("testimonialTrack");
    const dotsWrap = document.getElementById("testimonialDots");

    if (!track || !dotsWrap || !window.EasyReaple || !window.EasyReaple.testimonials) return;

    const testimonials = window.EasyReaple.testimonials;
    let current = 0;
    let timer = null;

    function stars(rating) {
        return '<i class="fa-solid fa-star"></i>'.repeat(rating);
    }

    track.innerHTML = testimonials.map((t) => `
        <div class="testimonial-card">
            <div class="testimonial-stars">${stars(t.rating)}</div>
            <p>"${t.text}"</p>
            <h4>${t.name}</h4>
            <span>${t.city}</span>
        </div>
    `).join("");

    dotsWrap.innerHTML = testimonials
        .map((_, i) => `<button class="testimonial-dot" data-index="${i}" aria-label="Testimonio ${i + 1}"></button>`)
        .join("");

    const dots = dotsWrap.querySelectorAll(".testimonial-dot");

    function goTo(index) {
        current = (index + testimonials.length) % testimonials.length;
        track.style.transform = `translateX(-${current * 100}%)`;
        dots.forEach((dot, i) => dot.classList.toggle("active", i === current));
    }

    function next() {
        goTo(current + 1);
    }

    function resetTimer() {
        clearInterval(timer);
        timer = setInterval(next, 5000);
    }

    dots.forEach((dot) => {
        dot.addEventListener("click", () => {
            goTo(Number(dot.dataset.index));
            resetTimer();
        });
    });

    const slider = track.closest(".testimonial-slider");

    if (slider) {
        slider.addEventListener("mouseenter", () => clearInterval(timer));
        slider.addEventListener("mouseleave", resetTimer);
    }

    goTo(0);
    resetTimer();

})();
