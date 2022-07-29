
// Querry selector was used to fetch a class name from the HTML/CSS document
// Below are class names that was used in the HTML document
let button = document.querySelector(".button")
let inputvalue = document.querySelector(".inputvalue")
let name = document.querySelector(".name");
let desc = document.querySelector(".desc");
let temp = document.querySelector(".temp");



// Here a function of the submit button was created and linked with the API and APIKEY to 
// display result/Datas/Parameters of the weather of a particular location after submit/

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


// Here the catch function was created to display error if the city name is wrongly spelt 
// and in return will display Wrong city name indicating error in the spellins

.catch(err => alert("wrong city name"))
})
