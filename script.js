function getWeather() {
    let cityInput = document.getElementById('cityInput');
    let cityName = cityInput.value;
    let apiKey = '34f61d2b1d746551de354e9e95f7ad66';

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            let temperature = data.main.temp;
            let humidity = data.main.humidity;
            let windSpeed = data.wind.speed;
            let pressure = data.main.pressure;
            displayWeatherData(temperature, humidity, windSpeed, pressure);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeatherData(temperature, humidity, windSpeed, pressure) {
    let weatherDataDiv = document.getElementById('weatherData');

    weatherDataDiv.innerHTML = `
        <h2>Погода у місті:</h2>
        <p>Температура: ${temperature} K</p>
        <p>Вологість: ${humidity}%</p>
        <p>Швидкість вітру: ${windSpeed} м/с</p>
        <p>Тиск: ${pressure} hPa</p>
    `;
}
