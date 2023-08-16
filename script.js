/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// DOM SELECTION ///////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    const forcastRightNow = document.getElementById('forcastRightNow')
    const casualWeatherBox = document.getElementById('casualWeatherBox')
    const weekdays = document.getElementById('weekdays')

/////////////////////// CALLING THE API /////////////////////////////

    // Calling the Url.

fetch('http://api.openweathermap.org/data/2.5/weather?q=Austin,US&units=metric&APPID=efd0845f5916e3c871d91fde63e9b949')

    // Saying we want the response in json

    .then((response) => {
        return response.json()
 })

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////// THIS IS THE WEATHER AT THE TOP ///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

     // First of is the forcastRightNow-part

.then((json) => {

    austinWeather.innerHTML = 
    `<h1>
    ${json.name} Texas |
    ${json.weather[0].main} | 

    ${(Math.round(json.main.temp))}°C |
        Feels like 
    ${(json.main.feels_like.toFixed(1))}°C 
    </h1>`

})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////WEATHERBOX (MESSAGE AND PICTURE = CASUAL WEATHER CENTENSE) ////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


fetch('http://api.open-notify.org/astros.json')

    .then((response) => {
        return response.json()
 })

    .then((json) => {
        console.log(json);
        const numberofpeople = json.number
        const namesofpeople = json.people.map(person => person.name);
      // const craft = json.people.map(person => person.craft);
    peopleInSpace.innerHTML = `
    <h1>${numberofpeople} People are in space. Named ${namesofpeople}. First craft in array: 
        ${json.people[0].craft}
    </h1>`
    })


////////// AGEIFY API /////////////////
fetch('https://api.agify.io/?name=christine')    

    .then((response) => {
    return response.json()
    })
    .then((json) => {
        const agename = json.age
        const namebig = json.name.toUpperCase();
        ageOfName.innerHTML =
          `<h1>  ${agename} år. Så gammal är du enligt ditt namn ${namebig}</h1>`
    })


/////// KANYE API //////////////
fetch('https://api.kanye.rest/')    
    .then((response) => {
    return response.json()
    })
    .then((json) => {
        const thequote = json.quote
        console.log(thequote);
        quoteOfKanye.innerHTML =
        `<h1>${thequote}, said Kanye West</h1>`
})
        