// ===== ДАННЫЕ ТОВАРОВ С ЛОКАЛЬНЫМИ ИЗОБРАЖЕНИЯМИ =====
const products = [
    {
        id: 1,
        category: "YACHT",
        title: "Azimut 77 Yacht",
        price: 3500000,
        image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iMTgwIiB2aWV3Qm94PSIwIDAgODAwIDE4MCIgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iNDAwIiBjeT0iOTAiIHI9IjcwIiBmaWxsPSJsaWdodGdyZWVuIi8+PC9zdmc+",
        description: "Luxury yacht with modern design and premium amenities."
    },
    {
        id: 2,
        category: "PLANE",
        title: "Gulfstream G650ER",
        price: 75000000,
        image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iMTgwIiB2aWV3Qm94PSIwIDAgODAwIDE4MCIgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iNDAwIiBjeT0iOTAiIHI9IjcwIiBmaWxsPSJsaWdodGN5YW4iLz48L3N2Zz4=",
        description: "Private jet with long range and luxurious interior."
    },
    {
        id: 3,
        category: "MANSION",
        title: "Beverly Hills Mansion",
        price: 125000000,
        image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iMTgwIiB2aWV3Qm94PSIwIDAgODAwIDE4MCIgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iNDAwIiBjeT0iOTAiIHI9IjcwIiBmaWxsPSJsaWdodHB1cnBsZSIvPjwvc3ZnPg==",
        description: "Luxurious mansion in Beverly Hills with panoramic views."
    },
    {
        id: 4,
        category: "ISLAND",
        title: "Private Caribbean Island",
        price: 250000000,
        image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iMTgwIiB2aWV3Qm94PSIwIDAgODAwIDE4MCIgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iNDAwIiBjeT0iOTAiIHI9IjcwIiBmaWxsPSJsaWdodG9yYW5nZSIvPjwvc3ZnPg==",
        description: "Private island in the Caribbean with white sand beaches."
    },
    {
        id: 5,
        category: "YACHT",
        title: "Benetti 164 Superyacht",
        price: 45000000,
        image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iMTgwIiB2aWV3Qm94PSIwIDAgODAwIDE4MCIgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iNDAwIiBjeT0iOTAiIHI9IjcwIiBmaWxsPSJsaWdodGdyZWVuIi8+PC9zdmc+",
        description: "Superyacht with swimming pool and helicopter pad."
    },
    {
        id: 6,
        category: "MANSION",
        title: "Miami Beach Penthouse",
        price: 85000000,
        image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iMTgwIiB2aWV3Qm94PSIwIDAgODAwIDE4MCIgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iNDAwIiBjeT0iOTAiIHI9IjcwIiBmaWxsPSJsaWdodHB1cnBsZSIvPjwvc3ZnPg==",
        description: "Penthouse with ocean views and private beach access."
    },
    {
        id: 7,
        category: "PLANE",
        title: "Boeing Business Jet",
        price: 90000000,
        image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iMTgwIiB2aWV3Qm94PSIwIDAgODAwIDE4MCIgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iNDAwIiBjeT0iOTAiIHI9IjcwIiBmaWxsPSJsaWdodGN5YW4iLz48L3N2Zz4=",
        description: "Custom-configured Boeing business jet for ultimate comfort."
    },
    {
        id: 8,
        category: "ISLAND",
        title: "Maldives Private Atoll",
        price: 320000000,
        image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iMTgwIiB2aWV3Qm94PSIwIDAgODAwIDE4MCIgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iNDAwIiBjeT0iOTAiIHI9IjcwIiBmaWxsPSJsaWdodG9yYW5nZSIvPjwvc3ZnPg==",
        description: "Entire private atoll in the Maldives with luxury resort."
    },
    {
        id: 9,
        category: "YACHT",
        title: "Lürssen A+ Superyacht",
        price: 600000000,
        image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iMTgwIiB2aWV3Qm94PSIwIDAgODAwIDE4MCIgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iNDAwIiBjeT0iOTAiIHI9IjcwIiBmaWxsPSJsaWdodGdyZWVuIi8+PC9zdmc+",
        description: "One of the world's largest and most luxurious yachts."
    },
    {
        id: 10,
        category: "MANSION",
        title: "Dubai Sky Palace",
        price: 200000000,
        image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iMTgwIiB2aWV3Qm94PSIwIDAgODAwIDE4MCIgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iNDAwIiBjeT0iOTAiIHI9IjcwIiBmaWxsPSJsaWdodHB1cnBsZSIvPjwvc3ZnPg==",
        description: "Ultra-modern penthouse in the heart of Dubai."
    },
    {
        id: 11,
        category: "PLANE",
        title: "Airbus ACJ320neo",
        price: 110000000,
        image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iMTgwIiB2aWV3Qm94PSIwIDAgODAwIDE4MCIgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iNDAwIiBjeT0iOTAiIHI9IjcwIiBmaWxsPSJsaWdodGN5YW4iLz48L3N2Zz4=",
        description: "Next-generation private Airbus with transatlantic range."
    },
    {
        id: 12,
        category: "ISLAND",
        title: "Fiji Hidden Paradise",
        price: 180000000,
        image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iMTgwIiB2aWV3Qm94PSIwIDAgODAwIDE4MCIgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iNDAwIiBjeT0iOTAiIHI9IjcwIiBmaWxsPSJsaWdodG9yYW5nZSIvPjwvc3ZnPg==",
        description: "Secluded island with rainforest, beaches, and coral reef."
    }
];

// ===== СОСТОЯНИЕ ПРИЛОЖЕНИЯ =====
let cart = [];
let currentPage = 'main';
let itemToRemove = null;
let currentProductModalId = null;

// ===== DOM ЭЛЕМЕНТЫ =====
const pages = {
    main: document.getElementById('main-page'),
    cart: document.getElementById('cart-page'),
    profile: document.getElementById('profile-page'),
    history: document.getElementById('history-page')
};

const modals = {
    product: document.getElementById('product-modal'),
    confirm: document.getElementById('confirm-modal'),
    orderSuccess: document.getElementById('order-success-modal')
};

// ===== ФУНКЦИИ =====

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const current = document.body.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = document.getElementById('theme-toggle').querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

function showNotification(message) {
    const notif = document.getElementById('notification');
    notif.textContent = message;
    notif.classList.add('show');
    setTimeout(() => notif.classList.remove('show'), 3000);
}

function openModal(modal) {
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
}

function closeModal(modal) {
    modal.classList.remove('active');
    setTimeout(() => modal.style.display = 'none', 300);
}

function navigateTo(page) {
    Object.values(pages).forEach(p => p.classList.remove('active'));
    setTimeout(() => {
        pages[page].classList.add('active');
        currentPage = page;
    }, 10);
}

// ===== РАБОТА С КОРЗИНОЙ =====

function loadCart() {
    try {
        const saved = localStorage.getItem('luxuryCart');
        return saved ? JSON.parse(saved) : [];
    } catch (e) {
        console.warn('Failed to load cart from localStorage:', e);
        return [];
    }
}

function saveCart() {
    try {
        localStorage.setItem('luxuryCart', JSON.stringify(cart));
    } catch (e) {
        console.warn('Failed to save cart to localStorage:', e);
    }
}

function renderProducts() {
    const grid = document.getElementById('products-grid');
    const term = document.getElementById('search-input').value.toLowerCase();
    const filters = {
        YACHT: document.getElementById('yacht-filter').checked,
        PLANE: document.getElementById('plane-filter').checked,
        MANSION: document.getElementById('mansion-filter').checked,
        ISLAND: document.getElementById('island-filter').checked
    };

    grid.innerHTML = '';

    products.forEach(product => {
        const matchesCategory = filters[product.category];
        const matchesSearch = !term || product.title.toLowerCase().includes(term);
        if (matchesCategory && matchesSearch) {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <div class="product-title">${product.title}</div>
                    <div class="product-price">$${product.price.toLocaleString()}</div>
                </div>
            `;
            card.addEventListener('click', () => openProductModal(product.id));
            grid.appendChild(card);
        }
    });
}

function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    document.getElementById('modal-product-image').style.backgroundImage = `url(${product.image})`;
    document.getElementById('modal-product-title').textContent = product.title;
    document.getElementById('modal-product-category').textContent = product.category;
    document.getElementById('modal-product-description').textContent = product.description;
    document.getElementById('modal-product-price').textContent = `$${product.price.toLocaleString()}`;
    
    currentProductModalId = productId;
    openModal(modals.product);
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.title,
            price: product.price,
            quantity: 1
        });
    }

    saveCart();
    renderCart();
    showNotification(`${product.title} added to cart`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
    closeModal(modals.confirm);
    showNotification('Item removed from cart');
}

function renderCart() {
    const container = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    container.innerHTML = '';

    if (cart.length === 0) {
        container.innerHTML = '<p>Your cart is empty</p>';
        totalEl.textContent = 'Total: $0';
        return;
    }

    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        const el = document.createElement('div');
        el.className = 'order-card';
        el.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <div style="font-weight: bold;">${item.name}</div>
                    <div>$${item.price.toLocaleString()} × ${item.quantity}</div>
                </div>
                <button class="remove-item" data-id="${item.id}">Remove</button>
            </div>
        `;
        container.appendChild(el);
    });

    totalEl.textContent = `Total: $${total.toLocaleString()}`;

    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            itemToRemove = parseInt(btn.dataset.id);
            openModal(modals.confirm);
        });
    });
}

function renderOrders() {
    const list = document.getElementById('orders-list');
    list.innerHTML = '';
    orders.forEach(order => {
        const el = document.createElement('div');
        el.className = 'order-card';
        let itemsHtml = '';
        order.items.forEach(item => {
            itemsHtml += `<div class="order-item">${item.name}</div>`;
        });
        el.innerHTML = `
            <div class="order-header">
                <div class="order-number">${order.id}</div>
                <div class="order-date">${order.date}</div>
            </div>
            <div class="order-items">${itemsHtml}</div>
            <div class="order-total">Total: $${order.total.toLocaleString()}</div>
        `;
        list.appendChild(el);
    });
}

function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty');
        return;
    }
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const orderId = 'ORD-' + Math.floor(Math.random() * 1000000000);
    document.getElementById('order-number').textContent = orderId;
    document.getElementById('order-total-amount').textContent = `$${total.toLocaleString()}`;
    cart = [];
    saveCart();
    renderCart();
    openModal(modals.orderSuccess);
}

function saveProfile() {
    const name = document.getElementById('profile-name').value.trim();
    const email = document.getElementById('profile-email').value.trim();
    if (!name || !email) {
        showNotification('Please fill in all fields');
        return;
    }
    showNotification('Profile saved successfully');
}

// ===== АВТОПОДСКАЗКИ ПРИ ПОИСКЕ =====
function setupAutocomplete() {
    const input = document.getElementById('search-input');
    const suggestionsContainer = document.getElementById('suggestions');

    input.addEventListener('input', () => {
        const term = input.value.toLowerCase().trim();
        if (!term) {
            suggestionsContainer.style.display = 'none';
            return;
        }

        const matches = products
            .filter(p => p.title.toLowerCase().includes(term))
            .slice(0, 5);

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
        if (e.target !== input && e.target !== suggestionsContainer) {
            suggestionsContainer.style.display = 'none';
        }
    });
}

// ===== ЗАПУСК =====
document.addEventListener('DOMContentLoaded', () => {
    console.log("🚀 Luxury App initializing...");

    // Загрузить корзину
    cart = loadCart();

    // Инициализация темы
    initTheme();

    // Рендеринг
    renderProducts();
    renderCart();
    renderOrders();

    // Настройка событий
    setupEventListeners();

    // Автоподсказки
    setupAutocomplete();

    console.log("✅ App ready!");
});

function setupEventListeners() {
    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

    // Navigation
    document.getElementById('cart-icon').addEventListener('click', () => navigateTo('cart'));
    document.getElementById('profile-icon').addEventListener('click', () => navigateTo('profile'));
    document.getElementById('history-icon').addEventListener('click', () => navigateTo('history'));
    document.getElementById('logo').addEventListener('click', () => navigateTo('main'));

    document.getElementById('back-from-cart').addEventListener('click', () => navigateTo('main'));
    document.getElementById('back-from-profile').addEventListener('click', () => navigateTo('main'));
    document.getElementById('back-from-history').addEventListener('click', () => navigateTo('main'));

    // Search & filters
    document.getElementById('search-input').addEventListener('input', renderProducts);
    document.querySelectorAll('.filter-checkbox').forEach(cb => cb.addEventListener('change', renderProducts));
    document.getElementById('reset-filters').addEventListener('click', () => {
        document.querySelectorAll('.filter-checkbox').forEach(cb => cb.checked = true);
        renderProducts();
    });

    // Modals
    document.getElementById('close-product-modal').addEventListener('click', () => closeModal(modals.product));
    document.getElementById('modal-add-to-cart').addEventListener('click', () => {
        addToCart(currentProductModalId);
        closeModal(modals.product);
    });

    document.getElementById('close-modal').addEventListener('click', () => closeModal(modals.confirm));
    document.getElementById('cancel-delete').addEventListener('click', () => closeModal(modals.confirm));
    document.getElementById('confirm-delete').addEventListener('click', () => {
        if (itemToRemove !== null) removeFromCart(itemToRemove);
    });

    document.getElementById('close-success-modal').addEventListener('click', () => {
        closeModal(modals.orderSuccess);
        navigateTo('main');
    });

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target === modals.product) closeModal(modals.product);
        if (e.target === modals.confirm) closeModal(modals.confirm);
        if (e.target === modals.orderSuccess) {
            closeModal(modals.orderSuccess);
            navigateTo('main');
        }
    });

    // Other
    document.getElementById('checkout-button').addEventListener('click', checkout);
    document.getElementById('save-profile').addEventListener('click', saveProfile);
}

// ===== ДАННЫЕ ЗАКАЗОВ =====
const orders = [
    {
        id: "ORD-1122334455",
        date: "20.01.2023",
        items: [{ name: "Azimut 77 Yacht", price: 3500000 }],
        total: 3500000
    }
];
