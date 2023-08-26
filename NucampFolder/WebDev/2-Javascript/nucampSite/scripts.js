

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
  const encodedCity = encodeURIComponent(city); // URL encode the city name
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  
  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.error("Request failed with status:", response.status);
    }
  } catch (error) {
    console.error("There was an error:", error);
  }
}

fetchWeather();