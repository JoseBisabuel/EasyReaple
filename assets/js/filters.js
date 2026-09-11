/**
 * ==========================================================
 * ARCHIVO: filters.js
 *
 * Renderiza el catálogo de productos y controla los filtros
 * por categoría. Se combina con el término de búsqueda que
 * llega desde search.js a través de window.EasyReaple.setSearch.
 * ==========================================================
 */

"use strict";

(function () {

    const grid = document.getElementById("productsGrid");
    const emptyMsg = document.getElementById("productsEmpty");
    const categoryButtons = document.querySelectorAll("#productFilters .filter-btn");
    const brandButtons = document.querySelectorAll("#brandFilters .filter-btn");
    const WHATSAPP_NUMBER = "573044070897";

    if (!grid) return;

    const state = {
        category: "todos",
        brand: "todas",
        search: ""
    };

    function buildCard(product) {

        const badge = product.badge
            ? `<span class="product-badge">${product.badge}</span>`
            : "";

        const mensaje = encodeURIComponent(`Hola, quiero cotizar: ${product.name}`);
        const categoria = window.EasyReaple.categories[product.category] || product.category;

        const thumb = product.image
            ? `<img src="${encodeURI(product.image)}" alt="${product.name}" loading="lazy">`
            : `<i class="${product.icon}"></i>`;

        return `
            <article class="product-card reveal" data-category="${product.category}">
                ${badge}
                <div class="product-thumb${product.image ? " has-image" : ""}">
                    ${thumb}
                </div>
                <div class="product-body">
                    <span class="product-category">${categoria}</span>
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="product-footer">
                        <a class="product-cta" href="https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}" target="_blank">
                            <i class="fa-brands fa-whatsapp"></i> Cotizar
                        </a>
                    </div>
                </div>
            </article>
        `;
    }

    function render() {

        const term = state.search.trim().toLowerCase();

        const filtered = window.EasyReaple.products.filter((product) => {

            const matchesCategory = state.category === "todos" || product.category === state.category;

            const matchesBrand = state.brand === "todas" || product.brand === state.brand || product.brand === "ambas";

            const matchesSearch = !term
                || product.name.toLowerCase().includes(term)
                || product.description.toLowerCase().includes(term);

            return matchesCategory && matchesBrand && matchesSearch;

        });

        grid.innerHTML = filtered.map(buildCard).join("");

        if (emptyMsg) {
            emptyMsg.hidden = filtered.length > 0;
        }

        if (window.EasyReaple.observeReveal) {
            window.EasyReaple.observeReveal();
        }
    }

    categoryButtons.forEach((btn) => {

        btn.addEventListener("click", () => {

            categoryButtons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");

            state.category = btn.dataset.category;
            render();

        });

    });

    brandButtons.forEach((btn) => {

        btn.addEventListener("click", () => {

            brandButtons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");

            state.brand = btn.dataset.brand;
            render();

        });

    });

    window.EasyReaple.setSearch = function (value) {
        state.search = value;
        render();
    };

    render();

})();
