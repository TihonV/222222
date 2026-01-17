// ===== ДАННЫЕ ТОВАРОВ =====
const products = [
    {
        id: 1,
        category: "YACHT",
        title: "Azimut 77 Yacht",
        price: 3500000,
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Luxury yacht with modern design and premium amenities."
    },
    {
        id: 2,
        category: "PLANE",
        title: "Gulfstream G650ER",
        price: 75000000,
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Private jet with long range and luxurious interior."
    },
    {
        id: 3,
        category: "MANSION",
        title: "Beverly Hills Mansion",
        price: 125000000,
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Luxurious mansion in Beverly Hills with panoramic views."
    },
    {
        id: 4,
        category: "ISLAND",
        title: "Private Caribbean Island",
        price: 250000000,
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Private island in the Caribbean with white sand beaches."
    },
    {
        id: 5,
        category: "YACHT",
        title: "Benetti 164 Superyacht",
        price: 45000000,
        image: "https://images.unsplash.com/photo-1564507004663-b6dfb3e2ede5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Superyacht with swimming pool and helicopter pad."
    },
    {
        id: 6,
        category: "MANSION",
        title: "Miami Beach Penthouse",
        price: 85000000,
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Penthouse with ocean views and private beach access."
    },
    {
        id: 7,
        category: "PLANE",
        title: "Boeing Business Jet",
        price: 90000000,
        image: "https://images.unsplash.com/photo-1598301251803-0f9c9a5f3e33?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Custom-configured Boeing business jet for ultimate comfort."
    },
    {
        id: 8,
        category: "ISLAND",
        title: "Maldives Private Atoll",
        price: 320000000,
        image: "https://images.unsplash.com/photo-1505239522295-5aa8ac7f3ec4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Entire private atoll in the Maldives with luxury resort."
    },
    {
        id: 9,
        category: "YACHT",
        title: "Lürssen A+ Superyacht",
        price: 600000000,
        image: "https://images.unsplash.com/photo-1597813179153-7d3d3dc3e2c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "One of the world's largest and most luxurious yachts."
    },
    {
        id: 10,
        category: "MANSION",
        title: "Dubai Sky Palace",
        price: 200000000,
        image: "https://images.unsplash.com/photo-1618750869771-b9e1bafcbfdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Ultra-modern penthouse in the heart of Dubai."
    },
    {
        id: 11,
        category: "PLANE",
        title: "Airbus ACJ320neo",
        price: 110000000,
        image: "https://images.unsplash.com/photo-1598301251803-0f9c9a5f3e33?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Next-generation private Airbus with transatlantic range."
    },
    {
        id: 12,
        category: "ISLAND",
        title: "Fiji Hidden Paradise",
        price: 180000000,
        image: "https://images.unsplash.com/photo-1505239522295-5aa8ac7f3ec4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Secluded island with rainforest, beaches, and coral reef."
    }
];

const orders = [
    {
        id: "ORD-1122334455",
        date: "20.01.2023",
        items: [{ name: "Azimut 77 Yacht", price: 3500000 }],
        total: 3500000
    }
];

// ===== СОСТОЯНИЕ ПРИЛОЖЕНИЯ =====
let cart = []; // Будет загружено из localStorage ниже
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

    console.log("✅ App ready!");
});
