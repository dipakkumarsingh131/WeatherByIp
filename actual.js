//const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '64cfd00e2amsh7458baaf4bd9900p162ed0jsnd34b2a97e616',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


async function getLocation() {
	const data = await fetch('https://ipapi.co/json')
	const dataToReturn = await data.json()
	return dataToReturn.city
  }

const getWeather = (city) => {
	cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
	.then(response => response.json())
	.then((response) => {


		console.log(response)
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
	   

	}
	)
	.catch(err => console.error(err));
}
submit.addEventListener("click", (e) =>{
	e.preventDefault()
	getWeather(city.value)
})

const start = async ()=>{
	let cityNameFromIP =await getLocation();
	getWeather(cityNameFromIP);
}

start()
