/**
 * ==========================================================
 * ARCHIVO: search.js
 *
 * Conecta los buscadores del sitio (el del header y el que
 * aparece dentro del menú móvil) con el catálogo de productos
 * (filters.js) y hace scroll hasta la sección cuando hay una
 * búsqueda activa.
 * ==========================================================
 */

"use strict";

(function () {

    const inputs = document.querySelectorAll(".search-input");
    const buttons = document.querySelectorAll(".search-btn");

    if (!inputs.length) return;

    function applySearch(value) {
        if (window.EasyReaple && window.EasyReaple.setSearch) {
            window.EasyReaple.setSearch(value);
        }
    }

    function syncInputs(value, source) {
        inputs.forEach((input) => {
            if (input !== source) input.value = value;
        });
    }

    function closeMobileMenuIfOpen() {
        const navbar = document.querySelector(".navbar");
        if (!navbar || !navbar.classList.contains("active")) return;

        const overlay = document.querySelector(".menu-overlay");
        const toggle = document.querySelector(".menu-toggle");

        navbar.classList.remove("active");
        if (toggle) toggle.classList.remove("active");
        if (overlay) overlay.classList.remove("active");
        document.body.classList.remove("menu-open");

        const icon = toggle && toggle.querySelector("i");
        if (icon) {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    }

    function goToCatalogo() {
        closeMobileMenuIfOpen();

        const catalogo = document.getElementById("catalogo");
        if (catalogo) {
            catalogo.scrollIntoView({ behavior: "smooth" });
        }
    }

    inputs.forEach((input) => {

        input.addEventListener("input", () => {
            syncInputs(input.value, input);
            applySearch(input.value);
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                applySearch(input.value);
                if (input.value.trim()) goToCatalogo();
            }
        });

    });

    buttons.forEach((button) => {

        button.addEventListener("click", (e) => {
            e.preventDefault();

            const box = button.closest(".search-box");
            const input = box ? box.querySelector(".search-input") : null;
            const value = input ? input.value : "";

            applySearch(value);
            if (value.trim()) goToCatalogo();
        });

    });

})();
