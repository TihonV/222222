function loadProducts() {
    showSkeletons();
    
    setTimeout(() => {
        // Используем базовые изображения из Unsplash
        const baseImages = [
            "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1515427518472-3a4b15b0bf7a?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1519861531473-920034658307?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1536152471326-642d7bb3d0af?w=800&h=600&fit=crop"
        ];
        
        products = [
            {
                id: 1,
                category: "Yacht",
                title: "Luxury Yacht 77",
                price: 3500000,
                image: baseImages[0],
                description: "Premium luxury yacht description..."
            },
            // ... остальные товары с теми же изображениями
        ];
        
        renderProducts();
    }, 1500);
}
