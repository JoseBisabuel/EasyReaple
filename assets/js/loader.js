/**
 * ==========================================================
 * ARCHIVO: loader.js
 *
 * Oculta la pantalla de carga inicial cuando la página
 * termina de cargar y rellena el año actual en el footer.
 * ==========================================================
 */

"use strict";

(function () {

    const loader = document.getElementById("pageLoader");

    if (loader) {

        function hideLoader() {
            loader.classList.add("loaded");
        }

        window.addEventListener("load", hideLoader);

        // Respaldo por si algún recurso tarda demasiado en cargar.
        setTimeout(hideLoader, 4000);
    }

    const yearEl = document.getElementById("currentYear");

    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

})();
