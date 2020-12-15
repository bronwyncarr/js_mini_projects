// Gets data from WebAPI based on value passed in to form.
//Converts response to JSON and destructures array[0] to object.
async function fetchData(searchItem) {
    const data = await fetch(`https://restcountries.eu/rest/v2/name/${searchItem}`);
    const [country] = await data.json();
    return country
}

// Removes hidden class if it existis (will be the case for first search only)
// displays info from object
// population is converted to number and rounded to 2 decimal places for millions
function displayInfo(country) {
    if (document.querySelector('.hidden')) {
        document.querySelector('.hidden').classList.remove('hidden')
    }
    document.getElementById("name-input").value =""
    document.querySelector('.country-name').textContent = country.name
    document.querySelector('.flag').src = country.flag
    document.querySelector('.region').textContent = `Region: ${country.region}`
    document.querySelector('.population').textContent = `Population: ${(+country.population / 1000000).toFixed(2)} Million`

    // document.querySelector('.languages').appendChild = `${country.population}`
    // document.querySelector('.currencies').textContent = `Population: ${country.population}`
}

// Adds event listener to submit button on form and passes value to fetchData function to fetch.
document.getElementById("country-form").addEventListener("submit", (e) => {
  e.preventDefault();
  countryName = document.getElementById("name-input").value
  fetchData(countryName)
    .then((country) => displayInfo(country))
});
