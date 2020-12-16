// Gets data from WebAPI based on value passed in to form.
//Converts response to JSON and destructures array[0] to object.
//Returns a promise.
async function fetchData(searchItem) {
  const data = await fetch(
    `https://restcountries.eu/rest/v2/name/${searchItem}`
  );
  const [country] = await data.json();
  return country;
}

// Removes hidden class if it existis (will be the case for first search only)
// displays info from object
// population is converted to number and rounded to 2 decimal places for millions
function displayInfo(country) {
  // Make visible
  if (document.querySelector(".hidden")) {
    document.querySelector(".hidden").classList.remove("hidden");
  }
  // Clear text field
  document.getElementById("name-input").value = "";
  // Insert html
  const html = `
        <img class="flag" src="${country.flag}">
        <div class="info">
            <div class="country-header">
                <h2>${country.name}</h2>
                <h2>${country.cioc}</h2>
            </div>
            <p>🌎 Region: ${country.region}</p>
            <p>🌎 Subregion: ${country.subregion}</p>
            <p>🤼 Population: ${(+country.population / 1000000).toFixed(
              2
            )} Million</p>
            <p>🏛 Capital: ${country.capital}</p>
        </div>
    `;
    document.querySelector(".content").innerHTML = html;

    // Ideas to get languages and currencies
  // country.currencies.forEach((currency) => console.log(currency["name"]));


   // const ulMaker = (country, property, title) => {
  //   const ul = document.createElement("ul");
  //   const titleElement = document.createElement("h3");
  //   titleElement.innerHTML = title;
  //   const propertyDetails = country[property];

  //   const listItems = propertyDetails.map((element) => {
  //     const newLi = document.createElement("li");
  //     newLi.innerHTML = element.name;
  //     return newLi;
  //   });

  //   listItems.forEach((item) => ul.appendChild(item));

  //   const placeHolder = document.getElementById("langauges");

  //   placeHolder.appendChild(titleElement);
  //   placeHolder.appendChild(ul);
  // };

  // country.currencies.forEach((currency) => console.log(currency["name"]));

  // document.querySelector(".content").insertAdjacentHTML('afterbegin', html)
//   ulMaker(country, "languages", "Languages:");
//  }) 
}

// Adds event listener to submit button on form and passes value to fetchData function to fetch.
document.getElementById("country-form").addEventListener("submit", (e) => {
  e.preventDefault();
  countryName = document.getElementById("name-input").value;
  fetchData(countryName)
    .then((country) => displayInfo(country))
    .catch((err) => alert(`Error occured: ${err}`));
});
