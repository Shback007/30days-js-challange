const button = document.querySelector('.search button')
const searchBox = document.querySelector(".search input")
const weatherIcon = document.querySelector('.weather-icon')

button.addEventListener('click',(e)=>{
    checkWeather(searchBox.value);
})
searchBox.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        checkWeather(searchBox.value);
    }
})

const apiKey = "f90f2bb0d761544ea7bd59df2dbe304e";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);
    
    if(response.status === 404){
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
    }else{
        if(data.weather[0].main === "Clouds") weatherIcon.src = "images/clouds.png"
        else if(data.weather[0].main ==="Clear") weatherIcon.src = "images/clear.png"
        else if(data.weather[0].main ==="Rain") weatherIcon.src = "images/rain.png"
        else if(data.weather[0].main ==="Drizzle") weatherIcon.src = "images/drizzle.png"
        else if(data.weather[0].main ==="Mist") weatherIcon.src = "images/mist.png"

        document.querySelector('.weather').style.display = "block"
        document.querySelector('.error').style.display = "none";
    }

    

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "Km/h";

    

}

