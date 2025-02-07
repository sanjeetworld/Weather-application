async function getWeather() {
    const apiKey = "8de6cda740b74c67bd571028250702"; // Your API Key
    const city = document.getElementById("cityInput").value.trim();
    
    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            document.getElementById("cityName").innerText = `Weather in ${data.location.name}, ${data.location.country}`;
            document.getElementById("weatherDesc").innerText = `Condition: ${data.current.condition.text}`;
            document.getElementById("temperature").innerText = `Temperature: ${data.current.temp_c}°C`;
            document.getElementById("humidity").innerText = `Humidity: ${data.current.humidity}%`;
            document.getElementById("windSpeed").innerText = `Wind Speed: ${data.current.wind_kph} km/h`;
            document.getElementById("weatherIcon").src = data.current.condition.icon;

            document.getElementById("weatherInfo").style.display = "block";
        } else {
            alert("City not found. Please enter a valid city.");
        }
    } catch (error) {
        alert("Error fetching weather data. Please try again.");
    }
}