<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Корзина - ExoticBirds</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="container header-container">
            <h1 class="logo">🦜 ExoticBirds</h1>
            <nav>
                <ul>
                    <li><a href="index.php">Главная</a></li>
                    <li><a href="index.php#catalog">Каталог</a></li>
                    <li><a href="contacts.php">Контакты</a></li>
                    <li><a href="cart.php" class="cart-link">Корзина (<span id="cart-count">0</span>)</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main class="cart-page">
        <div class="container">
            <h1>Ваша корзина</h1>
            <div class="cart-items">
                <!-- Сюда будут динамически добавляться товары из корзины -->
                <p class="empty-cart">Загрузка...</p>
            </div>
            <div class="cart-summary" style="display: none;">
                <!-- Итог и кнопка оформления -->
            </div>
        </div>
    </main>

    <footer>
        <div class="container">
            <p>&copy; 2024 ExoticBirds. Все права защищены.</p>
            <p>Продажа экзотических птиц с заботой о вас и ваших питомцах.</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>