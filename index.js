const wetherForm = document.querySelector("weatherForm")
const cityInput = document.querySelector("CityInput");
const card = document.querySelector("card");
const apikey = "ddc07414d12f84a36b1a01b1d2bc1045";

wetherForm.addEventListener("submit", event => {
    event.preventDefault();

    const city = cityInput.value();
    if(city){

    }else{
        displayError("enter the valid Id");
    }
});

async function getWeatherData(city){

}

function displayWeatherInfo(data){

}

function getWeatherEmoji(weatherId){

}

function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");
}