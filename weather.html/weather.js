function onSignIn(googleUser) {
    // Хэрэглэгчийн мэдээллийг авах
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Хэрэглэгчийн ID (privacy-гийн үүднээс хэрэглэхгүй байхыг зөвлөж байна)
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());

    // Хуудас дээрх элементүүдэд хэрэглэгчийн мэдээллийг харуулах
    document.getElementById('name').textContent = 'Name: ' + profile.getName();
    document.getElementById('email').textContent = 'Email: ' + profile.getEmail();
    document.getElementById('image').src = profile.getImageUrl();
}

function signOut() {
    // Гарах функц
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
        document.getElementById('name').textContent = '';
        document.getElementById('email').textContent = '';
        document.getElementById('image').src = '';
    });
}

// Цаг агаарын мэдээг харуулах функц
async function getWeatherData() {
    const apiKey = '0f29c146fef51755c03551f77ac23034'; // Өөрийн OpenWeather API key оруулна уу
    const city = 'Ulaanbaatar'; // Шаардлагатай бол өөр хотын нэр оруулж болно
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        document.getElementById('weather').innerHTML = `
            <h3>Weather in ${city}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Цаг агаарын мэдээллийг хуудсыг ачааллах үед харуулах
window.onload = getWeatherData;
