/**
 * ==========================================================
 * ARCHIVO:
 * menu.js
 *
 * En este archivo se controla todo el comportamiento
 * del encabezado.
 *
 * Funciones:
 *
 * ✔ Abrir menú móvil.
 * ✔ Cerrar menú móvil (opción, overlay, tecla Escape).
 * ✔ Cambiar icono hamburguesa.
 * ✔ Agregar efecto al Header cuando se hace scroll.
 * ✔ Bloquear el scroll del body cuando el menú esté abierto.
 *
 * ==========================================================
 */

"use strict";

(function () {

    /*==========================================================
        OBTENER ELEMENTOS DEL DOM
    ==========================================================*/

    const header = document.querySelector(".header");
    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");
    const overlay = document.querySelector(".menu-overlay");
    const body = document.body;

    if (!header || !menuToggle || !navbar) return;

    /*==========================================================
        ABRIR / CERRAR MENÚ MÓVIL
    ==========================================================*/

    function setIcono(activo) {
        const icono = menuToggle.querySelector("i");
        icono.classList.toggle("fa-bars", !activo);
        icono.classList.toggle("fa-xmark", activo);
    }

    function abrirMenu() {
        navbar.classList.add("active");
        menuToggle.classList.add("active");
        body.classList.add("menu-open");
        if (overlay) overlay.classList.add("active");
        setIcono(true);
    }

    function cerrarMenu() {
        navbar.classList.remove("active");
        menuToggle.classList.remove("active");
        body.classList.remove("menu-open");
        if (overlay) overlay.classList.remove("active");
        setIcono(false);
    }

    function toggleMenu() {
        if (navbar.classList.contains("active")) {
            cerrarMenu();
        } else {
            abrirMenu();
        }
    }


    /*==========================================================
        CAMBIO DE HEADER AL HACER SCROLL
    ==========================================================*/

    function cambiarHeader() {
        header.classList.toggle("scrolled", window.scrollY > 40);
    }


    /*==========================================================
        CERRAR MENÚ AL HACER CLICK EN UNA OPCIÓN, EN EL FONDO
        OSCURO O AL PRESIONAR ESCAPE
    ==========================================================*/

    document.querySelectorAll(".nav-menu a").forEach((enlace) => {
        enlace.addEventListener("click", cerrarMenu);
    });

    if (overlay) {
        overlay.addEventListener("click", cerrarMenu);
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") cerrarMenu();
    });


    /*==========================================================
        EVENTOS
    ==========================================================*/

    menuToggle.addEventListener("click", toggleMenu);
    window.addEventListener("scroll", cambiarHeader);
    window.addEventListener("load", cambiarHeader);

})();
