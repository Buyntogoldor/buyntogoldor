<!DOCTYPE html>
<html lang="mn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Монголын Аймгуудын Цаг агаар</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 0;
            padding: 20px;
        }
        .weather-container {
            max-width: 400px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background-color: #f4f4f4;
        }
        .location {
            font-size: 1.2em;
            font-weight: bold;
        }
        .temperature {
            font-size: 2em;
            color: #ff6347;
        }
        .description {
            text-transform: capitalize;
            font-size: 1.1em;
        }
        .select-location {
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="weather-container">
        <div class="location" id="location">Улаанбаатар</div>
        <div class="temperature" id="temperature">--°C</div>
        <div class="description" id="description">Цаг агаар</div>
    </div>
    <div class="select-location">
        <label for="city-select">Аймаг сонгох:</label>
        <select id="city-select">
            <option value="Ulaanbaatar">Улаанбаатар (Нийслэл)</option>
            <option value="Arkhangai">Архангай</option>
            <option value="Bayan-Ulgii">Баян-Өлгий</option>
            <option value="Bayankhongor">Баянхонгор</option>
            <option value="Bulgan">Булган</option>
            <option value="Govi-Altai">Говь-Алтай</option>
            <option value="Govisumber">Говьсүмбэр</option>
            <option value="Darkhan">Дархан-Уул</option>
            <option value="Dornogovi">Дорноговь</option>
            <option value="Dornod">Дорнод</option>
            <option value="Dundgovi">Дундговь</option>
            <option value="Zavkhan">Завхан</option>
            <option value="Orkhon">Орхон</option>
            <option value="Uvurhangai">Өвөрхангай</option>
            <option value="Umnugovi">Өмнөговь</option>
            <option value="Sukhbaatar">Сүхбаатар</option>
            <option value="Selenge">Сэлэнгэ</option>
            <option value="Tuv">Төв</option>
            <option value="Uvs">Увс</option>
            <option value="Khovd">Ховд</option>
            <option value="Khuvsgul">Хөвсгөл</option>
            <option value="Khentii">Хэнтий</option>
        </select>
    </div>

    <script>
        const apiKey = '0f29c146fef51755c03551f77ac23034'; // API түлхүүрээ энд оруулна уу
        const locationElement = document.getElementById('location');
        const temperatureElement = document.getElementById('temperature');
        const descriptionElement = document.getElementById('description');
        const citySelect = document.getElementById('city-select');

        async function fetchWeather(city) {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
                if (!response.ok) throw new Error("Мэдээлэл авах боломжгүй байна.");
                const data = await response.json();
                displayWeather(data);
            } catch (error) {
                alert("Сүлжээний алдаа: " + error.message);
                // Дахин оролдохыг хүссэн үед хүсэлтээ дахин шалгаж болно
            }
        }

        function displayWeather(data) {
            const { name } = data;
            const { temp } = data.main;
            const { description } = data.weather[0];

            locationElement.textContent = name;
            temperatureElement.textContent = `${temp.toFixed(1)}°C`;
            descriptionElement.textContent = description;
        }

        citySelect.addEventListener('change', () => {
            const selectedCity = citySelect.value;
            fetchWeather(selectedCity);
        });

        // Эхлээд Улаанбаатар хотын цаг агаарын мэдээлэл харуулах
        fetchWeather('Ulaanbaatar');
    </script>
</body>
</html>
