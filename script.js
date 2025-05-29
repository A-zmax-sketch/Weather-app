async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "0ae3e7529a5d2d6260086eb74e72ad57";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    console.log("City input:", city);
    const response = await fetch(url);
    console.log("Response status:", response.status);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    console.log("Weather data:", data);

    const weatherHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>🌡️ Temperature: ${data.main.temp}°C</p>
      <p>🌥️ Weather: ${data.weather[0].description}</p>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">
    `;

    document.getElementById("weatherResult").innerHTML = weatherHTML;
  } catch (error) {
    console.error("Error:", error);
    document.getElementById("weatherResult").innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}
