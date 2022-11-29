/**
 * OpenWeatherApp API
 *
 */
const API_KEY = "dd1addbd5798549d54ed647f75db5af1";
const BASE_URL= "https://api.openweathermap.org/data/2.5";

const getCurrentWeather = async city => {
    // get weather for coty from OWM API
    const response = await fetch(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`);

    // check if response is ok
    if(!response.ok){
        throw new Error(`${response.status} ${response.statusText}`)
    }
    // convert response from JSON
    const data = await response.json();

    // return current weather
    return data;
}



