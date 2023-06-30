// Change title of document.
document.title = "Weather Checker";

// Link HTML elements to variables using their IDs, Classes, or Tags.
const searchVar = document.querySelector(".searchB");
const buttonVar = document.querySelector("button");
const cityVar = document.querySelector("#city");
const unitVar = document.querySelector(".unit");
const countryVar = document.querySelector(".country");
const descVar = document.querySelector(".desc");
const weatherVar = document.querySelector(".weather");
const resultVar = document.querySelector(".result");

// Store API key inside a variable so as to make API dynamic.
const keyAPI = "e90ca34426a91db53106cf50b5badc0f";

// Write a function where you run the fetch-method process inside it. The fetch() gets the API from its source. The first then() cleans up the data received from the API into a format that Java Script can read and understand. The second then() is where the data that has been cleaned up is then used.
let getWeather = (temps) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${temps}&appid=${keyAPI}&units=metric`
    ).then((response) => {
        return response.json();
    })
    .then((data) => {
        // Console.log the API data to check if it available for you to use.
        console.log(data);
        // Then you run an if-statement that carries all the conditions and data you need from your API, storing them in variables and then linking them to the respective variables created to link the HTML elements.
        if (data.cod !== "404") {
            console.log(data.cod);
            let temp = data.main.temp;
            let city = data.name;
            let country = data.sys.country;
            let description = data.weather[0].description;
            let main = data.weather[0].main;

            unitVar.textContent = temp.toFixed(0) + "°C";
            cityVar.textContent = city;
            countryVar.textContent = country;
            descVar.textContent = description;
            weatherVar.textContent = main;
      }
    })
    // .catch((err) => console.log(err));
}

// So because a button element was used in the HTML structure, we run an onclick function that will link the click of the button to the function call.
buttonVar.addEventListener("click", () => {
    let searchie = searchVar.value;
    getWeather(searchie);
    searchVar.value = "";
  });