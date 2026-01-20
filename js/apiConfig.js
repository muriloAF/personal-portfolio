//Variáveis
const apiKey = "4731fe38eac1356ee12d9e78027fb604";

const cityInput = document.querySelector('#cidadeInput');
const serachBtn = document.querySelector('#buscarBtn');
const cityElement = document.querySelector('#cidade');
const tempElement = document.querySelector('#temperatura span');
const descElement = document.querySelector('#description');
const weatherIconElement = document.querySelector('#wather-icon');
const humiElement = document.querySelector('#humidade span');
const weather_container = document.querySelector("#weather-data");
const error_null = document.querySelector("#erro_null");
const error_incorrect = document.querySelector("#erro_incorrect");


//Funções 
const getWeatherData = async(city) => {
    const apiWeatherULR =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch (apiWeatherULR);
    const data = await res.json();
    if(data.cod == 404){
        weather_container.classList.add("hide");
        error_null.classList.add("hide");
        error_incorrect.classList.remove("hide");
    }else{
    if(data.cod == 400){
        weather_container.classList.add("hide");
        error_incorrect.classList.add("hide");
        error_null.classList.remove("hide");
    }else{
    error_null.classList.add("hide");
    error_incorrect.classList.add("hide");
    return data;
    }}
}

const showWeather = async (city) => {
    const data = await getWeatherData(city);
    console.log(data);
    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    humiElement.innerText = data.main.humidity;
    }


//Eventos
serachBtn.addEventListener("click", (e) => {
    e.preventDefault();
    weather_container.classList.remove("hide");
    const city = cityInput.value;
    showWeather(city);
});

cityInput.addEventListener("keyup", (e) => {
    if(e.code === "Enter"){
        const city = e.target.value;
        weather_container.classList.remove("hide");

        showWeather(city);
    }
});