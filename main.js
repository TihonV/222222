// ===== ДАННЫЕ ТОВАРОВ С РАБОЧИМИ ФОТО =====
const products = [
    {
        id: 1,
        category: "YACHT",
        title: "Azimut 77 Yacht",
        price: 3500000,
        image: "https://images.weserv.nl/?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-zen_doc%2F1895734%2Fpub_62e0d3b34a23c1434507f552_62e0d4245336452906691302%2Fscale_1200&h=200&w=300&fit=cover",
        description: "Luxury yacht with modern design and premium amenities."
    },
    {
        id: 2,
        category: "PLANE",
        title: "Gulfstream G650ER",
        price: 75000000,
        image: "https://images.weserv.nl/?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-zen_doc%2F1895734%2Fpub_62e0d3b34a23c1434507f552_62e0d4245336452906691302%2Fscale_1200&h=200&w=300&fit=cover",
        description: "Private jet with long range and luxurious interior."
    },
    {
        id: 3,
        category: "MANSION",
        title: "Beverly Hills Mansion",
        price: 125000000,
        image: "https://images.weserv.nl/?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-zen_doc%2F1895734%2Fpub_62e0d3b34a23c1434507f552_62e0d4245336452906691302%2Fscale_1200&h=200&w=300&fit=cover",
        description: "Luxurious mansion in Beverly Hills with panoramic views."
    },
    {
        id: 4,
        category: "ISLAND",
        title: "Private Caribbean Island",
        price: 250000000,
        image: "https://images.weserv.nl/?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-zen_doc%2F1895734%2Fpub_62e0d3b34a23c1434507f552_62e0d4245336452906691302%2Fscale_1200&h=200&w=300&fit=cover",
        description: "Private island in the Caribbean with white sand beaches."
    },
    {
        id: 5,
        category: "YACHT",
        title: "Benetti 164 Superyacht",
        price: 45000000,
        image: "https://images.weserv.nl/?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-zen_doc%2F1895734%2Fpub_62e0d3b34a23c1434507f552_62e0d4245336452906691302%2Fscale_1200&h=200&w=300&fit=cover",
        description: "Superyacht with swimming pool and helicopter pad."
    },
    {
        id: 6,
        category: "MANSION",
        title: "Miami Beach Penthouse",
        price: 85000000,
        image: "https://images.weserv.nl/?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-zen_doc%2F1895734%2Fpub_62e0d3b34a23c1434507f552_62e0d4245336452906691302%2Fscale_1200&h=200&w=300&fit=cover",
        description: "Penthouse with ocean views and private beach access."
    },
    {
        id: 7,
        category: "PLANE",
        title: "Boeing Business Jet",
        price: 90000000,
        image: "https://images.weserv.nl/?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-zen_doc%2F1895734%2Fpub_62e0d3b34a23c1434507f552_62e0d4245336452906691302%2Fscale_1200&h=200&w=300&fit=cover",
        description: "Custom-configured Boeing business jet for ultimate comfort."
    },
    {
        id: 8,
        category: "ISLAND",
        title: "Maldives Private Atoll",
        price: 320000000,
        image: "https://images.weserv.nl/?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-zen_doc%2F1895734%2Fpub_62e0d3b34a23c1434507f552_62e0d4245336452906691302%2Fscale_1200&h=200&w=300&fit=cover",
        description: "Entire private atoll in the Maldives with luxury resort."
    },
    {
        id: 9,
        category: "YACHT",
        title: "Lürssen A+ Superyacht",
        price: 600000000,
        image: "https://images.weserv.nl/?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-zen_doc%2F1895734%2Fpub_62e0d3b34a23c1434507f552_62e0d4245336452906691302%2Fscale_1200&h=200&w=300&fit=cover",
        description: "One of the world's largest and most luxurious yachts."
    },
    {
        id: 10,
        category: "MANSION",
        title: "Dubai Sky Palace",
        price: 200000000,
        image: "https://images.weserv.nl/?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-zen_doc%2F1895734%2Fpub_62e0d3b34a23c1434507f552_62e0d4245336452906691302%2Fscale_1200&h=200&w=300&fit=cover",
        description: "Ultra-modern penthouse in the heart of Dubai."
    },
    {
        id: 11,
        category: "PLANE",
        title: "Airbus ACJ320neo",
        price: 110000000,
        image: "https://images.weserv.nl/?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-zen_doc%2F1895734%2Fpub_62e0d3b34a23c1434507f552_62e0d4245336452906691302%2Fscale_1200&h=200&w=300&fit=cover",
        description: "Next-generation private Airbus with transatlantic range."
    },
    {
        id: 12,
        category: "ISLAND",
        title: "Fiji Hidden Paradise",
        price: 180000000,
        image: "https://images.weserv.nl/?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-zen_doc%2F1895734%2Fpub_62e0d3b34a23c1434507f552_62e0d4245336452906691302%2Fscale_1200&h=200&w=300&fit=cover",
        description: "Secluded island with rainforest, beaches, and coral reef."
    }
];

// ===== ПОДСКАЗКИ ПРИ ПОИСКЕ =====
function setupAutocomplete() {
    const input = document.getElementById('search-input');
    const suggestionsContainer = document.createElement('div');
    suggestionsContainer.id = 'suggestions';
    suggestionsContainer.style.position = 'absolute';
    suggestionsContainer.style.backgroundColor = 'var(--card-bg)';
    suggestionsContainer.style.border = '1px solid var(--border-color)';
    suggestionsContainer.style.borderTop = 'none';
    suggestionsContainer.style.maxHeight = '200px';
    suggestionsContainer.style.overflowY = 'auto';
    suggestionsContainer.style.zIndex = '1001';
    suggestionsContainer.style.width = 'calc(100% - 2px)';
    suggestionsContainer.style.boxShadow = '0 4px 10px var(--shadow)';
    suggestionsContainer.style.display = 'none';

    input.parentNode.appendChild(suggestionsContainer);

    input.addEventListener('input', () => {
        const term = input.value.toLowerCase().trim();
        if (!term) {
            suggestionsContainer.style.display = 'none';
            return;
        }

        const matches = products
            .filter(p => p.title.toLowerCase().includes(term))
            .slice(0, 5); // Ограничиваем до 5 подсказок

        if (matches.length === 0) {
            suggestionsContainer.style.display = 'none';
            return;
        }

        suggestionsContainer.innerHTML = '';
        matches.forEach(product => {
            const item = document.createElement('div');
            item.textContent = product.title;
            item.style.padding = '10px 15px';
            item.style.cursor = 'pointer';
            item.style.color = 'var(--text-color)';
            item.style.transition = 'background-color 0.2s';
            item.addEventListener('mouseenter', () => item.style.backgroundColor = 'var(--border-color)');
            item.addEventListener('mouseleave', () => item.style.backgroundColor = 'transparent');
            item.addEventListener('click', () => {
                input.value = product.title;
                suggestionsContainer.style.display = 'none';
                renderProducts();
            });
            suggestionsContainer.appendChild(item);
        });

        suggestionsContainer.style.display = 'block';
    });

    document.addEventListener('click', (e) => {
        if (e.target !== input) {
            suggestionsContainer.style.display = 'none';
        }
    });
}

// ===== ИНИЦИАЛИЗАЦИЯ =====
document.addEventListener('DOMContentLoaded', () => {
    console.log("🚀 Luxury App initializing...");

    cart = loadCart();
    initTheme();
    renderProducts();
    renderCart();
    renderOrders();
    setupEventListeners();
    setupAutocomplete(); // 👈 Подсказки

    console.log("✅ App ready!");
});
