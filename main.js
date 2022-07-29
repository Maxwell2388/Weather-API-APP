let button = document.querySelector(".button")
let inputvalue = document.querySelector(".inputvalue")
let name = document.querySelector(".name");
let desc = document.querySelector(".desc");
let temp = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let windspeed = document.querySelector(".WindSpeed");



button.addEventListener("click", function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=`+inputvalue.value+`&appid=52c11b98d795a397529d2ce9778d08ba`)
.then(Response => Response.json())
.then(data => {
    let nameValue = data[`name`];
    let tempvalue = data[`main`][`temp`];
    let descvalue = data[`weather`][`0`][`description`];


    name.innerHTML = nameValue;
    temp.innerHTML = tempvalue;
    desc.innerHTML = descvalue;
})



.catch(err => alert("wrong city name"))
})
