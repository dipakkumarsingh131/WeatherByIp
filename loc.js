// Get user's location using Geolocation API
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
  
  // Fetch weather data using coordinates
  function getWeatherByCoordinates(latitude, longitude) {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '64cfd00e2amsh7458baaf4bd9900p162ed0jsnd34b2a97e616',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
  
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?lat=${latitude}&lon=${longitude}`, options)
      .then(response => response.json())
      .then((response) => {
        console.log(response);
        // Update your HTML elements with weather data here
      })
      .catch(err => console.error(err));
  }
  
  // Call getUserLocation to get weather data for the user's location
  getUserLocation();
  