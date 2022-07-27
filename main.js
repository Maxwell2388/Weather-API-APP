let weather = {
    apikey: "52c11b98d795a397529d2ce9778d08ba",
    fetchweather:  function (city) {
        fetch (
            "https://api.openweathermap.org/data/2.5/weather?q=",
            + city 
             + "&units=metric&appid=" +
              + this.apikey
        )
        
        .then((Response) => response.json())
        .then((data) => console.log(data));
        // .then(data => this.displayWeather(data));
    },

    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather;
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "weather in  " + name;
        document.querySelector(".icon").src = 
        "https://openweathermap.org/img/wn/" + icon + ".png"
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%" ;
        document.querySelector(".wind").innerText = "wind speed: " + speed  + "km/h";
        document.querySelector(".weather").classList.remove("Loading");
    },  
    search: function () {
        this.fetchweather(document.querySelector(".search-area").value);
    }
};

document.querySelector(".search button").addEventListener("click", function (){
    weather.search();
});

document.querySelector(".search-box").addEventListener("keyup", function (event){ 
    if (event.key = "Enter"){
        weather.search();
    }

});

weather.fetchweather("Denver");
