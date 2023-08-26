

console.log("hjs connected");

const carousel = new bootstrap.Carousel("#homeCarousel", {
  interval: 2000,
  pause: false
});

const carouselButton = document.getElementById("carouselButton");
const faIcon = document.getElementById("faButton");

carouselButton.addEventListener('click', function () {
  if (faIcon.classList.contains('fa-pause')) {
      faIcon.classList.remove('fa-pause');
      faIcon.classList.add('fa-play');
      carousel.pause();
  } else {
      faIcon.classList.remove('fa-play');
      faIcon.classList.add('fa-pause');
      carousel.cycle();
  }
});

async function fetchWeather() {
  const apiKey = process.env.OPEN_WEATHER_API_KEY;
  const city = "Los Angeles";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayWeather(data);
    console.log(data);
  } catch (error) {
    console.error("There was an error:", error);
  }
}

function displayWeather(data) {

  const weatherIconContainer = document.getElementById("weather-icon");
  const temperatureElement = document.getElementById("weather-temp");
  const descriptionElement = document.getElementById("weather-description");

  
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const iconCode = data.weather[0].icon;

      console.log(`Temperature: ${temperature}, description: ${description}, iconCode: ${iconCode}`);

    
      const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
      const iconImage = document.createElement("img");
      iconImage.src = iconUrl;
      weatherIconContainer.appendChild(iconImage);

      temperatureElement.textContent = `${temperature}`;
      descriptionElement.textContent = description;


      
  

 
}

  fetchWeather();