/**
 * 🌧️.
 *
 */

//  'https://api.openweathermap.org/data/2.5/weather?q=Malm%C3%B6&units=metric&appid=dd1addbd5798549d54ed647f75db5af1'

const renderCurrentWeather = data => {

    document.querySelector('#forecast').innerHTML = `
    <div class="card">
				<img src="assets/images/forecast-banner.png" class="card-img-top">
				<div class="card-body">
					<h5 class="card-title" id="location">
						<span id="city">${data.name}</span>,
						<span id="country">${data.sys.country}</span>
					</h5>
					<p class="temp">
						<span id="temperature">${data.main.temp}</span>
						&deg;C
					</p>
					<p class="humidity">
						<span id="humidity">${data.main.humidity}</span>
						&percnt; humidity
					</p>
					<p class="wind">
						<span id="windspeed">${data.wind.speed}</span>
						m/s
					</p>
				</div>
			</div>
    `;

}

document.querySelector('#search-form').addEventListener('submit', async e => {
    e.preventDefault();

    // kan targeta på båda nedan sätt
    // document.querySelector('#search-form').value;
    const city = e.target.query.value.trim();

    if(city.lenght > 3){

        alert("Please enter at least 3 chars");
        // return i en if-sats gör att vi inte behöver nästla if-sats. 
        // den går ur satsen och går vidare till nästa kodblock.
        return;
    }
    
    // do search
    console.log(`Searching for city: ${city}`);
    const data = await getCurrentWeather(city);

    // render current weather conditions
    renderCurrentWeather(data);

});