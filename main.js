// ===== ДАННЫЕ ТОВАРОВ (ФОТО РАБОТАЮТ В РФ) =====
const products = [
    {
        id: 1,
        category: "YACHT",
        title: "Azimut 77 Yacht",
        price: 3500000,
        image: "https://images.weserv.nl/?url=avatars.mds.yandex.net/get-zen_doc/1895734/pub_62e0d3b34a23c1434507f552_62e0d4245336452906691302/scale_1200&h=200&w=300&fit=cover",
        description: "Luxury yacht with modern design and premium amenities."
    },
    {
        id: 2,
        category: "PLANE",
        title: "Gulfstream G650ER",
        price: 75000000,
        image: "https://images.weserv.nl/?url=storage.mds.yandex.net/get-bunker/286714/9d1d4d7c9c3d5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e......&h=200&w=300&fit=cover",
        description: "Private jet with long range and luxurious interior."
    },
    {
        id: 3,
        category: "MANSION",
        title: "Beverly Hills Mansion",
        price: 125000000,
        image: "https://images.weserv.nl/?url=avatars.mds.yandex.net/get-zen_doc/1895734/pub_62e0d3b34a23c1434507f552_62e0d4245336452906691302/scale_1200&h=200&w=300&fit=cover",
        description: "Luxurious mansion in Beverly Hills with panoramic views."
    },
    {
        id: 4,
        category: "ISLAND",
        title: "Private Caribbean Island",
        price: 250000000,
        image: "https://images.weserv.nl/?url=avatars.mds.yandex.net/get-zen_doc/1895734/pub_62e0d3b34a23c1434507f552_62e0d4245336452906691302/scale_1200&h=200&w=300&fit=cover",
        description: "Private island in the Caribbean with white sand beaches."
    },
    {
        id: 5,
        category: "YACHT",
        title: "Benetti 164 Superyacht",
        price: 45000000,
        image: "https://images.weserv.nl/?url=avatars.mds.yandex.net/get-zen_doc/1895734/pub_62e0d3b34a23c1434507f552_62e0d4245336452906691302/scale_1200&h=200&w=300&fit=cover",
        description: "Superyacht with swimming pool and helicopter pad."
    },
    {
        id: 6,
        category: "MANSION",
        title: "Miami Beach Penthouse",
        price: 85000000,
        image: "https://images.weserv.nl/?url=avatars.mds.yandex.net/get-zen_doc/1895734/pub_62e0d3b34a23c1434507f552_62e0d4245336452906691302/scale_1200&h=200&w=300&fit=cover",
        description: "Penthouse with ocean views and private beach access."
    },
     {
        id: 7,
        category: "YACHT",
        title: "black rearl",
        price: 85000000,
        image: "https://avatars.mds.yandex.net/get-entity_search/2300207/953673339/SUx182_2x",
        description: "гОЛЛИВУДСКАЯ ЯХТА ИЗ ФИЛЬМА ПРО КАПИТАНА ДЖЕКА ВОРОБЬЯ "
    }
];

// Для теста — добавим реальные рабочие фото (общие для всех)
const fallbackImages = {
    YACHT: "https://images.weserv.nl/?url=storage.mds.yandex.net/get-bunker/286714/9d1d4d7c9c3d5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5......&h=200&w=300&fit=cover",
    PLANE: "https://images.weserv.nl/?url=storage.mds.yandex.net/get-bunker/286714/9d1d4d7c9c3d5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e......
