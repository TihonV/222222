// Глобальное состояние приложения
const state = {
    products: [],
    cart: JSON.parse(localStorage.getItem('luxury_cart')) || [],
    orders: JSON.parse(localStorage.getItem('luxury_orders')) || [],
    purchasedItems: JSON.parse(localStorage.getItem('luxury_purchased')) || [],
    profile: JSON.parse(localStorage.getItem('luxury_profile')) || {
        name: '',
        email: '',
        notifications: true
    },
    currentProductId: null,
    theme: localStorage.getItem('luxury_theme') || 'light',
    currentPage: 'products',
    searchTerm: '',
    activeFilters: new Set(),
    removeProductId: null
};

// DOM элементы
const elements = {
    // Основные страницы
    pages: {
        products: document.getElementById('product-list-page'),
        cart: document.getElementById('cart-page'),
        profile: document.getElementById('profile-page'),
        history: document.getElementById('history-page')
    },
    
    // Навигация
    nav: {
        shop: document.querySelector('[data-test-id="menu-shop"]'),
        cart: document.querySelector('[data-test-id="menu-cart"]'),
        profile: document.querySelector('[data-test-id="menu-profile"]'),
        history: document.querySelector('[data-test-id="menu-history"]'),
        backButtons: document.querySelectorAll('.back-button'),
        continueShopping: document.querySelectorAll('.continue-shopping')
    },
    
    // Поиск и фильтры
    search: {
        input: document.querySelector('.search-bar'),
        suggestions: document.querySelector('.search-suggestions'),
        icon: document.querySelector('.search-icon'),
        clearFilters: document.querySelector('.clear-filters')
    },
    
    // Сетка товаров
    productsGrid: document.querySelector('.products-grid'),
    
    // Корзина
    cart: {
        list: document.querySelector('.cart-list'),
        total: document.querySelector('.cart-total'),
        badge: document.querySelector('.cart-badge'),
        checkoutBtn: document.querySelector('.checkout-button'),
        empty: document.querySelector('.cart-empty')
    },
    
    // Профиль
    profile: {
        form: document.querySelector('.profile-form'),
        nameInput: document.getElementById('profile-name'),
        emailInput: document.getElementById('profile-email'),
        notifications: document.getElementById('notifications'),
        saveBtn: document.querySelector('.profile-save'),
        logoutBtn: document.querySelector('.profile-logout'),
        errors: {
            name: document.getElementById('name-error'),
            email: document.getElementById('email-error')
        }
    },
    
    // История заказов
    history: {
        list: document.querySelector('.orders-list'),
        empty: document.querySelector('.orders-empty')
    },
    
    // Модальные окна
    modals: {
        product: document.getElementById('product-modal'),
        removeConfirm: document.getElementById('remove-confirm-modal'),
        orderSuccess: document.getElementById('order-success-modal')
    },
    
    // Кнопки модальных окон
    modalBtns: {
        close: document.querySelector('.close-modal'),
        cancelRemove: document.getElementById('cancel-remove'),
        confirmRemove: document.getElementById('confirm-remove'),
        viewOrderHistory: document.getElementById('view-order-history'),
        continueShoppingModal: document.getElementById('continue-shopping-modal')
    },
    
    // Элементы модального окна товара
    productModal: {
        image: document.getElementById('modal-image'),
        title: document.getElementById('modal-title'),
        category: document.getElementById('modal-category'),
        price: document.getElementById('modal-price'),
        description: document.getElementById('modal-description'),
        specs: document.getElementById('modal-specs'),
        badge: document.getElementById('modal-badge'),
        addToCartBtn: document.getElementById('add-to-cart'),
        buyNowBtn: document.getElementById('buy-now')
    },
    
    // Уведомления
    notification: document.getElementById('notification'),
    
    // Переключение темы
    themeToggle: document.querySelector('.theme-toggle')
};

// Данные товаров
const productsData = [
    {
        id: 1,
        category: "Яхта",
        title: "Ocean Master 77",
        price: 3500000,
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Ocean Master 77 — это шедевр морской инженерии, оснащенный передовыми навигационными системами, роскошными интерьерами с итальянским мрамором и просторной солнечной палубой для развлечений. Идеально подходит для трансатлантических переходов и роскошных круизов.",
        specs: [
            { label: "Длина", value: "77 футов" },
            { label: "Год постройки", value: "2023" },
            { label: "Количество кают", value: "5" },
            { label: "Макс. скорость", value: "35 узлов" },
            { label: "Экипаж", value: "4 человека" },
            { label: "Гостей", value: "10 человек" }
        ],
        features: ["Wi-Fi на борту", "Джакузи", "Вертолетная площадка", "Подводное освещение"]
    },
    {
        id: 2,
        category: "Яхта",
        title: "Royal Cruiser 90",
        price: 8500000,
        image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Эксклюзивная яхта класса люкс с вертолетной площадкой, подводным светодиодным освещением и системой стабилизации для максимального комфорта в любую погоду.",
        specs: [
            { label: "Длина", value: "90 футов" },
            { label: "Год постройки", value: "2024" },
            { label: "Количество кают", value: "6" },
            { label: "Макс. скорость", value: "40 узлов" },
            { label: "Экипаж", value: "5 человек" },
            { label: "Гостей", value: "12 человек" }
        ],
        features: ["Вертолетная площадка", "Кинотеатр", "Спа-салон", "Тренажерный зал"]
    },
    {
        id: 3,
        category: "Яхта",
        title: "Sea Dream 65",
        price: 2200000,
        image: "https://images.unsplash.com/photo-1564507004663-b6dfb3e2ede5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Идеальный выбор для средиземноморских круизов. Современный дизайн, экономичный расход топлива и все удобства для комфортного отдыха.",
        specs: [
            { label: "Длина", value: "65 футов" },
            { label: "Год постройки", value: "2022" },
            { label: "Количество кают", value: "4" },
            { label: "Макс. скорость", value: "30 узлов" },
            { label: "Экипаж", value: "3 человека" },
            { label: "Гостей", value: "8 человек" }
        ],
        features: ["Солнечная палуба", "Барбекю", "Гидроцикл", "Снаряжение для дайвинга"]
    },
    {
        id: 4,
        category: "Самолет",
        title: "Gulfstream G650",
        price: 65000000,
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Бизнес-джет с самой большой дальностью полета в своем классе. Салон с индивидуальным дизайном, спальными помещениями и конференц-зоной.",
        specs: [
            { label: "Дальность полета", value: "13,000 км" },
            { label: "Макс. скорость", value: "982 км/ч" },
            { label: "Вместимость", value: "19 пассажиров" },
            { label: "Размах крыла", value: "28.5 м" },
            { label: "Длина", value: "30.4 м" }
        ],
        features: ["Спальные помещения", "Конференц-зал", "Wi-Fi", "Развлекательная система"]
    },
    {
        id: 5,
        category: "Самолет",
        title: "Bombardier Global 7500",
        price: 73000000,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Четыре отдельные зоны в салоне, спальные помещения, душевая кабина и бар. Самый современный бизнес-джет на рынке.",
        specs: [
            { label: "Дальность полета", value: "14,260 км" },
            { label: "Макс. скорость", value: "1,014 км/ч" },
            { label: "Вместимость", value: "17 пассажиров" },
            { label: "Размах крыла", value: "31.7 м" },
            { label: "Длина", value: "33.8 м" }
        ],
        features: ["4 зоны отдыха", "Душевая кабина", "Бар", "Спа-зона"]
    },
    {
        id: 6,
        category: "Особняк",
        title: "Villa Aurora",
        price: 45000000,
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Особняк в испанском стиле на побережье Коста-дель-Соль. 12 спален, винный погреб, теннисный корт и бесконечный бассейн с видом на море.",
        specs: [
            { label: "Площадь", value: "2,500 м²" },
            { label: "Спальни", value: "12" },
            { label: "Ванные", value: "14" },
            { label: "Участок", value: "3.5 га" },
            { label: "Бассейн", value: "Инф
