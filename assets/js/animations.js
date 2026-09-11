/**
 * ==========================================================
 * ARCHIVO: animations.js
 *
 * Controla las animaciones de aparición al hacer scroll
 * (clase .reveal) y marca el documento como "js-ready" para
 * que el CSS solo oculte contenido cuando JavaScript sí puede
 * mostrarlo de nuevo (evita contenido invisible si JS falla).
 * ==========================================================
 */

"use strict";

document.documentElement.classList.add("js-ready");

(function () {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }

        });

    }, { threshold: 0.15 });

    function observeReveal() {
        document.querySelectorAll(".reveal:not(.active)").forEach((el) => {
            observer.observe(el);
        });
    }

    window.EasyReaple = window.EasyReaple || {};
    window.EasyReaple.observeReveal = observeReveal;

    document.addEventListener("DOMContentLoaded", observeReveal);

})();
