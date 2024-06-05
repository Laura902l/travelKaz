<template>
  <div class="weather-widget">
    <h4 style="margin-bottom: 10px; color: white" class="text-center">
      Weather in {{ weatherData.location }}
    </h4>

    <p class="activity-suggestion text-center" style="color: white">
      {{ activitySuggestion }}
    </p>
  </div>

  <div class="weather-widget">
    <table>
      <tr>
        <td>Temperature</td>
        <td>{{ weatherData.temperature }}°C</td>
      </tr>
      <tr>
        <td>Conditions</td>
        <td>{{ weatherData.condition }}</td>
      </tr>
      <tr>
        <td>Humidity</td>
        <td>{{ weatherData.humidity }}%</td>
      </tr>
      <tr>
        <td>Wind speed</td>
        <td>{{ weatherData.windSpeed }} м/с</td>
      </tr>
      <tr>
        <td>Cloud cover</td>
        <td>{{ weatherData.clouds }}%</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
  name: "WeatherWidget",
  data() {
    return {
      city: localStorage.getItem("flightCity"),
      weatherData: {},
      activitySuggestion: "",
    };
  },
  async mounted() {
    await this.getWeather();
  },
  methods: {
    async getWeather() {
      const cityName = this.city;
      const apiKey = "d680bf725eceee752a55d0d17100d4a7";
      try {
        const weatherResponse = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}&units=metric`
        );
        this.weatherData = this.extractWeatherData(weatherResponse.data);
        this.activitySuggestion = this.getActivitySuggestion(
          weatherResponse.data.weather[0].main
        );
      } catch (error) {
        console.error("Error getting weather:", error);
      }
    },
    extractWeatherData(weatherResponse) {
      return {
        location: weatherResponse.name,
        temperature: weatherResponse.main.temp,
        condition: weatherResponse.weather[0].description,
        humidity: weatherResponse.main.humidity,
        windSpeed: weatherResponse.wind.speed,
        clouds: weatherResponse.clouds.all,
      };
    },
    getActivitySuggestion(condition) {
      const suggestions = {
        clouds:
          "Cloudy weather! Maybe it's a good time to catch up on indoor hobbies like reading or cooking.",
        clear:
          "It's a clear day! Perfect for outdoor activities like hiking or a picnic.",
        smoke:
          "Smoky weather! It's recommended to stay indoors and minimize outdoor activities due to poor air quality.",
        haze: "Hazy weather! Consider reducing outdoor activities, especially if you have respiratory issues.",
        dust: "Dusty weather! Try to stay indoors to avoid breathing in dust particles.",
        fog: "Foggy day! Drive safely and consider indoor activities until visibility improves.",
        rain: "Rainy day! Stay indoors and enjoy a movie marathon or a cozy day at home.",
        drizzle:
          "Drizzly weather! Grab your umbrella and enjoy a leisurely walk or stay indoors with a hot beverage.",
        "shower rain":
          "Shower rain! Don't forget your raincoat or umbrella if you need to go out.",
        thunderstorm:
          "Thunderstorm! Best to stay indoors and relax until the storm passes.",
        default:
          "Weather conditions are variable. Consider checking local news for activity suggestions.",
      };
      return suggestions[condition.toLowerCase()] || suggestions.default;
    },
  },
};
</script>

<style scoped>
.weather-widget {
  margin: 20px;
  padding: 20px;
  border-radius: 5px;
  background-color: rgb(37, 37, 37);
}

.weather-widget p {
  color: white;
  font-size: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  color: white;
}

table td {
  padding: 10px;
  border-bottom: 1px solid #555;
  color: white;
  font-size: 20px;
}
</style>
