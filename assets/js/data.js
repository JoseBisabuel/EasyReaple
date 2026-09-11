"use strict";

/**
 * Fuente única de datos del catálogo y testimonios.
 * Edita aquí nombres, categorías y textos.
 * Los testimonios son de ejemplo: reemplázalos por reseñas reales antes de publicar.
 */

window.EasyReaple = window.EasyReaple || {};

window.EasyReaple.categories = {
    todos: "Todos",
    pantallas: "Pantallas",
    baterias: "Baterías",
    accesorios: "Accesorios",
    repuestos: "Repuestos",
    equipos: "Equipos"
};

window.EasyReaple.brands = {
    todas: "Todas las marcas",
    apple: "Apple",
    android: "Android"
};

/**
 * brand: "apple" | "android" | "ambas" (compatible con ambas marcas).
 */
window.EasyReaple.products = [
    {
        id: "p1",
        name: "Pantalla iPhone 11 OLED",
        category: "pantallas",
        brand: "apple",
        icon: "fa-solid fa-mobile-screen",
        image: "assets/img/products/pantallas/Pantalla iPhone 11 OLED.webp",
        description: "Repuesto de alta calidad con instalación incluida y garantía.",
        badge: "Popular"
    },
    {
        id: "p2",
        name: "Pantalla Samsung Galaxy A32",
        category: "pantallas",
        brand: "android",
        icon: "fa-solid fa-mobile-screen",
        image: "assets/img/products/pantallas/Pantalla Samsung Galaxy A32.webp",
        description: "Pantalla original con instalación y prueba de calidad incluida.",
        badge: null
    },
    {
        id: "p3",
        name: "Batería iPhone 12",
        category: "baterias",
        brand: "apple",
        icon: "fa-solid fa-battery-full",
        image: "assets/img/products/Baterias/Batería iPhone 12.jpg",
        description: "Batería nueva de alta capacidad, instalación el mismo día.",
        badge: null
    },
    {
        id: "p4",
        name: "Batería Samsung Galaxy S21",
        category: "baterias",
        brand: "android",
        icon: "fa-solid fa-battery-full",
        image: "assets/img/products/Baterias/Batería Samsung Galaxy S21.webp",
        description: "Recupera la autonomía de tu equipo con repuesto certificado.",
        badge: null
    },
    {
        id: "p5",
        name: "Cargador rápido USB-C 20W",
        category: "accesorios",
        brand: "ambas",
        icon: "fa-solid fa-bolt",
        image: "assets/img/products/Accesorios/Cargador rápido USB-C 20W.webp",
        description: "Carga rápida y segura, compatible con iPhone y Android.",
        badge: "Nuevo"
    },
    {
        id: "p6",
        name: "Cable Lightning reforzado 1m",
        category: "accesorios",
        brand: "apple",
        icon: "fa-solid fa-plug",
        image: "assets/img/products/Accesorios/D_NQ_NP_772534-CBT114140798853_072026-O.webp",
        description: "Cable trenzado resistente a dobleces, ideal para uso diario.",
        badge: null
    },
    {
        id: "p7",
        name: "Case protector antigolpes",
        category: "accesorios",
        brand: "ambas",
        icon: "fa-solid fa-shield-halved",
        image: "assets/img/products/Accesorios/Case protector antigolpes.webp",
        description: "Protección reforzada en esquinas, disponible para varios modelos.",
        badge: null
    },
    {
        id: "p8",
        name: "Flex de carga iPhone XR",
        category: "repuestos",
        brand: "apple",
        icon: "fa-solid fa-microchip",
        image: "assets/img/products/Repuestos/Flex de carga iPhone XR.jpg",
        description: "Repuesto para fallas de carga o puerto dañado.",
        badge: null
    },
    {
        id: "p9",
        name: "Cámara trasera Samsung A52",
        category: "repuestos",
        brand: "android",
        icon: "fa-solid fa-camera",
        image: "assets/img/products/Repuestos/Cámara trasera Samsung A52.webp",
        description: "Módulo de cámara original, instalación y calibración incluida.",
        badge: null
    },
    {
        id: "p10",
        name: "iPhone 11 64GB Reacondicionado",
        category: "equipos",
        brand: "apple",
        icon: "fa-solid fa-mobile-button",
        image: "assets/img/products/celulares/iPhone 11 64GB Reacondicionado.webp",
        description: "Equipo revisado, con batería nueva y garantía de 3 meses.",
        badge: "Popular"
    },
    {
        id: "p11",
        name: "Redmi Note 11 Reacondicionado",
        category: "equipos",
        brand: "android",
        icon: "fa-solid fa-mobile-button",
        image: "assets/img/products/celulares/Redmi_Note_11_Tornasol.webp",
        description: "Excelente relación precio-calidad, listo para usar.",
        badge: null
    }
];

window.EasyReaple.testimonials = [
    {
        name: "Laura M.",
        city: "Neiva",
        rating: 5,
        text: "Cambié la pantalla de mi iPhone y quedó como nueva. Muy buena atención y rapidez."
    },
    {
        name: "Camilo R.",
        city: "Pitalito",
        rating: 5,
        text: "Le hicieron mantenimiento a mi celular y la batería le dura muchísimo más ahora."
    },
    {
        name: "Andrea G.",
        city: "Neiva",
        rating: 5,
        text: "Envié mi equipo desde otra ciudad y todo el proceso fue transparente y seguro."
    },
    {
        name: "Diego F.",
        city: "Garzón",
        rating: 4,
        text: "Compré un equipo reacondicionado y ha funcionado perfecto desde el primer día."
    }
];
