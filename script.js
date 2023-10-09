function getWeatherByCoordinates(latitude, longitude) {
	const options = {
	  method: 'GET',
	  headers: {
		'X-RapidAPI-Key': '64cfd00e2amsh7458baaf4bd9900p162ed0jsnd34b2a97e616',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	  }
	};
  
	function getWeather(city) {
	  cityName.innerHTML = city;
  
	  fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, options)
		.then(response => response.json())
		.then((response) => {
		  console.log(response);
		  // Update your HTML elements with weather data here
		  temp.innerHTML = response.temp;
		  temp2.innerHTML = response.temp;
		  feels_like.innerHTML = response.feels_like;
		  humidity.innerHTML = response.humidity;
		  humidity2.innerHTML = response.humidity;
		  min_temp.innerHTML = response.min_temp;
		  max_temp.innerHTML = response.max_temp;
		  wind_speed.innerHTML = response.wind_speed;
		  wind_speed2.innerHTML = response.wind_speed;
		  wind_degrees.innerHTML = response.wind_degrees;
		  sunrise.innerHTML = response.sunrise;
		  sunset.innerHTML = response.sunset;
		})
		.catch(err => console.error(err));
	}
  
	const submit = document.getElementById("submit");
	const cityName = document.getElementById("cityName");
	const temp = document.getElementById("temp");
	const temp2 = document.getElementById("temp2");
	const feels_like = document.getElementById("feels_like");
	const humidity = document.getElementById("humidity");
	const humidity2 = document.getElementById("humidity2");
	const min_temp = document.getElementById("min_temp");
	const max_temp = document.getElementById("max_temp");
	const wind_speed = document.getElementById("wind_speed");
	const wind_speed2 = document.getElementById("wind_speed2");
	const wind_degrees = document.getElementById("wind_degrees");
	const sunrise = document.getElementById("sunrise");
	const sunset = document.getElementById("sunset");
  
	function getUserLocation() {
	  if ("geolocation" in navigator) {
		navigator.geolocation.getCurrentPosition((position) => {
		  const latitude = position.coords.latitude;
		  const longitude = position.coords.longitude;
		  getWeatherByCoordinates(latitude, longitude);
		}, handleError);
	  } else {
		// Geolocation is not available in this browser
		alert("Geolocation is not available in your browser.");
	  }
	}
  
	// Handle errors if location retrieval fails
	function handleError(error) {
	  switch (error.code) {
		case error.PERMISSION_DENIED:
		  alert("User denied the request for Geolocation.");
		  break;
		case error.POSITION_UNAVAILABLE:
		  alert("Location information is unavailable.");
		  break;
		case error.TIMEOUT:
		  alert("The request to get user location timed out.");
		  break;
		case error.UNKNOWN_ERROR:
		  alert("An unknown error occurred.");
		  break;
	  }
	}
  
	submit.addEventListener("click", (e) => {
	  e.preventDefault();
	  const city = document.getElementById('city').value;
	  getWeather(city);
	});
  }
  
  getUserLocation();