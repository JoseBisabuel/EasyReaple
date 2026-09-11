/**
 * ==========================================================
 * ARCHIVO: whatsapp.js
 *
 * Controla el botón flotante de WhatsApp: aparece al hacer
 * scroll hacia abajo en la página.
 * ==========================================================
 */

"use strict";

(function () {

    const floatBtn = document.getElementById("whatsappFloat");

    if (!floatBtn) return;

    function toggleFloat() {
        floatBtn.classList.toggle("visible", window.scrollY > 400);
    }

    window.addEventListener("scroll", toggleFloat);
    window.addEventListener("load", toggleFloat);

})();
