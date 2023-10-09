const apiKey = '64cfd00e2amsh7458baaf4bd9900p162ed0jsnd34b2a97e616';

function getWeatherByCoordinates(latitude, longitude) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
    };

    function getWeather(city) {
        fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, options)
            .then(response => response.json())
            .then((response) => {

				
				//cloud_pct.innerHTML = response.cloud_pct
				temp.innerHTML = response.temp
				temp2.innerHTML = response.temp
				feels_like.innerHTML = response.feels_like 
				humidity.innerHTML = response.humidity
				humidity2.innerHTML = response.humidity
				min_temp.innerHTML = response.min_temp
				max_temp.innerHTML = response.max_temp
				wind_speed.innerHTML = response.wind_speed
				wind_speed2.innerHTML = response.wind_speed
				wind_degrees.innerHTML = response.wind_degrees
				sunrise.innerHTML = response.sunrise
				sunset.innerHTML = response.sunset
                console.log(response);

                // Update your HTML elements with weather data here
            })
            .catch(err => console.error(err));
    }

    const submit = document.getElementById("submit");
    const cityName = document.getElementById("cityName");

    submit.addEventListener("click", (e) => {
        e.preventDefault();
        const city = document.getElementById('city').value;
        cityName.innerHTML = city; // Update the city name in your HTML
        getWeather(city);
    });
}

async function fetchWeatherForCity(city) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

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

getUserLocation(); // Call the geolocation function
fetchWeatherForCity('London'); // Call the city weather function for London or any other city
