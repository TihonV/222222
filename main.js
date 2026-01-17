// Данные товаров
const products = [
    {
        id: 1,
        category: "YACHT",
        title: "Azimut 77 Yacht",
        price: 3500000,
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Luxury yacht with modern design and premium amenities"
    },
    {
        id: 2,
        category: "PLANE",
        title: "Gulfstream G650ER",
        price: 75000000,
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Private jet with long range and luxurious interior"
    },
    {
        id: 3,
        category: "MANSION",
        title: "Beverly Hills Mansion",
        price: 125000000,
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Luxurious mansion in Beverly Hills with panoramic views"
    },
    {
        id: 4,
        category: "ISLAND",
        title: "Private Caribbean Island",
        price: 250000000,
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Private island in the Caribbean with white sand beaches"
    },
    {
        id: 5,
        category: "YACHT",
        title: "Benetti 164 Superyacht",
        price: 45000000,
        image: "https://images.unsplash.com/photo-1564507004663-b6dfb3e2ede5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Superyacht with swimming pool and helicopter pad"
    },
    {
        id: 6,
        category: "MANSION",
        title: "Miami Beach Penthouse",
        price: 85000000,
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Penthouse with ocean views and private beach access"
    }
];

// Данные заказов
const orders = [
    {
        id: "ORD-1122334455",
        date: "20.01.2023",
        items: [{ name: "Test Boat", price: 250000 }],
        total: 250000
    },
    {
        id: "ORD-0987654321",
        date: "15.01.2023",
        items: [
            { name: "Test Car", price: 50000 },
            { name: "Test Bike", price: 25000 }
        ],
        total: 75000
    },
    {
        id: "ORD-1234567890",
        date: "01.01.2023",
        items: [
            { name: "Test Yacht", price: 5000000 },
            { name: "Test Plane", price: 1000000 }
        ],
        total: 6000000
    }
];

// Состояние приложения
let cart = JSON.parse(localStorage.getItem('luxuryCart')) || [];
let currentPage = 'main';
let itemToRemove = null;

// DOM элементы
const pages = {
    main: document.getElementById('main-page'),
    cart: document.getElementById('cart-page'),
    profile: document.getElementById('profile-page'),
    history: document.getElementById('history-page')
};

const modals = {
    confirm: document.getElementById('confirm-modal'),
    orderSuccess: document.getElementById('order-success-modal')
};

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    renderCart();
    renderOrders();
    setupEventListeners();
});

// Рендеринг товаров
function renderProducts() {
    const grid = document.getElementById('products-grid');
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const yachtChecked = document.getElementById('yacht-filter').checked;
    const planeChecked = document.getElementById('plane-filter').checked;
    const mansionChecked = document.getElementById('mansion-filter').checked;
    const islandChecked = document.getElementById('island-filter').checked;

    grid.innerHTML = '';

    products.forEach(product => {
        let showProduct = false;
        if (yachtChecked && product.category === 'YACHT') showProduct = true;
        if (planeChecked && product.category === 'PLANE') showProduct = true;
        if (mansionChecked && product.category === 'MANSION') showProduct = true;
        if (islandChecked && product.category === 'ISLAND') showProduct = true;

        if (searchTerm && !product.title.toLowerCase().includes(searchTerm)) {
            showProduct = false;
        }

        if (showProduct) {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <div class="product-title">${product.title}</div>
                    <div class="product-description">${product.description}</div>
                    <div class="product-price">$${product.price.toLocaleString()}</div>
                    <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
                </div>
            `;
            const button = card.querySelector('.add-to-cart-btn');
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(product.id);
            });
            grid.appendChild(card);
        }
    });
}

// Добавление в корзину
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.title,
            price: product.price,
            quantity: 1,
            category: product.category
        });
    }

    saveCart();
    renderCart();
    showNotification(`${product.title} added to cart`);
}

// Удаление из корзины
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
    modals.confirm.style.display = 'none';
    showNotification('Item removed from cart');
}

// Рендеринг корзины
function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty</p>';
        cartTotal.textContent = 'Total: $0';
        return;
    }

    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        const itemElement = document.createElement('div');
        itemElement.className = 'order-card';
        itemElement.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <div style="font-weight: bold;">${item.name}</div>
                    <div>$${item.price.toLocaleString()} × ${item.quantity}</div>
                </div>
                <button class="remove-item" data-id="${item.id}" style="background: none; border: 1px solid #ddd; padding: 5px 10px; border-radius: 3px; cursor: pointer;">
                    Remove
                </button>
            </div>
        `;
        cartItems.appendChild(itemElement);
    });

    cartTotal.textContent = `Total: $${total.toLocaleString()}`;

    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            itemToRemove = parseInt(button.dataset.id);
            modals.confirm.style.display = 'flex';
        });
    });
}

// Рендеринг истории заказов
function renderOrders() {
    const ordersList = document.getElementById('orders-list');
    ordersList.innerHTML = '';

    orders.forEach(order => {
        const orderElement = document.createElement('div');
        orderElement.className = 'order-card';
        
        let itemsHtml = '';
        order.items.forEach(item => {
            itemsHtml += `<div class="order-item">${item.name}</div>`;
        });

        orderElement.innerHTML = `
            <div class="order-header">
                <div class="order-number">${order.id}</div>
                <div class="order-date">${order.date}</div>
            </div>
            <div class="order-items">${itemsHtml}</div>
            <div class="order-total">Total: $${order.total.toLocaleString()}</div>
        `;
        ordersList.appendChild(orderElement);
    });
}

// Оформление заказа
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
    modals.orderSuccess.style.display = 'flex';
}

// Сохранение профиля
function saveProfile() {
    const name = document.getElementById('profile-name').value;
    const email = document.getElementById('profile-email').value;
    
    if (!name || !email) {
        showNotification('Please fill in all fields');
        return;
    }

    showNotification('Profile saved successfully');
}

// Показать уведомление + анимация корзины
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    
    const cartIcon = document.getElementById('cart-icon');
    cartIcon.style.transform = 'scale(1.2)';
    cartIcon.style.transition = 'transform 0.3s ease';
    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
    }, 300);

    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// Сохранение корзины в localStorage
function saveCart() {
    localStorage.setItem('luxuryCart', JSON.stringify(cart));
}

// Переключение страниц
function navigateTo(page) {
    Object.values(pages).forEach(p => p.classList.remove('active'));
    pages[page].classList.add('active');
    currentPage = page;
}

// Настройка обработчиков событий
function setupEventListeners() {
    document.getElementById('cart-icon').addEventListener('click', () => navigateTo('cart'));
    document.getElementById('profile-icon').addEventListener('click', () => navigateTo('profile'));
    document.getElementById('history-icon').addEventListener('click', () => navigateTo('history'));
    document.getElementById('logo').addEventListener('click', () => navigateTo('main'));

    document.getElementById('back-from-cart').addEventListener('click', () => navigateTo('main'));
    document.getElementById('back-from-profile').addEventListener('click', () => navigateTo('main'));
    document.getElementById('back-from-history').addEventListener('click', () => navigateTo('main'));

    document.getElementById('search-input').addEventListener('input', renderProducts);

    document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', renderProducts);
    });

    document.getElementById('reset-filters').addEventListener('click', () => {
        document.querySelectorAll('.filter-checkbox').forEach(cb => cb.checked = true);
        renderProducts();
    });

    document.getElementById('checkout-button').addEventListener('click', checkout);
    document.getElementById('save-profile').addEventListener('click', saveProfile);

    document.getElementById('close-modal').addEventListener('click', () => {
        modals.confirm.style.display = 'none';
    });

    document.getElementById('close-success-modal').addEventListener('click', () => {
        modals.orderSuccess.style.display = 'none';
        navigateTo('main');
    });

    document.getElementById('cancel-delete').addEventListener('click', () => {
        modals.confirm.style.display = 'none';
        itemToRemove = null;
    });

    document.getElementById('confirm-delete').addEventListener('click', () => {
        if (itemToRemove) {
            removeFromCart(itemToRemove);
        }
    });

    window.addEventListener('click', (e) => {
        if (e.target === modals.confirm) {
            modals.confirm.style.display = 'none';
        }
        if (e.target === modals.orderSuccess) {
            modals.orderSuccess.style.display = 'none';
            navigateTo('main');
        }
    });
}
// ... (все данные products, orders остаются без изменений)

let cart = JSON.parse(localStorage.getItem('luxuryCart')) || [];
let currentPage = 'main';
let itemToRemove = null;
let currentProductModalId = null;

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

// === Тема ===
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.remove('theme-light', 'theme-dark');
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

// === Анимации ===
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

// === Навигация с анимацией ===
function navigateTo(page) {
    Object.values(pages).forEach(p => p.classList.remove('active'));
    setTimeout(() => {
        pages[page].classList.add('active');
        currentPage = page;
    }, 10);
}

// === Остальная логика (без изменений, кроме замены модалок) ===
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderProducts();
    renderCart();
    renderOrders();
    setupEventListeners();
});

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

// ... (renderCart, renderOrders, checkout, saveProfile — без изменений)

function saveCart() {
    localStorage.setItem('luxuryCart', JSON.stringify(cart));
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

// ... (остальные функции renderProducts и т.д. — как в предыдущей версии)
