// === РАСШИРЕННЫЙ КАТАЛОГ: более 30 видов экзотических птиц ===
const birdsData = [
    // === КРУПНЫЕ ПОПУГАИ ===
    {
        id: 1,
        name: "Ара Сине-желтый",
        category: "parrot",
        description: "Крупный, умный попугай с яркой окраской. Очень общительный, живет до 60 лет. Требует много внимания.",
        price: 280000,
        image: "./images/22.webp",
        rating: 0
    },
    {
        id: 2,
        name: "Ара Красный",
        category: "parrot",
        description: "Ярко-красный попугай с синими и желтыми перьями. Очень артистичный и громкий.",
        price: 320000,
        image: "./images/23.webp",
        rating: 0
    },
    {
        id: 3,
        name: "Какаду Молуккский",
        category: "parrot",
        description: "Крупный белый какаду с розовым хохолком. Очень ласковый, требует много внимания.",
        price: 350000,
        image: "./images/1.jpg",
        rating: 0
    },
    {
        id: 4,
        name: "Ара Зеленокрылый",
        category: "parrot",
        description: "Один из крупнейших попугаев. Очень спокойный и уравновешенный характер.",
        price: 380000,
        image: "./images/33.webp",
        rating: 0
    },
    {
        id: 5,
        name: "Какаду Инка (Майора Митчелла)",
        category: "parrot",
        description: "Редкий вид с красно-белым хохолком. Считается одним из красивейших какаду.",
        price: 420000,
        image: "./images/25.webp",
        rating: 0
    },
    
    // === СРЕДНИЕ ПОПУГАИ ===
    {
        id: 6,
        name: "Жако (Серый попугай)",
        category: "parrot",
        description: "Самый талантливый попугай в имитации человеческой речи. Очень умный.",
        price: 150000,
        image: "./images/55.webp",
        rating: 0
    },
    {
        id: 7,
        name: "Амазон Желтоголовый",
        category: "parrot",
        description: "Отличный говорун, веселый и активный. Популярный домашний питомец.",
        price: 120000,
        image: "./images/44.webp",
        rating: 0
    },
    {
        id: 8,
        name: "Амазон Синелобый",
        category: "parrot",
        description: "Зеленый попугай с ярко-синим лбом. Любит петь и общаться.",
        price: 110000,
        image: "./images/2.jpg",
        rating: 0
    },
    {
        id: 9,
        name: "Эклектус",
        category: "parrot",
        description: "Уникальный вид: самцы зеленые, самки красные. Спокойные и тихие.",
        price: 95000,
        image: "./images/66.webp",
        rating: 0
    },
    {
        id: 10,
        name: "Розелла Пестрая",
        category: "parrot",
        description: "Красочный австралийский попугай. Имеет чешуйчатый рисунок на спине.",
        price: 35000,
        image: "./images/26.webp",
        rating: 0
    },
    {
        id: 11,
        name: "Лори Красный",
        category: "parrot",
        description: "Ярко-красный с синими пятнами. Питается нектаром и фруктами.",
        price: 55000,
        image: "./images/27.webp",
        rating: 0
    },
    
    // === МЕЛКИЕ ПОПУГАИ ===
    {
        id: 12,
        name: "Неразлучник Фишера",
        category: "parrot",
        description: "Маленький попугайчик. Лучше содержать парой. Очень преданные.",
        price: 12000,
        image: "./images/3.webp",
        rating: 0
    },
    {
        id: 13,
        name: "Неразлучник Розовощекий",
        category: "parrot",
        description: "Самый распространенный вид неразлучников. Зеленый с розовыми щечками.",
        price: 10000,
        image: "./images/21.webp",
        rating: 0
    },
    {
        id: 14,
        name: "Волнистый попугай (Австралийский)",
        category: "parrot",
        description: "Самый популярный домашний попугай. Может научиться говорить.",
        price: 3000,
        image: "./images/67.webp",
        rating: 0
    },
    {
        id: 15,
        name: "Корелла",
        category: "parrot",
        description: "Попугай с хохолком. Умеет насвистывать мелодии.",
        price: 5000,
        image: "./images/77.webp",
        rating: 0
    },
    {
        id: 16,
        name: "Пиррура",
        category: "parrot",
        description: "Маленький длиннохвостый попугай. Очень активный и жизнерадостный.",
        price: 15000,
        image: "./images/28.webp",
        rating: 0
    },
    {
        id: 17,
        name: "Аратинга Солнечная",
        category: "parrot",
        description: "Ярко-желто-оранжевый попугай. Очень шумный и веселый.",
        price: 45000,
        image: "./images/88.webp",
        rating: 0
    },
    
    // === ПЕВЧИЕ ПТИЦЫ (КАНАРЕЙКИ) ===
    {
        id: 18,
        name: "Канарейка желтая",
        category: "canary",
        description: "Классическая певчая канарейка. Поет круглый год.",
        price: 5000,
        image: "./images/2.webp",
        rating: 0
    },
    {
        id: 19,
        name: "Канарейка красная",
        category: "canary",
        description: "Редкий окрас. Поет не хуже желтых собратьев.",
        price: 8000,
        image: "./images/11.webp",
        rating: 0
    },
    {
        id: 20,
        name: "Канарейка курчавая (Парижская)",
        category: "canary",
        description: "Декоративная порода с кучерявыми перьями.",
        price: 10000,
        image: "./images/0.webp",
        rating: 0
    },
    {
        id: 21,
        name: "Канарейка белая",
        category: "canary",
        description: "Элегантная белая птица. Отличный певун.",
        price: 6000,
        image: "./images/00.webp",
        rating: 0
    },
    {
        id: 22,
        name: "Канарейка-горбатая (Шотландская)",
        category: "canary",
        description: "Уникальная форма тела. Редкая порода.",
        price: 12000,
        image: "./images/01.webp",
        rating: 0
    },
    
    // === ЭКЗОТИЧЕСКИЕ ПТИЦЫ (ДРУГИЕ) ===
    {
        id: 23,
        name: "Амадин зебровый",
        category: "other",
        description: "Маленькая, активная птичка. Любят купаться. Живут стайками.",
        price: 3500,
        image: "./images/4.webp",
        rating: 0
    },
    {
        id: 24,
        name: "Амадин японский",
        category: "other",
        description: "Неприхотливая птица. Часто выступает приемными родителями для других видов.",
        price: 3000,
        image: "./images/02.webp",
        rating: 0
    },
    {
        id: 25,
        name: "Амадин гульда",
        category: "other",
        description: "Самая красочная амадина. Имеет до 7 цветов в оперении.",
        price: 8000,
        image: "./images/03.webp",
        rating: 0
    },
    {
        id: 26,
        name: "Рисовка (Яванский воробей)",
        category: "other",
        description: "Крупная птица с толстым клювом. Бывает белая и серая.",
        price: 5000,
        image: "./images/04.webp",
        rating: 0
    },
    {
        id: 27,
        name: "Венценосный голубь (Голубь Виктории)",
        category: "other",
        description: "Крупная, очень красивая птица с короной из перьев. Требует просторный вольер.",
        price: 650000,
        image: "./images/5.webp",
        rating: 0
    },
    {
        id: 28,
        name: "Голубь плодоядный (Фруктовый голубь)",
        category: "other",
        description: "Ярко-зеленый голубь с красными пятнами. Питается фруктами.",
        price: 55000,
        image: "./images/05.webp",
        rating: 0
    },
    {
        id: 29,
        name: "Тукан Радужный",
        category: "other",
        description: "Знаменит своим огромным разноцветным клювом. Тропическая птица.",
        price: 550000,
        image: "./images/06.webp",
        rating: 0
    },
    {
        id: 30,
        name: "Лорикет радужный",
        category: "parrot",
        description: "Маленький разноцветный попугай. Питается нектаром.",
        price: 35000,
        image: "./images/99.webp",
        rating: 0
    },
    {
        id: 31,
        name: "Сплинкс (Голый попугай)",
        category: "parrot",
        description: " Практически без перьев на голове. Требует тепла.",
        price: 820000,
        image: "./images/3.jpg",
        rating: 0
    },
    {
        id: 32,
        name: "Квезаль (Фазановый)",
        category: "other",
        description: "Священная птица майя. Изумрудное оперение, длинный хвост. Очень редкая.",
        price: 950000,
        image: "./images/100.webp",
        rating: 0
    },
    {
        id: 33,
        name: "Лофофорус (Павлин)",
        category: "other",
        description: "Карликовый павлин. Ярко-синий с длинным хвостом.",
        price: 85000,
        image: "./images/111.webp",
        rating: 0
    }
];
// === Глобальные переменные ===
let cart = JSON.parse(localStorage.getItem('birdCart')) || [];

// === Функции для работы с корзиной ===
function saveCart() {
    localStorage.setItem('birdCart', JSON.stringify(cart));
    updateCartCounter();
}

function updateCartCounter() {
    const counters = document.querySelectorAll('#cart-count');
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    counters.forEach(el => {
        if (el) el.textContent = totalCount;
    });
}

function addToCart(productId) {
    const product = birdsData.find(b => b.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    saveCart();
    alert(`${product.name} добавлен в корзину!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCartPage(); // Перерисовать корзину, если мы на странице корзины
}

// === Функции для отображения ===

// Функция создания рейтинга (звездочек)
function createRatingHTML(productId, currentRating) {
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
        const activeClass = i <= currentRating ? 'active' : '';
        starsHtml += `<span class="star ${activeClass}" data-product="${productId}" data-value="${i}">&#9733;</span>`;
    }
    return `<div class="rating" data-product="${productId}">${starsHtml}</div>`;
}

// Загрузка и обновление рейтинга из localStorage
function loadRatings() {
    birdsData.forEach(bird => {
        const savedRating = localStorage.getItem(`rating_${bird.id}`);
        if (savedRating) {
            bird.rating = parseInt(savedRating);
        }
    });
}

function saveRating(productId, value) {
    const bird = birdsData.find(b => b.id === productId);
    if (bird) {
        bird.rating = value;
        localStorage.setItem(`rating_${productId}`, value);
    }
}

// Рендер сетки товаров на главной
function renderProductGrid(filter = 'all') {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    loadRatings(); // Загружаем рейтинги перед отрисовкой

    const filteredBirds = filter === 'all' ? birdsData : birdsData.filter(b => b.category === filter);
    
    if (filteredBirds.length === 0) {
        grid.innerHTML = '<p class="no-results">По вашему запросу ничего не найдено</p>';
        return;
    }

    grid.innerHTML = filteredBirds.map(bird => {
        const ratingStars = createRatingHTML(bird.id, bird.rating);
        // Определяем русское название категории
        let categoryName = 'Другая';
        if (bird.category === 'parrot') categoryName = 'Попугай';
        if (bird.category === 'canary') categoryName = 'Канарейка';
        
        return `
            <div class="product-card" data-category="${bird.category}">
                <img src="${bird.image}" alt="${bird.name}" class="product-image" loading="lazy">
                <div class="product-info">
                    <h3 class="product-name">${bird.name}</h3>
                    <p class="product-category">${categoryName}</p>
                    <p class="product-description">${bird.description}</p>
                    <p class="product-price">${bird.price.toLocaleString()} ₽</p>
                    ${ratingStars}
                    <button class="add-to-cart" data-id="${bird.id}">В корзину</button>
                </div>
            </div>
        `;
    }).join('');

    // Добавляем обработчики для кнопок "В корзину"
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            addToCart(id);
        });
    });

    // Добавляем обработчики для звезд рейтинга
    document.querySelectorAll('.rating .star').forEach(star => {
        star.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(star.dataset.product);
            const value = parseInt(star.dataset.value);
            
            // Обновляем визуал звезд
            const starsContainer = star.closest('.rating');
            starsContainer.querySelectorAll('.star').forEach((s, index) => {
                if (index < value) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
            
            saveRating(productId, value);
        });
    });
}

// Рендер страницы корзины
function renderCartPage() {
    const cartContainer = document.querySelector('.cart-items');
    const summaryContainer = document.querySelector('.cart-summary');
    if (!cartContainer || !summaryContainer) return;

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p class="empty-cart">Корзина пуста. <a href="index.html">Перейти к покупкам</a></p>';
        summaryContainer.style.display = 'none';
        return;
    }
    summaryContainer.style.display = 'block';

    cartContainer.innerHTML = cart.map(item => {
        return `
            <div class="cart-item" data-id="${item.id}">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <p class="cart-item-name">${item.name}</p>
                    <p class="cart-item-price">${item.price.toLocaleString()} ₽ x ${item.quantity}</p>
                </div>
                <p class="cart-item-price">${(item.price * item.quantity).toLocaleString()} ₽</p>
                <button class="cart-item-remove" data-id="${item.id}">Удалить</button>
            </div>
        `;
    }).join('');

    // Обработчики удаления
    document.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(btn.dataset.id);
            removeFromCart(id);
        });
    });

    // Итоговая сумма
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    summaryContainer.innerHTML = `
        <div class="cart-total">Итого: ${total.toLocaleString()} ₽</div>
        <button class="checkout-btn" id="checkout-btn">Оформить заказ</button>
    `;

    document.getElementById('checkout-btn')?.addEventListener('click', () => {
        alert('Спасибо за заказ! С вами свяжется менеджер для уточнения деталей доставки.');
        // Здесь можно было бы очистить корзину, но для демо оставим комментарий
        // cart = [];
        // saveCart();
        // renderCartPage();
    });
}

// === Инициализация и обработчики событий ===
document.addEventListener('DOMContentLoaded', () => {
    // Обновляем счетчик корзины
    updateCartCounter();

    // Рендер сетки на главной
    if (document.getElementById('product-grid')) {
        renderProductGrid();

        // Фильтры
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.dataset.filter;
                renderProductGrid(filter);
            });
        });
    }

    // Рендер корзины, если мы на странице cart.html
    if (document.querySelector('.cart-items')) {
        renderCartPage();
    }
});