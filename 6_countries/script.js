async function fetchData(searchItem) {
    const data = await fetch(`https://restcountries.eu/rest/v2/name/${searchItem}`);
    const [country] = await data.json();
    return country
}

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


document.getElementById("country-form").addEventListener("submit", (e) => {
  e.preventDefault();
  countryName = document.getElementById("name-input").value
  fetchData(countryName)
    .then((country) => displayInfo(country))
});
